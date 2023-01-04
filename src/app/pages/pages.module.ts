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
import { CreateStepComponent } from './create-page/case-steps/create-step/create-step.component';
import { ModalComponent } from '../shared/modal/modal.component';
import { CreateCaseTitleComponent } from './create-page/case-title/create-case-title/create-case-title.component';
import { DeleteStepComponent } from './create-page/case-steps/delete-step/delete-step.component';
import { CaseTitleComponent } from './create-page/case-title/case-title.component';
import { CaseStepsComponent } from './create-page/case-steps/case-steps.component';
import { ImportStepsComponent } from './create-page/case-steps/import-steps/import-steps.component';
import { SearchTestCaseComponent } from '../shared/search-test-case/search-test-case.component';
import { EventsPageComponent } from './events-page/events-page.component';
import { CreateEventComponent } from './events-page/create-event/create-event.component';
import { SearchEventComponent } from './events-page/search-event/search-event.component';
import { EventTitleComponent } from './events-page/create-event/event-title/event-title.component';
import { CreateEventTitleComponent } from './events-page/create-event/event-title/create-event-title/create-event-title.component';
import { EventDescriptionComponent } from './events-page/create-event/event-description/event-description.component';
import { CreateEventDescriptionComponent } from './events-page/create-event/event-description/create-event-description/create-event-description.component';
import { EventEnvironmentComponent } from './events-page/create-event/event-environment/event-environment.component';
import { EnvironmentChoiceComponent } from '../shared/environment-choice/environment-choice.component';



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
    DeleteStepComponent,
    CaseTitleComponent,
    CaseStepsComponent,
    ImportStepsComponent,
    SearchTestCaseComponent,
    EventsPageComponent,
    EventTitleComponent,
    CreateEventComponent,
    SearchEventComponent,
    CreateEventTitleComponent,
    EventDescriptionComponent,
    CreateEventDescriptionComponent,
    EventEnvironmentComponent,
    EnvironmentChoiceComponent
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
    EventsPageComponent
  ]
})
export class PagesModule { }
