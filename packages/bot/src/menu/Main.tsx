import React from 'react';
import { ButtonGroup, Button, useText, useCommand } from '@urban-bot/core';
import { useTranslation } from '@common_ubot/i18n';

interface MainMenuProps {
  isUpdated?: boolean;

  admin: () => void;
  balance: () => void;
  referral: () => void;

  feedback: () => void;
  rules: () => void;
}

export const Main = ({
  isUpdated,

  admin,
  balance,
  referral,
  feedback,
  rules,
}: MainMenuProps) => {
  const { t } = useTranslation('buttons');

  useCommand(() => admin(), '/admin');
  useText(balance, t('balance'));
  useText(referral, t('referral'));
  useText(feedback, t('feedback'));
  useText(rules, t('rules'));

  const message = isUpdated ? 'common:update_message' : 'common:main_menu';

  return (
    <ButtonGroup isReplyButtons isResizedKeyboard maxColumns={2} title={t(message)}>
      <Button>{t('balance')}</Button>
      <Button>{t('referral')}</Button>
      <Button>{t('feedback')}</Button>
      <Button>{t('rules')}</Button>
    </ButtonGroup>
  );
};
