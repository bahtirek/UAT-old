import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less']
})
export class ModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() propClass = '';

  @Output() closeModal = new EventEmitter<boolean>()

  onCloseBtnClick(){
    console.log('clicked');
    this.closeModal.emit(false);
  }

}
