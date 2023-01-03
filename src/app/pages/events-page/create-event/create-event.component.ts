import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { Event } from 'src/app/interfaces/event.interface';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.less']
})
export class CreateEventComponent implements OnInit {

  showHide: boolean = true;
  event: Event = {};

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.eventService.eventSource.pipe(take(2)).subscribe((event: Event) => {
      this.event = event;
    })
  }

  minimizePage(state: boolean){
    this.showHide = state  
  }

}
