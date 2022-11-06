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
    subStep: 0,
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
      if (step < 0 || step >= getStepNumber() || subStep < 0 || subStep >= getSubStepNumber(step)) return false;
      this.step = step;
      this.subStep = subStep;
      return true;
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
