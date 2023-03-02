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

  @ViewChild('circle', {static: true}) el!: ElementRef<HTMLDivElement>;

  onMouseDown(event: MouseEvent) {
    const rect = this.el.nativeElement.getBoundingClientRect();
    if(event.offsetX < rect.width - 12 && event.offsetY < rect.height - 12) {
      this.dragService.onMouseDown(event, this.el.nativeElement);
    }
  }

  deleteComponent(){
    this.circleService.deleteComponent(this.uuid);
  }

}
