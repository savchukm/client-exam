import { TestBed } from '@angular/core/testing';

import { TransportServiceService } from './api.service';

describe('TransportServiceService', () => {
  let service: TransportServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransportServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
