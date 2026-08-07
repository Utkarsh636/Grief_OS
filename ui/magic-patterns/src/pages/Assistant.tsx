import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { SendIcon, SparklesIcon } from 'lucide-react';
import { PhoneShell } from '../components/PhoneShell';
import { BottomNav } from '../components/BottomNav';
import { useApp } from '../contexts/AppContext';
import { ChatMessage } from '../types';

const suggestions = [
'How many death certificate copies do I need?',
'What if there is no nominee on the bank account?',
'Which step should I do first?'];


const answers: Record<string, string> = {
  default:
  'Here is the short version: start with the death certificate, then the bank, then insurance. I can walk you through any of them step by step — just say which one.',
  certificate:
  'Order at least 8 certified copies. Banks, insurers, the pension office and the revenue department each keep one permanently, and re-applying later takes another two weeks.',
  nominee:
  'Without a registered nominee, the bank will ask for a legal heir certificate for balances above ₹1 lakh. Below that, most banks accept an indemnity bond signed by the heirs.',
  first:
  'Register the death certificate first — every other office asks for it. You have 21 days before a late fee applies, so it is the one thing worth doing this week.'
};

function answerFor(question: string): string {
  const text = question.toLowerCase();
  if (text.includes('certificate') || text.includes('copies')) return answers.certificate;
  if (text.includes('nominee') || text.includes('bank')) return answers.nominee;
  if (text.includes('first') || text.includes('start')) return answers.first;
  return answers.default;
}

export function Assistant() {
  const { t } = useApp();
  const [messages, setMessages] = useState<ChatMessage[]>([
  {
    id: 'm-1',
    role: 'assistant',
    text: 'I am here whenever you need. Ask me anything about the paperwork — in your own words.'
  }]
  );
  const [input, setInput] = useState('');
  const [thinking, setThinking] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, thinking]);

  const send = (text: string) => {
    const question = text.trim();
    if (!question || thinking) return;
    setMessages((current) => [...current, { id: `u-${Date.now()}`, role: 'user', text: question }]);
    setInput('');
    setThinking(true);
    window.setTimeout(() => {
      setMessages((current) => [
      ...current,
      { id: `a-${Date.now()}`, role: 'assistant', text: answerFor(question) }]
      );
      setThinking(false);
    }, 900);
  };

  return (
    <PhoneShell withNav>
      <header className="flex items-center gap-3 border-b border-line px-5 pb-4 pt-7">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sage-soft">
          <SparklesIcon className="h-5 w-5 text-sage" strokeWidth={1.75} aria-hidden="true" />
        </span>
        <div>
          <h1 className="font-serif text-xl text-ink">{t('assistant.title')}</h1>
          <p className="text-xs text-muted">Answers in plain language, never legal advice</p>
        </div>
      </header>

      <main className="flex-1 space-y-3 overflow-y-auto px-5 py-5">
        {messages.map((message) =>
        <motion.div
          key={message.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
          
            <p
            className={`max-w-[82%] rounded-2xl px-4 py-3 text-[15px] leading-relaxed ${
            message.role === 'user' ?
            'rounded-br-md bg-sage text-white' :
            'rounded-bl-md border border-line bg-surface text-ink'}`
            }>
            
              {message.text}
            </p>
          </motion.div>
        )}

        {thinking ?
        <div className="flex justify-start">
            <div className="flex gap-1.5 rounded-2xl rounded-bl-md border border-line bg-surface px-4 py-4">
              {[0, 1, 2].map((dot) =>
            <motion.span
              key={dot}
              className="h-1.5 w-1.5 rounded-full bg-muted"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1, repeat: Infinity, delay: dot * 0.15 }} />

            )}
            </div>
          </div> :
        null}
        <div ref={endRef} />
      </main>

      <div className="sticky bottom-24 space-y-3 bg-canvas px-5 pb-3">
        <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
          {suggestions.map((suggestion) =>
          <button
            key={suggestion}
            type="button"
            onClick={() => send(suggestion)}
            className="shrink-0 rounded-full border border-line bg-surface px-3.5 py-2 text-xs text-ink transition-colors hover:border-sage/50">
            
              {suggestion}
            </button>
          )}
        </div>

        <form
          onSubmit={(event) => {
            event.preventDefault();
            send(input);
          }}
          className="flex items-center gap-2 rounded-full border border-line bg-surface p-1.5 pl-4">
          
          <label htmlFor="assistant-input" className="sr-only">
            Ask a question
          </label>
          <input
            id="assistant-input"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Ask anything…"
            className="min-w-0 flex-1 bg-transparent text-[15px] text-ink placeholder:text-muted/70 focus:outline-none" />
          
          <button
            type="submit"
            aria-label="Send message"
            disabled={!input.trim()}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sage text-white transition-colors disabled:opacity-40">
            
            <SendIcon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
          </button>
        </form>
      </div>

      <BottomNav />
    </PhoneShell>);

}