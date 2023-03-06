import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EditorMenu } from 'src/app/interfaces/editor-menu.interface';
import { DragService } from 'src/app/services/drag.service';
import { LineService } from './line.service';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.less']
})
export class LineComponent implements OnInit {

  uuid: string;
  rotate: number = 0;

  editorMenu: EditorMenu = {
    color: true,
    stroke: true,
    fontSize: false,
    invert: false,
    rotate: true,
    arrow: true
  }

  constructor(private dragService: DragService, private lineService: LineService) { }

  ngOnInit(): void {
  }

  @ViewChild('editingParent', {static: true}) parent!: ElementRef<HTMLDivElement>;
  @ViewChild('editingItem', {static: true}) el!: ElementRef<HTMLDivElement>;

  onMouseDown(event: any) {
    const rect = this.parent.nativeElement.getBoundingClientRect();
    if(event.target.classList.contains("resize-element")) {
      if(event.offsetX < rect.width - 20 && event.offsetY < rect.height - 16) {
        this.dragService.onMouseDown(event, this.parent.nativeElement);
      } 
    }
  }

  onMouseUp(event: any) {
    const rect = this.parent.nativeElement.getBoundingClientRect();
    this.dragService.onMouseUp(event, this.parent.nativeElement);
  }

  deleteComponent(){
    this.lineService.deleteComponent(this.uuid);
  }

  strokeUpdate(stroke: any){
    this.el.nativeElement.style.height = stroke.width;
  }
  
  colorUpdate(color: any){
    this.el.nativeElement.style.borderColor = color.color;
  }

  onRotate(to: string){
    this.rotate = to == 'right' ? this.rotate + 5 : this.rotate - 5;
    this.el.nativeElement.style.transform = `rotate(${this.rotate}deg)`; 
  }

}
