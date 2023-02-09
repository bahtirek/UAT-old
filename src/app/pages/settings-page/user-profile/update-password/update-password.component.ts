import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/user.inteface';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.less']
})
export class UpdatePasswordComponent implements OnInit {

  submitInProgress: boolean = false; 
  submitClicked: boolean;

  get oldPassword() {
    return this.passwordForm.get('oldPassword');
  }

  get newPassword() {
    return this.passwordForm.get('newPassword');
  }

  get confirmPassword() {
    return this.passwordForm.get('confirmPassword');
  }

  passwordForm: FormGroup = this.fb.group({
    oldPassword: ['', [Validators.required, ]],
    newPassword: ['', [Validators.required, ]],
    confirmPassword: ['', [Validators.required, ]],
  }); 

  constructor(private fb: FormBuilder ) { }

  ngOnInit(): void {
  }

  @Input() user: User;

  onSubmit(){
    this.submitClicked = true;
    this.submitInProgress = true;
    if(this.passwordForm.valid) {
      console.log(this.passwordForm.value);
      this.onCancel();
    }
  }

  onCancel(){
    this.passwordForm.reset();
    this.submitClicked = false;
    this.submitInProgress = false;
  }

}
