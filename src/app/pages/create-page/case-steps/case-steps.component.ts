import { Component, OnInit } from '@angular/core';
import { Step } from 'src/app/interfaces/step.interface';

@Component({
  selector: 'app-case-steps',
  templateUrl: './case-steps.component.html',
  styleUrls: ['./case-steps.component.less']
})
export class CaseStepsComponent implements OnInit {

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
  stepToEdit: Step = {};
  isAddStepModalOn: boolean = false;
  isDeleteModalOn: boolean = false;
  stepToDelete: Step;

  constructor() { }

  ngOnInit(): void {
    if(this.steps && this.steps.length > 0) this.sortSteps(this.steps);
  }

  sortSteps(array: Step[]) {
    const length = array.length;
    for (let index = 0; index < array.length; index++) {
      const element = array.splice(index, 1)[0];
      array.splice(element.order, 0, element);
    }
  }

  toggleModal(val: string){
    if(val == 'addnewStepModal'){
      this.isAddStepModalOn = !this.isAddStepModalOn;
    } else if(val == 'deleteStepModal'){
      this.isDeleteModalOn = !this.isDeleteModalOn;
    }
  }

  saveStep(step: Step){
    this.stepToEdit = {};
    //if has id then patch
    if(step.id) {
      const existingStep = this.steps.find(item => item.id == step.id);
      existingStep.description = step.description;
      existingStep.expectedResults = step.expectedResults;
    } else {
      this.steps.push(step)
    }
  }

  onStepEdit(step: Step){
    this.stepToEdit = {...step};
    this.toggleModal('addnewStepModal');
  }

  onStepAdd(){
    this.toggleModal('addnewStepModal')
  }

  onDeleteStep(index: number){
    this.stepToDelete = this.steps[index];
    this.isDeleteModalOn = true;
  }

  moveStep(index: number){
    const element2 = this.steps[index-1]
    const element = this.steps.splice(index, 1)[0];    

    element.order= element.order - 1;
    element2.order= element2.order + 1;

    this.steps.splice(element.order, 0, element);
  }

  deleteStep(){
    const index = this.steps.findIndex(step => step.id == this.stepToDelete.id)
    this.steps.splice(index, 1);
    this.stepToDelete = {};
    this.toggleModal('deleteStepModal')
  }

}
