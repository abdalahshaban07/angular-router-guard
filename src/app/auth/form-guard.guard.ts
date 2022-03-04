import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ConfirmDIalogComponent } from '../admin/confirm-dialog/confirm-dialog.component';
import { SaveData } from './save-data';

@Injectable({
  providedIn: 'root',
})
export class FormGuardGuard implements CanDeactivate<SaveData> {
  constructor(private dialog: MatDialog) {}
  canDeactivate(
    component: SaveData,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!component.isDataSaved()) {
      return this.dialog.open(ConfirmDIalogComponent).afterClosed();
    }

    return of(true);
  }
}
