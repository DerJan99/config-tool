import { TestBed } from '@angular/core/testing';

import { ConfigSaveService } from './config-save.service';

describe('ConfigSaveService', () => {
  let service: ConfigSaveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigSaveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
