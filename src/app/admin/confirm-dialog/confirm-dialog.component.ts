import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss'],
  providers: [MatDialog],
})
export class ConfirmDIalogComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
