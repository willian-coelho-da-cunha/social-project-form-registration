import { TestBed } from '@angular/core/testing';

import { UielementsService } from './uielements.service';

describe('UielementsService', () => {
  let service: UielementsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UielementsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
