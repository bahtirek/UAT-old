import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditorActiveBtnService {
  
  activeBtn: string = '';

  activeBtnSubject = new Subject<string>();

}
