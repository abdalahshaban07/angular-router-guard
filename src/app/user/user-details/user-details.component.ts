import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  HostBinding,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable, pluck, switchMap } from 'rxjs';
import { UsersService } from '../users.service';
interface UserDetails {
  id: number;
  email: string;
  name: string;
}
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDetailsComponent implements OnInit {
  // @HostBinding('class.mat-elevation-z2') hostCls = true;
  user$!: Observable<UserDetails>;
  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UsersService
  ) {}

  ngOnInit(): void {
    this.user$ = this.activatedRoute.params.pipe(
      pluck('id'),
      switchMap((id) => this.userService.getUser(id))
    );
  }
}
