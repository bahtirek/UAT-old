import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { Browser } from 'src/app/interfaces/device.interface';
import { Tester } from 'src/app/interfaces/tester.interface';

@Component({
  selector: 'app-add-tester',
  templateUrl: './add-tester.component.html',
  styleUrls: ['./add-tester.component.less']
})
export class AddTesterComponent implements OnInit {

  browsers: Browser[] = [
    {
      id: 1,
      name: 'Chrome Desktop'
    },
    {
      id: 2,
      name: 'Safari Desktop'
    },
    {
      id: 3,
      name: 'Firefox Desktop'
    },
    {
      id: 4,
      name: 'Edge Desktop'
    },
    {
      id: 5,
      name: 'Chrome Mobile'
    },
    {
      id: 6,
      name: 'Safari Mobile'
    },
  ]
  tester: Tester = {};
  testerEmail: string = ''
  testerSearch = new Subject<string>();
  instructions: string = '';

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges){
    if (changes.testerToEdit && changes.testerToEdit.currentValue) {
      this.tester = {...this.testerToEdit}
      const browsersToEdit = [...this.tester.browsers]
      this.tester.browsers.forEach((browserToEdit) => {
        const index = this.browsers.findIndex(browser => browser.id == browserToEdit.id);
        if ( browserToEdit.state ) this.browsers[index].state = true;
      })
    }
  }

  ngAfterViewInit(){
    this.testerSearch.pipe(debounceTime(400), distinctUntilChanged())
    .subscribe(value => {
      console.log(this.testerEmail);
    });
  }

  @Input() public testerToEdit: Tester;
  @Output() cancel = new EventEmitter<void>();
  @Output() testerEmit = new EventEmitter<Tester>();
  
  
    
  onChoose(tester: Tester){
    this.tester.email = tester.email;
    this.tester.firstname = tester.firstname;
    this.tester.lastname = tester.lastname;
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
