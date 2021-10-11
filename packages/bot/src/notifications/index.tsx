import React from 'react';
import { Notification } from './Notification';
import { ReferralMoney } from './ReferralMoney';
import { NewReferral } from './NewReferral';

export const Notifications = () => (
  <>
    <Notification />
    <NewReferral />
    <ReferralMoney />
  </>
);
