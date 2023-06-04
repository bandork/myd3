import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Myd3Component } from './myd3.component';

describe('Myd3Component', () => {
  let component: Myd3Component;
  let fixture: ComponentFixture<Myd3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Myd3Component]
    });
    fixture = TestBed.createComponent(Myd3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
