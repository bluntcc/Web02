import { processData } from '/@/Data/processData';

export enum SubStepType {
  'None' = -1,
  'Video' = 0,
  'SingleBox' = 2,
  'Text' = 1,
  'MultiBox' = 3,
  'Map' = 4,
}

export type StepInfo = {
  StepName: string;
};

export type VideoInfo = {
  VideoUrl: string;
  VideoDesc: string;
  VideoTitle: string;
};

export type TextInfo = {
  TextImageUrl: string;
  TextDesc: string;
  TextTitle: string;
};
export type SingleBoxInfo = {
  SingleBoxTitle: string;
  SingleBoxQuestion: string;
  SingleBoxImages: string;
  SingleBoxList: string[];
  SingleBoxCorrectAnswer: number;
};
export type MultiBoxInfo = {
  MultiBoxTitle: string;
  MultiBoxQuestion: string;
  MultiBoxImages: string;
  MultiBoxList: string[];
  MultiBoxCorrectAnswer: number[];
};

export type MapInfo = {
  MapUrl: string;
  MapDesc: string;
  MapTitle: string;
};

export type SubStepInfo = {
  SubStepName: string;
  SubStepDesc: string;
  SubStepType: SubStepType;
  SubStepInfo: VideoInfo | TextInfo | SingleBoxInfo | MultiBoxInfo | MapInfo;
};

export function getStepInfo(step): StepInfo {
  return processData.GameStep[step].StepInfo;
}

export function getSubStepInfo(step, subStep): SubStepInfo {
  return processData.GameStep[step].SubStep[subStep];
}

export function getSubStepDetail(step, subStep): VideoInfo | TextInfo | SingleBoxInfo | MultiBoxInfo | MapInfo {
  return processData.GameStep[step].SubStep[subStep].SubStepInfo;
}

export function getSubStepType(step, subStep): SubStepType {
  if (subStep < 0) return SubStepType.None;
  return getSubStepInfo(step, subStep).SubStepType;
}

export function getStepNumber(): number {
  return processData.GameStep.length;
}

export function getSubStepNumber(step): number {
  return processData.GameStep[step].SubStep.length;
}

export function getAllStepInfo(): StepInfo[] {
  return processData.GameStep.map((x) => x.StepInfo);
}
