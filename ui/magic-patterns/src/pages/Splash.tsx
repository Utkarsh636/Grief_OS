import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PhoneShell } from '../components/PhoneShell';
import { useApp } from '../contexts/AppContext';
import { useScreenInit } from '../useScreenInit.js';

export function Splash() {
  const navigate = useNavigate();
  const { t } = useApp();
  const screenInit = useScreenInit();
  const [autoAdvance] = useState<boolean>(screenInit.autoAdvance ?? true);

  useEffect(() => {
    if (!autoAdvance) return;
    const timer = window.setTimeout(() => navigate('/welcome'), 2200);
    return () => window.clearTimeout(timer);
  }, [navigate, autoAdvance]);

  return (
    <PhoneShell>
      <main className="flex flex-1 flex-col items-center justify-center gap-6 px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex h-24 w-24 items-center justify-center rounded-full bg-sage-soft">
          
          <svg width="46" height="46" viewBox="0 0 46 46" fill="none" aria-hidden="true">
            <path
              d="M23 41C23 41 23 27 23 20C23 12 17 6 9 6C9 15 14 21 23 23"
              stroke="#4F6F5E"
              strokeWidth="2"
              strokeLinecap="round" />
            
            <path
              d="M23 26C29 24 34 19 34 11C28 11 24 15 23 20"
              stroke="#B4744A"
              strokeWidth="2"
              strokeLinecap="round" />
            
          </svg>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="text-center">
          
          <h1 className="font-serif text-3xl tracking-tight text-ink">GriefOS</h1>
          <p className="mt-2 text-sm text-muted">{t('app.tagline')}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-4 h-1 w-32 overflow-hidden rounded-full bg-line"
          role="progressbar"
          aria-label="Loading">
          
          <motion.div
            className="h-full w-1/3 rounded-full bg-sage"
            animate={{ x: ['-100%', '300%'] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }} />
          
        </motion.div>
      </main>
    </PhoneShell>);

}