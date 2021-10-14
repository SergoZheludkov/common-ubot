import { User, useUser } from './UserProvider';
import { Wallets, useWallets } from './WalletsProvider';

export const Provider = {
  User,
  Wallets,
};

export const Hook = {
  useUser,
  useWallets,
};
