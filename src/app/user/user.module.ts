import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { MatButtonModule } from '@angular/material/button';
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
  declarations: [UserListComponent, UserDetailsComponent],
  imports: [CommonModule, UserRoutingModule, MatButtonModule],
})
export class UserModule {}
