import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseslistComponent } from './exerciseslist.component';

describe('ExerciseslistComponent', () => {
  let component: ExerciseslistComponent;
  let fixture: ComponentFixture<ExerciseslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciseslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
