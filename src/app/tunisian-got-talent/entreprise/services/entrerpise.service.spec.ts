import { TestBed } from '@angular/core/testing';

import { EntrerpiseService } from './entrerpise.service';

describe('EntrerpiseService', () => {
  let service: EntrerpiseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntrerpiseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
