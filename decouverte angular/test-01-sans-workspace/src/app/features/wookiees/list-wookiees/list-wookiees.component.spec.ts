import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWookieesComponent } from './list-wookiees.component';

describe('ListWookieesComponent', () => {
  let component: ListWookieesComponent;
  let fixture: ComponentFixture<ListWookieesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListWookieesComponent]
    });
    fixture = TestBed.createComponent(ListWookieesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
