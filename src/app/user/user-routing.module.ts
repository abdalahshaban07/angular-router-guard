import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserResolver } from './user.resolver';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list',
        component: UserListComponent,
      },
      {
        path: 'details/:id',
        resolve: {
          user: UserResolver,
        },
        component: UserDetailsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
