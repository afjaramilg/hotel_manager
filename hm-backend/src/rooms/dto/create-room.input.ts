import { ID, InputType, Field } from '@nestjs/graphql';
import { OccupiedEnum } from 'src/rooms/enums/occupied.enum';

@InputType()
export class CreateRoomInput {
    @Field(type => ID)
    roomId: string;
  
    @Field({ nullable: true })
    guestName?: string;
  
    @Field({ nullable: true })
    lastChanged?: Date;
  
    @Field(type => OccupiedEnum)
    occupied: OccupiedEnum;  
}

