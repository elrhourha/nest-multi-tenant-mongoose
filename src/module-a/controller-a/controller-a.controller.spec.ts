import { Test, TestingModule } from '@nestjs/testing';
import { ControllerAController } from './controller-a.controller';
import { ServiceA } from 'src/module-a/service-a/service-a.service';
import { Model } from 'mongoose';
import { ModelA } from 'src/module-a/schemas/model-a.schemas';

describe('ControllerAController', () => {
  let controller: ControllerAController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ControllerAController],
      providers: [
        ServiceA,
        {
          provide: Model<ModelA>,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<ControllerAController>(ControllerAController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
