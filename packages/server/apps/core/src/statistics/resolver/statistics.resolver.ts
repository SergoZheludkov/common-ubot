/* eslint-disable camelcase */
import { NoOpQueryService } from '@nestjs-query/core';
import { Resolver, Query } from '@nestjs/graphql';
import { InjectModel } from '@nestjs/sequelize';
import { startOfToday, endOfToday } from 'date-fns';
import { Op, Sequelize } from 'sequelize';

import { User } from '../../user/user.model';
import { Payment } from '../../payment/payment.model';
import { Statistic } from '../statistics.model';
import { getPaymentStatistic, PaymentStatistics } from '../helpers';
import { PaymentStatistics as TPaymentStatistics, CustomStatisticDto } from '../dto';

@Resolver()
export class StatisticsResolver extends NoOpQueryService<Statistic> {
  constructor(
    @InjectModel(User) readonly user: typeof User,
    @InjectModel(Payment) readonly payment: typeof Payment,
    @InjectModel(Statistic) readonly payments: typeof Statistic,
    private sequelize: Sequelize,
  ) {
    super();
  }

  @Query(() => CustomStatisticDto)
  async dailyStatistics() {
    const startDate = startOfToday();
    const endDate = endOfToday();
    const today = { [Op.between]: [startDate, endDate] };
    try {
      return await this.sequelize.transaction(async (transaction) => {
        const { count: totalUsers } = await this.user.findAndCountAll({
          where: { created: today },
          transaction,
        });

        const paymentsData = await this.payment.findAll({
          include: ['wallet'],
          where: { is_paid: true, updated: today },
          transaction,
        });

        const payments = paymentsData.reduce(getPaymentStatistic, {} as PaymentStatistics) as TPaymentStatistics;

        console.log({ server_payments: payments });

        return { payments, users: totalUsers };
      });
    } catch (e) {
      console.error(e);
      throw new Error('Error with query Payment');
    }
  }

  // @Query(() => CustomStatisticDto)
  // async statistics(@Args('input') input:) {
  //   const startDate = startOfToday();
  //   const endDate = endOfToday();
  //   const today = { [Op.between]: [startDate, endDate] };
  //   try {
  //     return await this.sequelize.transaction(async (transaction) => {
  //       const { count: totalUsers } = await this.user.findAndCountAll({
  //         where: { created: today },
  //         transaction,
  //       });
  //
  //       const paymentsData = await this.payment.findAll({
  //         include: ['wallet'],
  //         where: { is_paid: true, updated: today },
  //         transaction,
  //       });
  //
  //       const payments = paymentsData.reduce(getPaymentStatistic, {} as PaymentStatistics) as TPaymentStatistics;
  //
  //       console.log({ server_payments: payments });
  //
  //       return { payments, users: totalUsers };
  //     });
  //   } catch (e) {
  //     console.error(e);
  //     throw new Error('Error with query Payment');
  //   }
  // }
}
