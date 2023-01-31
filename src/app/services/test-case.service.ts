import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, Subject, throwError } from 'rxjs';
import { TestCase, ServerResponse } from '../interfaces/test-case.interface';
import { api } from '../data/api-url';
import { TestStep } from '../interfaces/test-step.interface';


@Injectable({
  providedIn: 'root'
})
export class TestCaseService {

  url = api.url;

  constructor(private http: HttpClient) { }

  testCase: TestCase;

  testCaseSource = new Subject<TestCase>()

  getTestCaseById(id: number){
    const params = new HttpParams().set('testCaseId', id);
    return this.http.get<ServerResponse<TestCase>>(this.url + '/test-case', {params})
    .pipe(map(response => response?.result))
  }

  addTestCase(testCase: TestCase): Observable<TestCase> {
    return this.http.post<ServerResponse<TestCase>>(this.url + '/test-case', testCase)
    .pipe(map(response => response?.result))
  }

  addTestStep(testStep: TestStep){
    return this.http.post<ServerResponse<TestCase>>(this.url + '/test-step', testStep)
    .pipe(map(response => response?.result))
  }

  changeStepOrder(stepOrders: any){
    return this.http.post<ServerResponse<TestCase>>(this.url + '/step-order-change', stepOrders)
    .pipe(map(response => response?.result))
  }

  holdTestCase(testCase: TestCase){
    window.localStorage.setItem('testCaseId', testCase.testCaseId.toString());
    this.testCaseSource.next(testCase);
    this.testCase = testCase;
  }

  getTestCaseInHold(){
    let testCaseId = window.localStorage.getItem('testCaseId');
    
    if (!testCaseId) return false;
    this.getTestCaseById(parseInt(testCaseId)).subscribe(
      response => {
        this.testCaseSource.next(response);
        this.testCase = response;
      }
    )
  }

  getTestCase(){
    return this.testCase;
  }
}
