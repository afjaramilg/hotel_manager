import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Room as RoomGQLModel } from 'src/rooms/models/room.model'
import { CreateRoomInput } from './dto/create-room.input';
import { Room as RoomMongoModel, RoomDocument } from 'src/rooms/schemas/room.schema'
import { OccupiedEnum } from 'src/rooms/enums/occupied.enum';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class RoomsService {

    constructor(@InjectModel(RoomMongoModel.name) private roomModel: Model<RoomDocument>,) { }

    async findOneByID(roomId: string): Promise<RoomGQLModel> {
        const roomMongo: RoomMongoModel = await this.roomModel.findOne({ roomId }).exec();
        return roomMongo as RoomGQLModel;
    }

    async create(createRoomData: CreateRoomInput): Promise<RoomGQLModel> {
        const createdRoomDoc = new this.roomModel(createRoomData);
        const createdRoomMongo: RoomMongoModel = await createdRoomDoc.save();
        const createdRoomGQL: RoomGQLModel = createdRoomMongo as RoomGQLModel ; 
        return createdRoomGQL;
    }

}