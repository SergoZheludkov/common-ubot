import React, { useEffect, useState } from 'react';
import { useBotContext, ButtonGroup, Button, Text } from '@urban-bot/core';
import { useTranslation } from '@pancake_bot/i18n';
import { useCreateUserMutation } from '@pancake_bot/api-client';

interface RegistrationProps {
  refId: string | null;
  exit: () => void;
}

type Lang = 'ru' | 'en' | '';

export const Registration = ({ exit }: RegistrationProps) => {
  const { t } = useTranslation('common');
  const { chat } = useBotContext();
  const [isReg, setReg] = useState(false);
  const [lang, setLang] = useState<Lang>('');
  const [createUser] = useCreateUserMutation();

  useEffect(() => {
    (async () => {
      const user = await createUser({ variables: { input: {
          id: chat.id,
          firstname: chat.firstName,
          lastname: chat.lastName,
          username: chat.username,
          // lang,
      } } });

      if (!user) return;

      setReg(true);
      setTimeout(() => exit(), 500);
    })();
  }, []);

  const handleClick = (lng: Lang) => () => setLang(lng);

  if (isReg && lang) {
    return <Text>{t('success')}</Text>;
  }

  if (!isReg && !lang) {
    return (
      <ButtonGroup isResizedKeyboard isNewMessageEveryRender={false} title={t('message')}>
        <Button id="ru" onClick={handleClick('ru')}>
          {t('ru')}
        </Button>
        <Button id="en" onClick={handleClick('en')}>
          {t('en')}
        </Button>
      </ButtonGroup>
    );
  }

  return null;
};
