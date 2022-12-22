import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.less']
})
export class SearchPageComponent implements OnInit {

  showHide: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleBody(state: boolean){
    this.showHide = state  
  }

}
