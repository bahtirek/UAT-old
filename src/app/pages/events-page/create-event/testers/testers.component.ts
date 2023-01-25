import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-testers',
  templateUrl: './testers.component.html',
  styleUrls: ['./testers.component.less']
})
export class TestersComponent implements OnInit {
  tester: any;
  testerToEdit: string;
  isAddTesterModalOn: boolean = false;


  constructor() { }

  ngOnInit(): void {}

  @Output() testerEmit = new EventEmitter<any>();

  onAddTesterEdit(){
    this.testerToEdit = this.tester;
    this.toggleModal()
  }

  addTester(){
    this.toggleModal();
    this.tester = {};
  }

  saveTester(tester: any){
    this.tester = tester;
    this.testerEmit.emit(this.tester)
    this.toggleModal();
  }

  getTester(){
    return this.tester;
  }

  toggleModal(){
    this.isAddTesterModalOn = !this.isAddTesterModalOn;
  }
  
  onAction(event: string){
    switch (event) {
      case 'edit': this.onAddTesterEdit(); break;
    }
  }

}
