import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Event } from 'src/app/interfaces/event.interface';
import { Title } from 'src/app/interfaces/title.interface';
import { EventTitleService } from 'src/app/services/event-title.service';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-create-event-title',
  templateUrl: './create-event-title.component.html',
  styleUrls: ['./create-event-title.component.less']
})
export class CreateEventTitleComponent implements OnInit {

  formError: FormError = {};
  submitInProgress: boolean = false; 
  eventInput: Event;

  constructor(private titleService: EventTitleService, private eventService: EventService) { }

  ngOnInit(): void {
    this.eventInput = {...this.event};
    this.eventService.eventSource.subscribe(()=>{
      this.onCancel()
    })
  }

  @Input() event: Event;

  @Output() cancel = new EventEmitter<null>();

  onSaveTitle(){
    console.log(this.eventInput);
    this.formError.title = [];
    this.submitInProgress = true;
    if(this.eventInput && this.eventInput.title) {
      console.log(this.eventInput);
      if(this.eventInput.id) {
        this.titleService.updateTitle(this.eventInput)
      } else {
        this.titleService.postTitle(this.eventInput)
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
