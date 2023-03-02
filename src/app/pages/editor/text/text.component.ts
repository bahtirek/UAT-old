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

  @ViewChild('text', {static: true}) el!: ElementRef<HTMLDivElement>;

  onMouseDown(event: MouseEvent) {
    const rect = this.el.nativeElement.getBoundingClientRect();
    if(event.offsetX < rect.width - 12 && event.offsetY < rect.height - 12) {
      if (this.timeout) clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        this.dragService.onMouseDown(event, this.el.nativeElement);
      }, 100);
    }
  }

  deleteComponent(){
    this.textService.deleteComponent(this.uuid);
  }

}
