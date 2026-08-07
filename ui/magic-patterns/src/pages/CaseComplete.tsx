import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArchiveIcon, CheckIcon, DownloadIcon } from 'lucide-react';
import { PhoneShell } from '../components/PhoneShell';
import { Button } from '../components/Button';
import { useApp } from '../contexts/AppContext';

export function CaseComplete() {
  const navigate = useNavigate();
  const { t, tasks, completedCount, documents, activeCase, archiveCase } = useApp();

  const handleArchive = () => {
    archiveCase();
    navigate('/dashboard');
  };

  return (
    <PhoneShell>
      <main className="flex flex-1 flex-col px-6 pb-10 pt-16">
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-sage-soft">
          
          <CheckIcon className="h-9 w-9 text-sage" strokeWidth={1.75} aria-hidden="true" />
        </motion.div>

        <h1 className="mt-7 text-center font-serif text-[28px] leading-tight text-ink">{t('complete.title')}</h1>
        <p className="mx-auto mt-3 max-w-[30ch] text-center text-[15px] leading-relaxed text-muted">
          {activeCase ? `The formalities for ${activeCase.deceasedName} are settled.` : 'The formalities are settled.'}{' '}
          Whatever comes next, it can wait.
        </p>

        <section
          aria-label="Progress summary"
          className="mt-9 divide-y divide-line overflow-hidden rounded-3xl border border-line bg-surface shadow-card">
          
          {[
          { label: 'Steps completed', value: `${completedCount} of ${tasks.length}` },
          { label: 'Documents stored', value: `${documents.length}` },
          { label: 'Case opened', value: activeCase?.createdAt ?? '—' },
          { label: 'State', value: activeCase?.state ?? '—' }].
          map((row) =>
          <div key={row.label} className="flex items-center justify-between px-5 py-4">
              <span className="text-sm text-muted">{row.label}</span>
              <span className="text-[15px] font-medium text-ink">{row.value}</span>
            </div>
          )}
        </section>

        <div className="mt-auto space-y-3 pt-10">
          <Button fullWidth icon={<DownloadIcon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />}>
            Download summary report
          </Button>
          <Button
            variant="secondary"
            fullWidth
            onClick={handleArchive}
            icon={<ArchiveIcon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />}>
            
            Archive this case
          </Button>
          <Button variant="ghost" fullWidth onClick={() => navigate('/dashboard')}>
            Back to home
          </Button>
        </div>
      </main>
    </PhoneShell>);

}