import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormExemple5Component } from './form-exemple5.component';

describe('FormExemple5Component', () => {
  let component: FormExemple5Component;
  let fixture: ComponentFixture<FormExemple5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormExemple5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormExemple5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
