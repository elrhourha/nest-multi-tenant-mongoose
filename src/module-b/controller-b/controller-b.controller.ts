import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { ModelB } from 'src/module-b/schemas/model-b.schemas';
import { ServiceB } from 'src/module-b/service-b/service-b.service';

@Controller({
  path: 'controller-b',
})
export class ControllerBController {
  private logger = new Logger(ControllerBController.name);

  constructor(private serviceBService: ServiceB) {
    this.logger.log('Controller B instantiated');
  }

  @Get()
  hello(): string {
    return 'Hello from Controller B';
  }

  @Post()
  saveModelB(@Body() payload: ModelB): Promise<ModelB> {
    return this.serviceBService.saveModelB(payload);
  }
}
