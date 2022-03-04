import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { catchError, delay, EMPTY, Observable } from 'rxjs';
import { User } from './user';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root',
})
export class UserResolver implements Resolve<User> {
  constructor(private router: Router, private users: UsersService) {}
  resolve(route: ActivatedRouteSnapshot): Observable<User> {
    return this.users.getUser(route.params?.['id']).pipe(
      delay(400),
      catchError((err) => {
        this.router.navigate(['user', 'list']);
        return EMPTY;
      })
    );
  }
}
