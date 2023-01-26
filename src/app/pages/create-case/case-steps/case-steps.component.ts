import { Component, OnInit, ViewChild } from '@angular/core';
import { MoreButtonAction } from 'src/app/interfaces/more-button-action.interface';
import { TestStep } from 'src/app/interfaces/test-step.interface';
import { StepService } from 'src/app/services/test-step.service';
import { ImportStepsComponent } from './import-steps/import-steps.component';

@Component({
  selector: 'app-case-steps',
  templateUrl: './case-steps.component.html',
  styleUrls: ['./case-steps.component.less']
})
export class CaseStepsComponent implements OnInit {

  steps: TestStep[] = [];
  stepToEdit: TestStep = {};
  isAddStepModalOn: boolean = false;
  isDeleteModalOn: boolean = false;
  stepToDelete: TestStep;
  stepIndex: number;
  actions: MoreButtonAction[] = [
    {
      name: 'Edit',
      action: 'edit',
      display: true
    },
    {
      name: 'Add',
      action: 'add',
      display: true
    },
    {
      name: 'Import',
      action: 'import',
      display: true
    },
    {
      name: 'Move up',
      action: 'up',
      display: true
    },
    {
      name: 'Move down',
      action: 'down',
      display: true
    },
    {
      name: 'Delete',
      action: 'delete',
      display: true
    },
  ]

  constructor(private stepService: StepService) { }

  ngOnInit(): void {
    this.stepService.stepsSource.subscribe((steps: TestStep[]) => {
      this.steps = steps;
    })

    //this.stepService.pushSteps(this.steps2)
    this.stepService.pushSteps([])
  }

  @ViewChild(ImportStepsComponent) importSteps!: ImportStepsComponent;

  toggleModal(val: string){
    if(val == 'addnewStepModal'){
      this.isAddStepModalOn = !this.isAddStepModalOn;
      if(!this.isAddStepModalOn) {
        this.stepToEdit = {};
        this.stepIndex = null;
      }
    } else if(val == 'deleteStepModal'){
      this.isDeleteModalOn = !this.isDeleteModalOn;
      if(!this.isDeleteModalOn) {
        this.stepToEdit = {};
        this.stepIndex = null;
      }
    } 
  }

  onStepEdit(step: TestStep){
    this.stepToEdit = {...step};
    this.toggleModal('addnewStepModal');
  }

  onStepAdd(index?: number){
    if(index) this.stepIndex = index;
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
      this.stepService.deleteStep(this.stepToDelete.testStepId)
      this.stepToDelete = {};
      this.toggleModal('deleteStepModal')
    }, 1000);
  }
  
  onImportSteps(index?: number){
    if(index) this.stepIndex = index;
    this.importSteps.toggleModal()
  }
  
  onAction(event: string, index: number){
    switch (event) {
      case 'edit': this.onStepEdit(this.steps[index]); break;
      case 'add': this.onStepAdd(index); break;
      case 'import': this.onImportSteps(index); break;
      case 'up': this.moveStep(index); break;
      case 'down': this.moveStep(index+1); break;
      case 'delete': this.onDeleteStep(index); break;
    }
  }

  steps2: TestStep[] = [
    {
      testStepId: 13,
      description: '11333',
      expected: '11 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis assumenda ipsam cumque! Porro esse eveniet vitae rerum odit at consequatur earum culpa, accusamus, magni voluptates, fuga autem distinctio et natus!',
      order:2
    },
    {
      testStepId: 11,
      description: '11 111',
      expected: '11 111',
      order: 0
    },
    {
      testStepId: 12,
      description: '11 222',
      expected: '11 222',
      order: 1
    },
    {
      testStepId: 17,
      description: '11 777',
      expected: '11 777',
      order: 6
    },
    {
      testStepId: 14,
      description: '11 444',
      expected: '11 444',
      order: 3
    },
    {
      testStepId: 16,
      description: '11 666',
      expected: '11 666',
      order: 5
    },
    {
      testStepId: 15,
      description: '11 555',
      expected: '11 555',
      order: 4
    },
  ];

}
