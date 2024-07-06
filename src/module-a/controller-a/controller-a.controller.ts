import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { ServiceA } from 'src/module-a/service-a/service-a.service';
import { ModelA } from 'src/module-a/schemas/model-a.schemas';

@Controller('controller-a')
export class ControllerAController {
  private logger = new Logger(ControllerAController.name);

  constructor(private serviceAService: ServiceA) {
    this.logger.log('Controller A instantiated');
  }
  @Get()
  hello(): string {
    return 'Hello from Controller A';
  }

  @Post()
  saveModelB(@Body() payload: ModelA): Promise<ModelA> {
    return this.serviceAService.saveModelA(payload);
  }
}
