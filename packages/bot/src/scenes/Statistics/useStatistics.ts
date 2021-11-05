import { useTranslation } from '@common_ubot/i18n';
import { usePayments, useUsers } from './partials';

import { Hook } from '../../contexts';
import * as T from '../../types';

const getPeriodTitle = (period: T.Period, cb: ReturnType<typeof useTranslation>['t']): string => {
  switch (period) {
    case T.Period.DAY:
      return cb('periods.daily');
    case T.Period.YESTERDAY:
      return cb('periods.yesterday');
    case T.Period.WEEK:
      return cb('periods.weekly');
    case T.Period.MONTH:
      return cb('periods.monthly');
    case T.Period.ALL_TIME:
      return cb('periods.all_time');
    case T.Period.PERIOD:
      return cb('periods.by_period');
    default:
      return cb('choose_period');
  }
};

const useStatistics = () => {
  const { t } = useTranslation(['statistics', 'buttons']);
  const paymentsStatistics = usePayments();
  const usersStatistics = useUsers();

  const { statistics } = Hook.useStatistics();

  const getTitle = (type: T.Statistics) => {
    if (type === T.Statistics.PAYMENTS && statistics?.payments) {
      return paymentsStatistics.toString(getPeriodTitle(statistics.period, t), statistics.payments);
    }

    if (type === T.Statistics.USERS && statistics?.users) {
      return usersStatistics.toString(getPeriodTitle(statistics.period, t), statistics.users);
    }

    return getPeriodTitle(statistics?.period || T.Period.NONE, t);
  };

  return { getTitle };
};

export { useStatistics };
