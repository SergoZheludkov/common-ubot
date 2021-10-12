import React from 'react';
import { ButtonGroup, Button, useText } from '@urban-bot/core';
import { useTranslation } from '@common_ubot/i18n';

interface Props {
  add: () => void;
  deactivate: () => void;
  back: () => void;
}

const Wallets = ({ add, deactivate, back }: Props) => {
  const { t } = useTranslation(['buttons', 'wallets']);

  useText(add, t('add_wallet'));
  useText(deactivate, t('deactivate_wallet'));
  useText(back, t('back'));

  return (
    <ButtonGroup isReplyButtons isResizedKeyboard maxColumns={2} title={t('wallets:message')}>
      <Button>{t('add_wallet')}</Button>
      <Button>{t('deactivate_wallet')}</Button>
      <Button>{t('back')}</Button>
    </ButtonGroup>
  );
};

export { Wallets };
