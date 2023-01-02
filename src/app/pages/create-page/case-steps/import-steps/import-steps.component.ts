import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-import-steps',
  templateUrl: './import-steps.component.html',
  styleUrls: ['./import-steps.component.less']
})
export class ImportStepsComponent implements OnInit {

  title: string = '';
  submitInProgress: boolean = false;
  isSearchTestCaseModalOn: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  @Input() stepIndex: number;

  toggleModal(){
    this.isSearchTestCaseModalOn = !this.isSearchTestCaseModalOn;
    if(!this.isSearchTestCaseModalOn) {
      this.stepIndex = null;
    }
  }

}
