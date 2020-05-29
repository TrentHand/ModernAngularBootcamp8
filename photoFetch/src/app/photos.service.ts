import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Globals } from './accesscodes';

interface IUnsplashResponse {
  urls: {
    regular: string;
  };
}
@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  constructor(private http: HttpClient, private globals: Globals) {}

  key = this.globals.unsplashAK;

  getPhoto() {
    return this.http.get<IUnsplashResponse>(
      'https:/api.unsplash.com/photos/random ',
      {
        headers: {
          Authorization: 'Client-ID ' + this.key,
        },
      }
    );
  }
}
