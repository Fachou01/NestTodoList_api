import { Test, TestingModule } from '@nestjs/testing';
import { ComapignsController } from './comapigns.controller';

describe('ComapignsController', () => {
  let controller: ComapignsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComapignsController],
    }).compile();

    controller = module.get<ComapignsController>(ComapignsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
