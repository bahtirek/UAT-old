import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HandleErrorService } from './handleError.service';

@Injectable({
  providedIn: 'root'
})
export class ClickOnBugService {

    constructor(private http: HttpClient, private errorService: HandleErrorService) { }

    activeBugElement: any = null;

    blockBugElement = (element: any) => {
        if(element) {
            element.addEventListener('mousedown', this.preventClick, {capture: true});
            element.addEventListener('mouseup', this.preventClick, {capture: true});
            element.addEventListener('dblclick', this.preventClick, {capture: true});
            element.addEventListener('click', this.showDetailsOnClickWithClass, {capture: true});
        }
    }

    unblockBugElements = (elements: any) => {
        if(!elements) {
            elements = document.querySelectorAll('[class^=ui-br-ext-searched-element-id-]') 
        }
        elements.forEach((element: any) => {
            element.removeEventListener('mousedown', this.preventClick, true);
            element.removeEventListener('mouseup', this.preventClick, true);
            element.removeEventListener('dblclick', this.preventClick, true);
            element.removeEventListener('click', this.showDetailsOnClickWithClass, true);
            element.classList.remove('ui-br-ext-outlined-element', 'ui-br-ext-selected-element-outline-red', 'ui-br-ext-outlined-element-childs-no-events', 'ui-br-ext-selected-element-outline-green');
            //removing unique dynamic class
            element.classList.forEach((className: any) => {
                if(className.includes('ui-br-ext-searched-element-id-')) {
                    element.classList.remove(className)
                }
            });
        })
        this.activeBugElement = null;
    }

    showDetailsOnClickWithClass = (event: any) => {
        event.preventDefault();
        event.stopImmediatePropagation();
        event.stopPropagation();
        let bugId = "";
        const prevEl: any = this.activeBugElement;
        const element = event.target;
        
        element.classList.forEach((className: any) => {
            if(className.includes('ui-br-ext-searched-element-id-')) {
                bugId = className.replace('ui-br-ext-searched-element-id-', '');
                element.classList.add('ui-br-ext-selected-element-outline-green');
                element.classList.remove('ui-br-ext-selected-element-outline-red');
            } 
        });

        if(prevEl){
            prevEl.classList.add('ui-br-ext-selected-element-outline-red');
            prevEl.classList.remove('ui-br-ext-selected-element-outline-green');                  
        }
        
        //eventBus.$emit('show-details', bugId); display details
        this.activeBugElement = element;
    }

    preventClick = (event: any) => this.preventClickHandler(event);

    preventClickHandler = (event: any) => {
        event.preventDefault();
        event.stopImmediatePropagation();
        event.stopPropagation();
        return false;
    }
}