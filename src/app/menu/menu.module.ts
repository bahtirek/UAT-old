import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from "./menu.component";
import { CloseBtnComponent } from './close-btn/close-btn.component';
import { SettingsBtnComponent } from './settings-btn/settings-btn.component';
import { ExecuteBtnComponent } from './execute-btn/execute-btn.component';
import { SearchBtnComponent } from './search-btn/search-btn.component';
import { CreateBtnComponent } from './create-btn/create-btn.component';
import { EventBtnComponent } from './event-btn/event-btn.component';
import { RegretionBtnComponent } from './regretion-btn/regretion-btn.component';
import { LineBtnComponent } from './line-btn/line-btn.component';
import { ArrowBtnComponent } from './arrow-btn/arrow-btn.component';
import { SquareBtnComponent } from './square-btn/square-btn.component';
import { CircleBtnComponent } from './circle-btn/circle-btn.component';
import { PointerBtnComponent } from './pointer-btn/pointer-btn.component';
import { HighlightBtnComponent } from './highlight-btn/highlight-btn.component';
import { TextBtnComponent } from './text-btn/text-btn.component';
import { EditorMenuModule } from './editor-menu/editor-menu.module';
import { SaveBtnComponent } from './save-btn/save-btn.component';
;


@NgModule({
  declarations: [
    MenuComponent,
    CloseBtnComponent,
    SettingsBtnComponent,
    ExecuteBtnComponent,
    SearchBtnComponent,
    CreateBtnComponent,
    EventBtnComponent,
    RegretionBtnComponent,
    LineBtnComponent,
    ArrowBtnComponent,
    SquareBtnComponent,
    CircleBtnComponent,
    PointerBtnComponent,
    HighlightBtnComponent,
    TextBtnComponent,
    SaveBtnComponent,
  ],
  imports: [
    CommonModule,
    EditorMenuModule
  ],
  exports: [
    MenuComponent
  ]
})
export class MenuModule { }
