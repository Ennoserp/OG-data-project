import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparedSecondComponent } from './compared-second.component';

describe('ComparedSecondComponent', () => {
  let component: ComparedSecondComponent;
  let fixture: ComponentFixture<ComparedSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComparedSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparedSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
