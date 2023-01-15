import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { take } from 'rxjs/operators';
import { Step } from 'src/app/interfaces/step.interface';
import { Title } from 'src/app/interfaces/title.interface';
import { TitleService } from 'src/app/services/title.service';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.less']
})
export class CreatePageComponent implements OnInit {

  showHide: boolean = true;
  title: Title = {};
  scrollTop: any;

  constructor(private titleService: TitleService) { }

  ngOnInit(): void {
    this.titleService.titleSource.pipe(take(2)).subscribe((title: Title) => {
      this.title = title;
    })
  }

  minimizePage(state: boolean){
    this.showHide = state  
  }

  onScroll(event: any){
    console.log(event.target.scrollTop);
    this.scrollTop = event.target.scrollTop;
  }

}

