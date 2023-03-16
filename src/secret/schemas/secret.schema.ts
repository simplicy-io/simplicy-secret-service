import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export type SecretDocument = Secret & Document;

@Schema()
export class Secret {
  @Prop({
    required: true,
    default: function genUUID() {
      return uuidv4();
    },
  })
  _id: string;
  @Prop({ required: true, unique: true })
  secrethash: string;
}

export const SecretSchema = SchemaFactory.createForClass(Secret);
