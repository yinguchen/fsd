import { TestBed } from '@angular/core/testing';

import { MutipleuploadService } from './mutipleupload.service';

describe('MutipleuploadService', () => {
  let service: MutipleuploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MutipleuploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
