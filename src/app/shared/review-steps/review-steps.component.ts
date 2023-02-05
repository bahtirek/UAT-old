import { Component, OnInit, Input } from '@angular/core';
import { TestCase } from 'src/app/interfaces/test-case.interface';

@Component({
  selector: 'app-review-steps',
  templateUrl: './review-steps.component.html',
  styleUrls: ['./review-steps.component.less']
})
export class ReviewStepsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() testCase: TestCase;

}
