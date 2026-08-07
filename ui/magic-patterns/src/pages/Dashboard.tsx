import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BellIcon, FilePlusIcon, FileTextIcon, PlusIcon, SparklesIcon } from 'lucide-react';
import { PhoneShell } from '../components/PhoneShell';
import { BottomNav } from '../components/BottomNav';
import { ProgressRing } from '../components/ProgressRing';
import { TaskRow } from '../components/TaskRow';
import { useApp } from '../contexts/AppContext';

export function Dashboard() {
  const navigate = useNavigate();
  const { t, user, activeCase, tasks, toggleTask, completedCount, progress, documents, unreadCount, language } = useApp();

  const pending = tasks.filter((task) => !task.completed).slice(0, 3);
  const firstName = (user?.fullName ?? 'Anita').split(' ')[0];

  return (
    <PhoneShell withNav>
      <header className="flex items-start justify-between px-5 pb-4 pt-7">
        <div>
          <p className="text-sm text-muted">{t('dashboard.greeting')}</p>
          <h1 className="mt-0.5 font-serif text-2xl text-ink">{firstName}</h1>
        </div>
        <Link
          to="/notifications"
          aria-label={`Reminders, ${unreadCount} unread`}
          className="relative flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface text-ink transition-colors hover:bg-sage-soft">
          
          <BellIcon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
          {unreadCount > 0 ?
          <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-clay" aria-hidden="true" /> :
          null}
        </Link>
      </header>

      <main className="flex-1 space-y-7 px-5 pb-6">
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          aria-labelledby="progress-heading"
          className="rounded-3xl border border-line bg-surface p-5 shadow-card">
          
          <div className="flex items-center gap-5">
            <ProgressRing value={progress} />
            <div className="min-w-0">
              <h2 id="progress-heading" className="font-serif text-lg text-ink">
                {t('dashboard.progress')}
              </h2>
              <p className="mt-1 text-sm text-muted">
                {completedCount} of {tasks.length} steps complete. You are doing enough.
              </p>
              <Link to="/workflow" className="mt-2 inline-block text-sm font-medium text-sage underline">
                View roadmap
              </Link>
            </div>
          </div>
        </motion.section>

        <section aria-labelledby="case-heading" className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 id="case-heading" className="font-serif text-lg text-ink">
              {t('dashboard.activeCases')}
            </h2>
            <button
              type="button"
              onClick={() => navigate('/case/new')}
              className="inline-flex items-center gap-1 text-sm font-medium text-sage">
              
              <PlusIcon className="h-4 w-4" aria-hidden="true" />
              {t('dashboard.newCase')}
            </button>
          </div>

          {activeCase ?
          <Link
            to="/workflow"
            className="block rounded-2xl border border-line bg-surface p-4 shadow-card transition-colors hover:border-sage/40">
            
              <div className="flex items-center justify-between">
                <p className="font-medium text-ink">{activeCase.deceasedName}</p>
                <span className="rounded-full bg-sage-soft px-2.5 py-1 text-[11px] font-medium text-sage">
                  {activeCase.archived ? 'Archived' : 'In progress'}
                </span>
              </div>
              <p className="mt-1 text-sm text-muted">
                {activeCase.relationship} · {activeCase.state} · Opened {activeCase.createdAt}
              </p>
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-canvas">
                <div className="h-full rounded-full bg-sage" style={{ width: `${progress}%` }} />
              </div>
            </Link> :

          <div className="rounded-2xl border border-dashed border-line bg-surface p-6 text-center">
              <p className="text-sm text-muted">No case yet. Start when you feel ready.</p>
            </div>
          }
        </section>

        <section aria-labelledby="pending-heading" className="space-y-3">
          <h2 id="pending-heading" className="font-serif text-lg text-ink">
            {t('dashboard.pendingTasks')}
          </h2>
          {pending.length ?
          <div className="space-y-2.5">
              {pending.map((task) =>
            <TaskRow key={task.id} task={task} onToggle={toggleTask} showHindi={language === 'hi'} />
            )}
            </div> :

          <div className="rounded-2xl border border-line bg-sage-soft p-5 text-center">
              <p className="text-sm text-sage">Nothing pending. Take the rest of today for yourself.</p>
            </div>
          }
        </section>

        <section aria-labelledby="docs-heading" className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 id="docs-heading" className="font-serif text-lg text-ink">
              {t('dashboard.recentDocuments')}
            </h2>
            <Link to="/vault" className="text-sm font-medium text-sage">
              See all
            </Link>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-1 no-scrollbar">
            {documents.slice(0, 4).map((doc) =>
            <Link
              key={doc.id}
              to="/vault"
              className="w-40 shrink-0 rounded-2xl border border-line bg-surface p-4 shadow-card">
              
                <FileTextIcon className="h-5 w-5 text-sage" strokeWidth={1.75} aria-hidden="true" />
                <p className="mt-3 line-clamp-2 text-sm font-medium text-ink">{doc.name}</p>
                <p className="mt-1 text-xs text-muted">
                  {doc.type} · {doc.sizeLabel}
                </p>
              </Link>
            )}
          </div>
        </section>

        <section aria-label="Quick actions" className="grid grid-cols-2 gap-3">
          <Link
            to="/case/new"
            className="flex min-h-[92px] flex-col justify-between rounded-2xl bg-sage p-4 text-white">
            
            <FilePlusIcon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
            <span className="text-sm font-medium">{t('dashboard.newCase')}</span>
          </Link>
          <Link
            to="/assistant"
            className="flex min-h-[92px] flex-col justify-between rounded-2xl border border-line bg-surface p-4 text-ink">
            
            <SparklesIcon className="h-5 w-5 text-clay" strokeWidth={1.75} aria-hidden="true" />
            <span className="text-sm font-medium">Ask the assistant</span>
          </Link>
        </section>
      </main>

      <BottomNav />
    </PhoneShell>);

}