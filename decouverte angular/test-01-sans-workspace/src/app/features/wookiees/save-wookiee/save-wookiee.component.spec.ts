import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveWookieeComponent } from './save-wookiee.component';

describe('SaveWookieeComponent', () => {
  let component: SaveWookieeComponent;
  let fixture: ComponentFixture<SaveWookieeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SaveWookieeComponent]
    });
    fixture = TestBed.createComponent(SaveWookieeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
