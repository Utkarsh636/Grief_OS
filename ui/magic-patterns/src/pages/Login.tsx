import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PhoneShell } from '../components/PhoneShell';
import { ScreenHeader } from '../components/ScreenHeader';
import { TextField } from '../components/TextField';
import { Button } from '../components/Button';
import { useApp } from '../contexts/AppContext';

export function Login() {
  const navigate = useNavigate();
  const { t, login } = useApp();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!email || !password) {
      setError('Enter your email and password to continue.');
      return;
    }
    setError('');
    login({ fullName: 'Anita Kumar', email, phone: '+91 98200 00000' });
    navigate('/dashboard');
  };

  return (
    <PhoneShell>
      <ScreenHeader title={t('login.title')} subtitle={t('login.subtitle')} onBack={() => navigate('/welcome')} />
      <main className="flex flex-1 flex-col px-5 pb-10">
        <form onSubmit={handleSubmit} className="flex flex-1 flex-col">
          <div className="space-y-4">
            <TextField
              label="Email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              autoComplete="email" />
            
            <TextField
              label="Password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              autoComplete="current-password" />
            
          </div>

          {error ?
          <p role="alert" className="mt-4 rounded-xl bg-clay-soft px-4 py-3 text-sm text-clay">
              {error}
            </p> :
          null}
          {notice ?
          <p role="status" className="mt-4 rounded-xl bg-sage-soft px-4 py-3 text-sm text-sage">
              {notice}
            </p> :
          null}

          <div className="mt-8 space-y-3">
            <Button type="submit" fullWidth>
              {t('login.cta')}
            </Button>
            <Button
              type="button"
              variant="ghost"
              fullWidth
              onClick={() => setNotice('We have sent a reset link to your email.')}>
              
              {t('login.forgot')}
            </Button>
          </div>

          <p className="mt-auto pt-10 text-center text-sm text-muted">
            New here?{' '}
            <button type="button" onClick={() => navigate('/register')} className="font-medium text-sage underline">
              Create an account
            </button>
          </p>
        </form>
      </main>
    </PhoneShell>);

}