import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders} from '@angular/common/http';
import { Uploadimage } from './uploadimage';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadimageService {

 // private apiUrl = "http://localhost:8080/image/filesystemByid";

  constructor(private _http:HttpClient) { }

  fetchAllFileUploaList():Observable<any>{
    return this._http.get<any>("http://localhost:8080/image/listallrecords");
  }

  getImagedById(id:number): Observable<any> {
    console.log("Inside fetch customer  "+id);
    return this._http.get<any>("http://localhost:8080/image/filesystemByid/"+id);
  }

  // public getImagedById(id:number): Observable<Blob> {
  //   return this._http.get<Blob>("http://localhost:8080/image/filesystemByid/"+id, {
  //     responseType: 'blob' as 'json',
  //     headers: new HttpHeaders({
  //       'Content-Type': 'image/png'
  //     })
  //   });
  // }



}
