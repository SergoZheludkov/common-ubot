import { PaymentStatistics } from './types';
import { Payment } from '../payment/payment.model';

const getPaymentStatistic = (
  acc: PaymentStatistics,
  { wallet: { type }, expected_amount }: Payment,
): PaymentStatistics => {
  const [USD] = expected_amount.split('/');
  const amount = Number(USD);
  return acc[type]
    ? {
        ...acc,
        [type]: {
          amount: acc[type].amount + amount,
          total: acc[type].total + 1,
        },
      }
    : {
        ...acc,
        [type]: {
          total: 1,
          amount,
        },
      };
};

export { getPaymentStatistic };
