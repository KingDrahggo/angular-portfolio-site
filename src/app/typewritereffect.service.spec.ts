import { TestBed } from '@angular/core/testing';

import { TypewritereffectService } from './typewritereffect.service';

describe('TypewritereffectService', () => {
  let service: TypewritereffectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypewritereffectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
