export enum SubStepType {
  'Video' = 0,
  'SingleBox' = 2,
  'Text' = 1,
  'MultiBox' = 3,
}

export const processData = {
  GameStep: [
    {
      StepInfo: {
        StepName: '阶段1',
      },
      SubStep: [
        {
          SubStepName: '子阶段1',
          SubStepDesc: '子阶段1描述',
          SubStepType: SubStepType.Video,
          SubStepInfo: {
            VideoUrl: 'http://vjs.zencdn.net/v/oceans.mp4',
            VideoDesc: '视频1 描述',
            VideoTitle: '视频1 Title',
          },
        },
        {
          SubStepName: '子阶段2',
          SubStepDesc: '子阶段2描述',
          SubStepType: SubStepType.Video,
          SubStepInfo: {
            VideoUrl: 'https://storage.360buyimg.com/nutui/video/video_NutUI.mp4',
            VideoDesc: '视频2 描述',
            VideoTitle: '视频2 Title',
          },
        },
        {
          SubStepName: '子阶段3',
          SubStepDesc: '子阶段3描述',
          SubStepType: SubStepType.Text,
          SubStepInfo: {
            TextImageUrl: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
            TextDesc: '文本3 描述',
            TextTitle: '文本3 Title',
          },
        },
        {
          SubStepName: '子阶段4',
          SubStepDesc: '子阶段4描述',
          SubStepType: SubStepType.MultiBox,
          SubStepInfo: {
            MultiBoxTitle: '这是一个多选问题',
            MultiBoxQuestion: 'now we want to be stronger,what can I do?',
            MultiBoxImages: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
            MultiBoxList: ['list one', 'list two', 'list three'],
            MultiBoxCorrectAnswer: [1, 2],
          },
        },
      ],
    },
    {
      StepInfo: {
        StepName: '阶段2',
      },
      SubStep: [
        {
          SubStepName: '子阶段2',
          SubStepDesc: '子阶段1描述',
          SubStepType: SubStepType.Video,
          SubStepInfo: {
            VideoUrl: 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm',
            VideoDesc: '视频1 描述',
            VideoTitle: '视频1 Title',
          },
        },
        {
          SubStepName: '子阶段2',
          SubStepDesc: '子阶段2描述',
          SubStepType: SubStepType.Text,
          SubStepInfo: {
            TextImageUrl: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
            TextDesc: '文本2 描述',
            TextTitle: '文本2 Title',
          },
        },
        {
          SubStepName: '子阶段3',
          SubStepDesc: '子阶段3描述',
          SubStepType: SubStepType.SingleBox,
          SubStepInfo: {
            SingleBoxTitle: '这是一个单选框问题',
            SingleBoxQuestion: 'now we want to be stronger,what can I do?',
            SingleBoxImages: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
            SingleBoxList: ['list one', 'list two', 'list three'],
            SingleBoxCorrectAnswer: 1,
          },
        },
        {
          SubStepName: '子阶段3',
          SubStepDesc: '子阶段4描述',
          SubStepType: SubStepType.MultiBox,
          SubStepInfo: {
            MultiBoxTitle: '这是一个多选问题',
            MultiBoxQuestion: 'now we want to be stronger,what can I do?',
            MultiBoxImages: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
            MultiBoxList: ['list one', 'list two', 'list three'],
            MultiBoxCorrectAnswer: [1, 2],
          },
        },
      ],
    },
  ],
};
