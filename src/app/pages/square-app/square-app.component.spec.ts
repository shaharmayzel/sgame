import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareAppComponent } from './square-app.component';

describe('SquareAppComponent', () => {
  let component: SquareAppComponent;
  let fixture: ComponentFixture<SquareAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SquareAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SquareAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
