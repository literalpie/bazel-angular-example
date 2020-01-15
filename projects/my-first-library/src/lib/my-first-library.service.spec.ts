import { TestBed } from '@angular/core/testing';

import { MyFirstLibraryService } from './my-first-library.service';

describe('MyFirstLibraryService', () => {
  let service: MyFirstLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyFirstLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
