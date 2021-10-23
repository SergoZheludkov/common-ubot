/* eslint-disable camelcase */
import { Field, InputType } from '@nestjs/graphql';
import { IsString, IsDefined, IsNumber, Length } from 'class-validator';

@InputType('StatisticCreate')
export class StatisticCreateDto {
  @Field()
  @IsDefined()
  @IsNumber()
  id: string;

  @Field()
  @IsDefined()
  @IsString()
  @Length(1, 50)
  users: number;

  @Field()
  @IsDefined()
  @IsString()
  @Length(1, 50)
  payments: string;
}
