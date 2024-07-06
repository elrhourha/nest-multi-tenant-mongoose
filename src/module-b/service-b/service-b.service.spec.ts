import { Test, TestingModule } from '@nestjs/testing';
import { ServiceB } from './service-b.service';
import { Model } from 'mongoose';
import { ModelB } from 'src/module-b/schemas/model-b.schemas';

describe('ServiceBService', () => {
  let service: ServiceB;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ServiceB,
        {
          provide: Model<ModelB>,
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<ServiceB>(ServiceB);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
