import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMainGalleryComponent } from './home-main-gallery.component';

describe('HomeMainGalleryComponent', () => {
  let component: HomeMainGalleryComponent;
  let fixture: ComponentFixture<HomeMainGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeMainGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMainGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
