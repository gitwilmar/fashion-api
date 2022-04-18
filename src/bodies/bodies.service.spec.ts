import { Test, TestingModule } from '@nestjs/testing';
import { BodiesService } from './bodies.service';

describe('BodiesService', () => {
  let service: BodiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BodiesService],
    }).compile();

    service = module.get<BodiesService>(BodiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
