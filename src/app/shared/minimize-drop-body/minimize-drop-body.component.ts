import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-minimize-drop-body',
  templateUrl: './minimize-drop-body.component.html',
  styleUrls: ['./minimize-drop-body.component.less']
})
export class MinimizeDropBodyComponent implements OnInit {

  minimize: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  @Output() toggleBody = new EventEmitter<boolean>()

  toggleBtn() {
    this.minimize = !this.minimize;
    this.toggleBody.emit(this.minimize);
  }

}
