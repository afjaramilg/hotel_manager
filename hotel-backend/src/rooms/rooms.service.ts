import { Injectable } from '@nestjs/common';
import { Room as RoomModel } from 'src/rooms/models/room.model'
import { Room as RoomMongoClass } from 'src/rooms/schemas/room.schema'
import { OccupiedEnum } from 'src/rooms/enums/occupied.enum';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class RoomsService {

    findOneByID(roomId: string): RoomModel {
        const defaultRoom: RoomModel = {
            roomId: 'default',
            guestName: 'defaultGuests',
            lastChanged: new Date('2000-06-28T20:00:00'),
            occupied: OccupiedEnum.FREE
        };

        return defaultRoom;
    }

}