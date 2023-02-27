import { Component, OnInit } from '@angular/core';
import { ActiveBtnService } from 'src/app/services/active-btn.service';
import { DragService } from 'src/app/services/drag.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.less']
})
export class EditorComponent implements OnInit {

  showHide: boolean = true;

  constructor(private activeBtnService: ActiveBtnService) { }

  ngOnInit(): void {
  }

  minimizePage(state: boolean){
    this.showHide = state  
  }

  activeBtnUpdate(button: string){
    this.activeBtnService.activeBtnSubject.next(button);
  }

}
