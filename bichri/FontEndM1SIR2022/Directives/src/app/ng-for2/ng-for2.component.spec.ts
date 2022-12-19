import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgFor2Component } from './ng-for2.component';

describe('NgFor2Component', () => {
  let component: NgFor2Component;
  let fixture: ComponentFixture<NgFor2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgFor2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgFor2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
