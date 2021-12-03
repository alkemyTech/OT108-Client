import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackofficeSlidesComponent } from './backoffice-slides.component';

describe('BackofficeSlidesComponent', () => {
  let component: BackofficeSlidesComponent;
  let fixture: ComponentFixture<BackofficeSlidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackofficeSlidesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackofficeSlidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
