import { TestBed, async, inject } from '@angular/core/testing';

import { CactiveGuard } from './cactive.guard';

describe('CactiveGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CactiveGuard]
    });
  });

  it('should ...', inject([CactiveGuard], (guard: CactiveGuard) => {
    expect(guard).toBeTruthy();
  }));
});
