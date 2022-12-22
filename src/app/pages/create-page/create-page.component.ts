import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.less']
})
export class CreatePageComponent implements OnInit {
  showHide: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleBody(state: boolean){
    this.showHide = state  
  }

}

