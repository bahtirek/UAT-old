import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';



@NgModule({
  declarations: [
    RectangleComponent,
    CircleComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    RectangleComponent,
    CircleComponent
  ]
})
export class EditorModule { }
