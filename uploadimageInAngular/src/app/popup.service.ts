import { Injectable } from '@angular/core';
import { PopupComponentComponent } from './popup-component/popup-component.component';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  
  constructor() { }

  private modal:PopupComponentComponent[]=[]


  open(id: string) {
    // open modal specified by id
    const modal = this.modal.find(x => x.id === id);

    if (!modal) {
        throw new Error(`modal '${id}' not found`);
    }
    console.log("Popup opening with id: " + modal.id);
    modal.open();
}

close() {
    // close the modal that is currently open
    const modal = this.modal.find(x => x.isOpen);
    modal?.close;
}

}
