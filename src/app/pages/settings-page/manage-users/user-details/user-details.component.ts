import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/interfaces/user.inteface';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.less']
})
export class UserDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  @Input() user: User;
  @Output() cancel = new EventEmitter<null>();

  onDelete(){

  }

  onCancel(){
    this.cancel.emit();
  }
}
