import { TestBed } from '@angular/core/testing';

import { FilmeAPIService } from './filme-api.service';

describe('FilmeAPIService', () => {
  let service: FilmeAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilmeAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
