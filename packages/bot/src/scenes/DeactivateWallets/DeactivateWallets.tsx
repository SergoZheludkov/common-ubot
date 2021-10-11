import React, { useEffect, useState } from 'react';
import { Text } from '@urban-bot/core';
import { useTranslation } from '@common_ubot/i18n';

import { SelectWallets } from './SelectWallets';
import { Write } from './Write';

interface Props {
  exit: () => void;
}

enum Scene {
  CHOOSE_WALLETS = 'choose_wallets',
  WRITE = 'wallets_write',
  LOADING = 'loading',
}

export interface State {
  scene: Scene;
  data: number[];
}

const loadingState: State = {
  scene: Scene.LOADING,
  data: [],
};

const defaultState: State = {
  scene: Scene.CHOOSE_WALLETS,
  data: [],
};

const DeactivateWallets = ({ exit }: Props) => {
  const { t } = useTranslation(['common']);
  const [{ scene, data }, setState] = useState<State>(loadingState);
  console.log('Accounts scene:', scene);

  useEffect(() => {
    if (scene === Scene.LOADING) setTimeout(() => setState(defaultState), 0);
  }, []);

  const handleWalletsId = (enterData: number[]) => setState({ scene: Scene.WRITE, data: enterData });

  switch (scene) {
    case Scene.LOADING:
      return <Text isRemoveKeyboard isNewMessageEveryRender={false}>{t('loading')}</Text>;
    case Scene.CHOOSE_WALLETS:
      return <SelectWallets onEnterData={handleWalletsId} exit={exit} />;
    case Scene.WRITE:
      if (!data.length) return null;
      return <Write data={data} exit={exit} />;
    default:
      return null;
  }
};

export { DeactivateWallets };
