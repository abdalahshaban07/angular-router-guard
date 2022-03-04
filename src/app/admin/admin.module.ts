import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { WelcomeComponent } from './welcome/welcome.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ListComponent } from './list/list.component';
import { ConfirmDIalogComponent } from './confirm-dialog/confirm-dialog.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    WelcomeComponent,
    AddUserComponent,
    AddProductComponent,
    ListComponent,
    ConfirmDIalogComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    RouterModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    AdminRoutingModule,
  ],
})
export class AdminModule {}
