/* eslint-disable camelcase */
import { NoOpQueryService } from '@nestjs-query/core';
import { Args, Resolver, Mutation, Query } from '@nestjs/graphql';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize, OrderItem } from 'sequelize';
import { WalletDto, WalletCreateDto } from '../dto';
import { Wallet } from '../wallet.model';
import { ReturnStatusType } from '../../types';
import { Status } from '../../reqStatuses';

@Resolver()
export class WalletResolver extends NoOpQueryService<Account> {
  constructor(
    @InjectModel(Wallet) readonly wallet: typeof Wallet,
    private sequelize: Sequelize,
  ) {
    super();
  }

  @Query(() => WalletDto, { name: 'oneWallet' })
  async oneWallet(@Args('type') type: string) {
    try {
      const where = { type, is_active: true };
      const order = [['updated', 'ASC']] as OrderItem[];
      const wallet = await this.wallet.findOne({ where, order });
      return wallet;
    } catch (e) {
      console.error(e);
      throw new Error('Error with prices');
    }
  }

  @Query(() => [WalletDto], { name: 'allActiveWallets' })
  async allActiveWallets() {
    try {
      const wallets = await this.wallet.findAll({ where: { is_active: true } });
      return wallets;
    } catch (e) {
      console.error(e);
      throw new Error('Error with prices');
    }
  }

  @Mutation(() => ReturnStatusType)
  async addWallets(@Args({ name: 'input', type: () => [WalletCreateDto] }) input: WalletCreateDto[]) {
    try {
      return await this.sequelize.transaction(async (transaction) => {
        const prices = await this.wallet.bulkCreate(input, { transaction });
        return prices.length ? Status.SUCCESS : Status.FAILED;
      });
    } catch (e) {
      console.error(e);
      return Status.FAILED;
      // throw new Error('Error with add wallets');
    }
  }

  @Mutation(() => ReturnStatusType)
  async deactivateWallets(@Args({ name: 'input', type: () => [Number] }) ids: number[]) {
    try {
      return await this.sequelize.transaction(async (transaction) => {
        const wallets = await this.wallet.findAll({ where: { id: ids }, transaction });

        const updateRow = { is_active: false };
        const updatedWallets = wallets.map((wallet) => wallet.update(updateRow, { transaction }));
        const deactivatedWallets = await Promise.all(updatedWallets);

        return deactivatedWallets.length ? Status.SUCCESS : Status.FAILED;
      });
    } catch (e) {
      console.error(e);
      return Status.FAILED;
      // throw new Error('Error with deactivate wallets');
    }
  }
}
