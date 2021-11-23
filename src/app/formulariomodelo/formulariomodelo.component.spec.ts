import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FORMULARIOMODELOComponent } from './formulariomodelo.component';

describe('FORMULARIOMODELOComponent', () => {
  let component: FORMULARIOMODELOComponent;
  let fixture: ComponentFixture<FORMULARIOMODELOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FORMULARIOMODELOComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FORMULARIOMODELOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
