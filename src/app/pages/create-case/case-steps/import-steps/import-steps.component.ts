import { Component, Input, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { ImportedTestCase } from 'src/app/interfaces/imported-test-case.interface';
import { TestCase, TestStepOrder } from 'src/app/interfaces/test-case.interface';
import { TestStep } from 'src/app/interfaces/test-step.interface';
import { TestCaseService } from 'src/app/services/test-case.service';
import { StepService } from 'src/app/services/test-step.service';

@Component({
  selector: 'app-import-steps',
  templateUrl: './import-steps.component.html',
  styleUrls: ['./import-steps.component.less']
})
export class ImportStepsComponent implements OnInit {

  title: string = '';
  submitInProgress: boolean = false;
  isSearchTestCaseModalOn: boolean = false;
  importedTestCase: TestCase;
  importedCase: TestCase;
  isErrorModalOn: boolean = false;
  error: string = '';

  constructor(private testCaseService: TestCaseService) { }

  ngOnInit(): void {
  }


  async onTestCaseImport(importedTestCase: TestCase) {
    console.log(importedTestCase);
    
    const testCaseToImport: ImportedTestCase = {
      testCaseId: this.testCaseService.testCase.testCaseId,
      importedTestCaseId: importedTestCase.testCaseId,
      order: this.testCaseService.stepOrderForImport
    }
    this.testCaseService.importTestCase(testCaseToImport).subscribe(
      response => {
        console.log(response);
      }
    )
    this.toggleModal();
  }

  /* async testCaseImport(importedTestCase: TestCase) {
    const testCase = this.testCaseService.testCase;
    const stepIndex = this.testCaseService.stepIndexForImport;
    const step: TestStepOrder = {
      importedCaseTitle: importedTestCase.title,
      importedCaseId: importedTestCase.testCaseId,
      imported: true,
      order: stepIndex
    }
    if(stepIndex == testCase.testStepOrder.length - 1) {// import after last step
      testCase.testStepOrder  = testCase.testStepOrder.concat(step);
      await this.assignIndexAsOrder(testCase.testStepOrder);
      this.testCaseService.setTestCase(testCase);
      this.toggleModal();
    } else {
      testCase.testStepOrder.splice(stepIndex + 1, 0, step );
      await this.assignIndexAsOrder(testCase.testStepOrder);
      this.testCaseService.setTestCase(testCase);
      this.toggleModal();
    }
  } */

  assignIndexAsOrder(array: any){
    return new Promise (async(resolve) => {
      for (let index = 0; index < array.length; index++) {
        array[index].order = index + 1;
        if(array[index].test_step) array[index].test_step.order = index + 1;
        if(index == array.length - 1) {
          resolve(true);
        }
      }
    })
  }

  toggleModal(){
    this.isSearchTestCaseModalOn = !this.isSearchTestCaseModalOn;
    if(!this.isSearchTestCaseModalOn) {
      //this.stepIndex = null;
    }
  }
  toggleErrorModal(){
    this.isErrorModalOn = !this.isErrorModalOn;
  }

}
