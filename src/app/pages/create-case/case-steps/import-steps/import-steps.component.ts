import { Component, Input, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { StepService } from 'src/app/services/test-step.service';

@Component({
  selector: 'app-import-steps',
  templateUrl: './import-steps.component.html',
  styleUrls: ['./import-steps.component.less']
})
export class ImportStepsComponent implements OnInit {

  title: string = '';
  submitInProgress: boolean = false;
  isSearchTestCaseModalOn: boolean = false;

  constructor(private stepService: StepService) { }

  ngOnInit(): void {
  }

  @Input() stepIndex: number;

  titleEmit(id: number) {
    this.stepService.stepsSource.pipe(take(1)).subscribe((steps) => {
      this.toggleModal();
    })
    this.stepService.importSteps(id, this.stepIndex);
  }


  toggleModal(){
    this.isSearchTestCaseModalOn = !this.isSearchTestCaseModalOn;
    if(!this.isSearchTestCaseModalOn) {
      this.stepIndex = null;
    }
  }

}
