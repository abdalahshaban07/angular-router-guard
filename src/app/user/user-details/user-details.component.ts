import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { User } from '../user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDetailsComponent implements OnInit {
  user$!: Observable<User>;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.user$ = this.activatedRoute.data.pipe(map((data) => data?.['user']));
  }
}
