import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Event } from 'src/app/interfaces/event.interface';

@Component({
  selector: 'app-create-event-description',
  templateUrl: './create-event-description.component.html',
  styleUrls: ['./create-event-description.component.less']
})
export class CreateEventDescriptionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() description: string;

  @Output() cancel = new EventEmitter<null>();
  @Output() descriptionEmit = new EventEmitter<string>();

  onSaveDescription(){
    console.log(this.description);
    if(this.description) {
      this.descriptionEmit.emit(this.description)
    } 
  }

  onCancel(){
    this.cancel.emit();
  }
}
