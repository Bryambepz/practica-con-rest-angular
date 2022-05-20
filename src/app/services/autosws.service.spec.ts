import { TestBed } from '@angular/core/testing';

import { AutoswsService } from './autosws.service';

describe('AutoswsService', () => {
  let service: AutoswsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutoswsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
