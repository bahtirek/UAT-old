import { Component, OnInit } from '@angular/core';
import { EditorService } from 'src/app/services/editor.service';
import { SelectService } from 'src/app/services/select.service';
import { SelectedElementsService } from 'src/app/services/selected-elements.service';

@Component({
  selector: 'app-line-btn',
  templateUrl: './line-btn.component.html',
  styleUrls: ['./line-btn.component.less']
})
export class LineBtnComponent implements OnInit {

  constructor(private editorService: EditorService, private onClick: SelectService, private selectedElemnstService: SelectedElementsService) { }

  isActive: boolean = false;
  activeBtn: string = '';
  currentBtn = "ui-br-ext-line-button";

  ngOnInit(): void {
    this.editorService.activeBtnSubject.subscribe(
      activeBtn => {
        this.activeBtn = activeBtn;
      }
    )
  }

  onMenuBtnClick () {
    this.editorService.activeBtnSubject.next(this.currentBtn);
  }
}
