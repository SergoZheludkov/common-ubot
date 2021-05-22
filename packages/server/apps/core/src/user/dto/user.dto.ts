/* eslint-disable camelcase */
import { FilterableField } from '@nestjs-query/query-graphql';
import { ObjectType, GraphQLISODateTime, Field } from '@nestjs/graphql';

@ObjectType('User')
export class UserDto {
  @FilterableField()
  id: string;

  @FilterableField({ nullable: true })
  firstname?: string;

  @FilterableField({ nullable: true })
  lastname?: string;

  @FilterableField({ nullable: true })
  username?: string;

  @Field()
  is_admin: boolean;

  @Field(() => GraphQLISODateTime)
  created: Date;

  @Field(() => GraphQLISODateTime)
  updated: Date;
}
