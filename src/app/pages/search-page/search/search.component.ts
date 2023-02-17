import { Component, OnInit } from '@angular/core';
import { TestCase } from 'src/app/interfaces/test-case.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onTestCaseImport(testCase: TestCase){
    console.log(testCase);
    
  }

}
