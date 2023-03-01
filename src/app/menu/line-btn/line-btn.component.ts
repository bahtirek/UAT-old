import { Component, OnInit } from '@angular/core';
import { EditorActiveBtnService } from 'src/app/services/editor-active-btn.service';
import { SelectService } from 'src/app/services/select.service';
import { SelectedElementsService } from 'src/app/services/selected-elements.service';

@Component({
  selector: 'app-line-btn',
  templateUrl: './line-btn.component.html',
  styleUrls: ['./line-btn.component.less']
})
export class LineBtnComponent implements OnInit {

  constructor(private activeBtnService: EditorActiveBtnService, private onClick: SelectService, private selectedElemnstService: SelectedElementsService) { }

  isActive: boolean = false;
  activeBtn: string = '';
  currentBtn = "ui-br-ext-line-button";

  ngOnInit(): void {
    this.activeBtnService.activeBtnSubject.subscribe(
      activeBtn => {
        this.activeBtn = activeBtn;
        //if(this.activeBtn != this.currentBtn) this.isActive = false;
      }
    )
  }

  onMenuBtnClick () {
    //this.activeBtnUpdate();
    this.activeBtnService.activeBtnSubject.next(this.currentBtn);
  }

  activeBtnUpdate(){
    this.onClick.onDeselect(true);
    if(this.isActive) {
      this.isActive = false;
      this.activeBtnService.activeBtnSubject.next('');
    } else {
      this.isActive = true;
      this.activeBtnService.activeBtnSubject.next(this.currentBtn);
    }
  }

}
