import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormExemple2Component } from './form-exemple2.component';

describe('FormExemple2Component', () => {
  let component: FormExemple2Component;
  let fixture: ComponentFixture<FormExemple2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormExemple2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormExemple2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
