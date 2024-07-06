import { Logger, Module } from '@nestjs/common';
import { ControllerAController } from './controller-a/controller-a.controller';
import { ServiceA } from './service-a/service-a.service';
import { Connection, Model } from 'mongoose';
import { ModelA, ModelASchema } from 'src/module-a/schemas/model-a.schemas';
import { CONNECTION } from 'src/database/database.module';

const ModelAProvider = {
  provide: Model<ModelA>,
  useFactory: (connectionByTenant: Connection): Model<ModelA> => {
    new Logger('ModelBProvider').log('ModelA instantiated');
    return connectionByTenant.model(ModelA.name, ModelASchema);
  },
  inject: [CONNECTION],
};

@Module({
  controllers: [ControllerAController],
  providers: [ServiceA, ModelAProvider],
  exports: [ModelAProvider],
})
export class ModuleAModule {}
