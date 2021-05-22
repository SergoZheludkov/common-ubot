import React, { useState, useEffect } from 'react';
import { useCommand, useBotContext, ButtonGroup, Button, useText } from '@urban-bot/core';
import { UrbanBotTelegram } from '@urban-bot/telegram';
import { useTranslation } from '@pancake_bot/i18n';
import { saveChat, getChatsMap } from './local-storage';
import { Authentication } from './scenes/authentification/Authentification';
import { Registration } from './scenes/registration/Registration';
import { MainMenu } from './menu/MainMenu';
import * as T from './types';

export const Bot = () => {
  const { t } = useTranslation('common');
  const [scene, setScene] = useState<T.Menu | T.Scene>(T.Scene.RESET);
  console.info('Bot scene:', scene);

  const { chat } = useBotContext<UrbanBotTelegram>();

  useEffect(() => {
    const user = getChatsMap()[chat.id];
    if (!user) setScene(T.Scene.AUTH);
    else setScene(T.Menu.MAIN);
  }, []);

  useEffect(() => {
    saveChat(chat);
  }, [chat]);

  useCommand(() => setScene(T.Scene.AUTH), '/start');
  useText(() => setScene(T.Menu.MAIN), t('buttons:back'));

  const button = (title: string) => (
    <ButtonGroup isReplyButtons isResizedKeyboard title={t(title)}>
      <Button>{t('buttons:back')}</Button>
    </ButtonGroup>
  );

  switch (scene) {
    case T.Scene.AUTH:
      return (
        <Authentication
          isSuccess={() => setScene(T.Menu.MAIN)}
          isFailed={() => setScene(T.Scene.REG)}
        />
      );
    case T.Scene.REG:
      return <Registration exit={() => setScene(T.Menu.MAIN)} />;

    case T.Scene.ONE:
      return button('sceneOne');
    case T.Scene.TWO:
      return button('sceneTwo');

    case T.Menu.MAIN:
      return (
        <MainMenu
          admin={() => setScene(T.Menu.ADMIN)}
          actionOne={() => setScene(T.Scene.ONE)}
          actionTwo={() => setScene(T.Scene.TWO)}
        />
      );
    case T.Menu.ADMIN:
      return button('adminMenu');

    default:
      return null;
  }
};
