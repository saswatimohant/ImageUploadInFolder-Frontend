import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


//const apiUrl="http://localhost:8080/image/filesystemByid"
@Injectable({
  providedIn: 'root'
})
export class TransService {
  private apiUrl="http://localhost:8080/image/filesystemByid"

  constructor(private http:HttpClient) { }

  getAllPosts(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }

}
