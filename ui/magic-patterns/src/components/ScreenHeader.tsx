import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeftIcon } from 'lucide-react';

interface ScreenHeaderProps {
  title: string;
  subtitle?: string;
  onBack?: () => void;
  action?: React.ReactNode;
}

export function ScreenHeader({ title, subtitle, onBack, action }: ScreenHeaderProps) {
  const navigate = useNavigate();

  return (
    <header className="px-5 pt-6 pb-4">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <button
            type="button"
            onClick={onBack ?? (() => navigate(-1))}
            aria-label="Go back"
            className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line bg-surface text-ink transition-colors hover:bg-sage-soft">
            
            <ChevronLeftIcon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
          </button>
          <div>
            <h1 className="font-serif text-2xl leading-tight text-ink">{title}</h1>
            {subtitle ? <p className="mt-1 text-sm text-muted">{subtitle}</p> : null}
          </div>
        </div>
        {action}
      </div>
    </header>);

}