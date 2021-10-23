import React from 'react';
import { Notification } from './Notification';
import { ReferralMoney } from './ReferralMoney';
import { NewReferral } from './NewReferral';
import { DayStatistics } from './DayStatistics';

export const Notifications = () => (
  <>
    <Notification />
    <NewReferral />
    <ReferralMoney />
    <DayStatistics />
  </>
);
