import { Component, OnInit } from '@angular/core';
import { ActiveBtnService } from '../services/active-btn.service';
import { DragService } from '../services/drag.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {

  editing: boolean = false;

  constructor(private drugService: DragService, private activeBtnService: ActiveBtnService) { }

  ngOnInit(): void {
    this.activeBtnService.activeBtnSubject.subscribe(
      activeBtn => {
        this.isEditing(activeBtn)
      }
    )
  }

  isEditing(activeBtn: string) {
    if(activeBtn == 'ui-br-ext-editor-button') {
      this.editing = true;
    } else {
      this.editing = false;
    }
  }

  onTouchStart(event: any){
    this.drugService.onTouchStart(event);
  }

  onMouseDown(event: MouseEvent) {
    this.drugService.onMouseDown(event, 'ui-br-ext-extension');
  }

}
