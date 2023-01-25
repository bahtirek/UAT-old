import { Component, OnInit} from '@angular/core';
import { take } from 'rxjs/operators';
import { TestCase } from 'src/app/interfaces/test-case.interface';
import { TestCaseService } from 'src/app/services/test-case.service';

@Component({
  selector: 'app-create-case',
  templateUrl: './create-case.component.html',
  styleUrls: ['./create-case.component.less']
})
export class CreateCaseComponent implements OnInit {

  showHide: boolean = true;
  testCase: TestCase = {};
  scrollTop: any;

  constructor(private testCaseService: TestCaseService) { }

  ngOnInit(): void {
    this.testCaseService.testCaseSource.pipe(take(2)).subscribe((testCase: TestCase) => {
      this.testCase = testCase;
    })
  }

  minimizePage(state: boolean){
    this.showHide = state  
  }

}

