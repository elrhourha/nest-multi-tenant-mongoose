import { Injectable, Logger } from '@nestjs/common';
import { Model } from 'mongoose';
import { ModelB } from 'src/module-b/schemas/model-b.schemas';
@Injectable()
export class ServiceB {
  private logger = new Logger(ServiceB.name);

  constructor(private modelB: Model<ModelB>) {
    this.logger.log('Service B instantiated');
  }

  async saveModelB(payload: ModelB): Promise<ModelB> {
    const doc = await this.modelB.create(payload);
    this.logger.log(`ModelB created, id:${doc.id}`);
    return doc;
  }
}
