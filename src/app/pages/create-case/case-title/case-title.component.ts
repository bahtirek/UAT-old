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
  testCaseToEdit: TestCase;
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
      this.testCase = testCase;
    })
    this.testCaseService.pushTestCase({title: 'title'})
  }

  onCasetestCaseEdit(){
    this.testCaseToEdit = {...this.testCase};
    this.toggleModal()
  }

  addtestCase(){
    this.testCaseToEdit = {title:''};
    this.toggleModal()
  }

  toggleModal(){
    this.isCaseTitleModalOn = !this.isCaseTitleModalOn;
  }

  onAction(event: string){
    switch (event) {
      case 'edit': this.onCasetestCaseEdit(); break;
    }
  }

}
