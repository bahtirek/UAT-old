import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditorActiveBtnService {
  deleteRectangle = new Subject<number>();
  
  activeBtn: string = '';

  activeBtnSubject = new Subject<string>();

}
