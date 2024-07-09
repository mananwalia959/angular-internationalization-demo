import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternationalizationInExpressionsComponent } from './internationalization-in-expressions.component';

describe('InternationalizationInExpressionsComponent', () => {
  let component: InternationalizationInExpressionsComponent;
  let fixture: ComponentFixture<InternationalizationInExpressionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InternationalizationInExpressionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InternationalizationInExpressionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
