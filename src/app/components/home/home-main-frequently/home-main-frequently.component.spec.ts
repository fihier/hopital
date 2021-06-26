import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMainFrequentlyComponent } from './home-main-frequently.component';

describe('HomeMainFrequentlyComponent', () => {
  let component: HomeMainFrequentlyComponent;
  let fixture: ComponentFixture<HomeMainFrequentlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeMainFrequentlyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMainFrequentlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
