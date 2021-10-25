import { Field, ObjectType } from '@nestjs/graphql';
import { IsDefined, IsNumber, IsString } from 'class-validator';
import { PaymentStatistics } from './payments.dto';

@ObjectType()
export class CustomStatisticDto {
  @Field()
  @IsDefined()
  @IsNumber()
  users: number;

  @Field(() => PaymentStatistics)
  @IsDefined()
  @IsString()
  payments: PaymentStatistics;
}
