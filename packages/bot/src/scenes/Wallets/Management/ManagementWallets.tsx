import React, { useEffect, useState } from 'react';
import { Text } from '@urban-bot/core';
import { useTranslation } from '@common_ubot/i18n';

import { SwitchWallets } from './SwitchWallets';

interface Props {
  exit: () => void;
}

enum Scene {
  CHOOSE_WALLETS = 'choose_wallets',
  LOADING = 'loading',
}

const ManagementWallets = ({ exit }: Props) => {
  const { t } = useTranslation(['common']);
  const [scene, setScene] = useState<Scene>(Scene.LOADING);
  console.log('Accounts scene:', scene);

  useEffect(() => {
    if (scene === Scene.LOADING) setTimeout(() => setScene(Scene.CHOOSE_WALLETS), 0);
  }, []);

  switch (scene) {
    case Scene.LOADING:
      return <Text isRemoveKeyboard isNewMessageEveryRender={false}>{t('loading')}</Text>;
    case Scene.CHOOSE_WALLETS:
      return <SwitchWallets exit={exit} />;
    default:
      return null;
  }
};

export { ManagementWallets };
