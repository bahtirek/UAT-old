import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.less']
})
export class CreatePageComponent implements OnInit {
  showHide: boolean = true;
  isModalOneOn: boolean = false;
  isModalTwoOn: boolean = false;

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

}

