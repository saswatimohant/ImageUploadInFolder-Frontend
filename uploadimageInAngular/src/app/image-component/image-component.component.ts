import { Component, OnInit } from '@angular/core';
import { Uploadimage } from '../uploadimage';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-image-component',
  templateUrl: './image-component.component.html',
  styleUrls: ['./image-component.component.css']
})
export class ImageComponentComponent implements OnInit{

  constructor(private http: HttpClient, private route: ActivatedRoute) { }
  imageUrl: string | undefined;
  ngOnInit() {
    const imageId = this.route.snapshot.paramMap.get('5');
    this.fetchImage(imageId);
  }
  
  fetchImage(imageId: any) {
    this.http.get<any>('http://localhost:8080/image/filesystemByid/' + imageId).subscribe(
      response => {
        this.imageUrl = response.imageUrl; // Update the image data variable with the received image data
      },
      error => {
        console.error('Failed to fetch the image.', error);
      }
    );
  }

}
