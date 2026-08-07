import React from 'react';
import { Link } from 'react-router-dom';
import { CheckIcon, ChevronRightIcon } from 'lucide-react';
import { Task, TaskPriority } from '../types';

const priorityStyles: Record<TaskPriority, {label: string;className: string;}> = {
  urgent: { label: 'Urgent', className: 'bg-clay-soft text-clay' },
  important: { label: 'Important', className: 'bg-amber-soft text-[#8A6A2F]' },
  later: { label: 'Later', className: 'bg-canvas text-muted border border-line' }
};

interface TaskRowProps {
  task: Task;
  onToggle?: (id: string) => void;
  showHindi?: boolean;
}

export function TaskRow({ task, onToggle, showHindi = false }: TaskRowProps) {
  const priority = priorityStyles[task.priority];

  return (
    <div className="flex items-center gap-3 rounded-2xl border border-line bg-surface p-3.5 shadow-card">
      <button
        type="button"
        onClick={() => onToggle?.(task.id)}
        aria-pressed={task.completed}
        aria-label={task.completed ? `Mark ${task.title} as not done` : `Mark ${task.title} as done`}
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors ${
        task.completed ? 'border-sage bg-sage text-white' : 'border-line bg-canvas text-transparent hover:border-sage'}`
        }>
        
        <CheckIcon className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
      </button>

      <Link to={`/task/${task.id}`} className="min-w-0 flex-1">
        <p
          className={`truncate text-[15px] font-medium ${
          task.completed ? 'text-muted line-through' : 'text-ink'}`
          }>
          
          {showHindi ? task.titleHi : task.title}
        </p>
        <p className="mt-0.5 truncate text-xs text-muted">
          {task.authority} · {task.timeline}
        </p>
      </Link>

      <span className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-medium ${priority.className}`}>
        {priority.label}
      </span>
      <ChevronRightIcon className="h-4 w-4 shrink-0 text-muted" aria-hidden="true" />
    </div>);

}