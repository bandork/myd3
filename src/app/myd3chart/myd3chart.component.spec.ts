import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Myd3chartComponent } from './myd3chart.component';

describe('Myd3chartComponent', () => {
  let component: Myd3chartComponent;
  let fixture: ComponentFixture<Myd3chartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Myd3chartComponent]
    });
    fixture = TestBed.createComponent(Myd3chartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
