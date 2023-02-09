import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/user.inteface';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.less']
})
export class EditUserComponent implements OnInit {

  submitInProgress: boolean = false; 
  submitClicked: boolean;

  get firstname() {
    return this.userForm.get('firstname');
  }

  get lastname() {
    return this.userForm.get('lastname');
  }

  userForm: FormGroup = this.fb.group({
    firstname: ['', [Validators.required, ]],
    lastname: ['', [Validators.required, ]],
  }); 

  constructor(private fb: FormBuilder ) { }

  ngOnInit(): void {
  }

  @Input() user: User;
  
  onSubmit(){
    this.submitClicked = true;
    this.submitInProgress = true;
    if(this.userForm.valid) {
      console.log(this.userForm.value);
      this.onCancel();
    }
  }

  onCancel(){
    this.userForm.reset();
    this.submitClicked = false;
    this.submitInProgress = false;
  }
}
