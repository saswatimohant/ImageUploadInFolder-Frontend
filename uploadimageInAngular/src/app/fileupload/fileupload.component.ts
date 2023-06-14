import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UploadimageService } from '../uploadimage.service';
import { Uploadimage } from '../uploadimage';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {

  fileuploadurl="http://localhost:8080/image/filesystem"
  getimagebyid="http://localhost:8080/image/filesystemByid"
  imageUrl: string | undefined;

  _uploadimage: Uploadimage[] = [];
  uploadimage=new Uploadimage();

  constructor(private _http:HttpClient,private _service:UploadimageService,private _router:Router)
  {}
  ngOnInit(): void {

    
    this._service.fetchAllFileUploaList().subscribe(
  
      data=>{console.log("Response recieved "+ data);
      this._uploadimage=data;
    },
    error=>console.log("Exception Occured")
    )
   
  }

  file:any;
 flag = true;
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

  getimageById(id:number){
    console.log("vendor list fetch by "+id);

    this._service.getImagedById(id).subscribe(
      data=>{
        // console.log("data comes");
        console.log("image dispaly of"+id);
        //  this._router.navigate(['/employeeList']);
        //this._employeelist;
      },
      error=>console.log("Exception Occured")
    )

  }

  // getimage(id:number){

  //   this._http.get(this.getimagebyid).subscribe(
  //     (data:any)=>{
  //        //success 
  //      console.log(data);
  //       this.flag = true;
  //     // alert(data.success)
  //       },
  //     (error:any)=>{
  // //error
  //  this.flag = true;
  //  console.log(error);
  // //  alert("file not upload" )
  //     }
      
  //   );

  // }

  navigatetoimage(id:any){

    this._router.navigate(['/image/uploadimage.id'])

  }

  fetchImage(imageId: number) {
    this._http.get('http://localhost:8080/image/filesystemByid/' + imageId, { responseType: 'blob' })
      .subscribe(response => {
        const reader = new FileReader();
        reader.onloadend = () => {
          this.imageUrl = reader.result as string;
        };
        reader.readAsDataURL(response);
      });
  }



}
