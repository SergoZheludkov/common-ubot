import React from 'react';
import { ButtonGroup, Button, useText, useCommand } from '@urban-bot/core';
import { useTranslation } from '@pancake_bot/i18n';

interface MainMenuProps {
  admin: () => void;
  actionOne: () => void;
  actionTwo: () => void;
}

export const MainMenu = ({
  admin,
  actionOne,
  actionTwo,
}: MainMenuProps) => {
  const { t } = useTranslation('buttons');

  useCommand(() => admin(), '/admin');
  useText(() => actionOne(), t('actionOne'));
  useText(() => actionTwo(), t('actionTwo'));

  return (
    <ButtonGroup
      isReplyButtons
      isResizedKeyboard
      maxColumns={2}
      title={t('common:mainMenu')}
    >
      <Button>{t('actionOne')}</Button>
      <Button>{t('actionTwo')}</Button>
    </ButtonGroup>
  );
};
