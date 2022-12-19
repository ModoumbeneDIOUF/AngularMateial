import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormExemple1Component } from './form-exemple1.component';

describe('FormExemple1Component', () => {
  let component: FormExemple1Component;
  let fixture: ComponentFixture<FormExemple1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormExemple1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormExemple1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
