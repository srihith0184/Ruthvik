import { TestBed } from '@angular/core/testing';

import { CreaterouteService } from './createroute.service';

describe('CreaterouteService', () => {
  let service: CreaterouteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreaterouteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
