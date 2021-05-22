/* eslint-disable camelcase */
import { HttpService } from '@nestjs/common';
import { NoOpQueryService } from '@nestjs-query/core';
import { Args, Resolver, Mutation } from '@nestjs/graphql';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize';
import { UserDto, UserCreateDto } from '../dto';
import { User } from '../user.model';

@Resolver()
export class UserResolver extends NoOpQueryService<User> {
  constructor(
    @InjectModel(User) readonly user: typeof User,
    private readonly httpService: HttpService,
    private sequelize: Sequelize,
  ) {
    super();
  }

  @Mutation(() => UserDto)
  async createUser(@Args('input') input: UserCreateDto) {
    try {
      return await this.sequelize.transaction(async (transaction) => {
        const userData = {
          id: input.id,
          firstname: input.firstname,
          lastname: input.lastname,
          username: input.username,
        };
        const userResult = await this.user.create(userData, { transaction });
        return userResult;
      });
    } catch (e) {
      console.error(e);
      throw new Error('Error with create User');
    }
  }
}
