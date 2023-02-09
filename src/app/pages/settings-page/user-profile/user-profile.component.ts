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

  onStepEdit() {
    throw new Error('Method not implemented.');
  }

  updatePassword(){
    
  }

  onAction(event: string){
    switch (event) {
      case 'edit': this.onStepEdit(); break;
    }
  }

}
