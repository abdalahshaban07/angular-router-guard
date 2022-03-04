import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { PhotosService } from '../photos.service';
import { Photo } from '../photo';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotosListComponent implements OnInit {
  photos$!: Observable<Photo[]>;
  constructor(private photoServ: PhotosService) {}

  ngOnInit(): void {
    this.photos$ = this.photoServ.getPhotos();
  }
}
