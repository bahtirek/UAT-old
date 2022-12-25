import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Step } from 'src/app/interfaces/step.interface';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.less']
})
export class CreatePageComponent implements OnInit {
  showHide: boolean = true;
  isModalOneOn: boolean = false;
  isModalTwoOn: boolean = false;
  title: string = 'ready';
  titleToEdit: string = '';
  steps: Step[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  minimizePage(state: boolean){
    this.showHide = state  
  }

  toggleModal(val: string){
    if(val == 'one') {
      this.isModalOneOn = !this.isModalOneOn;
    } else {
      this.isModalTwoOn = !this.isModalTwoOn;
    }
  }

  saveTitle(val: string){
    this.title = val;
    this.isModalOneOn = false;
  }

  saveStep(step: Step){
    this.steps.push(step)
    
  }

  onCaseTitleEdit(title: string){
    this.titleToEdit = this.title;
    this.toggleModal('one')
  }


}

