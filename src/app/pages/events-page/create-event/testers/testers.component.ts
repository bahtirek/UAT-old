import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MoreButtonAction } from 'src/app/interfaces/more-button-action.interface';
import { Tester } from 'src/app/interfaces/tester.interface';

@Component({
  selector: 'app-testers',
  templateUrl: './testers.component.html',
  styleUrls: ['./testers.component.less']
})
export class TestersComponent implements OnInit {
  testers: Tester[] = [];
  testerToEdit: Tester;
  isAddTesterModalOn: boolean = false;
  actions: MoreButtonAction[] = [
    {
      name: 'Edit',
      action: 'edit',
      display: true
    },
  ]
  testerToEditIndex: number;

  constructor() { }

  ngOnInit(): void {}

  @Output() testerEmit = new EventEmitter<Tester>();

  onAddTesterEdit(index: number){
    this.testerToEdit = this.testers[index];
    this.testerToEditIndex = index
    this.toggleModal();
  }

  addTester(){
    this.toggleModal();
  }

  saveTester(tester: Tester){
    if(this.testerToEditIndex != null) {
      this.testers[this.testerToEditIndex] = tester;
      this.testerToEditIndex = null;
      this.testerToEdit = null;
    } else {
      this.testers.push(tester)
    }
  }

  toggleModal(){
    this.isAddTesterModalOn = !this.isAddTesterModalOn;
  }
  
  onAction(event: string, index: number){
    switch (event) {
      case 'edit': this.onAddTesterEdit(index); break;
    }
  }

}
