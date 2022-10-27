import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { OccupiedEnum } from 'src/rooms/enums/occupied.enum';
export type RoomDocument = Room & Document;

@Schema()
export class Room {
  @Prop({ required: true, unique: true })
  roomId: string;

  @Prop()
  guestName?: string;

  @Prop()
  lastChanged?: Date;

  @Prop({ required: true, enum: OccupiedEnum })
  occupied: number;
}

export const RoomSchema = SchemaFactory.createForClass(Room);