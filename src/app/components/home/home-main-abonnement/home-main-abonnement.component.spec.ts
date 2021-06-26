import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMainAbonnementComponent } from './home-main-abonnement.component';

describe('HomeMainAbonnementComponent', () => {
  let component: HomeMainAbonnementComponent;
  let fixture: ComponentFixture<HomeMainAbonnementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeMainAbonnementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMainAbonnementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
