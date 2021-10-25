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

  // menu handlers
  const handleMenuMain = () => setScene(T.Menu.MAIN);
  const handleMenuAdmin = () => setScene(T.Menu.ADMIN);
  const handleMenuBalance = () => setScene(T.Menu.BALANCE);
  const handleMenuReferral = () => setScene(T.Menu.REFERRAL);
  const handleMenuWallets = () => setScene(T.Menu.WALLETS);
  const handleMenuStatistics = () => setScene(T.Menu.STATISTICS);

  // scene handlers
  const handleSceneFeedback = () => setScene(T.Scene.FEEDBACK);
  const handleSceneRules = () => setScene(T.Scene.RULES);
  const handleSceneRegistration = () => setScene(T.Scene.REG);
  const handleSceneInputMoney = () => setScene(T.Scene.INPUT_MONEY);
  const handleSceneAllPayments = () => setScene(T.Scene.ALL_PAYMENTS);
  const handleSceneAddWallets = () => setScene(T.Scene.ADD_WALLETS);
  const handleSceneManagementWallets = () => setScene(T.Scene.MANAGEMENT_WALLETS);

  switch (scene) {
    case T.Scene.UPDATE_BOT:
      return (
        <Menu.Main
          isUpdated
          admin={handleMenuAdmin}
          balance={handleMenuBalance}
          referral={handleMenuReferral}
          feedback={handleSceneFeedback}
          rules={handleSceneRules}
        />
      );
    // -------------------------------------AUTHENTIFICATION-------------------------------------
    case T.Scene.AUTH:
      return <Scene.Authentification isSuccess={handleMenuMain} isFailed={handleSceneRegistration} />;
    case T.Scene.REG:
      return <Scene.Registration refId={refId || null} exit={handleMenuMain} />;
    // ----------------------------------------MAIN MENU----------------------------------------
    case T.Scene.INPUT_MONEY:
      return <Scene.InputMoney exit={handleMenuBalance} />;

    case T.Scene.ALL_PAYMENTS:
      return <Scene.Payments exit={handleMenuBalance} />;

    case T.Scene.FEEDBACK:
      return <Scene.Feedback exit={handleMenuMain} />;

    case T.Scene.RULES:
      return <Scene.Rules exit={handleMenuMain} />;
    // ----------------------------------------ADMIN MENU----------------------------------------
    case T.Scene.ADD_WALLETS:
      return <Scene.Wallets.Add exit={handleMenuWallets} />;

    case T.Scene.MANAGEMENT_WALLETS:
      return (
        <Provider.Wallets>
          <Scene.Wallets.Management exit={handleMenuWallets} />
        </Provider.Wallets>
      );
    // -----------------------------------------------------------------------------------------
    case T.Menu.MAIN:
      return (
        <Menu.Main
          admin={handleMenuAdmin}
          balance={handleMenuBalance}
          referral={handleMenuReferral}
          feedback={handleSceneFeedback}
          rules={handleSceneRules}
        />
      );

    case T.Menu.ADMIN:
      return (
        <Provider.User>
          <Menu.Admin wallets={handleMenuWallets} statistic={handleMenuStatistics} back={handleMenuMain} />
        </Provider.User>
      );

    case T.Menu.WALLETS:
      return (
        <Menu.Wallets add={handleSceneAddWallets} management={handleSceneManagementWallets} back={handleMenuAdmin} />
      );

    case T.Menu.STATISTICS:
      return (
        <Provider.Statistics>
          <Menu.Statistics
            onUsers={handleMenuAdmin} // TODO Раздел статистики по юзерам
            onPayments={handleMenuAdmin} // TODO Раздел статистики по оплатам
            onBack={handleMenuAdmin}
          />
        </Provider.Statistics>
      );

    case T.Menu.BALANCE:
      return (
        <Provider.User>
          <Menu.Balance inputMoney={handleSceneInputMoney} allPayments={handleSceneAllPayments} back={handleMenuMain} />
        </Provider.User>
      );

    case T.Menu.REFERRAL:
      return (
        <Provider.User>
          <Menu.Referral back={handleMenuMain} />
        </Provider.User>
      );

    default:
      return null;
  }
};
