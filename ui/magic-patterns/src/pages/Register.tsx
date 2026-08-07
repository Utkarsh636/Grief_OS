import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PhoneShell } from '../components/PhoneShell';
import { ScreenHeader } from '../components/ScreenHeader';
import { TextField } from '../components/TextField';
import { Button } from '../components/Button';
import { useApp } from '../contexts/AppContext';

export function Register() {
  const navigate = useNavigate();
  const { t, login } = useApp();
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');

  const update = (key: keyof typeof form) => (event: React.ChangeEvent<HTMLInputElement>) =>
  setForm((current) => ({ ...current, [key]: event.target.value }));

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!form.fullName || !form.email || !form.phone || !form.password) {
      setError('Please fill in every field so we can create your account.');
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError('The two passwords do not match.');
      return;
    }
    setError('');
    login({ fullName: form.fullName, email: form.email, phone: form.phone });
    navigate('/language');
  };

  return (
    <PhoneShell>
      <ScreenHeader title={t('register.title')} subtitle={t('register.subtitle')} onBack={() => navigate('/welcome')} />
      <main className="flex flex-1 flex-col px-5 pb-10">
        <form onSubmit={handleSubmit} className="flex flex-1 flex-col">
          <div className="space-y-4">
            <TextField label="Full name" value={form.fullName} onChange={update('fullName')} autoComplete="name" />
            <TextField
              label="Email"
              type="email"
              value={form.email}
              onChange={update('email')}
              autoComplete="email" />
            
            <TextField
              label="Phone number"
              type="tel"
              value={form.phone}
              onChange={update('phone')}
              autoComplete="tel"
              hint="Used only for reminders about deadlines." />
            
            <TextField
              label="Password"
              type="password"
              value={form.password}
              onChange={update('password')}
              autoComplete="new-password" />
            
            <TextField
              label="Confirm password"
              type="password"
              value={form.confirmPassword}
              onChange={update('confirmPassword')}
              autoComplete="new-password" />
            
          </div>

          {error ?
          <p role="alert" className="mt-4 rounded-xl bg-clay-soft px-4 py-3 text-sm text-clay">
              {error}
            </p> :
          null}

          <div className="mt-8 space-y-3">
            <Button type="submit" fullWidth>
              {t('register.cta')}
            </Button>
            <Button type="button" variant="ghost" fullWidth onClick={() => navigate('/login')}>
              {t('register.back')}
            </Button>
          </div>
        </form>
      </main>
    </PhoneShell>);

}