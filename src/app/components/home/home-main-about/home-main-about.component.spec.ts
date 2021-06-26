import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMainAboutComponent } from './home-main-about.component';

describe('HomeMainAboutComponent', () => {
  let component: HomeMainAboutComponent;
  let fixture: ComponentFixture<HomeMainAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeMainAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMainAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
