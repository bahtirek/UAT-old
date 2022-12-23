import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-case-title',
  templateUrl: './create-case-title.component.html',
  styleUrls: ['./create-case-title.component.less']
})
export class CreateCaseTitleComponent implements OnInit {

  title = "";

  constructor() { }

  ngOnInit(): void {
  }

}
