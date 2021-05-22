import gql from 'graphql-tag';

export const USER_FRAGMENT = gql`
    fragment UserBase on User {
        id
        firstname
        lastname
        username
        is_admin
    }
`;

export const USER = gql`
    query user($id: ID!) {
        user(id: $id) {
            ...UserBase
        }
    }
`;

export const POST_USER = gql`
    mutation createUser($input: UserCreate!) {
        createUser(input: $input) {
            id
        }
    }
`;
