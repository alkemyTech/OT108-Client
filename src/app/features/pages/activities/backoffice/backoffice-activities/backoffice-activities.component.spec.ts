import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackofficeActivitiesComponent } from './backoffice-activities.component';

describe('BackofficeActivitiesComponent', () => {
  let component: BackofficeActivitiesComponent;
  let fixture: ComponentFixture<BackofficeActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackofficeActivitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackofficeActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
