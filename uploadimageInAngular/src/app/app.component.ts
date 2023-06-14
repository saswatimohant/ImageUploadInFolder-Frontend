import { Component, OnInit } from '@angular/core';
import { Uploadimage } from './uploadimage';
import { UploadimageService } from './uploadimage.service';
import { HttpClient } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

 fileuploadurl="http://localhost:8080/image/filesystem"

  constructor(private _http:HttpClient,private _router:Router)
  {}
  ngOnInit(): void {
   
  }

  file:any;
 flag = true;
 title:any;
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
  
  showRecords(){
    this._router.navigate(['/fileupload/'])
  }

}
