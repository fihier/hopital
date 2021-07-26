import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDocteurComponent } from './list-docteur.component';

describe('ListDocteurComponent', () => {
  let component: ListDocteurComponent;
  let fixture: ComponentFixture<ListDocteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDocteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDocteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
