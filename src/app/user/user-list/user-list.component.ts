import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListComponent implements OnInit {
  users$!: Observable<User[]>;
  constructor(private users: UsersService, private router: Router) {}

  ngOnInit(): void {
    this.users$ = this.users.getUsers();
  }

  goToDetails(id: number) {
    this.router.navigate(['user', 'details', id]);
  }
}
