import gql from 'graphql-tag';

export const WALLET_FRAGMENT = gql`
  fragment DailyBase on DailyDto {
    users
    payments {
      qiwi {
        amount
        total
      }
      webmoney {
        amount
        total
      }
      yoomoney {
        amount
        total
      }
    }
  }
`;

export const DAILY_STATISTICS = gql`
  query dailyStatistics {
    dailyStatistics {
      ...DailyBase
    }
  }
`;
