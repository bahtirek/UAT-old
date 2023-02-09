import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/user.inteface';

@Component({
  selector: 'app-edit-email',
  templateUrl: './edit-email.component.html',
  styleUrls: ['./edit-email.component.less']
})
export class EditEmailComponent implements OnInit {

  submitInProgress: boolean = false; 
  submitClicked: boolean;

  get email() {
    return this.emailForm.get('email');
  }


  emailForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ]],
  }); 

  constructor(private fb: FormBuilder ) { }

  ngOnInit(): void {
  }

  @Input() user: User;
  
  onSubmit(){
    this.submitClicked = true;
    this.submitInProgress = true;
    if(this.emailForm.valid) {
      console.log(this.emailForm.value);
      this.onCancel();
    }
  }

  onCancel(){
    this.emailForm.reset();
    this.submitClicked = false;
    this.submitInProgress = false;
  }

}
