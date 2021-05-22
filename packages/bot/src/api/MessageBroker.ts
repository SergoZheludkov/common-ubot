import { expressApp } from '../express-app';

export class MessageBroker {
  NOTIFICATION_BASE: string;

  constructor() {
    this.NOTIFICATION_BASE = '/bot/notification';
  }

  notification(chatId: string, callback: () => void) {
    expressApp.get(`${this.NOTIFICATION_BASE}/${chatId}`, (req, res) => {
      callback();
      res.sendStatus(200);
    });
  }
}

export const messageBroker = new MessageBroker();
