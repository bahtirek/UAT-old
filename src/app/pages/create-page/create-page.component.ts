import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.less']
})
export class CreatePageComponent implements OnInit {
  showHide: boolean = true;
  isModalOneOn: boolean = false;
  isModalTwoOn: boolean = false;
  title: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  toggleBody(state: boolean){
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


}

