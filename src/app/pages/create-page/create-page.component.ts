import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Step } from 'src/app/interfaces/step.interface';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.less']
})
export class CreatePageComponent implements OnInit {
  showHide: boolean = true;
  isModalOneOn: boolean = false;
  isModalTwoOn: boolean = false;
  title: string = 'ready';
  titleToEdit: string = '';
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

  stepToEdit: Step;

  constructor() { }

  ngOnInit(): void {
    if(this.steps && this.steps.length > 0) this.sortSteps(this.steps)
  }

  sortSteps(array: Step[]) {
    const length = array.length;
    for (let index = 0; index < array.length; index++) {
      const element = array.splice(index, 1)[0];
      array.splice(element.order, 0, element);
    }
  }

  sortArray(arr: Step[], fromIndex: number, toIndex: number) {
    var element = arr[fromIndex];
    arr.splice(fromIndex, 1);
    arr.splice(toIndex, 0, element);
  }

  minimizePage(state: boolean){
    this.showHide = state  
  }

  toggleModal(val: string){
    if(val == 'one') {
      this.isModalOneOn = !this.isModalOneOn;
    } else {
      this.isModalTwoOn = !this.isModalTwoOn;
    }
  }

  saveTitle(val: string){
    this.title = val;
    this.isModalOneOn = false;
  }

  saveStep(step: Step){
    if(step.id) {
      const existingStep = this.steps.find(item => item.id == step.id);
      existingStep.description = step.description;
      existingStep.expectedResults = step.expectedResults;
    } else {
      this.steps.push(step)
    }
  }

  onCaseTitleEdit(title: string){
    this.titleToEdit = this.title;
    this.toggleModal('one')
  }

  onStepEdit(step: Step){
    this.stepToEdit = {...step};
    this.toggleModal('two')
  }

  moveUp(){
    
  }

  moveDown(){

  }

}

