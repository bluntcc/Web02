export enum SubStepType {
  'None' = -1,
  'Video' = 0,
  'SingleBox' = 2,
  'Text' = 1,
  'MultiBox' = 3,
  'Map' = 4,
}

export const processData = {
  GameStepTitle: "山洪灾害培训演练",
  GameStep: [
    {
      StepInfo: {
        StepName: '山洪灾害常识介绍',
      },
      SubStep: [
        {
          SubStepName: '山洪灾害定义',
          SubStepDesc: '什么是山洪灾害，山洪灾害的危害等',
          SubStepType: SubStepType.Text,
          SubStepInfo: {
            TextImageUrl:
              'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcdn.moji.com%2Fpage5%2Fimages%2Fuploads%2Feditor%2F20160802%2F20160802102325_14178.jpg&refer=http%3A%2F%2Fcdn.moji.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670863612&t=a2e41010ae971eecc169f4b02f511f7d',
            TextDesc:
              '山洪是指由于暴雨、拦洪设施溃决等原因，在山区沿河流及溪沟形成的暴涨暴落的洪水及伴随发生的滑坡、崩塌、泥石流的总称。山洪灾害是指由山洪暴发给人们带来的危害，包括溪河洪水泛滥及伴随发生的泥石流、山体滑坡等造成的人员伤亡、财产损失、基础设施毁坏及环境资源破坏等',
            TextTitle: '山洪灾害定义',
          },
        },
        {
          SubStepName: '工作历程',
          SubStepDesc: '浙江省山洪灾害防治工作历程',
          SubStepType: SubStepType.Text,
          SubStepInfo: {
            TextImageUrl:
              'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcdn.moji.com%2Fpage5%2Fimages%2Fuploads%2Feditor%2F20160802%2F20160802102325_14178.jpg&refer=http%3A%2F%2Fcdn.moji.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670863612&t=a2e41010ae971eecc169f4b02f511f7d',
            TextDesc:
              '2003年起，我省开始系统性地开展山洪灾害防治工作。2005年4月，完成《浙江省山洪灾害防治规划报告》编制。2006年，开展第一批庆元（国家级）、临安等11个县（市、区）山洪灾害防御工作试点县建设；2009年，开展临安、磐安等4个县（市）全国山洪灾害防治试点县建设。2010-2012年，开展全省山洪灾害防治县级非工程措施建设；2013-2015年，开展全省山洪灾害防治项目建设。2016年，开展山洪灾害群测群防示范乡镇建设；2017-2019年，夯实基础，开展群测群防整体提升；同时，开展区域洪水风险图编制；2020年，开展山洪灾害防御能力提升建设；2021年，开展水旱灾害风险普查重点城集镇风险调查；2022年，开展临安、龙游、上虞3个小流域山洪灾害防御能力提升国家级试点建设。',
            TextTitle: '浙江省山洪灾害防治工作历程',
          },
        },
        {
          SubStepName: '组织责任体系',
          SubStepDesc: '山洪灾害防御组织责任体系',
          SubStepType: SubStepType.Text,
          SubStepInfo: {
            TextImageUrl:
              'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcdn.moji.com%2Fpage5%2Fimages%2Fuploads%2Feditor%2F20160802%2F20160802102325_14178.jpg&refer=http%3A%2F%2Fcdn.moji.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670863612&t=a2e41010ae971eecc169f4b02f511f7d',
            TextDesc:
              '县级山洪灾害防御体系由县、乡、村三级组成，并纳入县级防汛防台抗旱组织体系。实行各级行政首长负责制，统一指挥，分级分部门负责；实行属地管理，乡镇（街道）是本行政区域内山洪灾害防御工作的责任主体。县级：县（市、区）防指指挥协调、水利部门牵头、相关部门配合，基层地方政府负责的山洪灾害防御工作机制。各部门各尽其责，加强协同。乡级：在县（市、区）委、县（市、区）政府和县（市、区）防指的统一领导下开展本辖区山洪灾害防御工作，落实乡镇（街道）山洪灾害监测、预警、转移责任人，明确相应职责，做到责任人信息动态更新。负责做好监测预警工作，指挥并组织协调各村（社区）进行群众安全转移，落实安置灾民及做好恢复生产工作；紧急情况下，按“乡自为战”的要求自行按预案转移人员。村级：在乡镇（街道）党委、政府（街道办事处）和乡镇（街道）防指领导下开展本辖区山洪灾害防御工作，落实村（社区）山洪灾害监测、预警、转移责任人，明确相应职责，做好监测预警、人员转移与安置等准备工作。紧急情况下，按“村自为战”的要求，按预案规定，自行组织受灾人员转移并安置。',
            TextTitle: '山洪灾害防御组织责任体系',
          },
        },
        {
          SubStepName: '人员避险转移',
          SubStepDesc: '转移原则、避灾安置点和紧急避险',
          SubStepType: SubStepType.Text,
          SubStepInfo: {
            TextImageUrl:
              'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcdn.moji.com%2Fpage5%2Fimages%2Fuploads%2Feditor%2F20160802%2F20160802102325_14178.jpg&refer=http%3A%2F%2Fcdn.moji.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670863612&t=a2e41010ae971eecc169f4b02f511f7d',
            TextDesc:
              '①转移原则。人员转移遵循优先转移原则和就近、迅速、安全、有序的原则，转移时先人员后财产，先老弱病残人员后一般人员，先重点户后一般户，信号发布责任人和转移组织者最后撤离。按照既定的路线就近转移，避开跨河、跨溪和易滑区地带；不要顺着溪河沟谷上下游、泥石流沟上下游、滑坡的滑动方向转移。对于弱势群体（老幼病残者）的转移安置必须采取专项措施。②分类避险。如能事先判断灾害发生，应将他们提前转移至避灾安置场所。紧急避险时，转移至安全地带即可。县级以上人民政府可以对经劝导仍拒绝转移的人员依法决定实施强制转移。转移指令解除前，被转移人员不得擅自返回；擅自返回经劝导仍拒绝离开的，有关部门可以依法采取措施，强制带离危险区域。',
            TextTitle: '人员避险转移',
          },
        },
        {
          SubStepName: '预警',
          SubStepDesc: '预报预警、监测预警、现地预警、人工预警',
          SubStepType: SubStepType.Video,
          SubStepInfo: {
            VideoUrl: 'https://storage.360buyimg.com/nutui/video/video_NutUI.mp4',
            VideoDesc: '视频2 描述',
            VideoTitle: '视频2 Title',
          },
        },
        {
          SubStepName: '风险识别原则',
          SubStepDesc: '风险识别原则',
          SubStepType: SubStepType.Text,
          SubStepInfo: {
            TextImageUrl:
              'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcdn.moji.com%2Fpage5%2Fimages%2Fuploads%2Feditor%2F20160802%2F20160802102325_14178.jpg&refer=http%3A%2F%2Fcdn.moji.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670863612&t=a2e41010ae971eecc169f4b02f511f7d',
            TextDesc:
              '根据山洪灾害防御工作重点及风险类型，基于受山洪灾害威胁及损失的程度将山洪灾害防治区内的村落分为一般村落及重要村落。将满足以下条件之一的村落列入重要村落名录： a）离河道水域50m范围以内分布有房屋（有人居住）的，且最低宅基高程与河道岸坡顶部的高差在2m以下的村落，简称“临河隐患”；b）房屋基础占用河道水域或位于盖板涵式溪沟两侧的村落，简称“阻水隐患”（图片）；c）村落上游存在屋顶山塘、病险水库山塘等水利工程，简称 “工程隐患”（图片）；d）村落上游及下游一定范围内存在滑坡体、高边坡等地质灾害隐患，简称“地灾隐患”（图片）；e）可能受山体冲沟降雨汇流冲击影响的村落，简称“冲沟隐患”（图片）；f）历史上发生过山洪灾害的村落，简称“历史山洪”（图片）。',
            TextTitle: '风险识别原则',
          },
        },
      ],
    },
    {
      StepInfo: {
        StepName: '巡查和监测',
      },
      SubStep: [
        {
          SubStepName: '接收预警',
          SubStepDesc: '什么是山洪灾害，山洪灾害的危害等',
          SubStepType: SubStepType.Text,
          SubStepInfo: {
            TextImageUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcdn.moji.com%2Fpage5%2Fimages%2Fuploads%2Feditor%2F20160802%2F20160802102325_14178.jpg&refer=http%3A%2F%2Fcdn.moji.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670863612&t=a2e41010ae971eecc169f4b02f511f7d',
            TextDesc: '预计12日20时至13日20时，庆元县发生山洪灾害可能性较大（黄色预警），平阳县、苍南县、文成县、泰顺县、云和县、景宁畲族自治县、龙泉市可能发生山洪灾害（蓝色预警）。请密切关注天气形势及雨水情变化，注意防范强降水引发的山洪灾害。',
            TextTitle: '山洪灾害预警提醒',
          },
        },
        {
          SubStepName: '地图巡查巡检',
          SubStepDesc: '子阶段Map描述',
          SubStepType: SubStepType.Map,
          SubStepInfo: {
            MapUrl: 'http://news.sznews.com/pic/2021-05/24/45f54a73-b171-46e9-90f9-fc4723225f3f.jpg',
            MapDesc: '视频1 描述',
            MapTitle: '视频1 Title',
            MapSize: [400, 500],
            MapPoints: [
              [0, 0],
              [30, 30],
            ],
          },
        },
        {
          SubStepName: '队伍准备',
          SubStepDesc: '子阶段1描述',
          SubStepType: SubStepType.Video,
          SubStepInfo: {
            VideoUrl: 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm',
            VideoDesc: '视频1 描述',
            VideoTitle: '视频1 Title',
          },
        },
      ],
    },
    {
      StepInfo: {
        StepName: '预警和转移',
      },
      SubStep: [
        {
          SubStepName: '接收预警',
          SubStepDesc: '强降雨持续预警',
          SubStepType: SubStepType.Text,
          SubStepInfo: {
            TextImageUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcdn.moji.com%2Fpage5%2Fimages%2Fuploads%2Feditor%2F20160802%2F20160802102325_14178.jpg&refer=http%3A%2F%2Fcdn.moji.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670863612&t=a2e41010ae971eecc169f4b02f511f7d',
            TextDesc: '预计今天至31日20时，遂昌发生山洪灾害可能性很大，为红色预警。前期降雨较大导致山体土壤饱和，山塘水库及河道都在高水位运行，请密切关注天气形势和雨水情变化，加强山洪灾害危险区、山塘水库和河道等重点地区的巡查，加强值班值守，提前做好人员转移避险和防御工作，确保防汛安全。',
            TextTitle: '强降雨持续预警',
          },
        },
        {
          SubStepName: '选择预警方式',
          SubStepDesc: '子阶段4描述',
          SubStepType: SubStepType.MultiBox,
          SubStepInfo: {
            MultiBoxTitle: '这是一个多选问题',
            MultiBoxQuestion: '请选择常用预警方式?',
            MultiBoxImages: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
            MultiBoxList: ['敲锣', '吹哨', '电话','预警广播'],
            MultiBoxCorrectAnswer: [0, 1, 2, 3],
          },
        },
        {
          SubStepName: '高风险立即转移',
          SubStepDesc: '子阶段Map描述',
          SubStepType: SubStepType.Map,
          SubStepInfo: {
            MapUrl: 'http://news.sznews.com/pic/2021-05/24/45f54a73-b171-46e9-90f9-fc4723225f3f.jpg',
            MapDesc: '视频1 描述',
            MapTitle: '视频1 Title',
            MapSize: [400, 500],
            MapPoints: [
              [0, 0],
              [30, 30],
            ],
          },
        },
        {
          SubStepName: '低风险转移',
          SubStepDesc: '子阶段Map描述',
          SubStepType: SubStepType.Map,
          SubStepInfo: {
            MapUrl: 'http://news.sznews.com/pic/2021-05/24/45f54a73-b171-46e9-90f9-fc4723225f3f.jpg',
            MapDesc: '视频1 描述',
            MapTitle: '视频1 Title',
            MapSize: [400, 500],
            MapPoints: [
              [0, 0],
              [30, 30],
            ],
          },
        },
        {
          SubStepName: '封锁警戒',
          SubStepDesc: '子阶段2描述',
          SubStepType: SubStepType.Text,
          SubStepInfo: {
            TextImageUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp6.itc.cn%2Fq_70%2Fimages03%2F20210907%2F8beb13f7ae9547fbbb64c09c45a6008f.jpeg&refer=http%3A%2F%2Fp6.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670939106&t=d4d0a19afc45a0d2762091b32d4c14a8',
            TextDesc: '人员转移完毕后，对危险区进行封锁警戒。防止人员回流。',
            TextTitle: '封锁警戒',
          },
        },
        {
          SubStepName: '清点人数',
          SubStepDesc: '子阶段1描述',
          SubStepType: SubStepType.Video,
          SubStepInfo: {
            VideoUrl: 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm',
            VideoDesc: '视频1 描述',
            VideoTitle: '视频1 Title',
          },
        },
        {
          SubStepName: '村民搜救',
          SubStepDesc: '子阶段2描述',
          SubStepType: SubStepType.Text,
          SubStepInfo: {
            TextImageUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnews.cnhubei.com%2Fa%2F10001%2F202107%2Fa2fb481cf3a9aab1d03f12795bd6af65.jpeg&refer=http%3A%2F%2Fnews.cnhubei.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670939168&t=088e5da7232811183ee60ca351daaecc',
            TextDesc: '转移过程中，要注意老弱病残及行动不便的村民，发现有被困群众，及时做好搜救工作。确保人员转移工作完成后，立刻向上级汇报情况。发现村民如被困在安全区域，喊话告知村民原地等待，等待安全后撤离；如村民被困在危险区域，开展救援，帮助被困人员救援撤离。',
            TextTitle: '搜救村民并上报',
          },
        },
        {
          SubStepName: '通信中断',
          SubStepDesc: '子阶段1描述',
          SubStepType: SubStepType.Video,
          SubStepInfo: {
            VideoUrl: 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm',
            VideoDesc: '视频1 描述',
            VideoTitle: '视频1 Title',
          },
        },
        {
          SubStepName: '危险解除',
          SubStepDesc: '子阶段2描述',
          SubStepType: SubStepType.Text,
          SubStepInfo: {
            TextImageUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp6.toutiaoimg.com%2Forigin%2Ftos-cn-i-qvj2lq49k0%2F85652d828e3c4236b39fa61997159c59%3Ffrom%3Dpc&refer=http%3A%2F%2Fp6.toutiaoimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670939387&t=807c8d962d90354f9dedba83ed5f069c',
            TextDesc: '雨势渐小，通过巡查,确定风险隐患已全面排除，解除警戒，部分被转移人员陆续返回，对于房屋邻近山体的居民，应暂缓返回。',
            TextTitle: '危险解除',
          },
        },
      ],
    },
    {
      StepInfo: {
        StepName: '灾后处置',
      },
      SubStep: [
        {
          SubStepName: '灾害调查',
          SubStepDesc: '子阶段2描述',
          SubStepType: SubStepType.Video,
          SubStepInfo: {
            VideoUrl: 'https://storage.360buyimg.com/nutui/video/video_NutUI.mp4',
            VideoDesc: '视频2 描述',
            VideoTitle: '视频2 Title',
          },
        },
        {
          SubStepName: '灾害调查',
          SubStepDesc: '子阶段3描述',
          SubStepType: SubStepType.SingleBox,
          SubStepInfo: {
            SingleBoxTitle: '这是一个单选框问题',
            SingleBoxQuestion: '下图是否是一张山洪灾害调查表?',
            SingleBoxImages: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ftxt6-2.book118.com%2F2017%2F0717%2Fbook27810%2F27809890.png&refer=http%3A%2F%2Ftxt6-2.book118.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670939841&t=9923928f977c05b78d5f40439c01391c',
            SingleBoxList: ['是', '否', '不确定'],
            SingleBoxCorrectAnswer: 0,
          },
        },
        {
          SubStepName: '灾后重建',
          SubStepDesc: '子阶段3描述',
          SubStepType: SubStepType.Text,
          SubStepInfo: {
            TextImageUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp6.toutiaoimg.com%2Forigin%2Ftos-cn-i-qvj2lq49k0%2F85652d828e3c4236b39fa61997159c59%3Ffrom%3Dpc&refer=http%3A%2F%2Fp6.toutiaoimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670939387&t=807c8d962d90354f9dedba83ed5f069c',
            TextDesc: '做好复工复产、受损的重点工程项目如山塘水库、水闸、堰坝、堤防等修复；做好受损的交通、电力、供水、通讯等设施的抢修；做好卫生防疫工作、环境清理恢复并及时发放救灾款物。',
            TextTitle: '灾后重建',
          },
        },
      ],
    },
  ],
};
