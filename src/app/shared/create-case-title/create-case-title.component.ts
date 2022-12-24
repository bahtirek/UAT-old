import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-case-title',
  templateUrl: './create-case-title.component.html',
  styleUrls: ['./create-case-title.component.less']
})
export class CreateCaseTitleComponent implements OnInit {

  title = "";
  error: string[] = [];

  formError = {
    title: this.error
  }

  constructor() { }

  ngOnInit(): void {
  }

  @Output() cancel = new EventEmitter<null>();
  @Output() saveTitle = new EventEmitter<string>();

  onSaveTitle(){
    this.formError.title = []
    if(this.title) {
      this.saveTitle.emit(this.title);
    } else {
      this.formError.title.push('Field is required');
    }
  }

  onCancel(){
    this.cancel.emit();
  }
}
