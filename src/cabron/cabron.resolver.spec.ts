import { Test, TestingModule } from '@nestjs/testing';
import { CabronResolver } from './cabron.resolver';

describe('CabronResolver', () => {
  let resolver: CabronResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CabronResolver],
    }).compile();

    resolver = module.get<CabronResolver>(CabronResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
