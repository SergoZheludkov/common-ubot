import gql from 'graphql-tag';

export const STATISTICS_FRAGMENT = gql`
  fragment StatisticsBase on CustomStatisticDto {
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

export const STATISTICS_BY = gql`
  query statisticsBy($users: Boolean!, $payments: Boolean!, $startDate: Float, $endDate: Float) {
    statisticsBy(input: { users: $users, payments: $payments, startDate: $startDate, endDate: $endDate }) {
      users @include(if: $users)
      payments @include(if: $payments) {
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
  }
`;
