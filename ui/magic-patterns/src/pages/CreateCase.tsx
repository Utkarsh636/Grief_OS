import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PhoneShell } from '../components/PhoneShell';
import { ScreenHeader } from '../components/ScreenHeader';
import { SelectField, TextField } from '../components/TextField';
import { Button } from '../components/Button';
import { useApp } from '../contexts/AppContext';

const relationships = ['Father', 'Mother', 'Spouse', 'Sibling', 'Child', 'Other relative'];
const states = [
'Maharashtra',
'Delhi',
'Karnataka',
'Tamil Nadu',
'Uttar Pradesh',
'West Bengal',
'Gujarat',
'Kerala'];


export function CreateCase() {
  const navigate = useNavigate();
  const { t, createCase } = useApp();
  const [form, setForm] = useState({
    deceasedName: '',
    relationship: relationships[0],
    state: states[0],
    dateOfDeath: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!form.deceasedName || !form.dateOfDeath) {
      setError('Please add the name and the date so we can build the roadmap.');
      return;
    }
    setError('');
    createCase(form);
    navigate('/scan');
  };

  return (
    <PhoneShell>
      <ScreenHeader title={t('case.title')} subtitle={t('case.subtitle')} onBack={() => navigate('/dashboard')} />
      <main className="flex flex-1 flex-col px-5 pb-10">
        <div className="mb-5 rounded-2xl bg-sage-soft px-4 py-3 text-sm leading-relaxed text-sage">
          Take your time. Nothing here is shared with anyone, and you can edit it later.
        </div>

        <form onSubmit={handleSubmit} className="flex flex-1 flex-col">
          <div className="space-y-4">
            <TextField
              label="Name of the deceased"
              value={form.deceasedName}
              onChange={(event) => setForm({ ...form, deceasedName: event.target.value })} />
            
            <SelectField
              label="Your relationship"
              options={relationships}
              value={form.relationship}
              onChange={(event) => setForm({ ...form, relationship: event.target.value })} />
            
            <SelectField
              label="State"
              options={states}
              value={form.state}
              onChange={(event) => setForm({ ...form, state: event.target.value })} />
            
            <TextField
              label="Date of death"
              type="date"
              value={form.dateOfDeath}
              onChange={(event) => setForm({ ...form, dateOfDeath: event.target.value })}
              hint="This sets the deadlines we remind you about." />
            
          </div>

          {error ?
          <p role="alert" className="mt-4 rounded-xl bg-clay-soft px-4 py-3 text-sm text-clay">
              {error}
            </p> :
          null}

          <div className="mt-auto pt-10">
            <Button type="submit" fullWidth>
              {t('common.continue')}
            </Button>
          </div>
        </form>
      </main>
    </PhoneShell>);

}