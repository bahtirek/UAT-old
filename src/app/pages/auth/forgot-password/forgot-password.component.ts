import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActiveBtnService } from 'src/app/services/active-btn.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.less']
})
export class ForgotPasswordComponent implements OnInit {

  showHide: boolean = true;
  submitInProgress: boolean = false; 
  submitClicked: boolean;

  get email() {
    return this.loginForm.get('email');
  }

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
  }); 

  constructor(private fb: FormBuilder, private activeBtnService: ActiveBtnService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.submitClicked = true;
    this.submitInProgress = true;
  }

  register(){
    
  }

  onCancel(){
    this.loginForm.reset();
  }

  minimizePage(state: boolean){
    this.showHide = state; 
  }

}
