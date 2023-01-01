import { Injectable, resolveForwardRef } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { Step } from '../interfaces/step.interface';

@Injectable({
  providedIn: 'root'
})
export class StepService {

  constructor() { }
  steps2: Step[] = [
    {
      id: 13,
      description: '11333',
      expectedResults: '11 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis assumenda ipsam cumque! Porro esse eveniet vitae rerum odit at consequatur earum culpa, accusamus, magni voluptates, fuga autem distinctio et natus!',
      order:2
    },
    {
      id: 11,
      description: '11 111',
      expectedResults: '11 111',
      order: 0
    },
    {
      id: 12,
      description: '11 222',
      expectedResults: '11 222',
      order: 1
    },
    {
      id: 17,
      description: '11 777',
      expectedResults: '11 777',
      order: 6
    },
    {
      id: 14,
      description: '11 444',
      expectedResults: '11 444',
      order: 3
    },
    {
      id: 16,
      description: '11 666',
      expectedResults: '11 666',
      order: 5
    },
    {
      id: 15,
      description: '11 555',
      expectedResults: '11 555',
      order: 4
    },
  ];
  steps3: Step[] = [
    {
      id: 13,
      description: '11333',
      expectedResults: '11 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis assumenda ipsam cumque! Porro esse eveniet vitae rerum odit at consequatur earum culpa, accusamus, magni voluptates, fuga autem distinctio et natus!',
      order:2
    },
    {
      id: 11,
      description: '11 111',
      expectedResults: '11 111',
      order: 0
    },
    {
      id: 12,
      description: '11 222',
      expectedResults: '11 222',
      order: 1
    },
    {
      id: 17,
      description: '11 777',
      expectedResults: '11 777',
      order: 6
    },
    {
      id: 14,
      description: '11 444',
      expectedResults: '11 444',
      order: 3
    },
    {
      id: 16,
      description: '11 666',
      expectedResults: '11 666',
      order: 5
    },
    {
      id: 15,
      description: '11 555',
      expectedResults: '11 555',
      order: 4
    },
  ];
  steps: any = [];

  stepsSource = new Subject<Step[]>()

  async pushSteps(steps: Step[]){
    if(steps && steps.length > 0) {
      this.steps = await this.sortSteps([...steps]);
      this.stepsSource.next(this.steps);
    }
  }

  saveStep(step: Step){
    if(step.id) {
      const existingStep = this.steps.find((item: Step) => item.id == step.id);
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

  async deleteStep(id: number){
    const index = this.steps.findIndex((step: Step) => step.id == id)
    this.steps.splice(index, 1);
    this.steps = await this.assignIndexAsOrder([...this.steps]);
    this.stepsSource.next(this.steps);
  }

  async importSteps(id: number){
    //const steps = this.getSteps(id);

    const array = await this.sortSteps(JSON.parse(JSON.stringify(this.steps2)))
    this.steps  = this.steps.concat(array);
    this.steps = await this.assignIndexAsOrder([...this.steps]);
    this.stepsSource.next(this.steps);
  }

  getSteps(id?: number){
    return this.steps;
  }

  sortSteps(array: any) {
    return new Promise (async (resolve) => {
      for (let index = 0; index < array.length; index++) {
        const element = array.splice(index, 1)[0];
        array.splice(element.order, 0, element);
        if(index == array.length - 1) {
          resolve(array)
        };
      }
    })
  }

  assignIndexAsOrder(array: any){
    return new Promise (async(resolve) => {
      for (let index = 0; index < array.length; index++) {
        array[index].order = index;
        if(index == array.length - 1) {
          resolve(array)
        }
      }
    })
  }

}
