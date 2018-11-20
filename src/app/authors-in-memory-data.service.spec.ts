import { TestBed, inject } from '@angular/core/testing';

import { AuthorsInMemoryDataService } from './authors-in-memory-data.service';

describe('AuthorsInMemoryDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthorsInMemoryDataService]
    });
  });

  it('should be created', inject([AuthorsInMemoryDataService], (service: AuthorsInMemoryDataService) => {
    expect(service).toBeTruthy();
  }));
});
