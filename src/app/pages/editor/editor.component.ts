import { Component, OnInit, ViewChild, ElementRef, ViewContainerRef, ComponentRef, } from '@angular/core';
import * as html2canvas from "html2canvas";
import { EditorService } from 'src/app/services/editor.service';
import { CircleComponent } from './circle/circle.component';
import { CircleService } from './circle/circle.service';
import { LineComponent } from './line/line.component';
import { LineService } from './line/line.service';
import { RectangleComponent } from './rectangle/rectangle.component';
import { RectangleService } from './rectangle/rectangle.service';
import { TextComponent } from './text/text.component';
import { TextService } from './text/text.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.less']
})
export class EditorComponent implements OnInit {

  showHide: boolean = true;
  editorClass: string = '';

  constructor(
    private circleService: CircleService, 
    private rectangleService: RectangleService, 
    private textService: TextService, 
    private editorService: EditorService,
    private lineService: LineService,
  ) { }

  ngOnInit(): void {
    this.editorService.activeBtnSubject.subscribe(btn => this.action(btn))
    this.editorService.deleteComponentSubject.subscribe(component => this.deleteComponent(component))
  }

  deleteComponent(componentRef: ComponentRef<any>){
    let vcrIndex: number = this.vcr.indexOf(componentRef.hostView);
    this.vcr.remove(vcrIndex);
  }

  @ViewChild('canvas', {static: true}) canvasEl!: ElementRef<HTMLImageElement>;
  @ViewChild("viewContainerRef", { read: ViewContainerRef }) vcr!: ViewContainerRef;

  action(btn: string) {
    
    switch (btn) {
      case 'ui-br-ext-square-button': this.rectangleService.addComponent(this.vcr.createComponent(RectangleComponent)); break;
      case 'ui-br-ext-circle-button': this.circleService.addComponent(this.vcr.createComponent(CircleComponent)); break;
      case 'ui-br-ext-text-button': this.textService.addComponent(this.vcr.createComponent(TextComponent)); break;
      case 'ui-br-ext-line-button': this.lineService.addComponent(this.vcr.createComponent(LineComponent)); break;
      case 'ui-br-ext-save-button': this.getImage(); break;
    
      default: return false; break;
    }
  }

  getImage(){
    (html2canvas as any)(this.canvasEl.nativeElement, 
      {scale: 1})
      .then((canvas: any) => {
        var imgData = canvas.toDataURL("image/png");
        document.body.appendChild(canvas);
      }
    );
  }

}
