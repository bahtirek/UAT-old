import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Step } from 'src/app/interfaces/step.interface';

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

  @Input() stepToDelete: Step = {};

  @Output() cancel = new EventEmitter<null>();
  @Output() deleteStep = new EventEmitter<Step>();

  delete(){
    this.submitInProgress = true;
    this.deleteStep.emit(this.stepToDelete)
  }

  onCancel(){
    this.cancel.emit();
  }

}
