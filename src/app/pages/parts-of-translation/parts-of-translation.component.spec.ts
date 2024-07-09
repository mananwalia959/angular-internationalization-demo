import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartsOfTranslationComponent } from './parts-of-translation.component';

describe('PartsOfTranslationComponent', () => {
  let component: PartsOfTranslationComponent;
  let fixture: ComponentFixture<PartsOfTranslationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartsOfTranslationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PartsOfTranslationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
