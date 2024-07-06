import { Test, TestingModule } from '@nestjs/testing';
import { ServiceA } from './service-a.service';
import { Model } from 'mongoose';
import { ModelA } from 'src/module-a/schemas/model-a.schemas';

describe('ServiceAService', () => {
  let service: ServiceA;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ServiceA,
        {
          provide: Model<ModelA>,
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<ServiceA>(ServiceA);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
