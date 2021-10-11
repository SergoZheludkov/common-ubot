import React from 'react';
import { ButtonGroup, Button, useText } from '@urban-bot/core';
import { useTranslation } from '@common_ubot/i18n';

interface Props {
  exit: () => void;
}

const Rules = ({ exit }: Props) => {
  const { t } = useTranslation(['rules']);
  useText(exit, t('back'));

  return (
    <ButtonGroup isReplyButtons isResizedKeyboard title={t('message')}>
      <Button>{t('buttons:back')}</Button>
    </ButtonGroup>
  );
};

export { Rules };
