import React, { useEffect } from 'react';
import { Button, ButtonGroup, Text, useText } from '@urban-bot/core';
import { useDeactivateWalletsMutation } from '@common_ubot/api-client';
import { useTranslation } from '@common_ubot/i18n';

interface Props {
  data: number[];
  exit: () => void;
}

const Write = ({ data, exit }: Props) => {
  const { t } = useTranslation(['wallets', 'buttons']);
  const [deactivateWallets, { data: returnData }] = useDeactivateWalletsMutation();

  useText(exit, t('buttons:great'));
  useText(exit, t('buttons:exit'));

  useEffect(() => {
    (async () => { await deactivateWallets({ variables: { input: data } }); })();
  }, []);

  switch (returnData?.deactivateWallets.status) {
    case 'success': {
      const successMessage = `${t('deactivate_wallets_success')} ${data.length} шт`;
      return (
        <ButtonGroup isReplyButtons isResizedKeyboard title={successMessage}>
          <Button>{t('buttons:great')}</Button>
        </ButtonGroup>
      );
    }
    case 'failed':
      return (
        <ButtonGroup isReplyButtons isResizedKeyboard title={t('deactivate_wallets_failed')}>
          <Button>{t('buttons:exit')}</Button>
        </ButtonGroup>
      );
    default:
      return <Text isRemoveKeyboard isNewMessageEveryRender={false}>{t('common:loading')}</Text>;
  }
};

export { Write };
