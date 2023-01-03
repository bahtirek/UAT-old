import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { Title } from 'src/app/interfaces/title.interface';
import { EventTitleService } from 'src/app/services/event-title.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.less']
})
export class CreateEventComponent implements OnInit {

  showHide: boolean = true;
  title: Title = {};

  constructor(private titleService: EventTitleService) { }

  ngOnInit(): void {
    this.titleService.titleSource.pipe(take(2)).subscribe((title: Title) => {
      this.title = title;
    })
  }

  minimizePage(state: boolean){
    this.showHide = state  
  }

}
