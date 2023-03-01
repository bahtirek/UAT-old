import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DragService } from 'src/app/services/drag.service';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.less']
})
export class RectangleComponent implements OnInit {

  constructor(private dragService: DragService) { }

  ngOnInit(): void {
  }

  @ViewChild('rectangle', {static: true}) el!: ElementRef<HTMLDivElement>;

  onMouseDown(event: MouseEvent) {
    this.dragService.onMouseDown(event, this.el.nativeElement);
  }

}
