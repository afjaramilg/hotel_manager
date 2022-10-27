import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Room as RoomGQLModel } from 'src/rooms/models/room.model'
import { UpsertRoomInput } from './dto/upsert-room.input';
import { Room as RoomMongoModel, RoomDocument } from 'src/rooms/schemas/room.schema'
import { InjectModel } from '@nestjs/mongoose';
import { HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class RoomsService {

    constructor(@InjectModel(RoomMongoModel.name) private roomModel: Model<RoomDocument>,) { }

    async findOneByID(roomId: string): Promise<RoomGQLModel> {
        let roomDoc: RoomDocument;
        try {
            roomDoc = await this.roomModel.findOne({ roomId }).exec();
        } catch (e) {
            throw new HttpException(
                e.message,
                HttpStatus.INTERNAL_SERVER_ERROR
            );
        }

        return roomDoc as (RoomGQLModel | null);
    }

    async insertOne(insertRoomData: UpsertRoomInput): Promise<RoomGQLModel> {
        try {
            const insertedRoomDoc = new this.roomModel(insertRoomData);
            return (await insertedRoomDoc.save()) as RoomGQLModel;

        } catch (e) {
            throw new HttpException(
                e.message,
                HttpStatus.INTERNAL_SERVER_ERROR
            );
        }
    }

    async updateOne(updateRoomData: UpsertRoomInput): Promise<RoomGQLModel> {
        const queryRoomId = { roomId: updateRoomData.roomId };
        
        let roomDoc: RoomDocument;
        try {
            roomDoc = await this.roomModel.findOne(queryRoomId).exec();
        } catch (e) {
            throw new HttpException(
                e.message,
                HttpStatus.INTERNAL_SERVER_ERROR
            );
        }

        if (roomDoc) {
            roomDoc.guestName = updateRoomData.guestName;
            roomDoc.lastChanged = updateRoomData.lastChanged;
            roomDoc.occupied = updateRoomData.occupied;
        }

        return (await roomDoc.save()) as (RoomGQLModel | null);
    }

    async deleteOne(roomId: string): Promise<RoomGQLModel> {
        let roomDoc: RoomDocument;
        try {
            roomDoc = await this.roomModel.findOneAndDelete({ roomId }).exec();

        } catch (e) {
            throw new HttpException(
                e.message,
                HttpStatus.INTERNAL_SERVER_ERROR
            );
        }
        
        return roomDoc as (RoomGQLModel | null);
    }

}