import { Component, Input, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { TestCase } from 'src/app/interfaces/test-case.interface';
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

  constructor(private testCaseService: TestCaseService) { }

  ngOnInit(): void {
  }

  @Input() stepIndex: number;

  testCaseImport(id: number) {
    this.testCaseService.getTestCaseById(id).subscribe(
      response => {
        this.importSteps(response.testStepOrder);
      }
    )
  }

  async importSteps(steps: TestStep[]){
    //const testCase = {...this.testCaseService.testCase};
    const testCase = JSON.parse(JSON.stringify(this.testCaseService.testCase));
    const stepIndex = this.testCaseService.stepIndexForImport;
    
    if(stepIndex == testCase.testStepOrder.length - 1) {// import after last step
      testCase.testStepOrder  = testCase.testStepOrder.concat(steps);
      await this.assignIndexAsOrder(testCase.testStepOrder);
      this.testCaseService.setTestCase(testCase);
      this.toggleModal();
    } else {
      testCase.testStepOrder.splice(stepIndex + 1, 0, ...steps );
      await this.assignIndexAsOrder(testCase.testStepOrder);
      this.testCaseService.setTestCase(testCase);
      this.toggleModal();
    }
  }

  assignIndexAsOrder(array: any){
    return new Promise (async(resolve) => {
      for (let index = 0; index < array.length; index++) {
        array[index].order = index + 1;
        array[index].test_step.order = index + 1;
        if(index == array.length - 1) {
          resolve(true);
        }
      }
    })
  }

  toggleModal(){
    this.isSearchTestCaseModalOn = !this.isSearchTestCaseModalOn;
    if(!this.isSearchTestCaseModalOn) {
      this.stepIndex = null;
    }
  }

}
