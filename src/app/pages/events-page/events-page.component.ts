import { Component, OnInit } from '@angular/core';
import { Tab } from 'src/app/interfaces/tab.interface';

@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.less']
})
export class EventsPageComponent implements OnInit {

  showHide: boolean = true;
  activeTab: string = 'create';

  constructor() { }

  ngOnInit(): void {
  }

  tabs: Tab[] = [
    {id: 'create', label: 'Create', isActive: true},
    {id: 'search', label: 'Search', isActive: false}
  ];

  setActiveTab(activeTab: string){
    this.activeTab = activeTab
  }

  minimizePage(state: boolean){
    this.showHide = state  
  }

}
