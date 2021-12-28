import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToycampaignComponent } from './toycampaign.component';

describe('ToycampaignComponent', () => {
  let component: ToycampaignComponent;
  let fixture: ComponentFixture<ToycampaignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToycampaignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToycampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
