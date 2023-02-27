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
import { CreateCaseComponent } from './create-case/create-case.component';
import { ExecutePageComponent } from './execute-page/execute-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { MinimizeDropBodyComponent } from '../shared/minimize-drop-body/minimize-drop-body.component';
import { CreateStepComponent } from './create-case/case-steps/create-step/create-step.component';
import { ModalComponent } from '../shared/modal/modal.component';
import { CreateCaseTitleComponent } from './create-case/case-title/create-case-title/create-case-title.component';
import { DeleteStepComponent } from './create-case/case-steps/delete-step/delete-step.component';
import { CaseTitleComponent } from './create-case/case-title/case-title.component';
import { CaseStepsComponent } from './create-case/case-steps/case-steps.component';
import { ImportStepsComponent } from './create-case/case-steps/import-steps/import-steps.component';
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
import { MoreButtonMenuComponent } from '../shared/more-button-menu/more-button-menu.component';
import { TestersComponent } from './events-page/create-event/testers/testers.component';
import { TesterDetailsComponent } from './events-page/create-event/testers/tester-details/tester-details.component';
import { AddTesterComponent } from './events-page/create-event/testers/add-tester/add-tester.component';
import { ReviewStepsComponent } from '../shared/review-steps/review-steps.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { UserProfileComponent } from './settings-page/user-profile/user-profile.component';
import { ManageUsersComponent } from './settings-page/manage-users/manage-users.component';
import { EditUserComponent } from './settings-page/user-profile/edit-user/edit-user.component';
import { UpdatePasswordComponent } from './settings-page/user-profile/update-password/update-password.component';
import { EditEmailComponent } from './settings-page/user-profile/edit-email/edit-email.component';
import { AddUserComponent } from './settings-page/manage-users/add-user/add-user.component';
import { UserDetailsComponent } from './settings-page/manage-users/user-details/user-details.component';
import { SearchComponent } from './search-page/search/search.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditorComponent } from './editor/editor.component';



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
    CreateCaseComponent,
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
    EnvironmentChoiceComponent,
    MoreButtonMenuComponent,
    TestersComponent,
    TesterDetailsComponent,
    AddTesterComponent,
    ReviewStepsComponent,
    SignupComponent,
    LoginComponent,
    ForgotPasswordComponent,
    RegistrationComponent,
    UserProfileComponent,
    ManageUsersComponent,
    EditUserComponent,
    UpdatePasswordComponent,
    EditEmailComponent,
    AddUserComponent,
    UserDetailsComponent,
    SearchComponent,
    DashboardComponent,
    EditorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    SettingsPageComponent,
    CreateCaseComponent,
    ExecutePageComponent,
    SearchPageComponent,
    ModalComponent,
    EventsPageComponent,
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent, 
    RegistrationComponent,
    DashboardComponent,
    EditorComponent
  ]
})
export class PagesModule { }
