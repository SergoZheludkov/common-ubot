import React, { useEffect, useState } from 'react';
import { useBotContext, ButtonGroup, Button, Text } from '@urban-bot/core';
import { useTranslation } from '@common_ubot/i18n';
import { useCreateUserMutation } from '@common_ubot/api-client';

interface RegistrationProps {
  refId: string | null;
  exit: () => void;
}

type Lang = 'ru' | 'en' | '';

export const Registration = ({ refId, exit }: RegistrationProps) => {
  const { t } = useTranslation('lang');
  const { chat } = useBotContext();
  const [isReg, setReg] = useState(false);
  const [lang, setLang] = useState<Lang>('');
  const [createUser] = useCreateUserMutation();

  useEffect(() => {
    if (lang) {
      (async () => {
        const user = await createUser({
          variables: {
            input: {
              id: chat.id,
              firstname: chat.firstName,
              lastname: chat.lastName,
              username: chat.username,
              who_invite: refId,
              lang,
            },
          },
        });

        if (!user) return;

        setReg(true);
        setTimeout(() => exit(), 500);
      })();
    }
  }, [lang]);

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
