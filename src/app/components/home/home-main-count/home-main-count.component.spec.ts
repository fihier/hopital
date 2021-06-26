import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMainCountComponent } from './home-main-count.component';

describe('HomeMainCountComponent', () => {
  let component: HomeMainCountComponent;
  let fixture: ComponentFixture<HomeMainCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeMainCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMainCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
