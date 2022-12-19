import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgISwitchComponent } from './ng-iswitch.component';

describe('NgISwitchComponent', () => {
  let component: NgISwitchComponent;
  let fixture: ComponentFixture<NgISwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgISwitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgISwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
