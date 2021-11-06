import React from 'react';
import { ButtonGroup, Button, useText, useCommand } from '@urban-bot/core';
import { useTranslation } from '@common_ubot/i18n';

interface MainMenuProps {
  isUpdated?: boolean;

  onAdmin: () => void;
  onBalance: () => void;
  onReferral: () => void;

  onFeedback: () => void;
  onRules: () => void;
}

export const Main = ({
  isUpdated,

  onAdmin,
  onBalance,
  onReferral,
  onFeedback,
  onRules,
}: MainMenuProps) => {
  const { t } = useTranslation('buttons');

  useCommand(onAdmin, '/admin');
  useText(onBalance, t('balance'));
  useText(onReferral, t('referral'));
  useText(onFeedback, t('feedback'));
  useText(onRules, t('rules'));

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
