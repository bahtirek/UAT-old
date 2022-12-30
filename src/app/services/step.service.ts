import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { Step } from '../interfaces/step.interface';

@Injectable({
  providedIn: 'root'
})
export class StepService {

  constructor() { }

  steps: Step[];

  stepsSource = new Subject<Step[]>()

  pushSteps(steps: Step[]){
    if(steps && steps.length > 0) this.sortSteps(steps);
    this.stepsSource.next(steps);
    this.steps = steps
  }

  saveStep(step: Step){
    if(step.id) {
      const existingStep = this.steps.find(item => item.id == step.id);
      existingStep.description = step.description;
      existingStep.expectedResults = step.expectedResults;
      this.pushSteps(this.steps);
    } else {
      this.steps.push(step)
      this.pushSteps(this.steps);
    }
  }

  moveStep(index: number){
    const element2 = this.steps[index-1]
    const element = this.steps.splice(index, 1)[0];    

    element.order= element.order - 1;
    element2.order= element2.order + 1;

    this.steps.splice(element.order, 0, element);
    this.stepsSource.next(this.steps);
  }

  deleteStep(id: number){
    const index = this.steps.findIndex(step => step.id == id)
    this.steps.splice(index, 1);
    for (let index = 0; index < this.steps.length; index++) {
      this.steps[index].order = index;
      if(index == this.steps.length - 1) {
        this.stepsSource.next(this.steps);
      }
    }
  }

  getSteps(){
    return this.steps;
  }

  sortSteps(array: Step[]) {
    const length = array.length;
    for (let index = 0; index < array.length; index++) {
      const element = array.splice(index, 1)[0];
      array.splice(element.order, 0, element);
    }
  }

}
