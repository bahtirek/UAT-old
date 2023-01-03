import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/interfaces/event.interface';

@Component({
  selector: 'app-event-description',
  templateUrl: './event-description.component.html',
  styleUrls: ['./event-description.component.less']
})
export class EventDescriptionComponent implements OnInit {


  isEventDescriptionModalOn: boolean = false;
  description: string;
  descriptionToEdit: string;

  constructor() { }

  ngOnInit(): void {
  }

  onEventDescriptionEdit(){
    this.descriptionToEdit = this.description
    this.toggleModal()
  }

  addDescription(){
    this.toggleModal()
  }

  saveDescription(decription: string){
    this.description = decription;
    this.toggleModal()
  }

  getDescription(){
    return this.description
  }

  toggleModal(){
    this.isEventDescriptionModalOn = !this.isEventDescriptionModalOn;
  }

}
