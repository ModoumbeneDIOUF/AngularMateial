import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstTpComponent } from './first-tp.component';

describe('FirstTpComponent', () => {
  let component: FirstTpComponent;
  let fixture: ComponentFixture<FirstTpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstTpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstTpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
