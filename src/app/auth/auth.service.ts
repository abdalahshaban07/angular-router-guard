import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  isLoggedIn() {
    return of(true).pipe(delay(500));
  }

  hasPermission() {
    return of(true);
  }
}
