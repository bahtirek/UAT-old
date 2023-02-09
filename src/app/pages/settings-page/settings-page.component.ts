import { Component, OnInit } from '@angular/core';
import { Tab } from 'src/app/interfaces/tab.interface';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.less']
})
export class SettingsPageComponent implements OnInit {

  showHide: boolean = true;
  activeTab: string = 'profile';
  isAdmin: boolean = true

  constructor() { }

  ngOnInit(): void {
  }

  tabs: Tab[] = [
    {id: 'profile', label: 'Profile', isActive: true},
    {id: 'users', label: 'Users', isActive: false, disabled: !this.isAdmin}
  ];

  setActiveTab(activeTab: string){
    this.activeTab = activeTab
  }

  minimizePage(state: boolean){
    this.showHide = state;
  }

}
