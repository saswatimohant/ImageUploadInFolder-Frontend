import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileuploadreportComponent } from './fileuploadreport/fileuploadreport.component';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { DualPanelComponent } from './dual-panel/dual-panel.component';
import { DualViewComponent } from './dual-view/dual-view.component';
import { ImageComponentComponent } from './image-component/image-component.component';

const routes: Routes = [
  {path:'',component:FileuploadComponent},
  {path:'fileupload',component:FileuploadreportComponent},
  {path:'dualview',component:DualPanelComponent},
  {path:'dual',component:DualViewComponent},
  { path: 'image/:id', component:DualPanelComponent },
  { path: 'images/:id', component:DualViewComponent }


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
