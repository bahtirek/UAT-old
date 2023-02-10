import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { User } from 'src/app/interfaces/user.inteface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.less']
})
export class ManageUsersComponent implements OnInit {

  email: string = '';
  submitInProgress: number;
  users: User[] = [
    {
      firstname: 'test',
      lastname: 'test',
      email: 'test@test.com',
      userId: 1
    }
  ];
  emailSearch = new Subject<string>();
  isUserDetailsModalOn: boolean = false;
  user: User;
  isAddUserModalOn: boolean;

  constructor(private userService: UserService) {}

  ngOnInit(): void {

  }

  ngAfterViewInit(){
    this.emailSearch.pipe(debounceTime(400), distinctUntilChanged())
    .subscribe(value => {
      this.searchEmail();
    });
  }


  searchEmail(){
    this.userService.searchUserByEmail(this.email, 0).subscribe(
      response => {
        this.users = response;
      }
    )
  }

  addUser(){
    this.toggleAddUserModal();
  }

  showUserDetails(user: User){
    this.user = user;
    this.toggleUserDetailsModal();
  }

  toggleUserDetailsModal(){
    this.isUserDetailsModalOn = !this.isUserDetailsModalOn;
  }

  toggleAddUserModal(){
    this.isAddUserModalOn = !this.isAddUserModalOn;
  }


  onDelete(user: User){
    if(!this.submitInProgress) {
      this.submitInProgress = user.userId;
    }
  }

  onCancel(){
  }

}
