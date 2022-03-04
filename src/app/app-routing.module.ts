import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthPreloadStrategy } from './auth/auth-preload-strategy';
import { AuthenticationGuard } from './auth/authentication.guard';
import { LoadGuardGuard } from './auth/load-guard.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
    canLoad: [LoadGuardGuard],
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
  {
    path: '',
    // component: HomeComponent,
    redirectTo: 'user/list',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: AuthPreloadStrategy }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
