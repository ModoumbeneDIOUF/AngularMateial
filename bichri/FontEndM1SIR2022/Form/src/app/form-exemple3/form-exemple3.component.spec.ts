import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormExemple3Component } from './form-exemple3.component';

describe('FormExemple3Component', () => {
  let component: FormExemple3Component;
  let fixture: ComponentFixture<FormExemple3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormExemple3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormExemple3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
