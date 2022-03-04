import { Component, OnInit } from '@angular/core';
import { ResolveEnd, ResolveStart, Router } from '@angular/router';
import { filter, mapTo, merge, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isLoading$!: Observable<boolean>;
  private _showLoadingEvents$!: Observable<boolean>;
  private _hideLoadingEvents$!: Observable<boolean>;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this._showLoadingEvents$ = this.router.events.pipe(
      filter((event) => event instanceof ResolveStart),
      mapTo(true)
    );

    this._hideLoadingEvents$ = this.router.events.pipe(
      filter((event) => event instanceof ResolveEnd),
      mapTo(false)
    );

    this.isLoading$ = merge(this._showLoadingEvents$, this._hideLoadingEvents$);
  }
}
