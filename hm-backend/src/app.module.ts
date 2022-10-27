
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { RoomsModule } from 'src/rooms/rooms.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

import * as path from 'path';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      include: [RoomsModule],
      path: '/rooms',
      driver: ApolloDriver,
      autoSchemaFile: path.join(process.cwd(), 'src/schema.gql'),
    }),
    MongooseModule.forRoot(
      `mongodb://${process.env.MONGODB_USER}`
      + `:${process.env.MONGODB_PASSWORD}`
      + `@${process.env.MONGODB_HOST}`
      + '/hotel_manager_db?authSource=admin'
    ),
    RoomsModule,
  ],
})
export class AppModule { }
