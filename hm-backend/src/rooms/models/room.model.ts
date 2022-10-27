import { ID, Field, ObjectType} from '@nestjs/graphql';
import { OccupiedEnum } from 'src/rooms/enums/occupied.enum';

@ObjectType()
export class Room {
  @Field(type => ID)
  roomId: string;

  @Field({ nullable: true })
  guestName?: string;

  @Field({ nullable: true })
  lastChanged?: Date;

  @Field(type => OccupiedEnum)
  occupied: OccupiedEnum;  
}
