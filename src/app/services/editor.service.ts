import { ComponentRef, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditorService {

  constructor() { }

  deleteComponentSubject = new Subject<ComponentRef<any>>();

  activeBtn: string = '';

  activeBtnSubject = new Subject<string>();
}
