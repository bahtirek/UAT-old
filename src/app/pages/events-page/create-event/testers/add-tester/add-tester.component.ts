import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-tester',
  templateUrl: './add-tester.component.html',
  styleUrls: ['./add-tester.component.less']
})
export class AddTesterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  @Input() tester: any = {}
}
