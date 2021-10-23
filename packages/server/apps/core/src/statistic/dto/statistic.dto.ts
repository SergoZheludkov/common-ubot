/* eslint-disable camelcase */
import { FilterableField } from '@nestjs-query/query-graphql';
import { ObjectType, GraphQLISODateTime, Field } from '@nestjs/graphql';

@ObjectType('Statistic')
export class StatisticDto {
  @FilterableField()
  id: number;

  @FilterableField()
  users: number;

  @Field()
  payments: string;

  @Field(() => GraphQLISODateTime)
  created: Date;

  @Field(() => GraphQLISODateTime)
  updated: Date;
}
