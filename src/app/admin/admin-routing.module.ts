import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AddUserComponent } from './add-user/add-user.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AddProductComponent } from './add-product/add-product.component';
import { PermissionsGuard } from '../auth/permissions.guard';
import { FormGuardGuard } from '../auth/form-guard.guard';
import { ListComponent } from './list/list.component';
import { AuthenticationGuard } from '../auth/authentication.guard';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
    children: [
      {
        path: '',
        canActivateChild: [PermissionsGuard],
        children: [
          {
            path: 'add-user',
            component: AddUserComponent,
          },
          {
            path: 'add-product',
            canDeactivate: [FormGuardGuard],
            component: AddProductComponent,
          },
        ],
      },
      {
        path: 'list',
        component: ListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
