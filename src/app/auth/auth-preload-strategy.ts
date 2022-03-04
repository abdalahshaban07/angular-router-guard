import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthPreloadStrategy implements PreloadingStrategy {
  constructor(private auth: AuthService) {}
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    console.log(this.auth.isLoggedIn().subscribe(console.log));

    return this.auth
      .isLoggedIn()
      .pipe(switchMap((isUserLoggedIn) => (isUserLoggedIn ? fn() : of(null))));
  }
}
