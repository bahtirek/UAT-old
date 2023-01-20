import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Event } from 'src/app/interfaces/event.interface';
import { MoreButtonAction } from 'src/app/interfaces/more-button-action.interface';

@Component({
  selector: 'app-event-description',
  templateUrl: './event-description.component.html',
  styleUrls: ['./event-description.component.less']
})
export class EventDescriptionComponent implements OnInit {


  isEventDescriptionModalOn: boolean = false;
  description: string;
  descriptionToEdit: string;
  actions: MoreButtonAction[] = [
    {
      name: 'Edit',
      action: 'edit',
      display: true
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  @Output() descriptionEmit = new EventEmitter<string>();

  onEventDescriptionEdit(){
    this.descriptionToEdit = this.description
    this.toggleModal()
  }

  addDescription(){
    this.toggleModal()
  }

  saveDescription(decription: string){
    this.description = decription;
    this.descriptionEmit.emit(this.description)
    this.toggleModal()
  }

  getDescription(){
    return this.description
  }

  toggleModal(){
    this.isEventDescriptionModalOn = !this.isEventDescriptionModalOn;
  }
  
  onAction(event: string){
    switch (event) {
      case 'edit': this.onEventDescriptionEdit(); break;
    }
  }

}
