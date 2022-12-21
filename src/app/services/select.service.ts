import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ClickOnBugService } from './click-on-bug.service';
import { ElementService } from './element.service';
import { HoverAndClickService } from './hover-and-click.service';
import { SelectedElementsService } from './selected-elements.service';


@Injectable({
  providedIn: 'root'
})
export class SelectService {

    constructor(private elementService: ElementService, private hoverClickService: HoverAndClickService, private selectedElementService: SelectedElementsService, private clickOnBugService: ClickOnBugService) { }

    isElementSelected = new Subject<boolean>();

    ui_br_ext_previousElement: any = {
        element : null,
        parentCount : 0
    }

    ui_br_ext_parentLimit = 5;

    currentElementInlineStyle = '';

    onSelect () {
        const allPointerEvent = '';
        const noHighlight = `*{
            -webkit-tap-highlight-color: transparent;
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }`;

        const head = document.head || document.getElementsByTagName('head')[0];

        const style: any = document.createElement('style');

        style.setAttribute('id','ui-br-ext-extension-style');    

        head.appendChild(style);

        style.type = 'text/css';
        if (style.styleSheet){
            style.styleSheet.cssText = allPointerEvent+noHighlight;
        } else {
            style.appendChild(document.createTextNode(allPointerEvent+noHighlight));
        }
        this.addClickToHtml(this.getMouseCoordinates);
    }

    onDeselect (removeSelectedOutline: boolean) {

        document.getElementById('ui-br-ext-extension-style')?.remove();

        this.removeClickFromBody(this.getMouseCoordinates);
        
        // Remove outline from any previously selected elements.
        document.querySelectorAll('.ui-br-ext-outlined-element').forEach(element => {
            element.classList.remove('ui-br-ext-outlined-element');
            element.classList.remove('ui-br-ext-selected-element-outline-red');
            element.classList.remove('ui-br-ext-selected-element-outline-green');
            element.classList.remove('ui-br-ext-outlined-element-childs-no-events');
            element.classList.remove('ui-br-ext-outlined-element-selected');
            element.removeAttribute('data-ext-index');
            element.classList.forEach((className) => {
                if(className.includes('ui-br-ext-searched-element-id-')) {
                    element.classList.remove(className);
                    this.clickOnBugService.unblockBugElements([element]);
                }
            });
        });


        // Reset the global variable that holds the previously selected element properties.
        // Used to calculte element's parent.
        if(this.ui_br_ext_previousElement){
            this.ui_br_ext_previousElement.element = null,
            this.ui_br_ext_previousElement.parentCount = 0
        }

        this.removeBugCoverEls();

    }

    removeBugCoverEls (){
        const els = document.querySelectorAll('.ui-br-ext-bug-cover')
            
        els.forEach(el => {
            el.remove()
        });
    }

    addClickToHtml (eventFunction: any){

        const html = document.getElementsByTagName('html')[0];

        html.addEventListener('mousedown', eventFunction, true);
        this.hoverClickService.addClickBlocker();

        this.hoverClickService.addHover();

    }

    removeClickFromBody (eventFunction: any){

        const html = document.getElementsByTagName('html')[0];

        html.removeEventListener('mousedown', eventFunction, true);

        this.hoverClickService.removeClickBlocker();

        this.hoverClickService.removeHover();

    }

    /* Used arrow function to use this. */
    getMouseCoordinates = (event: any) => {

        if(event){
            
            const pageX = event.clientX;

            const pageY = event.clientY;
    
            this.findElementFromPoint(pageX, pageY);

        } 
        
    }

    findElementFromPoint (pageX: number, pageY: number): boolean | void {

        let element = document.elementFromPoint(pageX, pageY);

        const retainSelectedElement = document.elementFromPoint(pageX, pageY);

        if( element?.tagName.toLocaleLowerCase() != 'body'
            && element?.tagName.toLocaleLowerCase() != 'html'
            && element?.closest('#ui-br-ext-extension') !== null
        ){
            return false   
        }

        this.outlineSelectedElement(element, retainSelectedElement)
    }

    /**
     * It styles the selected element by outlining it.
     * @param {selected element} element 
     */
    outlineSelectedElement (element: any, retainSelectedElement: any) {

        if(element.classList.contains('ui-br-ext-selected-element-outline-red') && element?.closest('#ui-br-ext-extension') === null){
            //If element has outline
            if(element.classList.contains('ui-br-ext-outline-offset-plus')) {
                element.classList.remove('ui-br-ext-outline-offset-plus')
                element.classList.add('ui-br-ext-outline-offset-minus')
            } else if(element.classList.contains('ui-br-ext-outline-offset-minus')) {
                element.classList.remove('ui-br-ext-outline-offset-minus')
            } else {
                element.classList.add('ui-br-ext-outline-offset-plus')
            }
    
        } else {
            //if element does have outline, then remove outline from previous and add element to recent clicked one
            if(this.ui_br_ext_previousElement.element) {
                this.ui_br_ext_previousElement.element.classList.remove('ui-br-ext-selected-element-outline-red', 'ui-br-ext-outline-offset-plus', 'ui-br-ext-outline-offset-minus')
            }
    
            element.classList.add('ui-br-ext-selected-element-outline-red')
            this.ui_br_ext_previousElement.element = retainSelectedElement;
            this.elementService.activeElement = element;
            
            if(!element.classList.contains('ez-bug-element-label')){
                element.classList.add('ui-br-ext-outlined-element');
                this.selectedElementService.lastSelectedElement = element;
                /* Needed to show/hide label input */
                this.isElementSelected.next(true)
            }
    
        }
    }
    
}
