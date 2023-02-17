import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { ActiveBtnService } from '../services/active-btn.service';
import { AuthService } from '../services/auth.service';
import { TestCaseService } from '../services/test-case.service';
import { ToggleExtensionService } from '../services/toggle-extension.service';
import { UnsavedBugStorageService } from '../services/unsaved-bug-storage.service';

@Component({
  selector: 'app-extension',
  templateUrl: './extension.component.html',
  styleUrls: ['./extension.component.less']
})
export class ExtensionComponent implements OnInit {

  hideExtension: boolean = false;
  isAuthorized: any;

  constructor( private activeBtnService: ActiveBtnService, private toggleExtension: ToggleExtensionService, private auth: AuthService ) { }

  activeBtn: string = '';

  ngOnInit(): void {
    this.activeBtnService.activeBtnSubject.subscribe(
      activeBtn => {
        this.switchPage(activeBtn);
      }
    )

    this.switchPage('ui-br-ext-dashboard-button');
    //this.switchPage('ui-br-ext-search-button');
    //this.switchPage('ui-br-ext-execute-button');
    //this.switchPage('ui-br-ext-login');

    this.toggleExtension.toggle.subscribe(
      state => {
        this.hideExtension = state
      }
    )
  }

  switchPage(activeBtn: string) {
    this.activeBtn = activeBtn;
    /* if(this.isAuthorized) {
      this.activeBtn = activeBtn;
    } else if(activeBtn == 'ui-br-ext-registration' || activeBtn == 'ui-br-ext-forgot-password') {
      this.activeBtn = activeBtn;
    } else {
      this.activeBtn = 'ui-br-ext-login';
    } */
  }
}
