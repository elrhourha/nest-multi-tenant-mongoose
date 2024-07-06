import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  collection: 'model-a',
  _id: true,
})
export class ModelA {
  @Prop(String)
  propertyA: string;
}

export const ModelASchema = SchemaFactory.createForClass(ModelA);
