//<reference types="chrome"/>
import { Component, OnInit } from '@angular/core';
import { SelectService } from 'src/app/services/select.service';

@Component({
  selector: 'app-close-btn',
  templateUrl: './close-btn.component.html',
  styleUrls: ['./close-btn.component.less']
})
export class CloseBtnComponent implements OnInit {

  constructor(private onClick: SelectService) { }
  

  ngOnInit(): void {
  }

  async onMenuBtnClick(){
    this.onClick.onDeselect(true);
    const extension = document.getElementsByTagName("ez-bug-ext")[0] as HTMLElement;
    const browser = window.chrome || (window as any)['browser'];
    const response = await browser.runtime.sendMessage({todo: "closeExtensionInPage"})
    if (response) extension.style.display = 'none';
  }

}
