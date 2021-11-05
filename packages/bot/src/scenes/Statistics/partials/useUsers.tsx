import React from 'react';
import { useTranslation } from '@common_ubot/i18n';

import { StatisticsTypes } from '../../../api';

type Users = StatisticsTypes['users'];

const useUsersStatistics = () => {
  const { t } = useTranslation('statistics');

  const toString = (period: string, users: Users) => {
    return (
      <>
        <b>{t(period)}</b>
        <br />
        <br />
        {t('new_users')}
        &#32;
        {users}
      </>
    );
  };

  return { toString };
};

export { useUsersStatistics };
