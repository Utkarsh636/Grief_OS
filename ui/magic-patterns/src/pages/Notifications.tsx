import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AlarmClockIcon, BellIcon, InfoIcon } from 'lucide-react';
import { PhoneShell } from '../components/PhoneShell';
import { ScreenHeader } from '../components/ScreenHeader';
import { useApp } from '../contexts/AppContext';
import { Reminder } from '../types';

const toneIcon: Record<Reminder['tone'], React.ComponentType<{className?: string;}>> = {
  deadline: AlarmClockIcon,
  update: InfoIcon,
  reminder: BellIcon
};

const toneStyles: Record<Reminder['tone'], string> = {
  deadline: 'bg-clay-soft text-clay',
  update: 'bg-amber-soft text-[#8A6A2F]',
  reminder: 'bg-sage-soft text-sage'
};

export function Notifications() {
  const navigate = useNavigate();
  const { t, reminders, markReminderRead, markAllRemindersRead, unreadCount } = useApp();

  return (
    <PhoneShell>
      <ScreenHeader
        title={t('notifications.title')}
        subtitle={unreadCount ? `${unreadCount} unread` : 'You are all caught up'}
        onBack={() => navigate('/dashboard')}
        action={
        unreadCount ?
        <button
          type="button"
          onClick={markAllRemindersRead}
          className="mt-1 shrink-0 text-sm font-medium text-sage underline">
          
              Mark all read
            </button> :
        undefined
        } />
      
      <main className="flex-1 px-5 pb-10">
        <ul className="space-y-2.5">
          {reminders.map((reminder) => {
            const Icon = toneIcon[reminder.tone];
            return (
              <li key={reminder.id}>
                <button
                  type="button"
                  onClick={() => markReminderRead(reminder.id)}
                  className={`flex w-full items-start gap-3 rounded-2xl border p-4 text-left transition-colors ${
                  reminder.read ? 'border-line bg-surface/60' : 'border-sage/30 bg-surface shadow-card'}`
                  }>
                  
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${toneStyles[reminder.tone]}`}>
                    
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-center gap-2">
                      <span className={`text-[15px] ${reminder.read ? 'text-muted' : 'font-medium text-ink'}`}>
                        {reminder.title}
                      </span>
                      {!reminder.read ?
                      <span className="h-2 w-2 shrink-0 rounded-full bg-clay" aria-label="Unread" /> :
                      null}
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed text-muted">{reminder.body}</span>
                    <span className="mt-1.5 block text-xs text-muted/80">{reminder.when}</span>
                  </span>
                </button>
              </li>);

          })}
        </ul>
      </main>
    </PhoneShell>);

}