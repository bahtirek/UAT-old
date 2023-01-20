import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Environment } from 'src/app/interfaces/environment.interface';
import { MoreButtonAction } from 'src/app/interfaces/more-button-action.interface';

@Component({
  selector: 'app-event-environment',
  templateUrl: './event-environment.component.html',
  styleUrls: ['./event-environment.component.less']
})
export class EventEnvironmentComponent implements OnInit {

  isEventEnvironmentModalOn: boolean = false;
  environment: Environment = {};
  environmentToEdit: Environment;
  environments: Environment[] = [
    {environmentId: 1, name: 'Beta'},
    {environmentId: 2, name: 'Test'},
    {environmentId: 3, name: 'QA'},
    {environmentId: 4, name: 'Prod'}
  ];
  actions: MoreButtonAction[] = [
    {
      name: 'Edit',
      action: 'edit',
      display: true
    },
  ];

  constructor() { }

  ngOnInit(): void {}

  @Output() environmentEmit = new EventEmitter<Environment>();

  onEventEnvironmentEdit(){
    this.environmentToEdit = this.environment;
    this.toggleModal()
  }

  addEnvironment(){
    this.toggleModal();
    this.environment = {};
  }

  saveEnvironment(environment: Environment){
    this.environment = environment;
    this.environmentEmit.emit(this.environment)
    this.toggleModal();
  }

  getenvironment(){
    return this.environment;
  }

  toggleModal(){
    this.isEventEnvironmentModalOn = !this.isEventEnvironmentModalOn;
  }
  
  onAction(event: string){
    switch (event) {
      case 'edit': this.onEventEnvironmentEdit(); break;
    }
  }

}
