import { Component, OnInit, ViewChild } from '@angular/core';
import { MoreButtonAction } from 'src/app/interfaces/more-button-action.interface';
import { TestCase } from 'src/app/interfaces/test-case.interface';
import { TestStep } from 'src/app/interfaces/test-step.interface';
import { TestCaseService } from 'src/app/services/test-case.service';
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
  testCase: TestCase;

  constructor(private testCaseService: TestCaseService) { }

  ngOnInit(): void {
    this.testCaseService.testCaseSource.subscribe((testCase: TestCase) => {
      this.testCase = testCase;
    })
    this.testCase = this.testCaseService.getTestCase();
    
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
    /* this.stepToDelete = this.testCase.testSteps[index];
    this.isDeleteModalOn = true; */
  }

  moveStepUp(index: number){
    if(this.testCase.testStepOrder[index].order == 1) return false;

    const ordersToUpdate = {
      testCaseId: this.testCase.testCaseId,
      testSteps: [
        {
          testStepId: this.testCase.testStepOrder[index].testStepId,
          order: this.testCase.testStepOrder[index].order - 1
        },
        {
          testStepId: this.testCase.testStepOrder[index - 1].testStepId,
          order: this.testCase.testStepOrder[index - 1].order + 1
        },
      ]
    }

    this.testCaseService.changeStepOrder(ordersToUpdate).subscribe(
      response => {
        this.testCaseService.testCaseSource.next(response)
      },
    )
  }

  moveStepDown(index: number){
    if(this.testCase.testStepOrder[index].order == this.testCase.testStepOrder.length) return false;

    const ordersToUpdate = {
      testCaseId: this.testCase.testCaseId,
      testSteps: [
        {
          testStepId: this.testCase.testStepOrder[index].testStepId,
          order: this.testCase.testStepOrder[index].order + 1
        },
        {
          testStepId: this.testCase.testStepOrder[index + 1].testStepId,
          order: this.testCase.testStepOrder[index + 1].order - 1
        },
      ]
    }

    this.testCaseService.changeStepOrder(ordersToUpdate).subscribe(
      response => {
        console.log(response);
        this.testCaseService.testCaseSource.next(response)
      },
    )
  }

  deleteStep(){
    
  }
  
  onImportSteps(index?: number){
    if(index) this.stepIndex = index;
    this.importSteps.toggleModal()
  }
  
  onAction(event: string, index: number){
    switch (event) {
      case 'edit': this.onStepEdit(this.testCase.testStepOrder[index]); break;
      case 'add': this.onStepAdd(index); break;
      case 'import': this.onImportSteps(index); break;
      case 'up': this.moveStepUp(index); break;
      case 'down': this.moveStepDown(index); break;
      case 'delete': this.onDeleteStep(index); break;
    }
  }

}
