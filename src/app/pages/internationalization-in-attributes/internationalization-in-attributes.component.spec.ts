import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternationalizationInAttributesComponent } from './internationalization-in-attributes.component';

describe('InternationalizationInAttributesComponent', () => {
  let component: InternationalizationInAttributesComponent;
  let fixture: ComponentFixture<InternationalizationInAttributesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InternationalizationInAttributesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InternationalizationInAttributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
