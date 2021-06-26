import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMainDepartmentsComponent } from './home-main-departments.component';

describe('HomeMainDepartmentsComponent', () => {
  let component: HomeMainDepartmentsComponent;
  let fixture: ComponentFixture<HomeMainDepartmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeMainDepartmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMainDepartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
