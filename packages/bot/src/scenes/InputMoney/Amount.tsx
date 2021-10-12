import React from 'react';
import { ButtonGroup, Button, Dialog, DialogStep, DialogAnswers } from '@urban-bot/core';
import { useTranslation } from '@common_ubot/i18n';

interface AmountProps {
  success: (amount: number) => void;
  back: () => void;
}

const Amount = ({ success, back }: AmountProps) => {
  const { t } = useTranslation(['buttons', 'input_money']);

  const validation = (amount: string) => {
    if (amount === t('back')) return undefined;

    const numAmount = Number(amount);

    // Не цифра
    if (Number.isNaN(numAmount)) return t('input_money:amount_error');
    // Не менее 1
    if (numAmount < 1) return t('input_money:amount_should_be_positive');
    // Не целое
    if (!Number.isInteger(numAmount)) return t('input_money:amount_not_integer');

    return undefined;
  };

  const finishedDialog = async ({ amount }: DialogAnswers) => {
    if (amount === t('back')) back();
    success(Number(amount));
  };

  return (
    <Dialog onFinish={finishedDialog}>
      <DialogStep
        id="amount"
        validation={validation}
        content={(
          <ButtonGroup isReplyButtons isResizedKeyboard title={t('input_money:amount')}>
            <Button>{t('back')}</Button>
          </ButtonGroup>
        )}
      />
    </Dialog>
  );
};

export { Amount };
