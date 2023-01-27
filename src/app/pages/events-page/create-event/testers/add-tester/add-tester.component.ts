import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { Browser } from 'src/app/interfaces/device.interface';
import { Tester } from 'src/app/interfaces/tester.interface';

@Component({
  selector: 'app-add-tester',
  templateUrl: './add-tester.component.html',
  styleUrls: ['./add-tester.component.less']
})
export class AddTesterComponent implements OnInit {

  tester: Tester;
  testers: Tester[] = [];
  testerEmail: string = ''
  testerSearch = new Subject<string>();
  browsers: Browser[] = [
    {
      id: 1,
      name: 'Chrome Desktop'
    },
    {
      id: 4,
      name: 'Safari Desktop'
    },
    {
      id: 5,
      name: 'Firefox Desktop'
    },
    {
      id: 5,
      name: 'Edge Desktop'
    },
    {
      id: 2,
      name: 'Chrome Mobile'
    },
    {
      id: 3,
      name: 'Safari Mobile'
    },
  ] 

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.testerSearch.pipe(debounceTime(400), distinctUntilChanged())
    .subscribe(value => {
      console.log(this.testerEmail);
    });
  }

  @Input() testerToEdit: Tester;
  @Output() cancel = new EventEmitter<void>();
  @Output() testerEmit = new EventEmitter<Tester>();
  
  
    
  onChoose(tester: Tester){
    console.log(tester);
    this.tester = tester;
    this.searchResults = [];
  }

  onSaveTester(){
    this.tester.browsers = this.browsers;
    this.testerEmit.emit(this.tester);
    this.onCancel();
  }

  onCancel(){
    this.cancel.emit();
  }

  searchResults: Tester[] = [
    {
      testerId: 1,
      email: 'tester1@test.com',
      firstname: 'tester1',
      lastname: 'tester1'
    },
    {
      testerId: 2,
      email: 'tester2@test.com',
      firstname: 'tester2',
      lastname: 'tester2'
    },
    {
      testerId: 3,
      email: 'tester3@test.com',
      firstname: 'tester3',
      lastname: 'tester3'
    },
  ]
}
