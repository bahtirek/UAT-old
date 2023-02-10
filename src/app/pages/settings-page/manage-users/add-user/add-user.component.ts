import { transition } from '@angular/animations';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.less']
})
export class AddUserComponent implements OnInit {

  submitInProgress: boolean = false; 
  submitClicked: boolean;

  get email() {
    return this.emailForm.get('email');
  }

  emailForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
  }); 

  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
  }

  @Output() cancel = new EventEmitter<null>();

  onSubmit(){
    this.submitInProgress = true;
    if(this.emailForm.valid) {
      this.userService.addUser(this.email.value).subscribe(
        response => {
          console.log(response);
          
        }
      )
    }
  }

  onCancel(){
    this.emailForm.reset();
    this.cancel.emit();
  }

}
