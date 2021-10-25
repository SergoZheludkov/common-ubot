import React from 'react';
import { ButtonGroup, Button, useText } from '@urban-bot/core';
import { useTranslation } from '@common_ubot/i18n';
import { DailyStatistics } from '../components/DailyStatistics';
import { Hook } from '../contexts';

interface Props {
  onUsers: () => void;
  onPayments: () => void;
  onBack: () => void;
}

const Statistics = ({ onUsers, onPayments, onBack }: Props) => {
  const { t } = useTranslation(['buttons', 'statistics']);
  const {
    dailyStatistics: { users, payments },
  } = Hook.useStatistics();

  useText(onUsers, t('users'));
  useText(onPayments, t('payments'));
  useText(onBack, t('back'));

  return (
    <>
      <DailyStatistics users={users} payments={payments} />
      <ButtonGroup isReplyButtons isResizedKeyboard maxColumns={2} title={t('statistics:more_details')}>
        <Button>{t('users')}</Button>
        <Button>{t('payments')}</Button>
        <Button>{t('back')}</Button>
      </ButtonGroup>
    </>
  );
};

export { Statistics };
