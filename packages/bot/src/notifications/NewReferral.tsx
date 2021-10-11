import React, { useEffect, useState } from 'react';
import { useBotContext, Text } from '@urban-bot/core';
import { UrbanBotTelegram } from '@urban-bot/telegram';
import { useTranslation } from '@pancake_bot/i18n';
import { messageBroker } from '../api/MessageBroker';

interface NewReferralState {
  isShow: boolean;
  firstname: string;
  lastname: string;
}

const defaultState = {
  isShow: false,
  firstname: '',
  lastname: '',
};

const NewReferral: React.FC = () => {
  const { t } = useTranslation('referral');
  const { chat, bot } = useBotContext<UrbanBotTelegram>();
  const [{ isShow, firstname, lastname }, setState] = useState<NewReferralState>(defaultState);

  useEffect(() => {
    messageBroker.newReferral(chat.id, (ref) => {
      setState({
        firstname: ref.firstname,
        lastname: ref.lastname,
        isShow: true,
      });
    });
  }, [bot.client, chat.id]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (isShow) timeoutId = setTimeout(() => setState(defaultState), 500);

    return () => clearTimeout(timeoutId);
  }, [isShow]);

  if (isShow) {
    return (
      <Text>
        {t('notification.registration_success')}
        <br />
        {`${firstname} ${lastname}`}
        <br />
        {t('notification.bonus')}
      </Text>
    );
  }

  return null;
};

export { NewReferral };
