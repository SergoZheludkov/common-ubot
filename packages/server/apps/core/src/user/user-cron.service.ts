import { HttpService, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Cron } from '@nestjs/schedule';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';

const EVERY_30_MINUTES = '0 */1 8-22 * * *';

@Injectable()
export class UserCronService {
  constructor(
    @InjectModel(User) readonly user: typeof User,
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
  ) {}

  getURL(userid: number) {
    return `${this.configService.get('WEBHOOK_HOST_BASE')}/notification/${userid}`;
  }

  @Cron(EVERY_30_MINUTES, { timeZone: 'Europe/Moscow' })
  async notification() {
    try {
      const users = await this.user.findAll({ attributes: ['id'] });
      users.forEach(({ id }) => this.httpService.get(this.getURL(id)).toPromise());
    } catch (e) {
      console.error(e);
      throw new Error('Error with User Cron');
    }
  }
}
