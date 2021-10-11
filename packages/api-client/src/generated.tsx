import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Cursor for paging through collections */
  ConnectionCursor: any;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};


export type CreateManyUsersInput = {
  /** Array of records to create */
  users: Array<UserCreate>;
};

export type CreateOneUserInput = {
  /** The record to create */
  user: UserCreate;
};

export type CursorPaging = {
  /** Paginate after opaque cursor */
  after?: Maybe<Scalars['ConnectionCursor']>;
  /** Paginate before opaque cursor */
  before?: Maybe<Scalars['ConnectionCursor']>;
  /** Paginate first */
  first?: Maybe<Scalars['Int']>;
  /** Paginate last */
  last?: Maybe<Scalars['Int']>;
};


export type DeleteManyResponse = {
  __typename?: 'DeleteManyResponse';
  /** The number of records deleted. */
  deletedCount: Scalars['Int'];
};

export type DeleteManyUsersInput = {
  /** Filter to find records to delete */
  filter: UserDeleteFilter;
};

export type DeleteOneInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createManyUsers: Array<User>;
  createOneUser: User;
  createUser: User;
  deleteManyUsers: DeleteManyResponse;
  deleteOneUser: UserDeleteResponse;
  updateManyUsers: UpdateManyResponse;
  updateOneUser: User;
};


export type MutationCreateManyUsersArgs = {
  input: CreateManyUsersInput;
};


export type MutationCreateOneUserArgs = {
  input: CreateOneUserInput;
};


export type MutationCreateUserArgs = {
  input: UserCreate;
};


export type MutationDeleteManyUsersArgs = {
  input: DeleteManyUsersInput;
};


export type MutationDeleteOneUserArgs = {
  input: DeleteOneInput;
};


export type MutationUpdateManyUsersArgs = {
  input: UpdateManyUsersInput;
};


export type MutationUpdateOneUserArgs = {
  input: UpdateOneUserInput;
};

export type NumberFieldComparison = {
  between?: Maybe<NumberFieldComparisonBetween>;
  eq?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  is?: Maybe<Scalars['Boolean']>;
  isNot?: Maybe<Scalars['Boolean']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  neq?: Maybe<Scalars['Float']>;
  notBetween?: Maybe<NumberFieldComparisonBetween>;
  notIn?: Maybe<Array<Scalars['Float']>>;
};

