import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIForOneComponent } from './ng-ifor-one.component';

describe('NgIForOneComponent', () => {
  let component: NgIForOneComponent;
  let fixture: ComponentFixture<NgIForOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgIForOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgIForOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
