export enum Scene {
  AUTH = 'scene_authentification',
  REG = 'scene_registration',
  FEEDBACK = 'scene_feedback',
  RULES = 'scene_rules',
  INPUT_MONEY = 'scene_input_money',
  ALL_PAYMENTS = 'scene_all_payments',
  ADD_WALLETS = 'scene_add_wallets',
  MANAGEMENT_WALLETS = 'scene_management_wallets',
  STATISTICS = 'scene_statistics',

  UPDATE_BOT = 'scene_update_bot',
  RESET = 'scene_reset',
}

export enum Menu {
  MAIN = 'main_menu',
  ADMIN = 'admin_menu',
  BALANCE = 'balance_menu',
  REFERRAL = 'referral_menu',
  WALLETS = 'wallets_menu',
  STATISTICS = 'statistics_menu',
}

export enum Statistics {
  NONE = 'none',

  USERS = 'users',
  PAYMENTS = 'payments',
}

export enum Wallet {
  QIWI = 'qiwi',
  YOO_MONEY = 'yoo_money',
  NOOP = '',
}

export enum Period {
  NONE = 'none',
  DAY = 'day',
  YESTERDAY = 'yesterday',
  WEEK = 'week',
  MONTH = 'month',
  ALL_TIME = 'all_time',
  PERIOD = 'period',
}

export interface StatisticsToggles {
  users?: boolean;
  payments?: boolean;
}
