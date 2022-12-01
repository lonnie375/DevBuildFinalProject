import { TestBed } from '@angular/core/testing';

import { TrackingresultService } from './trackingresult.service';

describe('TrackingresultService', () => {
  let service: TrackingresultService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrackingresultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
