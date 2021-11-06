import React, { createContext, useContext } from 'react';
import { useUserQuery, UserBaseFragment } from '@common_ubot/api-client';
import { useBotContext } from '@urban-bot/core';

interface User {
  user: UserBaseFragment;
  refetch: () => void;
}

const UserContext = createContext({} as User);

type UserProviderProps = {
  children: React.ReactNode;
};

export const User = ({ children }: UserProviderProps) => {
  const { chat } = useBotContext();
  const variables = { id: chat.id };
  const { data, refetch } = useUserQuery({ variables });

  if (!data?.user) return null;
  const { user } = data;

  return <UserContext.Provider value={{ user, refetch }}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);
