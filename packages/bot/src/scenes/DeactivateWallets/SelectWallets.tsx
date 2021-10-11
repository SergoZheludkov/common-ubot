import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup } from '@urban-bot/core';
import { useAllActiveWalletsQuery } from '@common_ubot/api-client';
import { useTranslation } from '@common_ubot/i18n';
import { getWallet } from '../../utilits';

interface Props {
  onEnterData: (data: number[]) => void;
  exit: () => void;
}

interface Wallet {
  id: string;
  phone: string;
  type: string;
  isSelected: boolean;
}

type State = Array<Wallet>

const SelectWallets = ({ onEnterData, exit }: Props) => {
  const { t } = useTranslation(['wallets', 'buttons']);
  const { data } = useAllActiveWalletsQuery();
  const [activeWallets, setState] = useState<State>([]);
  const [selectCount, setCount] = useState(0);

  useEffect(() => {
    if (!data?.allActiveWallets) return;
    const { allActiveWallets } = data;
    const wallets: State = allActiveWallets.map(({ id, type, number }) => ({
      type,
      id: String(id),
      phone: number,
      isSelected: false,
    }));
    setState(wallets);
  }, [data?.allActiveWallets]);

  if (!data?.allActiveWallets) return null;

  const handleWalletSelect = (id: string) => () => {
    setState((prev) => prev.map((wallet) => {
      if (wallet.id !== id) return wallet;

      if (!wallet.isSelected) setCount((p) => p + 1);
      else setCount((p) => p - 1);

      return { ...wallet, isSelected: !wallet.isSelected };
    }));
  };

  const handleConfirm = () => {
    if (!selectCount) return;

    const ids = activeWallets
      .filter((wallet) => wallet.isSelected)
      .map((wallet) => Number(wallet.id));

    onEnterData(ids);
  };

  return (
    <ButtonGroup isResizedKeyboard isNewMessageEveryRender={false} title={t('deactivate_message')}>
      {[
        ...activeWallets.map(({ id, phone, type, isSelected }) => {
          return [
            <Button key={id} id={id} onClick={handleWalletSelect(id)}>
              {`${isSelected ? '✅' : '☑️'} ${getWallet(type)} - ${phone}`}
            </Button>,
          ];
        }),
        [<Button id="confirm" key="confirm" onClick={handleConfirm}>{t('buttons:confirm')}</Button>],
        [<Button id="back" key="back" onClick={exit}>{t('buttons:back')}</Button>],
      ]}
    </ButtonGroup>
  );
};

export { SelectWallets };
