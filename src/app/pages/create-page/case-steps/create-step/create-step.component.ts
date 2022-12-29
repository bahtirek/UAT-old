import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Step } from 'src/app/interfaces/step.interface';

@Component({
  selector: 'app-create-step',
  templateUrl: './create-step.component.html',
  styleUrls: ['./create-step.component.less']
})
export class CreateStepComponent implements OnInit {

  submitClicked: boolean = false;
  editing: boolean = false;

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

  constructor(private fb: FormBuilder,) { }

  ngOnInit(): void {
    this.setStepFormValue();
  }

  @Input() stepToEdit: Step = {};

  @Output() cancel = new EventEmitter<null>();
  @Output() saveStep = new EventEmitter<Step>();

  onStepSave(){
    this.submitClicked = true;
    if(this.stepForm.valid) {
      console.log(this.stepToEdit );
      console.log(this.stepForm.value );
      
      const step: Step = Object.assign(this.stepToEdit, this.stepForm.value);
      this.saveStep.emit({...step});
      this.stepForm.reset();
      this.submitClicked = false;
      if(this.editing) {
        this.onCancel();
      }
    }
    
  }

    
  setStepFormValue() {
    if(this.stepToEdit && this.stepToEdit.description && this.stepToEdit.expectedResults){
      this.stepForm.controls['description'].setValue(this.stepToEdit.description);
      this.stepForm.controls['expectedResults'].setValue(this.stepToEdit.expectedResults);
      this.editing = true;
    }
  }

  onCancel(){
    this.cancel.emit();
  }
}
