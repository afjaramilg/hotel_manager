import { Resolver, Args, Query, Mutation } from '@nestjs/graphql';
import { RoomsService } from 'src/rooms/rooms.service';
import { Room } from 'src/rooms/models/room.model'
import { UpsertRoomInput } from 'src/rooms/dto/upsert-room.input';



@Resolver(of => Room)
export class RoomsResolver {
    constructor(
        private roomsService: RoomsService,
    ) { }

    @Mutation(returns => Room)
    async insertRoom(@Args('insertRoomData') insertRoomData: UpsertRoomInput) {        
        return await this.roomsService.insertOne(insertRoomData); 
    }

    /* NOTE: the return type for this query was made nullable because the
    examples found on graphql's website that include a parameterized query also
    return null when a matching object is not found. i wasn't able to find an
    authorative opinion on this practice, but i would highlight that in a
    conventional REST API, a not-found error might be the way to handle this.*/
    
    @Query(returns => Room, { name: 'room', nullable: true })
    async getRoom(@Args('roomId') roomId: string) {
        return await this.roomsService.findOneByID(roomId);
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