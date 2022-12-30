import { Component, OnInit } from '@angular/core';
import { Step } from 'src/app/interfaces/step.interface';
import { StepService } from 'src/app/services/step.service';

@Component({
  selector: 'app-case-steps',
  templateUrl: './case-steps.component.html',
  styleUrls: ['./case-steps.component.less']
})
export class CaseStepsComponent implements OnInit {

  steps: Step[] = [];
  stepToEdit: Step = {};
  isAddStepModalOn: boolean = false;
  isDeleteModalOn: boolean = false;
  stepToDelete: Step;

  constructor(private stepService: StepService) { }

  ngOnInit(): void {
    this.stepService.stepsSource.subscribe((steps: Step[]) => {
      this.steps = steps;
    })

    this.stepService.pushSteps([])
  }

  toggleModal(val: string){
    if(val == 'addnewStepModal'){
      this.isAddStepModalOn = !this.isAddStepModalOn;
    } else if(val == 'deleteStepModal'){
      this.isDeleteModalOn = !this.isDeleteModalOn;
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
    this.stepService.moveStep(index)
  }

  deleteStep(){
    setTimeout(() => {
      this.stepService.deleteStep(this.stepToDelete.id)
      this.stepToDelete = {};
      this.toggleModal('deleteStepModal')
    }, 1000);
  }

  steps2: Step[] = [
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

}
