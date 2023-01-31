import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TestStep } from 'src/app/interfaces/test-step.interface';

@Component({
  selector: 'app-delete-step',
  templateUrl: './delete-step.component.html',
  styleUrls: ['./delete-step.component.less']
})
export class DeleteStepComponent implements OnInit {

  submitInProgress: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  @Input() stepToDelete: TestStep = {};

  @Output() cancel = new EventEmitter<null>();
  @Output() deleteStep = new EventEmitter<TestStep>();

  delete(){
    this.submitInProgress = true;
    this.deleteStep.emit(this.stepToDelete)
  }

  onCancel(){
    this.cancel.emit();
  }

}
