import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Tester } from 'src/app/interfaces/tester.interface';

@Component({
  selector: 'app-testers',
  templateUrl: './testers.component.html',
  styleUrls: ['./testers.component.less']
})
export class TestersComponent implements OnInit {
  testers: Tester[] = [];
  testerToEdit: Tester;
  isAddTesterModalOn: boolean = true;


  constructor() { }

  ngOnInit(): void {}

  @Output() testerEmit = new EventEmitter<Tester>();

  onAddTesterEdit(){
    //this.testerToEdit = this.tester;
    this.toggleModal()
  }

  addTester(){
    this.toggleModal();
  }

  saveTester(tester: any){
    this.testers.push(tester)
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
