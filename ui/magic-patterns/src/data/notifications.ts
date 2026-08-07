import { Reminder } from '../types';

export const initialReminders: Reminder[] = [
{
  id: 'n-1',
  title: 'Insurance claim window closing',
  body: 'The LIC claim for policy 4472-98 should be filed within the next 12 days.',
  when: 'Today, 9:00 AM',
  read: false,
  tone: 'deadline'
},
{
  id: 'n-2',
  title: 'Bank passbook still processing',
  body: 'We are reading the SBI passbook you uploaded. No action needed from you.',
  when: 'Yesterday',
  read: false,
  tone: 'update'
},
{
  id: 'n-3',
  title: 'Keep 8 certified copies',
  body: 'Most offices keep the death certificate they receive. Order extra copies now.',
  when: '2 days ago',
  read: true,
  tone: 'reminder'
},
{
  id: 'n-4',
  title: 'Pension office appointment',
  body: 'Family pension applications are accepted on weekdays between 10 AM and 1 PM.',
  when: '4 days ago',
  read: true,
  tone: 'reminder'
}];