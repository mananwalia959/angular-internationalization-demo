import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalizeFromJsComponent } from './localize-from-js.component';

describe('LocalizeFromJsComponent', () => {
  let component: LocalizeFromJsComponent;
  let fixture: ComponentFixture<LocalizeFromJsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocalizeFromJsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LocalizeFromJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
