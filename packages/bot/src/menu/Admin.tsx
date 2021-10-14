import React from 'react';
import { ButtonGroup, Button, useText } from '@urban-bot/core';
import { useTranslation } from '@common_ubot/i18n';
import { Hook } from '../contexts';

interface Props {
  wallets: () => void;
  statistic: () => void;
  back: () => void;
}

const Admin = ({ wallets, statistic, back }: Props) => {
  const { t } = useTranslation('buttons');
  const { user } = Hook.useUser();

  useText(wallets, t('wallets'));
  useText(statistic, t('statistic'));
  useText(back, t('back'));

  if (!user.is_admin) {
    return (
      <ButtonGroup isReplyButtons isResizedKeyboard maxColumns={2} title={t('admin_menu:error')}>
        <Button>{t('back')}</Button>
      </ButtonGroup>
    );
  }

  return (
    <ButtonGroup isReplyButtons isResizedKeyboard maxColumns={2} title={t('admin_menu:message')}>
      <Button>{t('wallets')}</Button>
      <Button>{t('statistic')}</Button>
      <Button>{t('back')}</Button>
    </ButtonGroup>
  );
};

export { Admin };
