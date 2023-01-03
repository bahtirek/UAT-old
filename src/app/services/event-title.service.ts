import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Title } from '../interfaces/title.interface';

@Injectable({
  providedIn: 'root'
})
export class EventTitleService {

  constructor() { }

  title: Title = {};

  titleSource = new Subject<Title>()

  pushTitle(title: Title){
    console.log(this.title);
    this.titleSource.next(title);
    this.title = title;
  }

  postTitle(title: Title) {
    console.log(this.title);
    setTimeout(() => {
      this.pushTitle({title: title.title, id: 2})
    }, 1000);
  }

  updateTitle(title: Title){
    console.log(this.title);
    setTimeout(() => {
      this.pushTitle({title: title.title, id: 2})
    }, 1000);
  }

  getTitle(){
    return this.title;
  }
}
