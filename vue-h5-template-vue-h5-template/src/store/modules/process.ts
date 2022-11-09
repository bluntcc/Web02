import { defineStore } from 'pinia';
import { getStepNumber, getSubStepNumber } from '/@/utils/stepUtils';

interface StepInfo {
  step: number;
  subStep: number;
  pass: boolean[][];
}

export const useProcessStore = defineStore({
  id: 'app-process',
  state: (): StepInfo => ({
    step: 0,
    subStep: -1,
    pass: new Array(getStepNumber()),
  }),
  getters: {
    getStep: function (): number {
      return this.step;
    },
    getSubStep: function (): number {
      return this.subStep;
    },
  },
  actions: {
    setStepInfo(step: number, subStep: number): boolean {
      if (subStep < 0) {
        subStep = -1;
        return true;
      }
      if (subStep >= getSubStepNumber(step) && step < getStepNumber() - 1) {
        this.step = step + 1;
        this.subStep = -1;
        return true;
      }
      if (step >= 0 && step < getStepNumber() && subStep >= 0 && subStep < getSubStepNumber(step)) {
        this.step = step;
        this.subStep = subStep;
        return true;
      }
      return false;
    },
    setPassInfo(step: number, subStep: number): void {
      if (this.pass[step] == undefined) {
        this.pass[step] = new Array(getSubStepNumber(step));
      }
      this.pass[step][subStep] = true;
      console.log(this.pass);
    },
  },
  persist: {
    key: 'processStorage',
    storage: localStorage,
    paths: ['processStorage'],
  },
});