export type NumberFieldComparisonBetween = {
  lower: Scalars['Float'];
  upper: Scalars['Float'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  /** The cursor of the last returned record. */
  endCursor?: Maybe<Scalars['ConnectionCursor']>;
  /** true if paging forward and there are more records. */
  hasNextPage?: Maybe<Scalars['Boolean']>;
  /** true if paging backwards and there are more records. */
  hasPreviousPage?: Maybe<Scalars['Boolean']>;
  /** The cursor of the first returned record. */
  startCursor?: Maybe<Scalars['ConnectionCursor']>;
};

export type Query = {
  __typename?: 'Query';
  user?: Maybe<User>;
  users: UserConnection;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryUsersArgs = {
  filter?: Maybe<UserFilter>;
  paging?: Maybe<CursorPaging>;
  sorting?: Maybe<Array<UserSort>>;
};

/** Sort Directions */
export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

/** Sort Nulls Options */
export enum SortNulls {
  NullsFirst = 'NULLS_FIRST',
  NullsLast = 'NULLS_LAST'
}

export type StringFieldComparison = {
  eq?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  iLike?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  is?: Maybe<Scalars['Boolean']>;
  isNot?: Maybe<Scalars['Boolean']>;
  like?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  neq?: Maybe<Scalars['String']>;
  notILike?: Maybe<Scalars['String']>;
  notIn?: Maybe<Array<Scalars['String']>>;
  notLike?: Maybe<Scalars['String']>;
};

export type UpdateManyResponse = {
  __typename?: 'UpdateManyResponse';
  /** The number of records updated. */
  updatedCount: Scalars['Int'];
};

export type UpdateManyUsersInput = {
  /** Filter used to find fields to update */
  filter: UserUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UserUpdate;
};

export type UpdateOneUserInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UserUpdate;
};

export type User = {
  __typename?: 'User';
  created: Scalars['DateTime'];
  firstname?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  is_admin: Scalars['Boolean'];
  lastname?: Maybe<Scalars['String']>;
  referral_counter: Scalars['Float'];
  referral_money: Scalars['Float'];
  updated: Scalars['DateTime'];
  username?: Maybe<Scalars['String']>;
  who_invite?: Maybe<Scalars['String']>;
};

export type UserAvgAggregate = {
  __typename?: 'UserAvgAggregate';
  referral_counter?: Maybe<Scalars['Float']>;
  referral_money?: Maybe<Scalars['Float']>;
};

export type UserConnection = {
  __typename?: 'UserConnection';
  /** Array of edges. */
  edges: Array<UserEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  firstname?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  lastname?: Maybe<Scalars['Int']>;
  referral_counter?: Maybe<Scalars['Int']>;
  referral_money?: Maybe<Scalars['Int']>;
  username?: Maybe<Scalars['Int']>;
  who_invite?: Maybe<Scalars['Int']>;
};

export type UserCreate = {
  firstname?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  lastname?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  who_invite?: Maybe<Scalars['String']>;
};

export type UserDeleteFilter = {
  and?: Maybe<Array<UserDeleteFilter>>;
  firstname?: Maybe<StringFieldComparison>;
  id?: Maybe<StringFieldComparison>;
  lastname?: Maybe<StringFieldComparison>;
  or?: Maybe<Array<UserDeleteFilter>>;
  referral_counter?: Maybe<NumberFieldComparison>;
  referral_money?: Maybe<NumberFieldComparison>;
  username?: Maybe<StringFieldComparison>;
  who_invite?: Maybe<StringFieldComparison>;
};

export type UserDeleteResponse = {
  __typename?: 'UserDeleteResponse';
  created?: Maybe<Scalars['DateTime']>;
  firstname?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  is_admin?: Maybe<Scalars['Boolean']>;
  lastname?: Maybe<Scalars['String']>;
  referral_counter?: Maybe<Scalars['Float']>;
  referral_money?: Maybe<Scalars['Float']>;
  updated?: Maybe<Scalars['DateTime']>;
  username?: Maybe<Scalars['String']>;
  who_invite?: Maybe<Scalars['String']>;
};

export type UserEdge = {
  __typename?: 'UserEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the User */
  node: User;
};

export type UserFilter = {
  and?: Maybe<Array<UserFilter>>;
  firstname?: Maybe<StringFieldComparison>;
  id?: Maybe<StringFieldComparison>;
  lastname?: Maybe<StringFieldComparison>;
  or?: Maybe<Array<UserFilter>>;
  referral_counter?: Maybe<NumberFieldComparison>;
  referral_money?: Maybe<NumberFieldComparison>;
  username?: Maybe<StringFieldComparison>;
  who_invite?: Maybe<StringFieldComparison>;
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  firstname?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  referral_counter?: Maybe<Scalars['Float']>;
  referral_money?: Maybe<Scalars['Float']>;
  username?: Maybe<Scalars['String']>;
  who_invite?: Maybe<Scalars['String']>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  firstname?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  referral_counter?: Maybe<Scalars['Float']>;
  referral_money?: Maybe<Scalars['Float']>;
  username?: Maybe<Scalars['String']>;
  who_invite?: Maybe<Scalars['String']>;
};

export type UserSort = {
  direction: SortDirection;
  field: UserSortFields;
  nulls?: Maybe<SortNulls>;
};

export enum UserSortFields {
  Firstname = 'firstname',
  Id = 'id',
  Lastname = 'lastname',
  ReferralCounter = 'referral_counter',
  ReferralMoney = 'referral_money',
  Username = 'username',
  WhoInvite = 'who_invite'
}

export type UserSumAggregate = {
  __typename?: 'UserSumAggregate';
  referral_counter?: Maybe<Scalars['Float']>;
  referral_money?: Maybe<Scalars['Float']>;
};

export type UserUpdate = {
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  referral_counter?: Maybe<Scalars['Float']>;
  referral_money?: Maybe<Scalars['Float']>;
  username?: Maybe<Scalars['String']>;
};

export type UserUpdateFilter = {
  and?: Maybe<Array<UserUpdateFilter>>;
  firstname?: Maybe<StringFieldComparison>;
  id?: Maybe<StringFieldComparison>;
  lastname?: Maybe<StringFieldComparison>;
  or?: Maybe<Array<UserUpdateFilter>>;
  referral_counter?: Maybe<NumberFieldComparison>;
  referral_money?: Maybe<NumberFieldComparison>;
  username?: Maybe<StringFieldComparison>;
  who_invite?: Maybe<StringFieldComparison>;
};

export type UserBaseFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'firstname' | 'lastname' | 'username' | 'who_invite' | 'referral_counter' | 'referral_money' | 'is_admin'>
);

export type UserQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type UserQuery = (
  { __typename?: 'Query' }
  & { user?: Maybe<(
    { __typename?: 'User' }
    & UserBaseFragment
  )> }
);

export type CreateUserMutationVariables = Exact<{
  input: UserCreate;
}>;


export type CreateUserMutation = (
  { __typename?: 'Mutation' }
  & { createUser: (
    { __typename?: 'User' }
    & Pick<User, 'id'>
  ) }
);

export const UserBaseFragmentDoc = gql`
    fragment UserBase on User {
  id
  firstname
  lastname
  username
  who_invite
  referral_counter
  referral_money
  is_admin
}
    `;
export const UserDocument = gql`
    query user($id: ID!) {
  user(id: $id) {
    ...UserBase
  }
}
    ${UserBaseFragmentDoc}`;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<UserQuery, UserQueryVariables>) {
        return ApolloReactHooks.useQuery<UserQuery, UserQueryVariables>(UserDocument, baseOptions);
      }
export function useUserLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, baseOptions);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = ApolloReactCommon.QueryResult<UserQuery, UserQueryVariables>;
export const CreateUserDocument = gql`
    mutation createUser($input: UserCreate!) {
  createUser(input: $input) {
    id
  }
}
    `;
export type CreateUserMutationFn = ApolloReactCommon.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, baseOptions);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = ApolloReactCommon.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;