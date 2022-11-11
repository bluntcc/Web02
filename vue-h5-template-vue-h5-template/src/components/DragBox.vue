<template>
  <div
    ref="dragBoxRef"
    class="tvb-drag-box"
    :class="{ disabled: disabled }"
    :style="disabled ? '' : `right: ${dragBoxPos.x}px; bottom: ${dragBoxPos.y}px;`"
    @touchstart.prevent="onTouchStart"
    @touchend.prevent="onTouchEnd"
    @touchmove.prevent="onTouchMove"
  >
    <slot></slot>
  </div>
</template>

<script setup name="DragBox">
  const props = defineProps({
    disabled: { type: Boolean, default: false },
  });

  const dragPos = {
    hasMoved: false, // 排除click事件
    x: 0, // right
    y: 0, // bottom
    startX: 0,
    startY: 0,
    endX: 0,
    endY: 0,
  };
  const dragBoxPos = ref({ x: null, y: null });
  const dragBoxRef = ref(null);

  const setPosition = (dragX, dragY) => {
    [dragX, dragY] = _getSafeAreaXY(dragX, dragY);
    dragPos.x = dragX;
    dragPos.y = dragY;
    dragBoxPos.value.x = dragX;
    dragBoxPos.value.y = dragY;
  };

  const _getSafeAreaXY = (x, y) => {
    // const docWidth = Math.max(document.documentElement.offsetWidth, window.innerWidth);
    // const docHeight = Math.max(document.documentElement.offsetHeight, window.innerHeight);
    const docWidth = dragBoxRef.value.parentElement.offsetWidth;
    const docHeight = dragBoxRef.value.parentElement.offsetHeight;
    // 检查屏幕边缘
    if (x + dragBoxRef.value.offsetWidth > docWidth) {
      x = docWidth - dragBoxRef.value.offsetWidth;
    }
    if (y + dragBoxRef.value.offsetHeight > docHeight) {
      y = docHeight - dragBoxRef.value.offsetHeight;
    }
    if (x < 0) {
      x = 0;
    }
    // iOS底部的安全区域
    if (y < 20) {
      y = 20;
    }
    return [x, y];
  };

  const onTouchStart = (e) => {
    if (props.disabled) return;
    dragPos.startX = e.touches[0].pageX;
    dragPos.startY = e.touches[0].pageY;
    dragPos.hasMoved = false;
  };

  const onTouchEnd = (e) => {
    if (props.disabled) return;
    if (!dragPos.hasMoved) return;
    dragPos.startX = 0;
    dragPos.startY = 0;
    dragPos.hasMoved = false;
    setPosition(dragPos.endX, dragPos.endY);
  };

  const onTouchMove = (e) => {
    if (props.disabled) return;
    if (e.touches.length <= 0) return;
    const offsetX = e.touches[0].pageX - dragPos.startX,
      offsetY = e.touches[0].pageY - dragPos.startY;
    let x = Math.floor(dragPos.x - offsetX),
      y = Math.floor(dragPos.y - offsetY);
    [x, y] = _getSafeAreaXY(x, y);
    dragBoxPos.value.x = x;
    dragBoxPos.value.y = y;
    dragPos.endX = x;
    dragPos.endY = y;
    dragPos.hasMoved = true;
    e.preventDefault();
  };
</script>

<style lang="scss" scoped>
  .tvb-drag-box {
    &:not(.disabled) {
      position: fixed;
      bottom: 10px;
      right: 10px;
      overflow: hidden;
      z-index: 99;
    }
  }
</style>
