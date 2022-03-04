import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotosRoutingModule } from './photos-routing.module';
import { PhotosListComponent } from './photos-list/photos-list.component';
import { PhotoDetailsComponent } from './photo-details/photo-details.component';


@NgModule({
  declarations: [
    PhotosListComponent,
    PhotoDetailsComponent
  ],
  imports: [
    CommonModule,
    PhotosRoutingModule
  ]
})
export class PhotosModule { }
