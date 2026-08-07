import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CameraIcon, CheckIcon, UploadIcon } from 'lucide-react';
import { PhoneShell } from '../components/PhoneShell';
import { ScreenHeader } from '../components/ScreenHeader';
import { Button } from '../components/Button';
import { scannableDocuments } from '../data/documents';
import { useApp } from '../contexts/AppContext';

export function DocumentScanner() {
  const navigate = useNavigate();
  const { t, language, addDocument } = useApp();
  const [selected, setSelected] = useState(scannableDocuments[0].id);
  const [captured, setCaptured] = useState<string[]>([]);
  const [scanning, setScanning] = useState(false);

  const current = scannableDocuments.find((doc) => doc.id === selected)!;

  const capture = (source: 'capture' | 'upload') => {
    setScanning(true);
    window.setTimeout(() => {
      setScanning(false);
      setCaptured((list) => list.includes(selected) ? list : [...list, selected]);
      addDocument(`${current.name}${source === 'upload' ? '' : ' (scan)'}`);
      const next = scannableDocuments.find((doc) => !captured.includes(doc.id) && doc.id !== selected);
      if (next) setSelected(next.id);
    }, 1100);
  };

  return (
    <PhoneShell>
      <ScreenHeader title={t('scanner.title')} subtitle={t('scanner.subtitle')} onBack={() => navigate('/case/new')} />
      <main className="flex flex-1 flex-col px-5 pb-10">
        <div className="relative mb-5 overflow-hidden rounded-3xl border border-line bg-ink/90 p-4">
          <div className="relative flex h-52 items-center justify-center rounded-2xl border-2 border-dashed border-white/30">
            {scanning ?
            <motion.div
              className="absolute inset-x-6 h-0.5 rounded-full bg-sage"
              animate={{ y: [-80, 80, -80] }}
              transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }} /> :

            null}
            <p className="px-8 text-center text-sm text-white/70">
              {scanning ? 'Reading the document…' : `Place the ${current.name.toLowerCase()} inside the frame`}
            </p>
          </div>
        </div>

        <fieldset className="space-y-2.5">
          <legend className="mb-2 text-sm font-medium text-ink">Which document is this?</legend>
          {scannableDocuments.map((doc) => {
            const isCaptured = captured.includes(doc.id);
            const isSelected = selected === doc.id;
            return (
              <label
                key={doc.id}
                className={`flex cursor-pointer items-center gap-3 rounded-2xl border px-4 py-3.5 transition-colors ${
                isSelected ? 'border-sage bg-sage-soft' : 'border-line bg-surface'}`
                }>
                
                <input
                  type="radio"
                  name="document-type"
                  className="sr-only"
                  checked={isSelected}
                  onChange={() => setSelected(doc.id)} />
                
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-full border ${
                  isCaptured ? 'border-sage bg-sage text-white' : 'border-line text-transparent'}`
                  }
                  aria-hidden="true">
                  
                  <CheckIcon className="h-4 w-4" strokeWidth={2.5} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[15px] font-medium text-ink">
                    {language === 'hi' ? doc.nameHi : doc.name}
                  </span>
                  <span className="block text-xs text-muted">{isCaptured ? 'Added' : doc.hint}</span>
                </span>
              </label>);

          })}
        </fieldset>

        <div className="mt-auto space-y-3 pt-8">
          <div className="grid grid-cols-2 gap-3">
            <Button
              variant="secondary"
              onClick={() => capture('capture')}
              disabled={scanning}
              icon={<CameraIcon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />}>
              
              {t('scanner.capture')}
            </Button>
            <Button
              variant="secondary"
              onClick={() => capture('upload')}
              disabled={scanning}
              icon={<UploadIcon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />}>
              
              {t('scanner.upload')}
            </Button>
          </div>
          <Button fullWidth onClick={() => navigate('/verify')} disabled={captured.length === 0}>
            {t('common.continue')}
          </Button>
          <button
            type="button"
            onClick={() => navigate('/verify')}
            className="w-full py-1 text-sm font-medium text-muted underline">
            
            {t('common.skip')}
          </button>
        </div>
      </main>
    </PhoneShell>);

}