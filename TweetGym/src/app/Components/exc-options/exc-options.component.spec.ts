import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {displayArr} from './exc-options-component';

import { ExcOptionsComponent } from './exc-options.component';

describe('ExcOptionsComponent', () => {
  let component: ExcOptionsComponent;
  let fixture: ComponentFixture<ExcOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

displayArr();