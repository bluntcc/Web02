<template>
  <div
    ref="dragBoxRef"
    class="tvb-drag-box"
    @mousedown="down"
    @touchstart="down"
    @mousemove="move"
    @touchmove.prevent="move"
    @mouseup="end"
    @touchend="end"
    @mouseover="end"
    @mouseleave="end"
  >
    <slot></slot>
  </div>
</template>

<script setup name="DragBox">
  import { defineProps } from 'vue';
  const dragBoxRef = ref(null);
  const props = defineProps({
    rawPos: {
      type: Number[2],
      default: 0,
    },
  });
  const posData = reactive({
    flags: false,
    position: { x: 0, y: 0 }, //鼠标的横纵坐标
    pageLet: 0,
    pageTop: 0,
    pageX: '', //页面可视区域的宽
    pageY: '', //页面可视区域的高
    nx: '',
    ny: '',
    dx: '',
    dy: '',
    xPum: '',
    yPum: '',
  });
  onMounted(() => {
    posData.pageX = dragBoxRef.value.parentElement.offsetWidth - dragBoxRef.value.offsetWidth;
    posData.pageY = dragBoxRef.value.parentElement.offsetHeight - dragBoxRef.value.offsetHeight;
    posData.pageTop = dragBoxRef.value.parentElement.offsetTop;
    posData.pageLet = dragBoxRef.value.parentElement.offsetLeft;
    dragBoxRef.value.style.left = dragBoxRef.value.parentElement.offsetWidth + 'px';
    dragBoxRef.value.style.top = dragBoxRef.value.parentElement.offsetHeight + 'px';
    // console.log('drag区域：', posData.pageX, posData.pageY);
    // console.log('drag ：', dragBoxRef.value.parentElement.offsetLeft, dragBoxRef.value.parentElement.offsetTop);
  });
  const down = function (event) {
    posData.flags = true; //是否开启拖拽
    let touch;
    if (event.touches) {
      touch = event.touches[0];
    } else {
      touch = event;
    }
    posData.position.x = touch.clientX;
    posData.position.y = touch.clientY;
    posData.dx = dragBoxRef.value.offsetLeft;
    posData.dy = dragBoxRef.value.offsetTop;
    console.log("down");
  };
  const move = function (event) {
    if (posData.flags) {
      let touch;
      if (event.touches) {
        touch = event.touches[0];
      } else {
        touch = event;
      }
      posData.nx = touch.clientX - posData.position.x;
      posData.ny = touch.clientY - posData.position.y;

      posData.yPum = posData.dy + posData.ny;
      if (posData.dx + posData.nx <= posData.pageLet) {
        posData.xPum = posData.pageLet;
      } else if (posData.dx + posData.nx >= posData.pageX + posData.pageLet) {
        posData.xPum = posData.pageX + posData.pageLet;
      } else {
        posData.xPum = posData.dx + posData.nx;
      }
      if (posData.dy + posData.ny <= posData.pageTop) {
        posData.yPum = posData.pageTop;
      } else if (posData.dy + posData.ny >= posData.pageY + posData.pageTop) {
        posData.yPum = posData.pageY + posData.pageTop;
      } else {
        posData.yPum = posData.dy + posData.ny;
      }
      dragBoxRef.value.style.left = posData.xPum + 'px';
      dragBoxRef.value.style.top = posData.yPum + 'px';
      //阻止页面的滑动默认事件；如果碰到滑动问题，1.2 请注意是否获取到 touchmove
      document.addEventListener(
        'touchmove',
        function () {
          event.preventDefault();
        },
        false,
      );
      console.log("move");

    }
  };
  const end = function (e) {
    posData.flags = false;
    console.log("end");
  };
</script>

<style lang="scss" scoped>
  .tvb-drag-box {
    &:not(.disabled) {
      position: fixed;
      width: 60px;
      height: 60px;
      bottom: 10px;
      right: 10px;
      overflow: hidden;
      z-index: 99;
    }
  }
</style>
