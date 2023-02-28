import { Component, OnInit } from '@angular/core';
import { EditorActiveBtnService } from 'src/app/services/editor-active-btn.service';

@Component({
  selector: 'app-text-btn',
  templateUrl: './text-btn.component.html',
  styleUrls: ['./text-btn.component.less']
})
export class TextBtnComponent implements OnInit {

  constructor(private activeBtnService: EditorActiveBtnService) { }

  isActive: boolean = false;
  activeBtn: string = '';
  currentBtn = "ui-br-ext-text-button";

  ngOnInit(): void {
    this.activeBtnService.activeBtnSubject.subscribe(
      activeBtn => {
        this.activeBtn = activeBtn;
        if(this.activeBtn != this.currentBtn) this.isActive = false;
      }
    )
  }

  onMenuBtnClick () {
    this.activeBtnUpdate();
  }

  activeBtnUpdate(){
    if(this.isActive) {
      this.isActive = false;
      this.activeBtnService.activeBtnSubject.next('');
    } else {
      this.isActive = true;
      this.activeBtnService.activeBtnSubject.next(this.currentBtn);
    }
  }

}
