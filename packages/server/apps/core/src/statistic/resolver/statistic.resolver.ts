/* eslint-disable camelcase */
import { HttpService } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NoOpQueryService } from '@nestjs-query/core';
import { Args, Resolver, Query, InputType, Field } from '@nestjs/graphql';
import { IsDefined } from 'class-validator';
import { InjectModel } from '@nestjs/sequelize';
import { OrderItem } from 'sequelize';
import { StatisticDto } from '../dto';
import { Statistic } from '../statistic.model';
import { User } from '../../user/user.model';

@InputType('CheckPaymentInput')
export class CheckPaymentInput {
  @Field()
  @IsDefined()
  comment: string;
}

@Resolver()
export class StatisticResolver extends NoOpQueryService<Statistic> {
  constructor(
    @InjectModel(Statistic) readonly payments: typeof Statistic,
    @InjectModel(User) readonly user: typeof User,
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    super();
  }

  getURLtoReferralMoneyNotification(userid: string) {
    return `${this.configService.get('WEBHOOK_HOST_BASE')}/notification/referral_money/${userid}`;
  }

  @Query(() => [StatisticDto])
  async getUserPayments(@Args('id') user_id: string) {
    const where = { user_id, is_paid: true };
    const order: OrderItem[] = [['updated', 'DESC']];
    try {
      const payments = await this.payments.findAll({ where, order });
      return payments;
    } catch (e) {
      console.error(e);
      throw new Error('Error with query Payment');
    }
  }
}
