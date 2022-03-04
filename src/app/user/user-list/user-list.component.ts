import { HttpClient } from '@angular/common/http';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  HostBinding,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, pluck, switchMap } from 'rxjs';
import { UsersService } from '../users.service';
interface User {
  id: number;
  name: string;
  email: string;
}
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListComponent implements OnInit {
  users$!: Observable<User[]>;

  constructor(private userServ: UsersService) {}

  ngOnInit(): void {
    this.users$ = this.userServ.getUsers();
    console.log({ users$: this.users$ });
  }
}
