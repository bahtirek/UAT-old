import { Component, OnInit } from '@angular/core';
import { MoreButtonAction } from 'src/app/interfaces/more-button-action.interface';
import { User } from 'src/app/interfaces/user.inteface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.less']
})
export class UserProfileComponent implements OnInit {
  user: any;
  isEditUserModalOn: boolean = false;
  isEditEmailModalOn: boolean = false;
  isUpdatePasswordModalOn: boolean = false;
  userToEdit: User;
  emailToEdit: string;
  passwordToEdit: string;
  actions: MoreButtonAction[] = [
    {
      name: 'Edit',
      action: 'edit',
      display: true
    },
  ];

  
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.user = this.authService.getUser()
  }

  toggleEditUserModal(){
    this.isEditUserModalOn = !this.isEditUserModalOn;
  }

  toggleEditEmailModal(){
    this.isEditEmailModalOn = !this.isEditEmailModalOn;
  }

  toggleUpdatePasswordModal(){
    this.isUpdatePasswordModalOn = !this.isUpdatePasswordModalOn;
  }

  onAction(event: string, action: string){
    switch (event) {
      case 'edit': this.onEdit(action); break;
    }
  }
  onEdit(action: string) {
    if(action == 'user') {
      this.toggleEditUserModal();
    } else {
      this.toggleEditEmailModal();
    }
  }

}
