import React, { useState } from 'react';
import { Amount } from './Amount';
import { WalletType } from './WalletType';
import { Bill } from './Bill';
import { Check } from './Check';
import { Wallet as TWallet } from '../../types';

interface InputMoneyProps {
  exit: () => void;
}

enum Scenes {
  AMOUNT = 'amount',
  WALLET = 'wallet',
  BILL = 'bill',
  CHECK = 'check',
}

interface State {
  scene: Scenes;
  comment: string;
  amount: number;
  walletType: TWallet;
}

const defaultState = {
  scene: Scenes.AMOUNT,
  comment: '',
  amount: 0,
  walletType: TWallet.NOOP,
};

const InputMoney = ({ exit }: InputMoneyProps) => {
  /*
   * scene - текущий этап пополнения счета
   * comment - комментарий к платежу
   * amount - сумма пополнения в $
   * type - тип кошелька
   */
  const [{ scene, comment, amount, walletType }, setState] = useState<State>(defaultState);
  console.log('InputMoney scene:', scene);

  const amountSuccess = (_amount: number) => {
    const state = { scene: Scenes.WALLET, amount: _amount };
    setState((prev) => ({ ...prev, ...state }));
  };

  const walletTypeSuccess = (_walletType: TWallet) => {
    const state = { scene: Scenes.BILL, walletType: _walletType };
    setState((prev) => ({ ...prev, ...state }));
  };

  const billSuccess = (_comment: string) => {
    const state = { scene: Scenes.CHECK, comment: _comment };
    setState((prev) => ({ ...prev, ...state }));
  };

  const reset = () => setState(defaultState);

  switch (scene) {
    case Scenes.AMOUNT:
      return <Amount success={amountSuccess} back={exit} />;
    case Scenes.WALLET:
      return <WalletType success={walletTypeSuccess} back={reset} />;
    case Scenes.BILL:
      return <Bill amount={amount} walletType={walletType} check={billSuccess} />;
    case Scenes.CHECK:
      return <Check comment={comment} back={reset} exit={exit} />;
    default:
      return null;
  }
};

export { InputMoney };
