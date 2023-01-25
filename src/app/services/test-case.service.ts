import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { TestCase } from '../interfaces/test-case.interface';

@Injectable({
  providedIn: 'root'
})
export class TestCaseService {

  constructor() { }

  testCase: TestCase = {};

  testCaseSource = new Subject<TestCase>()

  pushTestCase(testCase: TestCase){
    this.testCaseSource.next(testCase);
    this.testCase = testCase;
  }

  postTestCase(testCase: TestCase) {
    setTimeout(() => {
      this.pushTestCase({title: testCase.title, testCaseId: 2})
    }, 1000);
  }

  updateTestCase(testCase: TestCase){
    setTimeout(() => {
      this.pushTestCase({title: testCase.title, testCaseId: 2})
    }, 1000);
  }

  getTestCase(){
    return this.testCase;
  }
}
