import React from 'react';
import { ButtonGroup, Button, useText } from '@urban-bot/core';
import { useTranslation } from '@common_ubot/i18n';

interface Props {
  add: () => void;
  management: () => void;
  back: () => void;
}

const Wallets = ({ add, management, back }: Props) => {
  const { t } = useTranslation(['buttons', 'wallets']);

  useText(add, t('add_wallets'));
  useText(management, t('management_wallets'));
  useText(back, t('back'));

  return (
    <ButtonGroup isReplyButtons isResizedKeyboard maxColumns={2} title={t('wallets:message')}>
      <Button>{t('add_wallets')}</Button>
      <Button>{t('management_wallets')}</Button>
      <Button>{t('back')}</Button>
    </ButtonGroup>
  );
};

export { Wallets };
