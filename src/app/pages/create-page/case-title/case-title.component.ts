import { Component, OnInit } from '@angular/core';
import { Title } from 'src/app/interfaces/title.interface';
import { TitleService } from 'src/app/services/title.service';

@Component({
  selector: 'app-case-title',
  templateUrl: './case-title.component.html',
  styleUrls: ['./case-title.component.less']
})
export class CaseTitleComponent implements OnInit {
  
  title: Title;
  titleToEdit: Title;
  isCaseTitleModalOn: boolean = false;

  constructor(private titleService: TitleService) { }

  ngOnInit(): void {
    this.titleService.titleSource.subscribe((title: Title) => {
      this.title = title;
    })
    this.titleService.pushTitle({})
  }

  onCaseTitleEdit(){
    this.titleToEdit = {...this.title};
    this.toggleModal()
  }

  addTitle(){
    this.titleToEdit = {title:''};
    this.toggleModal()
  }

  toggleModal(){
    this.isCaseTitleModalOn = !this.isCaseTitleModalOn;
  }

}
