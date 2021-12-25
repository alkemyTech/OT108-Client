import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogconfirmationComponent } from './dialogconfirmation.component';

describe('DialogconfirmationComponent', () => {
  let component: DialogconfirmationComponent;
  let fixture: ComponentFixture<DialogconfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogconfirmationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogconfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
