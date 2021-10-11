import { expressApp } from '../express-app';

export class MessageBroker {
  NOTIFICATION_BASE: string;

  NEW_REFERRAL: string;

  constructor() {
    this.NOTIFICATION_BASE = '/bot/notification';
    this.NEW_REFERRAL = `${this.NOTIFICATION_BASE}/new_referral`;
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
}

export const messageBroker = new MessageBroker();
