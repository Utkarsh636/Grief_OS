import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckIcon } from 'lucide-react';
import { PhoneShell } from '../components/PhoneShell';
import { ScreenHeader } from '../components/ScreenHeader';
import { Button } from '../components/Button';
import { useApp } from '../contexts/AppContext';
import { Language } from '../types';

const options: {value: Language;label: string;caption: string;}[] = [
{ value: 'en', label: 'English', caption: 'Continue in English' },
{ value: 'hi', label: 'हिन्दी', caption: 'हिन्दी में जारी रखें' }];


export function LanguageSelection() {
  const navigate = useNavigate();
  const { language, setLanguage, t } = useApp();

  return (
    <PhoneShell>
      <ScreenHeader title={t('language.title')} subtitle={t('language.subtitle')} onBack={() => navigate('/welcome')} />
      <main className="flex flex-1 flex-col px-5 pb-10">
        <ul className="space-y-3" role="radiogroup" aria-label="Language">
          {options.map((option) => {
            const selected = language === option.value;
            return (
              <li key={option.value}>
                <button
                  type="button"
                  role="radio"
                  aria-checked={selected}
                  onClick={() => setLanguage(option.value)}
                  className={`flex w-full items-center justify-between rounded-2xl border px-5 py-5 text-left transition-colors ${
                  selected ? 'border-sage bg-sage-soft' : 'border-line bg-surface hover:border-sage/40'}`
                  }>
                  
                  <span>
                    <span className="block font-serif text-xl text-ink">{option.label}</span>
                    <span className="mt-0.5 block text-sm text-muted">{option.caption}</span>
                  </span>
                  <span
                    className={`flex h-7 w-7 items-center justify-center rounded-full border ${
                    selected ? 'border-sage bg-sage text-white' : 'border-line text-transparent'}`
                    }
                    aria-hidden="true">
                    
                    <CheckIcon className="h-4 w-4" strokeWidth={2.5} />
                  </span>
                </button>
              </li>);

          })}
        </ul>

        <div className="mt-auto pt-10">
          <Button fullWidth onClick={() => navigate('/dashboard')}>
            {t('common.continue')}
          </Button>
        </div>
      </main>
    </PhoneShell>);

}