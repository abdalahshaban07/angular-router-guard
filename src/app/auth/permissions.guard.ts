import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class PermissionsGuard implements CanActivateChild {
  constructor(private auth: AuthService, private router: Router) {}
  canActivateChild():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.auth
      .hasPermission()
      .pipe(
        map(
          (hasPermission) =>
            hasPermission || this.router.createUrlTree(['/admin'])
        )
      );
  }
}
