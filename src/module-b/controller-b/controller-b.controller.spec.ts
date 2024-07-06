import { Test, TestingModule } from '@nestjs/testing';
import { ControllerBController } from './controller-b.controller';

describe('ControllerBController', () => {
  let controller: ControllerBController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ControllerBController],
    }).compile();

    controller = module.get<ControllerBController>(ControllerBController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
