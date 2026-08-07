import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LockIcon } from 'lucide-react';
import { PhoneShell } from '../components/PhoneShell';
import { Button } from '../components/Button';
import { useApp } from '../contexts/AppContext';

export function Welcome() {
  const navigate = useNavigate();
  const { t } = useApp();

  return (
    <PhoneShell>
      <main className="flex flex-1 flex-col px-6 pb-10 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1">
          
          <span className="inline-flex items-center gap-2 rounded-full bg-sage-soft px-3 py-1.5 text-xs font-medium text-sage">
            <LockIcon className="h-3.5 w-3.5" aria-hidden="true" />
            Private by default
          </span>

          <h1 className="mt-8 font-serif text-[34px] leading-[1.15] text-ink">{t('welcome.title')}</h1>
          <p className="mt-4 max-w-[34ch] text-[15px] leading-relaxed text-muted">{t('welcome.body')}</p>

          <ul className="mt-10 space-y-3">
            {[
            'A roadmap built for your state and situation',
            'Documents scanned once, reused everywhere',
            'Plain-language answers whenever you are stuck'].
            map((item) =>
            <li key={item} className="flex items-start gap-3 text-[15px] text-ink">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-clay" aria-hidden="true" />
                {item}
              </li>
            )}
          </ul>
        </motion.div>

        <div className="space-y-3 pt-10">
          <Button fullWidth onClick={() => navigate('/register')}>
            {t('welcome.register')}
          </Button>
          <Button variant="secondary" fullWidth onClick={() => navigate('/login')}>
            {t('welcome.login')}
          </Button>
        </div>
      </main>
    </PhoneShell>);

}