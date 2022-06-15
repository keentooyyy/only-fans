import { TestBed } from '@angular/core/testing';

import { RouterMethodsService } from './router-methods.service';

describe('RouterMethodsService', () => {
  let service: RouterMethodsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouterMethodsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
