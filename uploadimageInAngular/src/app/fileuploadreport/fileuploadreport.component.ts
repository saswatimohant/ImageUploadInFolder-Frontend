import { Component, OnInit } from '@angular/core';
import { Uploadimage } from '../uploadimage';
import { UploadimageService } from '../uploadimage.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponentComponent } from '../popup-component/popup-component.component';
import { TransService } from '../trans.service';
import { PopupService } from '../popup.service';

@Component({
  selector: 'app-fileuploadreport',
  templateUrl: './fileuploadreport.component.html',
  styleUrls: ['./fileuploadreport.component.css']
})
export class FileuploadreportComponent implements OnInit {

  fileuploadurl="http://localhost:8080/image/filesystem"

  file:any;
 flag = true;
 _uploadimage: Uploadimage[] = [];
 uploadimage=new Uploadimage();
  
  constructor(private trans:TransService,public popup:PopupService,private _http:HttpClient,private _service:UploadimageService){}

  ngOnInit(): void {

    
    this._service.fetchAllFileUploaList().subscribe(
  
      data=>{console.log("Response recieved "+ data);
      this._uploadimage=data;
    },
    error=>console.log("Exception Occured")
    )
   
  }

  onChange(event:any){
    this.file = event.target.files[0];
    console.log(this.file);
   }

   uplopadFileONSubmit(){
    let formData = new FormData()
    formData.append("image",this.file);
    this._http.post(this.fileuploadurl,formData).subscribe(
      (data:any)=>{
         //success 
       console.log(data);
        this.flag = true;
      // alert(data.success)
        },
      (error:any)=>{
  //error
   this.flag = true;
   console.log(error);
  //  alert("file not upload" )
      }
      
    );
   
  }
  showPopup(popId: string, postObj: any) {
    this.uploadimage = postObj;
    console.log("Opening popup " + popId + "with post " + this.uploadimage.id);
    this.popup.open(popId);
  }

   
  

}

