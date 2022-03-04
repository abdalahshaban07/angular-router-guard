import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDIalogComponent } from './confirm-dialog.component';

describe('ConfirmDIalogComponent', () => {
  let component: ConfirmDIalogComponent;
  let fixture: ComponentFixture<ConfirmDIalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmDIalogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmDIalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
