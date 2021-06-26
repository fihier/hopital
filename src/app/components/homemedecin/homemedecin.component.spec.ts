import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomemedecinComponent } from './homemedecin.component';

describe('HomemedecinComponent', () => {
  let component: HomemedecinComponent;
  let fixture: ComponentFixture<HomemedecinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomemedecinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomemedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
