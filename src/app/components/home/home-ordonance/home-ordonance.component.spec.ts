import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeOrdonanceComponent } from './home-ordonance.component';

describe('HomeOrdonanceComponent', () => {
  let component: HomeOrdonanceComponent;
  let fixture: ComponentFixture<HomeOrdonanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeOrdonanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeOrdonanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
