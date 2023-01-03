import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/interfaces/event.interface';

@Component({
  selector: 'app-event-title',
  templateUrl: './event-title.component.html',
  styleUrls: ['./event-title.component.less']
})
export class EventTitleComponent implements OnInit {

  isEventTitleModalOn: boolean = false;
  title: string;
  titleToEdit: string;

  constructor() { }

  ngOnInit(): void {}

  onEventTitleEdit(){
    this.titleToEdit = this.title;
    this.toggleModal()
  }

  addTitle(){
    this.toggleModal();
    this.title = '';
  }

  saveTitle(title: string){
    this.title = title;
    this.toggleModal();
  }

  getTitle(){
    return this.title;
  }

  toggleModal(){
    this.isEventTitleModalOn = !this.isEventTitleModalOn;
  }

}
