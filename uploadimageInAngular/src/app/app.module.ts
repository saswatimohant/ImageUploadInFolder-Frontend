import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { FileuploadreportComponent } from './fileuploadreport/fileuploadreport.component';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { PopupComponentComponent } from './popup-component/popup-component.component';
import { MatDialog } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { DualPanelComponent } from './dual-panel/dual-panel.component';
import { ImageComponentComponent } from './image-component/image-component.component';
import { DualViewComponent } from './dual-view/dual-view.component';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    FileuploadreportComponent,
    FileuploadComponent,
    PopupComponentComponent,
    DualPanelComponent,
    ImageComponentComponent,
    DualViewComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,HttpClientModule,MatFormFieldModule,MatInputModule,NoopAnimationsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
