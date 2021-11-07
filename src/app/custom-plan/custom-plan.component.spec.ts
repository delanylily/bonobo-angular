/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CustomPlanComponent } from './custom-plan.component';

describe('CustomPlanComponent', () => {
  let component: CustomPlanComponent;
  let fixture: ComponentFixture<CustomPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
