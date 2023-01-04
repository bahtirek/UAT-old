import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { Environment } from 'src/app/interfaces/environment.interface';
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

  saveTitle(title: string){
    this.event.title = title;
  }
  saveDescription(description: string){
    this.event.description = description;
  }
  saveEnvironment(environment: Environment){
    this.event.environment = environment;
  }

}
