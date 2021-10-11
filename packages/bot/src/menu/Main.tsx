import React from 'react';
import { ButtonGroup, Button, useText, useCommand } from '@urban-bot/core';
import { useTranslation } from '@common_ubot/i18n';

interface MainMenuProps {
  isUpdated?: boolean;

  admin: () => void;
  balance: () => void;
  referral: () => void;

  actionOne: () => void;
  actionTwo: () => void;
}

export const Main = ({
  isUpdated,

  admin,
  balance,
  referral,

  actionOne,
  actionTwo,
}: MainMenuProps) => {
  const { t } = useTranslation('buttons');

  useCommand(() => admin(), '/admin');
  useText(balance, t('balance'));
  useText(referral, t('referral'));
  useText(() => actionOne(), t('actionOne'));
  useText(() => actionTwo(), t('actionTwo'));

  const message = isUpdated ? 'common:update_message' : 'common:main_menu';

  return (
    <ButtonGroup
      isReplyButtons
      isResizedKeyboard
      maxColumns={2}
      title={t(message)}
    >
      <Button>{t('actionOne')}</Button>
      <Button>{t('actionTwo')}</Button>
      <Button>{t('balance')}</Button>
      <Button>{t('referral')}</Button>
    </ButtonGroup>
  );
};
