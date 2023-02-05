import { Component, OnInit } from '@angular/core';
import { arr } from '../data/executionobj';
import { testCasesForExecution } from '../data/imported';
import { TestCase } from '../interfaces/test-case.interface';
import { TestStep } from '../interfaces/test-step.interface';
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
  obj = arr;
  testCase = testCasesForExecution.testCase;
  importedCases = testCasesForExecution.importedCases;  

  constructor( private testCaseService: TestCaseService , private activeBtnService: ActiveBtnService, private unsavedBugStorage: UnsavedBugStorageService, private toggleExtension: ToggleExtensionService, private auth: AuthService, private accountService: AccountService) { }

  activeBtn: string = '';

  ngOnInit(): void {
    this.activeBtnService.activeBtnSubject.subscribe(
      activeBtn => {
        this.activeBtn = activeBtn;
      }
    )
    this.unsavedBugStorage.getReportFromStorage();

    this.toggleExtension.toggle.subscribe(
      state => {
        this.hideExtension = state
      }
    )
      console.log('stareted test');
      //this.testCaseService.createStepsArray(this.testCase, this.importedCases);
      this.test()
      console.log('completed test');
  }

  async test(){
    console.log('stareted');
    await this.testCaseService.createStepsArrayPromise(this.testCase, this.importedCases);
    console.log(this.testCase);
    console.log('completed');
  }
  /* async test(){
    console.log('stareted');
    await this.testCaseService.createStepArray(this.testCase, this.importedCases);
    console.log(this.testCase);
    console.log('completed');
  } */

}
