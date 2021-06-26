import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMainServiceComponent } from './home-main-service.component';

describe('HomeMainServiceComponent', () => {
  let component: HomeMainServiceComponent;
  let fixture: ComponentFixture<HomeMainServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeMainServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMainServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
