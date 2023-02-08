import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordMatchValidator } from 'src/app/directives/passwordMatchValidator';
import { ActiveBtnService } from 'src/app/services/active-btn.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.less']
})
export class RegistrationComponent implements OnInit {

  showHide: boolean = true;
  submitInProgress: boolean = false; 
  submitClicked: boolean;

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
  get confirmPassword() {
    return this.loginForm.get('confirmPassword');
  }

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
    password: ['', [Validators.required, ]],
    confirmPassword: ['', [Validators.required, ]],
  }, { validators: passwordMatchValidator}); 

  constructor(private fb: FormBuilder, private activeBtnService: ActiveBtnService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.submitClicked = true;
    this.submitInProgress = true;
  }

  onCancel(){
    this.loginForm.reset();
  }

  minimizePage(state: boolean){
    this.showHide = state; 
  }

}
