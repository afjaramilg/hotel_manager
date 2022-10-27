import { Resolver, Args, Query, Mutation } from '@nestjs/graphql';
import { RoomsService } from 'src/rooms/rooms.service';
import { Room } from 'src/rooms/models/room.model'
import { CreateRoomInput } from 'src/rooms/dto/create-room.input';

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
    async createRoom(@Args('createRoomData') createRoomData: CreateRoomInput) {
        return await this.roomsService.create(createRoomData)
    }
}