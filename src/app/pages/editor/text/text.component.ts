import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DragService } from 'src/app/services/drag.service';
import { TextService } from './text.service';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.less']
})
export class TextComponent implements OnInit {
  timeout: any;
  uuid: string;

  constructor(private dragService: DragService, private textService: TextService) { }

  ngOnInit(): void {
  }

  @ViewChild('editingParent', {static: true}) parent!: ElementRef<HTMLDivElement>;
  @ViewChild('editingItem', {static: true}) el!: ElementRef<HTMLDivElement>;

  onMouseDown(event: any) {
    const rect = this.parent.nativeElement.getBoundingClientRect();
    
    if(event.target.className == "resize-element") {
      if(event.offsetX < rect.width - 12 && event.offsetY < rect.height - 12) {
        /* if (this.timeout) clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          this.dragService.onMouseDown(event, this.parent.nativeElement);
        }, 100); */
        this.dragService.onMouseDown(event, this.parent.nativeElement);
      }
    }
  }
  onMouseUp(event: any) {
    const rect = this.parent.nativeElement.getBoundingClientRect();
    
    if(event.target.className == "resize-element") {
      this.dragService.onMouseUp(event, this.parent.nativeElement);
    }
  }

  deleteComponent(){
    this.textService.deleteComponent(this.uuid);
  }

  strokeUpdate(stroke: any){
    this.el.nativeElement.style.borderWidth = stroke.width;
  }
  
  colorUpdate(color: any){
    this.el.nativeElement.style.color = color.color;
  }

}
