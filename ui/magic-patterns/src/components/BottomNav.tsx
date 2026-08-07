import React from 'react';
import { NavLink } from 'react-router-dom';
import { FolderIcon, HouseIcon, SettingsIcon, SparklesIcon } from 'lucide-react';
import { useApp } from '../contexts/AppContext';

const items = [
{ to: '/dashboard', icon: HouseIcon, key: 'nav.home' },
{ to: '/assistant', icon: SparklesIcon, key: 'nav.assistant' },
{ to: '/vault', icon: FolderIcon, key: 'nav.documents' },
{ to: '/settings', icon: SettingsIcon, key: 'nav.settings' }];


export function BottomNav() {
  const { t } = useApp();

  return (
    <nav
      aria-label="Primary"
      className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-surface/95 backdrop-blur border-t border-line">
      
      <ul className="flex items-stretch">
        {items.map(({ to, icon: Icon, key }) =>
        <li key={to} className="flex-1">
            <NavLink
            to={to}
            className={({ isActive }) =>
            `flex flex-col items-center gap-1 py-3 pb-5 text-[11px] font-medium transition-colors ${
            isActive ? 'text-sage' : 'text-muted hover:text-ink'}`

            }>
            
              {({ isActive }) =>
            <>
                  <span
                className={`flex h-9 w-14 items-center justify-center rounded-full transition-colors ${
                isActive ? 'bg-sage-soft' : 'bg-transparent'}`
                }>
                
                    <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  {t(key)}
                </>
            }
            </NavLink>
          </li>
        )}
      </ul>
    </nav>);

}