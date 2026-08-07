import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2Icon, PencilIcon } from 'lucide-react';
import { PhoneShell } from '../components/PhoneShell';
import { ScreenHeader } from '../components/ScreenHeader';
import { Button } from '../components/Button';
import { useApp } from '../contexts/AppContext';
import { ExtractedField } from '../types';

export function OcrVerification() {
  const navigate = useNavigate();
  const { t, activeCase } = useApp();
  const [fields, setFields] = useState<ExtractedField[]>([
  { key: 'name', label: 'Name', value: activeCase?.deceasedName ?? 'Ramesh Kumar' },
  { key: 'address', label: 'Address', value: '12/B Shanti Nagar, Andheri East, Mumbai 400069' },
  { key: 'documentType', label: 'Document type', value: 'Aadhaar Card' },
  { key: 'number', label: 'Document number', value: 'XXXX XXXX 4417' }]
  );
  const [editing, setEditing] = useState<string | null>(null);

  const updateField = (key: string, value: string) =>
  setFields((current) => current.map((field) => field.key === key ? { ...field, value } : field));

  return (
    <PhoneShell>
      <ScreenHeader title={t('ocr.title')} subtitle={t('ocr.subtitle')} onBack={() => navigate('/scan')} />
      <main className="flex flex-1 flex-col px-5 pb-10">
        <div className="mb-5 flex items-start gap-3 rounded-2xl bg-sage-soft px-4 py-3.5">
          <CheckCircle2Icon className="mt-0.5 h-5 w-5 shrink-0 text-sage" strokeWidth={1.75} aria-hidden="true" />
          <p className="text-sm leading-relaxed text-sage">
            We read 4 fields from your document. Everything stays on your device until you confirm.
          </p>
        </div>

        <ul className="space-y-3">
          {fields.map((field) =>
          <li key={field.key} className="rounded-2xl border border-line bg-surface p-4 shadow-card">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0 flex-1">
                  <p className="text-xs uppercase tracking-wide text-muted">{field.label}</p>
                  {editing === field.key ?
                <input
                  autoFocus
                  value={field.value}
                  onChange={(event) => updateField(field.key, event.target.value)}
                  onBlur={() => setEditing(null)}
                  aria-label={field.label}
                  className="mt-1.5 w-full rounded-xl border border-sage bg-canvas px-3 py-2 text-[15px] text-ink focus:outline-none" /> :


                <p className="mt-1 text-[15px] leading-snug text-ink">{field.value}</p>
                }
                </div>
                <button
                type="button"
                onClick={() => setEditing(editing === field.key ? null : field.key)}
                aria-label={`Edit ${field.label}`}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-muted transition-colors hover:bg-sage-soft hover:text-sage">
                
                  <PencilIcon className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                </button>
              </div>
            </li>
          )}
        </ul>

        <div className="mt-auto pt-10">
          <Button fullWidth onClick={() => navigate('/workflow')}>
            {t('common.confirm')}
          </Button>
        </div>
      </main>
    </PhoneShell>);

}