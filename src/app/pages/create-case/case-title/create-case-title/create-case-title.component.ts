import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TestCase } from 'src/app/interfaces/test-case.interface';
import { TestCaseService } from 'src/app/services/test-case.service';

@Component({
  selector: 'app-create-case-title',
  templateUrl: './create-case-title.component.html',
  styleUrls: ['./create-case-title.component.less']
})
export class CreateCaseTitleComponent implements OnInit {

  error: string[] = [];
  formError: FormError = {};
  submitInProgress: boolean = false; 

  constructor(private testCaseService: TestCaseService) { }

  ngOnInit(): void {
    this.testCaseService.testCaseSource.subscribe(()=>{
      this.onCancel()
    })
  }

  @Input() testCase: TestCase;

  @Output() cancel = new EventEmitter<null>();
  @Output() savetestCase = new EventEmitter<TestCase>();

  onSaveTestCase(){
    this.formError.title = [];
    this.submitInProgress = true;
    if(this.testCase && this.testCase.title) {
      if(this.testCase.testCaseId) {
        this.testCaseService.updateTestCase(this.testCase)
      } else {
        this.testCaseService.postTestCase(this.testCase)
      }
      this.submitInProgress = false;
    } else {
      this.formError.title.push('Field is required');
      this.submitInProgress = false;
    }
  }

  onCancel(){
    this.cancel.emit();
  }
}
export interface FormError {
  title?: string[]
}