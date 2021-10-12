import React, { useEffect, useState } from 'react';
import { useBotContext, Text } from '@urban-bot/core';
import { UrbanBotTelegram } from '@urban-bot/telegram';
import { useTranslation } from '@common_ubot/i18n';
import { messageBroker } from '../api/MessageBroker';

interface NewReferralState {
  isShow: boolean;
  firstname: string;
  lastname: string;
  bonusMoney: number;
}

const defaultState = {
  isShow: false,
  firstname: '',
  lastname: '',
  bonusMoney: NaN,
};

const ReferralMoney: React.FC = () => {
  const { t } = useTranslation('referral');
  const { chat, bot } = useBotContext<UrbanBotTelegram>();
  const [{ isShow, firstname, lastname, bonusMoney }, setState] = useState<NewReferralState>(defaultState);

  useEffect(() => {
    messageBroker.referralMoney(chat.id, (data) => {
      setState({
        firstname: data.firstname,
        lastname: data.lastname,
        bonusMoney: data.bonusMoney,
        isShow: true,
      });
    });
  }, [bot.client, chat.id]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (isShow) timeoutId = setTimeout(() => setState(defaultState), 500);

    return () => clearTimeout(timeoutId);
  }, [isShow]);

  // Поменять текст
  if (isShow) {
    return (
      <Text>
        {t('notification.money_part1')}
        {bonusMoney}
        {t('notification.money_part2')}
        {`${firstname} ${lastname}`}
      </Text>
    );
  }

  return null;
};

export { ReferralMoney };
