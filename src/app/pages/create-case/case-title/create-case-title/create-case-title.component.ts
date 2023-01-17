import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Title } from 'src/app/interfaces/title.interface';
import { TitleService } from 'src/app/services/title.service';

@Component({
  selector: 'app-create-case-title',
  templateUrl: './create-case-title.component.html',
  styleUrls: ['./create-case-title.component.less']
})
export class CreateCaseTitleComponent implements OnInit {

  error: string[] = [];
  formError: FormError = {};
  submitInProgress: boolean = false; 

  constructor(private titleService: TitleService) { }

  ngOnInit(): void {
    this.titleService.titleSource.subscribe(()=>{
      this.onCancel()
    })
  }

  @Input() title: Title;

  @Output() cancel = new EventEmitter<null>();
  @Output() saveTitle = new EventEmitter<Title>();

  onSaveTitle(){
    this.formError.title = [];
    this.submitInProgress = true;
    if(this.title && this.title.title) {
      if(this.title.id) {
        this.titleService.updateTitle(this.title)
      } else {
        this.titleService.postTitle(this.title)
      }
      this.submitInProgress = false;
    } else {
      this.formError.title.push('Field is required');
      this.submitInProgress = false;
    }
  }

  onCancel(){
    this.cancel.emit();
  }
}
export interface FormError {
  title?: string[]
}