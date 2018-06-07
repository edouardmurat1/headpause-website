import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NinjaSelectionComponent } from './ninja-selection.component';

describe('NinjaSelectionComponent', () => {
  let component: NinjaSelectionComponent;
  let fixture: ComponentFixture<NinjaSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NinjaSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NinjaSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
