import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Tester } from '../interfaces/tester.interface';

@Injectable({
  providedIn: 'root'
})
export class TesterService {

  testers: Tester[] = [];

  testersSource = new Subject<Tester>();

  constructor() { }
}
