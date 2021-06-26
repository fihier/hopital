import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMainAppointmentComponent } from './home-main-appointment.component';

describe('HomeMainAppointmentComponent', () => {
  let component: HomeMainAppointmentComponent;
  let fixture: ComponentFixture<HomeMainAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeMainAppointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMainAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
