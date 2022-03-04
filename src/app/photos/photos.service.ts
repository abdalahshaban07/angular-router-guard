import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo, PhotoDetails } from './photo';

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  constructor(private http: HttpClient) {}

  getPhotos() {
    return this.http.get<Photo[]>(
      `https://jsonplaceholder.typicode.com/photos?_limit=5`
    );
  }

  getPhoto(id: number) {
    return this.http.get<PhotoDetails>(
      `https://jsonplaceholder.typicode.com/photos/${id}`
    );
  }
}
