import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RoomDocument = Room & Document;

@Schema()
export class Room {
  @Prop({ required: true })
  _id: string;

  @Prop()
  guestName?: string;

  @Prop()
  lastChanged?: Date;

  @Prop({ required: true })
  occupied: Boolean;
}

export const RoomSchema = SchemaFactory.createForClass(Room);