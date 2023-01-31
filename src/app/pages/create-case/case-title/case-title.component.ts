import { Component, OnInit } from '@angular/core';
import { MoreButtonAction } from 'src/app/interfaces/more-button-action.interface';
import { TestCase } from 'src/app/interfaces/test-case.interface';
import { TestCaseService } from 'src/app/services/test-case.service';

@Component({
  selector: 'app-case-title',
  templateUrl: './case-title.component.html',
  styleUrls: ['./case-title.component.less']
})
export class CaseTitleComponent implements OnInit {
  
  testCase: TestCase;
  testCaseToEdit: TestCase = {};
  isCaseTitleModalOn: boolean = false;
  actions: MoreButtonAction[] = [
    {
      name: 'Edit',
      action: 'edit',
      display: true
    },
  ]

  constructor(private testCaseService: TestCaseService) { }

  ngOnInit(): void {
    this.testCaseService.testCaseSource.subscribe((testCase: TestCase) => {
      this.testCase = testCase as TestCase;
      console.log(this.testCase);
      
      this.testCaseToEdit = {};
      this.isCaseTitleModalOn = false;
    })
    this.testCaseService.getTestCaseInHold();
  }

  onCaseTestCaseEdit(){
    this.testCaseToEdit = {...this.testCase};
    this.toggleAddTestCaseModal();
  }

  openTestCaseModal(){
    this.toggleAddTestCaseModal()
  }

  toggleAddTestCaseModal(){
    this.isCaseTitleModalOn = !this.isCaseTitleModalOn;
  }

  onAction(event: string){
    switch (event) {
      case 'edit': this.onCaseTestCaseEdit(); break;
    }
  }

}
