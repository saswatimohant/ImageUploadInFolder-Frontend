import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dual-panel',
  templateUrl: './dual-panel.component.html',
  styleUrls: ['./dual-panel.component.css']
})
export class DualPanelComponent implements OnInit{
  imageUrl: string | undefined;
  constructor(private http: HttpClient, private route: ActivatedRoute) { }
  ngOnInit() {

    //const imageId = 35; // Replace with the desired image ID
    let imageId :any=this.route.snapshot.paramMap.get('id');
    this.fetchImage(imageId);
   
  }

  fetchImage(imageId: number) {
    this.http.get('http://localhost:8080/image/filesystemByid/' + imageId, { responseType: 'blob' })
      .subscribe(response => {
        const reader = new FileReader();
        reader.onloadend = () => {
          this.imageUrl = reader.result as string;
        };
        reader.readAsDataURL(response);
      });
  }

}
