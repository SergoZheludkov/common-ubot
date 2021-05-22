import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { UserModule } from './user/user.module';
import { DbModule } from '../../../libs/db/db.module';
import { GraphqlModule } from '../../../libs/graphql/graphql.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    ConfigModule.forRoot({ isGlobal: true }),
    DbModule,
    GraphqlModule,
    UserModule,
  ],
  exports: [ConfigModule],
})
export class AppModule {}
