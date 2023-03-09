import { ComponentRef, Injectable } from '@angular/core';
import { EditorService } from 'src/app/services/editor.service';
import { v4 as uuidv4 } from 'uuid';
import { HighlightComponent } from './highlight.component';

@Injectable({
  providedIn: 'root'
})
export class HighlightService {
  constructor(private editorService: EditorService) { }

  components: Array<ComponentRef<HighlightComponent>> = [];


  addComponent(componentRef: ComponentRef<HighlightComponent>) {
    let component = componentRef.instance;

    component.uuid = uuidv4();

    this.components.push(componentRef);
  }

  deleteComponent(uuid: string): void {

    let componentRef = this.components.find(
      component => component.instance.uuid == uuid
    );

    this.editorService.deleteComponentSubject.next(componentRef)

    // removing component from the list
    this.components = this.components.filter(
      component => component.instance.uuid !== uuid
    );
  }
}
