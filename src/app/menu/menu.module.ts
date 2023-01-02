import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from "./menu.component";
import { CloseBtnComponent } from './close-btn/close-btn.component';
import { SettingsBtnComponent } from './settings-btn/settings-btn.component';
import { ExecuteBtnComponent } from './execute-btn/execute-btn.component';
import { SearchBtnComponent } from './search-btn/search-btn.component';
import { CreateBtnComponent } from './create-btn/create-btn.component';
import { EventBtnComponent } from './event-btn/event-btn.component';
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
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MenuComponent
  ]
})
export class MenuModule { }
