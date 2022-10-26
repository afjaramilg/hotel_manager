import { Field, ArgsType } from '@nestjs/graphql';

@ArgsType()
export class GetRoomsArgs {
  @Field()
  roomId: string;
}
