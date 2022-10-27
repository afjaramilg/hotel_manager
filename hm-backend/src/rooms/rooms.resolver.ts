import { Resolver, Args, Query, Mutation } from '@nestjs/graphql';
import { RoomsService } from 'src/rooms/rooms.service';
import { Room } from 'src/rooms/models/room.model'
import { UpsertRoomInput } from 'src/rooms/dto/upsert-room.input';



@Resolver(of => Room)
export class RoomsResolver {
    constructor(
        private roomsService: RoomsService,
    ) { }

    @Query(returns => Room, { name: 'room' })
    async getRoom(@Args('roomId') roomId: string) {
        return await this.roomsService.findOneByID(roomId);
    }

    @Mutation(returns => Room)
    async insertRoom(@Args('insertRoomData') insertRoomData: UpsertRoomInput) {        
        return await this.roomsService.insertOne(insertRoomData); 
    }

    @Mutation(returns => Room)
    async updateRoom(@Args('updateRoomData') updateRoomData: UpsertRoomInput) {
        return await this.roomsService.updateOne(updateRoomData);
    }

    @Mutation(returns => Room)
    async deleteRoom(@Args('roomId') roomId: string) {
        return await this.roomsService.deleteOne(roomId);
    }
}