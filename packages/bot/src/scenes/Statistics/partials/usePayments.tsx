import React, { Fragment } from 'react';
import { useTranslation } from '@common_ubot/i18n';
import { isNotEmpty } from '@common_ubot/utilits';

import { StatisticsTypes } from '../../../api';

type Payments = StatisticsTypes['payments'];

const usePaymentsStatistics = () => {
  const { t } = useTranslation('statistics');

  const getPaymentsToRender = (payments: Payments) =>
    Object.entries(payments)
      .filter(([, data]) => isNotEmpty(data))
      .map(([wallet, { total, amount }]) => (
        <Fragment key={wallet}>
          <br />
          <br />
          {t(`buttons:${wallet}`)}
          <br />
          {t('total')}
          &#32;
          {total}
          <br />
          {t('amount')}
          &#32;
          {amount}
          &#32;$
        </Fragment>
      ));

  const toString = (period: string, payments: Payments) => {
    const paymentsToRender = getPaymentsToRender(payments);
    return (
      <>
        <b>{t(period)}</b>
        <br />
        <br />
        {paymentsToRender.length ? (
          <>
            {t('payments')}
            {paymentsToRender}
          </>
        ) : (
          t('payments_is_empty')
        )}
      </>
    );
  };

  return { toString };
};

export { usePaymentsStatistics };
