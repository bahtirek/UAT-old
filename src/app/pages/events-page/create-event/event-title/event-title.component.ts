import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/interfaces/event.interface';
import { Title } from 'src/app/interfaces/title.interface';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event-title',
  templateUrl: './event-title.component.html',
  styleUrls: ['./event-title.component.less']
})
export class EventTitleComponent implements OnInit {

  event: Event = {};
  isEventTitleModalOn: boolean = false;

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.eventService.eventSource.subscribe((event: Event) => {
      this.event = event
    })
    this.eventService.pushEvent({})
  }

  onEventTitleEdit(){
    this.toggleModal()
  }

  addTitle(){
    this.toggleModal()
  }

  toggleModal(){
    this.isEventTitleModalOn = !this.isEventTitleModalOn;
  }

}
