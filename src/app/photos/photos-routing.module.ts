import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoDetailsComponent } from './photo-details/photo-details.component';
import { PhotosListComponent } from './photos-list/photos-list.component';

const routes: Routes = [
  {
    path: '',
    component: PhotosListComponent,
  },
  { path: 'photo/:id', component: PhotoDetailsComponent, outlet: 'details' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhotosRoutingModule {}
