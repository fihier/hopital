import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMainDoctorsComponent } from './home-main-doctors.component';

describe('HomeMainDoctorsComponent', () => {
  let component: HomeMainDoctorsComponent;
  let fixture: ComponentFixture<HomeMainDoctorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeMainDoctorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMainDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
