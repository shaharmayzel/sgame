import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquarePreviewComponent } from './square-preview.component';

describe('SquarePreviewComponent', () => {
  let component: SquarePreviewComponent;
  let fixture: ComponentFixture<SquarePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SquarePreviewComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SquarePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
