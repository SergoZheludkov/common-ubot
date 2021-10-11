import React, { useState, useEffect } from 'react';
import { useCommand, useBotContext, ButtonGroup, Button } from '@urban-bot/core';
import { UrbanBotTelegram } from '@urban-bot/telegram';
import { useTranslation } from '@common_ubot/i18n';
import { saveChat, getChatsMap } from './local-storage';

import { UserProvider } from './contexts/UserProvider';

import * as Menu from './menu';
import * as Scene from './scenes';
import * as T from './types';

export const Bot = () => {
  const { t } = useTranslation('common');
  const [scene, setScene] = useState<T.Menu | T.Scene>(T.Scene.RESET);
  const [refId, setRefId] = useState<string | null>('');
  console.info('Bot scene:', scene);

  const { chat } = useBotContext<UrbanBotTelegram>();

  useEffect(() => {
    const user = getChatsMap()[chat.id];
    if (!user) setScene(T.Scene.AUTH);
    else setScene(T.Scene.UPDATE_BOT);
  }, []);

  useEffect(() => {
    saveChat(chat);
  }, [chat]);

  useCommand(({ argument }) => {
    if (argument) setRefId(argument);
    setScene(T.Scene.AUTH);
  }, '/start');

  const button = (title: string) => (
    <ButtonGroup isReplyButtons isResizedKeyboard title={t(title)}>
      <Button>{t('buttons:back')}</Button>
    </ButtonGroup>
  );

  switch (scene) {
    case T.Scene.UPDATE_BOT:
      return (
        <Menu.Main
          isUpdated
          admin={() => setScene(T.Menu.ADMIN)}
          balance={() => setScene(T.Menu.BALANCE)}
          referral={() => setScene(T.Menu.REFERRAL)}

          actionOne={() => setScene(T.Scene.ONE)}
          actionTwo={() => setScene(T.Scene.TWO)}
        />
      );
    // -------------------------------------AUTHENTIFICATION-------------------------------------
    case T.Scene.AUTH:
      return <Scene.Authentification isSuccess={() => setScene(T.Menu.MAIN)} isFailed={() => setScene(T.Scene.REG)} />;
    case T.Scene.REG:
      return <Scene.Registration refId={refId || null} exit={() => setScene(T.Menu.MAIN)} />;

    case T.Scene.ONE:
      return button('sceneOne');
    case T.Scene.TWO:
      return button('sceneTwo');


    // ----------------------------------------MAIN MENU----------------------------------------
    case T.Scene.FEEDBACK:
      return <Scene.Feedback exit={() => setScene(T.Menu.MAIN)} />;

    case T.Scene.INPUT_MONEY:
      return <Scene.InputMoney exit={() => setScene(T.Menu.BALANCE)} />;

    case T.Scene.ALL_PAYMENTS:
      return <Scene.Payments exit={() => setScene(T.Menu.BALANCE)} />;

    case T.Scene.RULES:
      return <Scene.Rules exit={() => setScene(T.Menu.MAIN)} />;

    // ----------------------------------------ADMIN MENU----------------------------------------
    case T.Scene.ADD_WALLETS:
      return <Scene.AddWallets exit={() => setScene(T.Menu.WALLETS)} />;

    case T.Scene.DEACTIVATE_WALLETS:
      return <Scene.DeactivateWallets exit={() => setScene(T.Menu.WALLETS)} />;

    // -----------------------------------------------------------------------------------------
    case T.Menu.MAIN:
      return (
        <Menu.Main
          admin={() => setScene(T.Menu.ADMIN)}
          balance={() => setScene(T.Menu.BALANCE)}
          referral={() => setScene(T.Menu.REFERRAL)}

          actionOne={() => setScene(T.Scene.ONE)}
          actionTwo={() => setScene(T.Scene.TWO)}
        />
      );

    case T.Menu.ADMIN:
      return (
        <UserProvider>
          <Menu.Admin
            wallets={() => setScene(T.Menu.WALLETS)}
            statistic={() => setScene(T.Menu.MAIN)}
            // statistic={() => setScene(T.Scene.TEST)}
            back={() => setScene(T.Menu.MAIN)}
          />
        </UserProvider>
      );

    case T.Menu.BALANCE:
      return (
        <UserProvider>
          <Menu.Balance
            inputMoney={() => setScene(T.Scene.INPUT_MONEY)}
            allPayments={() => setScene(T.Scene.ALL_PAYMENTS)}
            back={() => setScene(T.Menu.MAIN)}
          />
        </UserProvider>
      );

    case T.Menu.REFERRAL:
      return (
        <UserProvider>
          <Menu.Referral back={() => setScene(T.Menu.MAIN)} />
        </UserProvider>
      );

    case T.Menu.WALLETS:
      return (
        <Menu.Wallets
          add={() => setScene(T.Scene.ADD_WALLETS)}
          deactivate={() => setScene(T.Scene.DEACTIVATE_WALLETS)}
          back={() => setScene(T.Menu.ADMIN)}
        />
      );

    default:
      return null;
  }
};
