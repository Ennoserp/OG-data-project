import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparedOneComponent } from './compared-one.component';

describe('ComparedOneComponent', () => {
  let component: ComparedOneComponent;
  let fixture: ComponentFixture<ComparedOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComparedOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparedOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
