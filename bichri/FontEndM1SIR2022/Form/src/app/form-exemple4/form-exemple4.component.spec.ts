import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormExemple4Component } from './form-exemple4.component';

describe('FormExemple4Component', () => {
  let component: FormExemple4Component;
  let fixture: ComponentFixture<FormExemple4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormExemple4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormExemple4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
