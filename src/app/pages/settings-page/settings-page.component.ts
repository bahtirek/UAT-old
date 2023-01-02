import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.less']
})
export class SettingsPageComponent implements OnInit {

  showHide: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  minimizePage(state: boolean){
    this.showHide = state;
  }

}
