import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Event } from '../interfaces/event.interface';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  eventSource = new Subject<Event>();

  pushEvent(event: Event){
    this.eventSource.next(event)
  }
}
