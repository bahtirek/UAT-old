import { Component, OnInit } from '@angular/core';
import { Title } from 'src/app/interfaces/title.interface';
import { EventTitleService } from 'src/app/services/event-title.service';

@Component({
  selector: 'app-event-title',
  templateUrl: './event-title.component.html',
  styleUrls: ['./event-title.component.less']
})
export class EventTitleComponent implements OnInit {

  title: Title;
  titleToEdit: Title;
  isEventTitleModalOn: boolean = false;

  constructor(private titleService: EventTitleService) { }

  ngOnInit(): void {
    this.titleService.titleSource.subscribe((title: Title) => {
      console.log(title);
      
      this.title = title;
    })
    this.titleService.pushTitle({})
  }

  onEventTitleEdit(){
    console.log(this.title);
    this.titleToEdit = {...this.title};
    this.toggleModal()
  }

  addTitle(){
    console.log(this.title);
    this.titleToEdit = {title:''};
    this.toggleModal()
  }

  toggleModal(){
    this.isEventTitleModalOn = !this.isEventTitleModalOn;
  }

}
