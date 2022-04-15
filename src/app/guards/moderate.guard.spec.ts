import { TestBed } from '@angular/core/testing';

import { ModerateGuard } from './moderate.guard';

describe('ModerateGuard', () => {
  let guard: ModerateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ModerateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
