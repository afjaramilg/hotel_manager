import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RoomsResolver } from 'src/rooms/rooms.resolver';
import { RoomsService } from 'src/rooms/rooms.service';
import { Room as RoomMongoClass, RoomSchema } from 'src/rooms/schemas/room.schema';

@Module({
  imports: [MongooseModule.forFeature([{
    name: RoomMongoClass.name, 
    schema: RoomSchema 
  }])],
  providers: [RoomsResolver, RoomsService],
})
export class RoomsModule { }