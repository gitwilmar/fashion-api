import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BodyDocument = Body & Document;

@Schema()
export class Body {
  @Prop()
  userName: string; 

  @Prop()
  age: number;

  @Prop()
  height: number;

  @Prop()
  gender:string;

  @Prop()
  sales: number;

  @Prop()
  lastPurchaseDate: Date;



  
}

export const BodySchema = SchemaFactory.createForClass(Body);