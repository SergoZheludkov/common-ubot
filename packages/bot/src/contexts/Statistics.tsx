import React, { createContext, useContext } from 'react';
import { useStatisticsByLazyQuery } from '@common_ubot/api-client';
import { StatisticsData } from '../api';

interface Statistics {
  statistics: StatisticsData | null;
  getDailyStatistics: () => void;
  refetch: () => void;
}

const StatisticsContext = createContext({} as Statistics);

type StatisticsProviderProps = {
  children: React.ReactNode;
};

export const Statistics = ({ children }: StatisticsProviderProps) => {
  const [getStatisticsBy, { data, refetch }] = useStatisticsByLazyQuery();

  const getDailyStatistics = () => getStatisticsBy({ variables: { users: true, payments: true } });

  const statistics = data?.statisticsBy
    ? {
        users: data?.statisticsBy?.users || 0,
        payments: (data?.statisticsBy?.payments as unknown as StatisticsData['payments']) || {},
      }
    : null;

  return (
    <StatisticsContext.Provider
      value={{
        statistics,
        getDailyStatistics,
        refetch,
      }}
    >
      {children}
    </StatisticsContext.Provider>
  );
};

export const useStatistics = () => useContext(StatisticsContext);
