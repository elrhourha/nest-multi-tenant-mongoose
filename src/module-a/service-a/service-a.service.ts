import { Injectable, Logger } from '@nestjs/common';
import { Model } from 'mongoose';
import { ModelA } from 'src/module-a/schemas/model-a.schemas';

@Injectable()
export class ServiceA {
  private logger: Logger = new Logger(ServiceA.name);

  constructor(private model: Model<ModelA>) {
    this.logger.log('ServiceAService instantiated');
  }

  async saveModelA(payload: ModelA): Promise<ModelA> {
    const doc = await this.model.create(payload);
    this.logger.log(`ModelA created, id:${doc.id}`);
    return doc;
  }
}
