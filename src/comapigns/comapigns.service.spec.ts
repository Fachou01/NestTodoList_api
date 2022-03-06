import { Test, TestingModule } from '@nestjs/testing';
import { ComapignsService } from './comapigns.service';

describe('ComapignsService', () => {
  let service: ComapignsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComapignsService],
    }).compile();

    service = module.get<ComapignsService>(ComapignsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
