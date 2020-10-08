import { TestBed } from '@angular/core/testing';

import { ProductInfoGuard } from './product-info.guard';

describe('ProductInfoGuard', () => {
  let guard: ProductInfoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProductInfoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
