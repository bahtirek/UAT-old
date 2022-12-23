import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-step',
  templateUrl: './create-step.component.html',
  styleUrls: ['./create-step.component.less']
})
export class CreateStepComponent implements OnInit {

  form = {
    expectedResults: "",
    description: "",
  }

  constructor() { }

  ngOnInit(): void {
  }

}
