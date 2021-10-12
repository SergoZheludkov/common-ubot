import React, { createContext, useContext } from 'react';
import { useUserQuery, UserBaseFragment } from '@common_ubot/api-client';
import { useBotContext } from '@urban-bot/core';

interface User {
  user: UserBaseFragment;
  refetch: () => void;
}

export const UserContext = createContext({} as User);

export type UserProviderProps = {
  children: React.ReactNode;
};

export const UserProvider = ({ children }: UserProviderProps) => {
  const { chat } = useBotContext();
  const variables = { id: chat.id };
  const { data, refetch } = useUserQuery({ variables });

  if (!data?.user) return null;
  const { user } = data;

  return <UserContext.Provider value={{ user, refetch }}>{children}</UserContext.Provider>;
};

export const useUserData = () => {
  return useContext(UserContext);
};
