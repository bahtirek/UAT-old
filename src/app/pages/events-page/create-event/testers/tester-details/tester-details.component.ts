import { Component, OnInit, Input } from '@angular/core';
import { Tester } from 'src/app/interfaces/tester.interface';

@Component({
  selector: 'app-tester-details',
  templateUrl: './tester-details.component.html',
  styleUrls: ['./tester-details.component.less']
})
export class TesterDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() tester: Tester;

}
