import { TestBed, inject } from '@angular/core/testing';

import { BerichtDataService } from './bericht-data.service';

describe('BerichtDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BerichtDataService]
    });
  });

  it('should be created', inject([BerichtDataService], (service: BerichtDataService) => {
    expect(service).toBeTruthy();
  }));
});
