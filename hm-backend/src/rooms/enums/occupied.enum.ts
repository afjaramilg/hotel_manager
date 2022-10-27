import { registerEnumType } from '@nestjs/graphql'

export enum OccupiedEnum {
    OCCUPIED,
    FREE
}

registerEnumType(OccupiedEnum, {
    name: 'OccupiedRoomEnum',
});
