import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PhoneShell } from '../components/PhoneShell';
import { ScreenHeader } from '../components/ScreenHeader';
import { TaskRow } from '../components/TaskRow';
import { Button } from '../components/Button';
import { useApp } from '../contexts/AppContext';
import { TaskPriority } from '../types';

const groups: {priority: TaskPriority;label: string;caption: string;}[] = [
{ priority: 'urgent', label: 'Do first', caption: 'Time-sensitive, everything else depends on these' },
{ priority: 'important', label: 'Do soon', caption: 'Within the next few weeks' },
{ priority: 'later', label: 'Can wait', caption: 'No pressure — handle when you are ready' }];


export function Workflow() {
  const navigate = useNavigate();
  const { t, tasks, toggleTask, progress, completedCount, activeCase, language } = useApp();
  const allDone = completedCount === tasks.length;

  return (
    <PhoneShell>
      <ScreenHeader
        title={t('workflow.title')}
        subtitle={activeCase ? `For ${activeCase.deceasedName} · ${activeCase.state}` : undefined}
        onBack={() => navigate('/dashboard')} />
      
      <main className="flex-1 px-5 pb-10">
        <div className="mb-6 rounded-2xl border border-line bg-surface p-4 shadow-card">
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium text-ink">
              {completedCount} of {tasks.length} complete
            </span>
            <span className="text-muted">{progress}%</span>
          </div>
          <div className="mt-2.5 h-2 overflow-hidden rounded-full bg-canvas">
            <motion.div
              className="h-full rounded-full bg-sage"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} />
            
          </div>
        </div>

        <div className="space-y-7">
          {groups.map((group) => {
            const groupTasks = tasks.filter((task) => task.priority === group.priority);
            if (!groupTasks.length) return null;
            return (
              <section key={group.priority} aria-labelledby={`group-${group.priority}`}>
                <h2 id={`group-${group.priority}`} className="font-serif text-lg text-ink">
                  {group.label}
                </h2>
                <p className="mb-3 mt-0.5 text-sm text-muted">{group.caption}</p>
                <div className="space-y-2.5">
                  {groupTasks.map((task) =>
                  <TaskRow key={task.id} task={task} onToggle={toggleTask} showHindi={language === 'hi'} />
                  )}
                </div>
              </section>);

          })}
        </div>

        {allDone ?
        <div className="mt-8">
            <Button fullWidth onClick={() => navigate('/complete')}>
              See your summary
            </Button>
          </div> :
        null}
      </main>
    </PhoneShell>);

}