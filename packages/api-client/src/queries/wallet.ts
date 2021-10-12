import gql from 'graphql-tag';

export const ONE_WALLET = gql`
    query oneWallet($type: String!) {
        oneWallet(type: $type) {
            id
            number
            type
        }
    }
`;

export const ALL_ACTIVE_WALLETS = gql`
    query allActiveWallets {
        allActiveWallets {
            id
            number
            type
        }
    }
`;

export const ADD_WALLETS = gql`
    mutation addWallets($input: [WalletCreate!]!) {
        addWallets(input: $input) {
            status
        }
    }
`;

export const DEACTIVATE_WALLETS = gql`
    mutation deactivateWallets($input: [Float!]!) {
        deactivateWallets(input: $input) {
            status
        }
    }
`;
