import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SaveData } from 'src/app/auth/save-data';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit, SaveData {
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: new FormControl(''),
      quantity: new FormControl(0),
    });
  }

  isDataSaved(): boolean {
    return !this.form.dirty;
  }

  ngOnInit(): void {}
}
