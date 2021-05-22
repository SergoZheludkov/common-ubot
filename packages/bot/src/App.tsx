import React from 'react';
import { getDefaultI18n, I18nProvider } from '@pancake_bot/i18n';
import { ApiProvider } from '@pancake_bot/api-client';
import { Bot } from './Bot';
import { Notifications } from './notifications';

const i18n = getDefaultI18n();
export const App = () => (
  <I18nProvider i18n={i18n}>
    <ApiProvider>
      <Bot />
      <Notifications />
    </ApiProvider>
  </I18nProvider>
);
