import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidesDetailComponent } from './slides-detail.component';

describe('SlidesDetailComponent', () => {
  let component: SlidesDetailComponent;
  let fixture: ComponentFixture<SlidesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlidesDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
