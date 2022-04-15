import { TestBed } from '@angular/core/testing';

import { HeroesRequestResolver } from './heroes-request.resolver';

describe('HeroesRequestResolver', () => {
  let resolver: HeroesRequestResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(HeroesRequestResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
