import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { TestStep } from 'src/app/interfaces/test-step.interface';
import { TestCaseService } from 'src/app/services/test-case.service';

@Component({
  selector: 'app-create-step',
  templateUrl: './create-step.component.html',
  styleUrls: ['./create-step.component.less']
})
export class CreateStepComponent implements OnInit {

  submitClicked: boolean = false;
  editing: boolean = false;
  submitInProgress: boolean = false;

  get description() {
    return this.stepForm.get('description');
  }

  get expected() {
    return this.stepForm.get('expected');
  }

  stepForm: FormGroup = this.fb.group({
    description: ['', [Validators.required, ]],
    expected: ['', [Validators.required, ]]
  });

  constructor(private fb: FormBuilder, private testCaseService: TestCaseService) { }

  ngOnInit(): void {
    this.setStepFormValue();
  }

  @Input() stepToEdit: TestStep = {};
  @Input() stepIndex: number;
  @Input() testCaseId: number;

  @Output() cancel = new EventEmitter<null>();

  onStepSave(){
    this.submitClicked = true;
    this.submitInProgress = true;
    if(this.stepForm.valid) {
      const step: TestStep = Object.assign(this.stepToEdit, this.stepForm.value);
      step.testCaseId = this.testCaseId;
      this.addTestStep(step)
    }
  }
  
  addTestStep(step: TestStep){
    this.testCaseService.addTestStep(step).subscribe(
      response => {
        console.log(response);
        this.submitClicked = false;
        this.submitInProgress = false;
        this.testCaseService.holdTestCase(response);
        this.stepForm.reset();
      },
      error => {
        this.submitClicked = false;
        this.submitInProgress = false;
      }
    )
  }
    
  setStepFormValue() {
    if(this.stepToEdit && this.stepToEdit.description && this.stepToEdit.expected){
      this.stepForm.controls['description'].setValue(this.stepToEdit.description);
      this.stepForm.controls['expected'].setValue(this.stepToEdit.expected);
      this.editing = true;
    }
  }

  onCancel(){
    this.cancel.emit();
  }
}
