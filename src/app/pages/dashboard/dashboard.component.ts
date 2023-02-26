import { Component, OnInit } from '@angular/core';
import { ActiveBtnService } from 'src/app/services/active-btn.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {

  showHide: boolean = true;

  constructor(private activeBtnService: ActiveBtnService) { }

  ngOnInit(): void {
  }

  minimizePage(state: boolean){
    this.showHide = state  
  }

  activeBtnUpdate(button: string){
    this.activeBtnService.activeBtnSubject.next(button);
  }
}
