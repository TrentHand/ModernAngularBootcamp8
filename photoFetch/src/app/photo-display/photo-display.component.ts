import { Component, OnInit } from '@angular/core';
import { PhotosService } from './../photos.service';

@Component({
  selector: 'app-photo-display',
  templateUrl: './photo-display.component.html',
  styleUrls: ['./photo-display.component.css'],
})
export class PhotoDisplayComponent implements OnInit {
  displayPhotos = [];

  constructor(private photos: PhotosService) {
    this.getNewPhoto();
  }

  getNewPhoto() {
    this.photos.getPhoto().subscribe((result) => {
      const image = result.urls.regular;
      this.displayPhotos.push(image);
    });
  }

  ngOnInit(): void {}
}
