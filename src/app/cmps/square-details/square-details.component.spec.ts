import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareDetailsComponent } from './square-details.component';

describe('SquareDetailsComponent', () => {
  let component: SquareDetailsComponent;
  let fixture: ComponentFixture<SquareDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SquareDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SquareDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
