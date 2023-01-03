import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Title } from 'src/app/interfaces/title.interface';
import { EventTitleService } from 'src/app/services/event-title.service';

@Component({
  selector: 'app-create-event-title',
  templateUrl: './create-event-title.component.html',
  styleUrls: ['./create-event-title.component.less']
})
export class CreateEventTitleComponent implements OnInit {

  error: string[] = [];
  formError: FormError = {};
  submitInProgress: boolean = false; 

  constructor(private titleService: EventTitleService) { }

  ngOnInit(): void {
    this.titleService.titleSource.subscribe(()=>{
      this.onCancel()
    })
  }

  @Input() title: Title;

  @Output() cancel = new EventEmitter<null>();
  @Output() saveTitle = new EventEmitter<Title>();

  onSaveTitle(){
    console.log(this.title);
    this.formError.title = [];
    this.submitInProgress = true;
    if(this.title && this.title.title) {
      console.log(this.title);
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
