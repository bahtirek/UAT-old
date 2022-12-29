import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { Step } from '../interfaces/step.interface';

@Injectable({
  providedIn: 'root'
})
export class StepService {

  constructor() { }

  steps: Step[]

  stepsSource = new Subject<Step[]>()

  pushSteps(steps: Step[]){
    this.stepsSource.next(steps);
    this.steps = steps
  }

  getSteps(){
    return this.steps;
  }
}
