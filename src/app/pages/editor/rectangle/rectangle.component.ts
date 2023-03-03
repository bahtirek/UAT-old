import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DragService } from 'src/app/services/drag.service';
import { RectangleService } from './rectangle.service';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.less']
})
export class RectangleComponent implements OnInit {

  uuid: string;

  constructor(private dragService: DragService, private rectangleService: RectangleService) { }

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

  deleteComponent(){
    this.rectangleService.deleteComponent(this.uuid);
  }

  strokeUpdate(stroke: any){
    console.log(stroke);
    this.el.nativeElement.style.borderWidth = stroke.width;
  }
  
  colorUpdate(color: any){
    console.log(color);
    this.el.nativeElement.style.borderColor = color.color;
    
  }
}
