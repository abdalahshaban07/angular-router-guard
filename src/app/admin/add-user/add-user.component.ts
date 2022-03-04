import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SaveData } from 'src/app/auth/save-data';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddUserComponent implements OnInit, SaveData {
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: new FormControl(''),
      email: new FormControl(''),
    });
  }

  isDataSaved(): boolean {
    return !this.form.dirty;
  }

  ngOnInit(): void {}
}
