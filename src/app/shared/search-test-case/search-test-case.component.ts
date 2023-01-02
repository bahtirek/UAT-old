import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, distinctUntilChanged, Subject, take } from 'rxjs';
import { Title } from 'src/app/interfaces/title.interface';
import { StepService } from 'src/app/services/step.service';

@Component({
  selector: 'app-search-test-case',
  templateUrl: './search-test-case.component.html',
  styleUrls: ['./search-test-case.component.less']
})
export class SearchTestCaseComponent implements OnInit {

  title: string = '';
  submitInProgress: number;
  titles: Title[] = [
    {
      title: 'Title 1',
      id: 1
    },
    {
      title: 'Title 2',
      id: 2
    },
    {
      title: 'Title 3',
      id: 3
    },
    {
      title: 'Title 4',
      id: 4
    },
    {
      title: 'Title 5',
      id: 5
    },
  ];
  titleSearch = new Subject<string>();

  constructor(private stepService: StepService) {}

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.titleSearch.pipe(debounceTime(400), distinctUntilChanged())
    .subscribe(value => {
      console.log(this.title);
    });
  }

  
  @Input() stepIndex: number;

  @Output() cancel = new EventEmitter<void>();

  onImport(id: number){

    if(!this.submitInProgress) {
      this.submitInProgress = id;
      
      this.stepService.stepsSource.pipe(take(1)).subscribe((steps) => {
        this.onCancel();
      })
      this.stepService.importSteps(id, this.stepIndex);
    }
  }

  onCancel(){
    this.cancel.emit();
    this.stepIndex = null;
  }

}
