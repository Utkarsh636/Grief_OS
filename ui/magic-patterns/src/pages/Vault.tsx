import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DownloadIcon, FileTextIcon, LockIcon, Trash2Icon, UploadIcon } from 'lucide-react';
import { PhoneShell } from '../components/PhoneShell';
import { BottomNav } from '../components/BottomNav';
import { Button } from '../components/Button';
import { useApp } from '../contexts/AppContext';
import { DocumentStatus } from '../types';

const statusStyles: Record<DocumentStatus, {label: string;className: string;}> = {
  verified: { label: 'Verified', className: 'bg-sage-soft text-sage' },
  processing: { label: 'Reading…', className: 'bg-amber-soft text-[#8A6A2F]' },
  missing: { label: 'Missing', className: 'bg-clay-soft text-clay' }
};

export function Vault() {
  const navigate = useNavigate();
  const { t, documents, removeDocument } = useApp();

  return (
    <PhoneShell withNav>
      <header className="px-5 pb-4 pt-7">
        <h1 className="font-serif text-2xl text-ink">{t('vault.title')}</h1>
        <p className="mt-1 flex items-center gap-1.5 text-sm text-muted">
          <LockIcon className="h-3.5 w-3.5" aria-hidden="true" />
          {documents.length} documents, encrypted on your device
        </p>
      </header>

      <main className="flex-1 px-5 pb-6">
        {documents.length === 0 ?
        <div className="rounded-2xl border border-dashed border-line bg-surface p-8 text-center">
            <FileTextIcon className="mx-auto h-6 w-6 text-muted" strokeWidth={1.5} aria-hidden="true" />
            <p className="mt-3 text-sm text-muted">Nothing stored yet. Add a document when you have it.</p>
          </div> :

        <ul className="space-y-2.5">
            {documents.map((doc) => {
            const status = statusStyles[doc.status];
            return (
              <li key={doc.id} className="rounded-2xl border border-line bg-surface p-4 shadow-card">
                  <div className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-canvas">
                      <FileTextIcon className="h-5 w-5 text-sage" strokeWidth={1.75} aria-hidden="true" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[15px] font-medium text-ink">{doc.name}</p>
                      <p className="mt-0.5 text-xs text-muted">
                        {doc.type} · {doc.sizeLabel} · {doc.uploadedAt}
                      </p>
                    </div>
                    <span className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-medium ${status.className}`}>
                      {status.label}
                    </span>
                  </div>

                  <div className="mt-3 flex gap-2 border-t border-line pt-3">
                    <button
                    type="button"
                    className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-sage transition-colors hover:bg-sage-soft">
                    
                      <DownloadIcon className="h-3.5 w-3.5" aria-hidden="true" />
                      Download
                    </button>
                    <button
                    type="button"
                    onClick={() => removeDocument(doc.id)}
                    className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-clay transition-colors hover:bg-clay-soft">
                    
                      <Trash2Icon className="h-3.5 w-3.5" aria-hidden="true" />
                      Delete
                    </button>
                  </div>
                </li>);

          })}
          </ul>
        }

        <div className="mt-6">
          <Button
            fullWidth
            onClick={() => navigate('/scan')}
            icon={<UploadIcon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />}>
            
            Add a document
          </Button>
        </div>
      </main>

      <BottomNav />
    </PhoneShell>);

}