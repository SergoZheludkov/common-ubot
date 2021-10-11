import { expressApp } from '../express-app';

export class MessageBroker {
  NOTIFICATION_BASE: string;

  NEW_REFERRAL: string;

  REFERRAL_MONEY: string;

  constructor() {
    this.NOTIFICATION_BASE = '/bot/notification';
    this.NEW_REFERRAL = `${this.NOTIFICATION_BASE}/new_referral`;
    this.REFERRAL_MONEY = `${this.NOTIFICATION_BASE}/referral_money`;
  }

  notification(chatId: string, callback: () => void) {
    expressApp.get(`${this.NOTIFICATION_BASE}/${chatId}`, (req, res) => {
      callback();
      res.sendStatus(200);
    });
  }

  newReferral(chatId: string, callback: (params: { firstname: string; lastname: string }) => void) {
    expressApp.post(`${this.NEW_REFERRAL}/${chatId}`, (req, res) => {
      const {
        body: { data },
      } = req;

      const firstname = (data.firstname as string) || '';
      const lastname = (data.lastname as string) || '';

      callback({ firstname, lastname });
      res.sendStatus(200);
    });
  }

  referralMoney(
    chatId: string,
    callback: (params: { firstname: string; lastname: string; bonusMoney: number }) => void,
  ) {
    expressApp.post(`${this.REFERRAL_MONEY}/${chatId}`, (req, res) => {
      const {
        body: { data },
      } = req;

      const firstname = (data.firstname as string) || '';
      const lastname = (data.lastname as string) || '';
      const bonusMoney = (data.bonus_money as number) || 0;

      callback({ firstname, lastname, bonusMoney });
      res.sendStatus(200);
    });
  }
}

export const messageBroker = new MessageBroker();
