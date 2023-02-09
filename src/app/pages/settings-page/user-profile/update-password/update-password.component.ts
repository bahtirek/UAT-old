import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.less']
})
export class UpdatePasswordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() password: string

}
