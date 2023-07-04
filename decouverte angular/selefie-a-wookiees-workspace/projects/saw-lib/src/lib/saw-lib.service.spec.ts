import { TestBed } from '@angular/core/testing';

import { SawLibService } from './saw-lib.service';

describe('SawLibService', () => {
  let service: SawLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SawLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
