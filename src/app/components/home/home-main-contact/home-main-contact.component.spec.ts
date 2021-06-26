import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMainContactComponent } from './home-main-contact.component';

describe('HomeMainContactComponent', () => {
  let component: HomeMainContactComponent;
  let fixture: ComponentFixture<HomeMainContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeMainContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMainContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
