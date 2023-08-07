import { TestBed } from '@angular/core/testing';

import { MyUrlService } from './my-url.service';

describe('MyUrlService', () => {
  let service: MyUrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyUrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
