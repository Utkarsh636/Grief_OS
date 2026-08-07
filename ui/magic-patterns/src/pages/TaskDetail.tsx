import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CheckIcon, ExternalLinkIcon, FileTextIcon, SparklesIcon } from 'lucide-react';
import { PhoneShell } from '../components/PhoneShell';
import { ScreenHeader } from '../components/ScreenHeader';
import { Button } from '../components/Button';
import { useApp } from '../contexts/AppContext';

export function TaskDetail() {
  const { taskId } = useParams();
  const navigate = useNavigate();
  const { tasks, toggleTask, completedCount, language } = useApp();
  const task = tasks.find((item) => item.id === taskId);

  if (!task) {
    return (
      <PhoneShell>
        <ScreenHeader title="Task not found" onBack={() => navigate('/workflow')} />
        <main className="px-5">
          <p className="text-sm text-muted">This step is no longer part of your roadmap.</p>
        </main>
      </PhoneShell>);

  }

  const handleComplete = () => {
    toggleTask(task.id);
    if (!task.completed && completedCount + 1 === tasks.length) {
      navigate('/complete');
    } else {
      navigate('/workflow');
    }
  };

  return (
    <PhoneShell>
      <ScreenHeader
        title={language === 'hi' ? task.titleHi : task.title}
        subtitle={`${task.authority} · ${task.timeline}`}
        onBack={() => navigate('/workflow')} />
      
      <main className="flex-1 space-y-6 px-5 pb-10">
        <section className="rounded-2xl border border-line bg-surface p-4 shadow-card">
          <h2 className="font-serif text-base text-ink">What this means</h2>
          <p className="mt-2 text-[15px] leading-relaxed text-muted">{task.description}</p>
        </section>

        <section aria-labelledby="docs-needed">
          <h2 id="docs-needed" className="font-serif text-base text-ink">
            What to bring
          </h2>
          <ul className="mt-3 space-y-2">
            {task.requiredDocuments.map((doc) =>
            <li
              key={doc}
              className="flex items-center gap-3 rounded-xl border border-line bg-surface px-4 py-3 text-[15px] text-ink">
              
                <FileTextIcon className="h-4 w-4 shrink-0 text-sage" strokeWidth={1.75} aria-hidden="true" />
                {doc}
              </li>
            )}
          </ul>
        </section>

        <section className="rounded-2xl bg-sage-soft p-4">
          <div className="flex items-center gap-2">
            <SparklesIcon className="h-4 w-4 text-sage" strokeWidth={1.75} aria-hidden="true" />
            <h2 className="text-sm font-semibold text-sage">In plain words</h2>
          </div>
          <p className="mt-2 text-[15px] leading-relaxed text-sage-dark">{task.aiExplanation}</p>
        </section>

        <a
          href={task.website.url}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-between rounded-2xl border border-line bg-surface px-4 py-4 text-[15px] font-medium text-ink transition-colors hover:border-sage/40">
          
          <span>
            Official website
            <span className="mt-0.5 block text-xs font-normal text-muted">{task.website.label}</span>
          </span>
          <ExternalLinkIcon className="h-4 w-4 text-sage" strokeWidth={1.75} aria-hidden="true" />
        </a>

        <div className="space-y-3 pt-2">
          <Button
            fullWidth
            variant={task.completed ? 'secondary' : 'primary'}
            onClick={handleComplete}
            icon={task.completed ? undefined : <CheckIcon className="h-5 w-5" strokeWidth={2} aria-hidden="true" />}>
            
            {task.completed ? 'Mark as not done' : 'Mark as complete'}
          </Button>
          <Button variant="ghost" fullWidth onClick={() => navigate('/assistant')}>
            Ask the assistant about this
          </Button>
        </div>
      </main>
    </PhoneShell>);

}