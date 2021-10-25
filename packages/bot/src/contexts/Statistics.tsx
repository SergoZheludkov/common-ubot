import React, { createContext, useContext } from 'react';
import { useDailyStatisticsQuery } from '@common_ubot/api-client';
import { StatisticsData } from '../api';

interface Statistics {
  dailyStatistics: StatisticsData;
  refetch: () => void;
}

const StatisticsContext = createContext({} as Statistics);

type StatisticsProviderProps = {
  children: React.ReactNode;
};

export const Statistics = ({ children }: StatisticsProviderProps) => {
  const { data, refetch } = useDailyStatisticsQuery();

  if (!data?.dailyStatistics) return null;

  const {
    dailyStatistics: { users, payments },
  } = data;

  const dailyStatistics = {
    users,
    payments: payments as unknown as StatisticsData['payments'],
  };

  return <StatisticsContext.Provider value={{ dailyStatistics, refetch }}>{children}</StatisticsContext.Provider>;
};

export const useStatistics = () => useContext(StatisticsContext);
