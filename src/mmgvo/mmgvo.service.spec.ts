import { Test, TestingModule } from '@nestjs/testing';
import { MmgvoService } from './mmgvo.service';

describe('MmgvoService', () => {
  let service: MmgvoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MmgvoService],
    }).compile();

    service = module.get<MmgvoService>(MmgvoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
