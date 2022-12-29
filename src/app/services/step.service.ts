import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { Step } from '../interfaces/step.interface';

@Injectable({
  providedIn: 'root'
})
export class StepService {

  constructor() { }

  //steps: Step[]
  steps: Step[] = [
    {
      id: 3,
      description: '333',
      expectedResults: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis assumenda ipsam cumque! Porro esse eveniet vitae rerum odit at consequatur earum culpa, accusamus, magni voluptates, fuga autem distinctio et natus!',
      order:2
    },
    {
      id: 1,
      description: '111',
      expectedResults: '111',
      order: 0
    },
    {
      id: 2,
      description: '222',
      expectedResults: '222',
      order: 1
    },
    {
      id: 7,
      description: '777',
      expectedResults: '777',
      order: 6
    },
    {
      id: 4,
      description: '444',
      expectedResults: '444',
      order: 3
    },
    {
      id: 6,
      description: '666',
      expectedResults: '666',
      order: 5
    },
    {
      id: 5,
      description: '555',
      expectedResults: '555',
      order: 4
    },
  ];

  stepsSource = new Subject<Step[]>()

  pushSteps(steps: Step[]){
    this.stepsSource.next(steps);
    this.steps = steps
  }

  getSteps(){
    return this.steps;
  }
}
