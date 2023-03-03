import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { TextComponent } from './text/text.component';
import { EditorMenuModule } from 'src/app/shared/editor-menu/editor-menu.module';
import { EditorMenuComponent } from 'src/app/shared/editor-menu/editor-menu.component';



@NgModule({
  declarations: [
    RectangleComponent,
    CircleComponent,
    TextComponent
  ],
  imports: [
    CommonModule,
    EditorMenuModule
  ],
  exports: [
    RectangleComponent,
    CircleComponent,
    TextComponent,
    EditorMenuComponent
  ]
})
export class EditorModule { }
