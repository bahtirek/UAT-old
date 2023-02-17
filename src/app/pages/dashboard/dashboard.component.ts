import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {

  showHide: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  minimizePage(state: boolean){
    this.showHide = state  
  }
}
