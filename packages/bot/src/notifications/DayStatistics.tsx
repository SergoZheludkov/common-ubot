import React, { Fragment, useEffect, useState } from 'react';
import { useBotContext, Text } from '@urban-bot/core';
import { UrbanBotTelegram } from '@urban-bot/telegram';
import { useTranslation } from '@common_ubot/i18n';
import { messageBroker, StatisticsData } from '../api';

interface StatisticsState extends StatisticsData {
  isShow: boolean;
}

const defaultState = {
  isShow: false,
  users: 0,
  payments: {},
};

const DayStatistics: React.FC = () => {
  const { t } = useTranslation('statistic');
  const { chat, bot } = useBotContext<UrbanBotTelegram>();
  const [{ isShow, users, payments }, setState] = useState<StatisticsState>(defaultState);

  const callback = (data: StatisticsData) => setState({ ...data, isShow: true });

  useEffect(() => messageBroker.dayStatistics(chat.id, callback), [bot.client, chat.id]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (isShow) timeoutId = setTimeout(() => setState(defaultState), 500);

    return () => clearTimeout(timeoutId);
  }, [isShow]);

  const paymentsToRender = Object.entries(payments).map(([wallet, { total, amount }]) => (
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

  if (isShow) {
    return (
      <Text>
        <b>{t('daily_statistics')}</b>
        <br />
        <br />
        {t('new_users')}
        &#32;
        {users}
        <br />
        <br />
        {paymentsToRender.length ? (
          <>
            {t('daily_payments')}
            {paymentsToRender}
          </>
        ) : (
          t('daily_payments_is_empty')
        )}
      </Text>
    );
  }

  return null;
};

export { DayStatistics };
