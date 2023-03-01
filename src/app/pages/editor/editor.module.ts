import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { TextComponent } from './text/text.component';



@NgModule({
  declarations: [
    RectangleComponent,
    CircleComponent,
    TextComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    RectangleComponent,
    CircleComponent,
    TextComponent
  ]
})
export class EditorModule { }
