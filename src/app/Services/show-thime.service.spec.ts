import { TestBed } from '@angular/core/testing';

import { ShowThimeService } from './show-thime.service';

describe('ShowThimeService', () => {
  let service: ShowThimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowThimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
