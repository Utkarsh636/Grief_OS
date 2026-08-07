import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BellIcon, ChevronRightIcon, LogOutIcon, ShieldCheckIcon } from 'lucide-react';
import { PhoneShell } from '../components/PhoneShell';
import { BottomNav } from '../components/BottomNav';
import { useApp } from '../contexts/AppContext';
import { Language } from '../types';

export function Settings() {
  const navigate = useNavigate();
  const {
    t,
    user,
    logout,
    language,
    setLanguage,
    notificationsEnabled,
    setNotificationsEnabled
  } = useApp();

  const handleLogout = () => {
    logout();
    navigate('/welcome');
  };

  return (
    <PhoneShell withNav>
      <header className="px-5 pb-4 pt-7">
        <h1 className="font-serif text-2xl text-ink">{t('settings.title')}</h1>
      </header>

      <main className="flex-1 space-y-6 px-5 pb-6">
        <section className="flex items-center gap-4 rounded-2xl border border-line bg-surface p-4 shadow-card">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sage-soft font-serif text-lg text-sage">
            {(user?.fullName ?? 'Anita Kumar').charAt(0)}
          </span>
          <div className="min-w-0">
            <p className="truncate font-medium text-ink">{user?.fullName ?? 'Anita Kumar'}</p>
            <p className="truncate text-sm text-muted">{user?.email ?? 'anita@example.com'}</p>
          </div>
        </section>

        <section aria-labelledby="language-heading" className="rounded-2xl border border-line bg-surface p-4">
          <h2 id="language-heading" className="text-sm font-medium text-ink">
            {t('settings.language')}
          </h2>
          <div className="mt-3 grid grid-cols-2 gap-2" role="radiogroup" aria-labelledby="language-heading">
            {([
            { value: 'en', label: 'English' },
            { value: 'hi', label: 'हिन्दी' }] as
            {value: Language;label: string;}[]).map((option) =>
            <button
              key={option.value}
              type="button"
              role="radio"
              aria-checked={language === option.value}
              onClick={() => setLanguage(option.value)}
              className={`min-h-[48px] rounded-xl border text-[15px] transition-colors ${
              language === option.value ?
              'border-sage bg-sage-soft font-medium text-sage' :
              'border-line bg-canvas text-ink'}`
              }>
              
                {option.label}
              </button>
            )}
          </div>
        </section>

        <section className="divide-y divide-line overflow-hidden rounded-2xl border border-line bg-surface">
          <div className="flex items-center gap-3 p-4">
            <BellIcon className="h-5 w-5 text-sage" strokeWidth={1.75} aria-hidden="true" />
            <span className="flex-1 text-[15px] text-ink">{t('settings.notifications')}</span>
            <button
              type="button"
              role="switch"
              aria-checked={notificationsEnabled}
              aria-label={t('settings.notifications')}
              onClick={() => setNotificationsEnabled(!notificationsEnabled)}
              className={`relative h-7 w-12 rounded-full transition-colors ${
              notificationsEnabled ? 'bg-sage' : 'bg-line'}`
              }>
              
              <span
                className={`absolute top-1 h-5 w-5 rounded-full bg-white transition-all ${
                notificationsEnabled ? 'left-6' : 'left-1'}`
                } />
              
            </button>
          </div>

          <button
            type="button"
            onClick={() => navigate('/notifications')}
            className="flex w-full items-center gap-3 p-4 text-left transition-colors hover:bg-canvas">
            
            <ShieldCheckIcon className="h-5 w-5 text-sage" strokeWidth={1.75} aria-hidden="true" />
            <span className="flex-1 text-[15px] text-ink">
              {t('settings.privacy')}
              <span className="mt-0.5 block text-xs text-muted">Documents stay encrypted on this device</span>
            </span>
            <ChevronRightIcon className="h-4 w-4 text-muted" aria-hidden="true" />
          </button>
        </section>

        <button
          type="button"
          onClick={handleLogout}
          className="flex w-full items-center justify-center gap-2 rounded-2xl border border-clay/20 bg-clay-soft py-4 text-[15px] font-medium text-clay">
          
          <LogOutIcon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
          {t('settings.logout')}
        </button>

        <p className="pb-2 text-center text-xs text-muted">GriefOS · Version 1.0</p>
      </main>

      <BottomNav />
    </PhoneShell>);

}