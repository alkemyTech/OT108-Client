import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolcampaignComponent } from './schoolcampaign.component';

describe('SchoolcampaignComponent', () => {
  let component: SchoolcampaignComponent;
  let fixture: ComponentFixture<SchoolcampaignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolcampaignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolcampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
