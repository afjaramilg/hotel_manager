import { Resolver, Args, Query, ResolveField } from '@nestjs/graphql';
import { RoomsService } from 'src/rooms/rooms.service';
import { Room } from 'src/rooms/models/room.model'

@Resolver(of => Room)
export class RoomsResolver {
    constructor(
        private roomsService: RoomsService,
    ) { }

    @Query(returns => Room, { name: 'room' })
    async getRoom(@Args('id') roomId: string) {
        return this.roomsService.findOneByID(roomId);
    }
}
