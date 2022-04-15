import { TestBed } from '@angular/core/testing';

import { ExitValidationGuard } from './exit-validation.guard';

describe('ExitValidationGuard', () => {
  let guard: ExitValidationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ExitValidationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
