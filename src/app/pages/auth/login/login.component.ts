import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActiveBtnService } from 'src/app/services/active-btn.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  showHide: boolean = true;
  error: string[] = [];
  formError: FormError = {};
  submitInProgress: boolean = false; 
  submitClicked: boolean;

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
    password: ['', [Validators.required, ]]
  }); 

  constructor(private fb: FormBuilder, private activeBtnService: ActiveBtnService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.submitClicked = true;
    this.submitInProgress = true;
  }

  forgotPassword(){
    this.activeBtnService.activeBtnSubject.next('ui-br-ext-forgot-password');
  }

  register(){
    this.activeBtnService.activeBtnSubject.next('ui-br-ext-register');
  }

  onCancel(){
    this.loginForm.reset();
  }

  minimizePage(state: boolean){
    this.showHide = state; 
  }

}
export interface FormError {
  email?: string[],
  password?: string[]
}