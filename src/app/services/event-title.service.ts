import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Event } from '../interfaces/event.interface';
import { Title } from '../interfaces/title.interface';
import { EventService } from './event.service';

@Injectable({
  providedIn: 'root'
})
export class EventTitleService {

  constructor(private eventService: EventService) { }

  event: Event;

  pushTitle(event: Event){
    this.eventService.eventSource.next(event);
    this.event = event;
  }

  postTitle(event: Event) {
    setTimeout(() => {
      this.pushTitle({title: event.title, id: 2})
    }, 1000);
  }

  updateTitle(event: Event){
    console.log(this.event);
    setTimeout(() => {
      this.pushTitle({title: event.title, id: 2})
    }, 1000);
  }

  getTitle(){
    return this.event;
  }
}
