import React, { useState, useEffect } from 'react';
import { useCommand, useBotContext } from '@urban-bot/core';
import { UrbanBotTelegram } from '@urban-bot/telegram';
import { saveChat, getChatsMap } from './local-storage';

import { Provider } from './contexts';

import * as Menu from './menu';
import * as Scene from './scenes';
import * as T from './types';

export const Bot = () => {
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

  switch (scene) {
    case T.Scene.UPDATE_BOT:
      return (
        <Menu.Main
          isUpdated
          admin={() => setScene(T.Menu.ADMIN)}
          balance={() => setScene(T.Menu.BALANCE)}
          referral={() => setScene(T.Menu.REFERRAL)}
          feedback={() => setScene(T.Scene.FEEDBACK)}
          rules={() => setScene(T.Scene.RULES)}
        />
      );
    // -------------------------------------AUTHENTIFICATION-------------------------------------
    case T.Scene.AUTH:
      return <Scene.Authentification isSuccess={() => setScene(T.Menu.MAIN)} isFailed={() => setScene(T.Scene.REG)} />;
    case T.Scene.REG:
      return <Scene.Registration refId={refId || null} exit={() => setScene(T.Menu.MAIN)} />;
    // ----------------------------------------MAIN MENU----------------------------------------
    case T.Scene.INPUT_MONEY:
      return <Scene.InputMoney exit={() => setScene(T.Menu.BALANCE)} />;

    case T.Scene.ALL_PAYMENTS:
      return <Scene.Payments exit={() => setScene(T.Menu.BALANCE)} />;

    case T.Scene.FEEDBACK:
      return <Scene.Feedback exit={() => setScene(T.Menu.MAIN)} />;

    case T.Scene.RULES:
      return <Scene.Rules exit={() => setScene(T.Menu.MAIN)} />;
    // ----------------------------------------ADMIN MENU----------------------------------------
    case T.Scene.ADD_WALLETS:
      return <Scene.Wallets.Add exit={() => setScene(T.Menu.WALLETS)} />;

    case T.Scene.MANAGEMENT_WALLETS:
      return (
        <Provider.Wallets>
          <Scene.Wallets.Management exit={() => setScene(T.Menu.WALLETS)} />
        </Provider.Wallets>
      );
    // -----------------------------------------------------------------------------------------
    case T.Menu.MAIN:
      return (
        <Menu.Main
          admin={() => setScene(T.Menu.ADMIN)}
          balance={() => setScene(T.Menu.BALANCE)}
          referral={() => setScene(T.Menu.REFERRAL)}
          feedback={() => setScene(T.Scene.FEEDBACK)}
          rules={() => setScene(T.Scene.RULES)}
        />
      );

    case T.Menu.ADMIN:
      return (
        <Provider.User>
          <Menu.Admin
            wallets={() => setScene(T.Menu.WALLETS)}
            statistic={() => setScene(T.Menu.MAIN)}
            back={() => setScene(T.Menu.MAIN)}
          />
        </Provider.User>
      );

    case T.Menu.BALANCE:
      return (
        <Provider.User>
          <Menu.Balance
            inputMoney={() => setScene(T.Scene.INPUT_MONEY)}
            allPayments={() => setScene(T.Scene.ALL_PAYMENTS)}
            back={() => setScene(T.Menu.MAIN)}
          />
        </Provider.User>
      );

    case T.Menu.REFERRAL:
      return (
        <Provider.User>
          <Menu.Referral back={() => setScene(T.Menu.MAIN)} />
        </Provider.User>
      );

    case T.Menu.WALLETS:
      return (
        <Menu.Wallets
          add={() => setScene(T.Scene.ADD_WALLETS)}
          management={() => setScene(T.Scene.MANAGEMENT_WALLETS)}
          back={() => setScene(T.Menu.ADMIN)}
        />
      );

    default:
      return null;
  }
};
