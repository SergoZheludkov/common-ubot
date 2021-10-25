/* eslint-disable camelcase */
import { Field, InputType } from '@nestjs/graphql';
import { IsString, IsDefined, IsNumber } from 'class-validator';

@InputType('StatisticCreate')
export class StatisticsCreateDto {
  @Field()
  @IsDefined()
  @IsNumber()
  id: string;

  @Field()
  @IsDefined()
  @IsNumber()
  users: number;

  @Field()
  @IsDefined()
  @IsString()
  payments: string;
}
