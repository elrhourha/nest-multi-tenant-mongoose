import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  collection: 'model-b',
  _id: true,
})
export class ModelB {
  @Prop(String)
  propertyB: string;
}

export const ModelBSchema = SchemaFactory.createForClass(ModelB);
