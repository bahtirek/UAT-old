import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/interfaces/user.inteface';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.less']
})
export class EditUserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() user: User;

}
