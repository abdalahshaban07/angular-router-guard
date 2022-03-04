import { HttpClient } from '@angular/common/http';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  HostBinding,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, pluck, switchMap } from 'rxjs';
import { PhotoDetails } from '../photo';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotoDetailsComponent implements OnInit {
  @HostBinding('class.mat-elevation-z2') hostCls = true;
  photo$!: Observable<PhotoDetails>;
  constructor(
    private activatedRoute: ActivatedRoute,
    private photoSev: PhotosService
  ) {}

  ngOnInit(): void {
    this.photo$ = this.activatedRoute.params.pipe(
      pluck('id'),
      switchMap((id) => this.photoSev.getPhoto(id))
    );
  }
}
