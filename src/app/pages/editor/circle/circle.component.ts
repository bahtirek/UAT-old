import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DragService } from 'src/app/services/drag.service';
import { CircleService } from './circle.service';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.less']
})
export class CircleComponent implements OnInit {

  uuid: string;

  constructor(private dragService: DragService, private circleService: CircleService) { }

  ngOnInit(): void {
  }

  @ViewChild('editingParent', {static: true}) parent!: ElementRef<HTMLDivElement>;
  @ViewChild('editingItem', {static: true}) el!: ElementRef<HTMLDivElement>;

  onMouseDown(event: MouseEvent) {
    const rect = this.parent.nativeElement.getBoundingClientRect();
    if(event.offsetX < rect.width - 16 && event.offsetY < rect.height - 16) {
      this.dragService.onMouseDown(event, this.parent.nativeElement);
    } 
  }

  onMouseUp(event: any) {
    const rect = this.parent.nativeElement.getBoundingClientRect();
    this.dragService.onMouseUp(event, this.parent.nativeElement);
  }

  deleteComponent(){
    this.circleService.deleteComponent(this.uuid);
  }

  strokeUpdate(stroke: any){
    this.el.nativeElement.style.borderWidth = stroke.width;
  }
  
  colorUpdate(color: any){
    this.el.nativeElement.style.borderColor = color.color;
  }

}
