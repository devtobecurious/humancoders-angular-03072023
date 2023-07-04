import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SawLibComponent } from './saw-lib.component';

describe('SawLibComponent', () => {
  let component: SawLibComponent;
  let fixture: ComponentFixture<SawLibComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SawLibComponent]
    });
    fixture = TestBed.createComponent(SawLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
