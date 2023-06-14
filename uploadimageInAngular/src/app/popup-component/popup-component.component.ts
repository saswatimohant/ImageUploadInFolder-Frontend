import { Component, ElementRef, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { Uploadimage } from '../uploadimage';
import { MAT_DIALOG_DATA, MatDialogContainer, _MatDialogBase } from '@angular/material/dialog';
import { PopupService } from '../popup.service';

@Component({
  selector: 'app-popup-component',
  templateUrl: './popup-component.component.html',
  styleUrls: ['./popup-component.component.css']
})
export class PopupComponentComponent  implements OnInit, OnDestroy  {

  constructor(private popservice:PopupService,private el: ElementRef) {
    this.element = el.nativeElement;
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  open() {
    this.element.style.display = 'block';
    document.body.classList.add('jw-modal-open');
    this.isOpen = true;
  }
  close() {
    this.element.style.display = 'none';
        document.body.classList.remove('jw-modal-open');
        this.isOpen = false;
  }
  uploadimage= new Uploadimage;
  @Input() 
  id?: string;
  isOpen = false;
  private element: any;
 


}
