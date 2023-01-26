import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Step } from 'src/app/interfaces/step.interface';
import { TestStep } from 'src/app/interfaces/test-step.interface';
import { StepService } from 'src/app/services/test-step.service';

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

  get expectedResults() {
    return this.stepForm.get('expectedResults');
  }

  stepForm: FormGroup = this.fb.group({
    description: ['', [Validators.required, ]],
    expectedResults: ['', [Validators.required, ]]
  });

  constructor(private fb: FormBuilder, private stepService: StepService) { }

  ngOnInit(): void {
    this.setStepFormValue();
  }

  @Input() stepToEdit: TestStep = {};
  @Input() stepIndex: number;

  @Output() cancel = new EventEmitter<null>();

  onStepSave(){
    this.submitClicked = true;
    this.submitInProgress = true;
    if(this.stepForm.valid) {
      const step: TestStep = Object.assign(this.stepToEdit, this.stepForm.value);
      //will use it as observable
      setTimeout(() => {
        this.stepService.saveStep({...step}, this.stepIndex);
        this.stepForm.reset();
        this.submitClicked = false;
        this.submitInProgress = false;
        if(this.editing || this.stepIndex) {
          this.onCancel();
        }
      }, 1000);
    }
  }
    
  setStepFormValue() {
    if(this.stepToEdit && this.stepToEdit.description && this.stepToEdit.expected){
      this.stepForm.controls['description'].setValue(this.stepToEdit.description);
      this.stepForm.controls['expectedResults'].setValue(this.stepToEdit.expected);
      this.editing = true;
    }
  }

  onCancel(){
    this.cancel.emit();
  }
}
