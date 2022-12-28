import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsPageComponent } from './settings-page/settings-page.component';
import { ResizeComponent } from '../shared/resize/resize.component';
import { ElementSelectorComponent } from '../shared/element-selector/element-selector.component';
import { ScreenCapturerComponent } from '../shared/screen-capturer/screen-capturer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TabsComponent } from '../shared/tabs/tabs.component';
import { BugDetailsComponent } from '../shared/bug-details/bug-details.component';
import { SubmitBugComponent } from '../shared/submit-bug/submit-bug.component';
import { EnvironmentSearchComponent } from '../shared/environment-search/environment-search.component';
import { CreatePageComponent } from './create-page/create-page.component';
import { ExecutePageComponent } from './execute-page/execute-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { MinimizeDropBodyComponent } from '../shared/minimize-drop-body/minimize-drop-body.component';
import { CreateStepComponent } from '../shared/create-step/create-step.component';
import { ModalComponent } from '../shared/modal/modal.component';
import { CreateCaseTitleComponent } from '../shared/create-case-title/create-case-title.component';
import { DeleteStepComponent } from '../shared/delete-step/delete-step.component';



@NgModule({
  declarations: [
    SettingsPageComponent,
    ResizeComponent,
    ElementSelectorComponent,
    ScreenCapturerComponent,
    TabsComponent,
    BugDetailsComponent,
    SubmitBugComponent,
    EnvironmentSearchComponent,
    CreatePageComponent,
    ExecutePageComponent,
    SearchPageComponent,
    MinimizeDropBodyComponent,
    CreateStepComponent,
    ModalComponent,
    CreateCaseTitleComponent,
    DeleteStepComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    SettingsPageComponent,
    CreatePageComponent,
    ExecutePageComponent,
    SearchPageComponent,
    ModalComponent,
  ]
})
export class PagesModule { }
