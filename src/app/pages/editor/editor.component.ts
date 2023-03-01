import { Component, OnInit, ViewChild, ElementRef, ViewContainerRef, ComponentRef } from '@angular/core';
import * as html2canvas from "html2canvas";
import { EditorActiveBtnService } from 'src/app/services/editor-active-btn.service';
import { CircleComponent } from './circle/circle.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { TextComponent } from './text/text.component';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.less']
})
export class EditorComponent implements OnInit {

  showHide: boolean = true;
  editorClass: string = '';

  constructor(private activeBtnService: EditorActiveBtnService) { }

  ngOnInit(): void {
    this.activeBtnService.activeBtnSubject.subscribe(btn => this.action(btn))
  }

  @ViewChild('canvas', {static: true}) canvasEl!: ElementRef<HTMLImageElement>;
  @ViewChild("viewContainerRef", { read: ViewContainerRef }) vcr!: ViewContainerRef;
  rectangles!: ComponentRef<RectangleComponent>
  circles!: ComponentRef<CircleComponent>
  texts!: ComponentRef<TextComponent>

  action(btn: string) {
    switch (btn) {
      case 'ui-br-ext-square-button': this.addRectangle(); break;
      case 'ui-br-ext-circle-button': this.addCircle(); break;
      case 'ui-br-ext-text-button': this.addText(); break;
      case 'ui-br-ext-save-button': this.getImage(); break;
    
      default: return false; break;
    }
  }
  addRectangle() {
    this.rectangles = this.vcr.createComponent(RectangleComponent)
  }
  addCircle() {
    this.circles = this.vcr.createComponent(CircleComponent)
  }
  addText() {
    this.texts = this.vcr.createComponent(TextComponent)
  }

  getImage(){
    (html2canvas as any)(this.canvasEl.nativeElement).then((canvas: any) => {
      var imgData = canvas.toDataURL("image/png");
      document.body.appendChild(canvas);
  });

  }

}
