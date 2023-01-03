import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Event } from 'src/app/interfaces/event.interface';

@Component({
  selector: 'app-create-event-title',
  templateUrl: './create-event-title.component.html',
  styleUrls: ['./create-event-title.component.less']
})
export class CreateEventTitleComponent implements OnInit {

  formError: FormError = {};
  titleInput: string = '';

  constructor() { }

  ngOnInit(): void {}

  @Input() title: string;

  @Output() cancel = new EventEmitter<null>();
  @Output() titleEmit = new EventEmitter<string>();

  onSaveTitle(){
    this.formError.title = [];
    if(this.title) {
      this.titleEmit.emit(this.title)
    } else {
      this.formError.title.push('Field is required');
    }
  }

  onCancel(){
    this.cancel.emit();
  }
}
export interface FormError {
  title?: string[]
}
