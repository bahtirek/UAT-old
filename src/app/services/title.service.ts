import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Title } from '../interfaces/title.interface';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  constructor() { }

  title: Title = {};

  titleSource = new Subject<Title>()

  pushTitle(title: Title){
    this.titleSource.next(title);
    this.title = title;
  }

  postTitle(title: Title) {
    setTimeout(() => {
      this.pushTitle({title: title.title, id: 2})
    }, 1000);
  }

  updateTitle(title: Title){
    setTimeout(() => {
      this.pushTitle({title: title.title, id: 2})
    }, 1000);
  }

  getTitle(){
    return this.title;
  }
}
