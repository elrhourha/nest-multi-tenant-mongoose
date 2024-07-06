import { Logger, Module } from '@nestjs/common';
import { ControllerBController } from './controller-b/controller-b.controller';
import { ServiceB } from './service-b/service-b.service';
import { Connection, Model } from 'mongoose';
import { ModelB, ModelBSchema } from 'src/module-b/schemas/model-b.schemas';
import { CONNECTION } from 'src/database/database.module';

const ModelBProvider = {
  provide: Model<ModelB>,
  useFactory: (connectionByTenant: Connection): Model<ModelB> => {
    new Logger('ModelBProvider').log('ModelB instantiated');
    return connectionByTenant.model(ModelB.name, ModelBSchema);
  },
  inject: [CONNECTION],
};

@Module({
  controllers: [ControllerBController],
  providers: [ServiceB, ModelBProvider],
})
export class ModuleBModule {}
