import React, { useEffect, useState } from 'react';
import { useBotContext, Text } from '@urban-bot/core';
import { UrbanBotTelegram } from '@urban-bot/telegram';
import { useTranslation } from '@pancake_bot/i18n';
import { messageBroker } from '../api/MessageBroker';

export const Notification: React.FC = () => {
  const { t } = useTranslation('common');
  const { chat, bot } = useBotContext<UrbanBotTelegram>();
  const [isShow, setState] = useState(false);

  useEffect(() => {
    messageBroker.notification(chat.id, () => {
      setState(true);
    });
  }, [bot.client, chat.id]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (isShow) {
      timeoutId = setTimeout(() => {
        setState(false);
      }, 500);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isShow]);

  if (isShow) return <Text>{t('notification')}</Text>;

  return null;
};
