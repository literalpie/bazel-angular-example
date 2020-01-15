import { TestBed } from '@angular/core/testing';

import { SecondLibService } from './second-lib.service';

describe('SecondLibService', () => {
  let service: SecondLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecondLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
