import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMainTestimonialsComponent } from './home-main-testimonials.component';

describe('HomeMainTestimonialsComponent', () => {
  let component: HomeMainTestimonialsComponent;
  let fixture: ComponentFixture<HomeMainTestimonialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeMainTestimonialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMainTestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
