import { HttpModule, Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQuerySequelizeModule } from '@nestjs-query/query-sequelize';
import { StatisticCreateDto, StatisticDto } from './dto';
import { Statistic } from './statistic.model';
import { StatisticResolver } from './resolver/statistic.resolver';
import { StatisticCronService } from './statistic-cron.service';
import { UserModule } from '../user/user.module';
import { PaymentModule } from '../payment/payment.module';

@Module({
  imports: [
    HttpModule,
    PaymentModule,
    UserModule,
    NestjsQuerySequelizeModule.forFeature([Statistic]),
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQuerySequelizeModule.forFeature([Statistic])],
      resolvers: [
        {
          DTOClass: StatisticDto,
          EntityClass: Statistic,
          CreateDTOClass: StatisticCreateDto,
          read: { defaultResultSize: 50000, maxResultsSize: 100000 },
        },
      ],
    }),
  ],
  providers: [StatisticResolver, StatisticCronService],
  exports: [NestjsQuerySequelizeModule.forFeature([Statistic])],
})
export class StatisticModule {}
