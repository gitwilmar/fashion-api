import { Test, TestingModule } from '@nestjs/testing';
import { BodiesController } from './bodies.controller';
import { BodiesService } from './bodies.service';

describe('BodiesController', () => {
  let controller: BodiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BodiesController],
      providers: [BodiesService],
    }).compile();

    controller = module.get<BodiesController>(BodiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
