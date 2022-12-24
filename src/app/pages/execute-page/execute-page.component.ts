import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-execute-page',
  templateUrl: './execute-page.component.html',
  styleUrls: ['./execute-page.component.less']
})
export class ExecutePageComponent implements OnInit {

  showHide: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  minimizePage(state: boolean){
    this.showHide = state  
  }

}
