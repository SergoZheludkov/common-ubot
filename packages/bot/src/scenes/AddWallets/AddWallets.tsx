import React, { useEffect, useState } from 'react';
import { Text } from '@urban-bot/core';
import { useTranslation } from '@common_ubot/i18n';

import { EnterData } from './EnterData';
import { Write } from './Write';

import { AddWalletData } from './types';

interface Props {
  exit: () => void;
}

enum Scene {
  ENTER_DATA = 'enter_data',
  WRITE = 'wallets_write',
  LOADING = 'loading',
}

export interface State {
  scene: Scene;
  data: AddWalletData[];
}

const loadingState: State = {
  scene: Scene.LOADING,
  data: [],
};

const defaultState: State = {
  scene: Scene.ENTER_DATA,
  data: [],
};

const AddWallets = ({ exit }: Props) => {
  const { t } = useTranslation(['common']);
  const [{ scene, data }, setState] = useState<State>(loadingState);
  console.log('Accounts scene:', scene);

  useEffect(() => {
    if (scene === Scene.LOADING) setTimeout(() => setState(defaultState), 0);
  }, []);

  const handleEnterData = (enterData: AddWalletData[]) => setState({ scene: Scene.WRITE, data: enterData });

  switch (scene) {
    case Scene.LOADING:
      return <Text isRemoveKeyboard isNewMessageEveryRender={false}>{t('loading')}</Text>;
    case Scene.ENTER_DATA:
      return <EnterData onEnterData={handleEnterData} exit={exit} />;
    case Scene.WRITE:
      if (!data.length) return null;
      return <Write data={data} exit={exit} />;
    default:
      return null;
  }
};

export { AddWallets };
