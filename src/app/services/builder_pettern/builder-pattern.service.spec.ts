import { TestBed } from '@angular/core/testing';

import { BuilderPatternService } from './builder-pattern.service';

describe('BuilderPatternService', () => {
  let service: BuilderPatternService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuilderPatternService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
