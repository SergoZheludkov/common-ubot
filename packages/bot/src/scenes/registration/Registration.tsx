import React, { useEffect, useState } from 'react';
import { useBotContext, Text } from '@urban-bot/core';
import { useTranslation } from '@pancake_bot/i18n';
import { useCreateUserMutation } from '@pancake_bot/api-client';

interface RegistrationProps {
  exit: () => void;
}

export const Registration = ({ exit }: RegistrationProps) => {
  const { t } = useTranslation('common');
  const { chat } = useBotContext();
  const [isReg, setReg] = useState(false);
  const [createUser] = useCreateUserMutation();

  useEffect(() => {
    (async () => {
      const user = await createUser({ variables: { input: {
          id: chat.id,
          firstname: chat.firstName,
          lastname: chat.lastName,
          username: chat.username,
      } } });

      if (!user) return;

      setReg(true);
      setTimeout(() => exit(), 500);
    })();
  }, []);

  if (isReg) return <Text>{t('greeting')}</Text>;
  return null;
};
