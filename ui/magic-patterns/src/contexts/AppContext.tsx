import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { initialTasks } from '../data/tasks';
import { initialVaultDocuments } from '../data/documents';
import { initialReminders } from '../data/notifications';
import { translate } from '../data/translations';
import { BereavementCase, Language, Reminder, Task, User, VaultDocument } from '../types';

interface AppContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
  activeCase: BereavementCase | null;
  createCase: (input: Omit<BereavementCase, 'id' | 'createdAt' | 'archived'>) => void;
  archiveCase: () => void;
  tasks: Task[];
  toggleTask: (id: string) => void;
  completedCount: number;
  progress: number;
  documents: VaultDocument[];
  addDocument: (name: string) => void;
  removeDocument: (id: string) => void;
  reminders: Reminder[];
  unreadCount: number;
  markReminderRead: (id: string) => void;
  markAllRemindersRead: () => void;
  notificationsEnabled: boolean;
  setNotificationsEnabled: (value: boolean) => void;
}

const AppContext = createContext<AppContextValue | null>(null);

const demoCase: BereavementCase = {
  id: 'case-1',
  deceasedName: 'Ramesh Kumar',
  relationship: 'Father',
  state: 'Maharashtra',
  dateOfDeath: '2026-07-08',
  createdAt: '10 Jul 2026',
  archived: false
};

export function AppProvider({ children }: {children: React.ReactNode;}) {
  const [language, setLanguage] = useState<Language>('en');
  const [user, setUser] = useState<User | null>(null);
  const [activeCase, setActiveCase] = useState<BereavementCase | null>(demoCase);
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [documents, setDocuments] = useState<VaultDocument[]>(initialVaultDocuments);
  const [reminders, setReminders] = useState<Reminder[]>(initialReminders);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const t = useCallback((key: string) => translate(language, key), [language]);

  const login = useCallback((next: User) => setUser(next), []);
  const logout = useCallback(() => setUser(null), []);

  const createCase = useCallback(
    (input: Omit<BereavementCase, 'id' | 'createdAt' | 'archived'>) => {
      setActiveCase({
        ...input,
        id: `case-${Date.now()}`,
        createdAt: new Date().toLocaleDateString('en-IN', {
          day: '2-digit',
          month: 'short',
          year: 'numeric'
        }),
        archived: false
      });
      setTasks(initialTasks.map((task) => ({ ...task, completed: false })));
    },
    []
  );

  const archiveCase = useCallback(() => {
    setActiveCase((current) => current ? { ...current, archived: true } : current);
  }, []);

  const toggleTask = useCallback((id: string) => {
    setTasks((current) =>
    current.map((task) => task.id === id ? { ...task, completed: !task.completed } : task)
    );
  }, []);

  const addDocument = useCallback((name: string) => {
    setDocuments((current) => [
    {
      id: `doc-${Date.now()}`,
      name,
      type: 'PDF',
      sizeLabel: '1.0 MB',
      uploadedAt: new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }),
      status: 'processing'
    },
    ...current]
    );
  }, []);

  const removeDocument = useCallback((id: string) => {
    setDocuments((current) => current.filter((doc) => doc.id !== id));
  }, []);

  const markReminderRead = useCallback((id: string) => {
    setReminders((current) => current.map((r) => r.id === id ? { ...r, read: true } : r));
  }, []);

  const markAllRemindersRead = useCallback(() => {
    setReminders((current) => current.map((r) => ({ ...r, read: true })));
  }, []);

  const completedCount = tasks.filter((task) => task.completed).length;
  const progress = tasks.length ? Math.round(completedCount / tasks.length * 100) : 0;
  const unreadCount = reminders.filter((r) => !r.read).length;

  const value = useMemo<AppContextValue>(
    () => ({
      language,
      setLanguage,
      t,
      user,
      login,
      logout,
      activeCase,
      createCase,
      archiveCase,
      tasks,
      toggleTask,
      completedCount,
      progress,
      documents,
      addDocument,
      removeDocument,
      reminders,
      unreadCount,
      markReminderRead,
      markAllRemindersRead,
      notificationsEnabled,
      setNotificationsEnabled
    }),
    [
    language,
    t,
    user,
    login,
    logout,
    activeCase,
    createCase,
    archiveCase,
    tasks,
    toggleTask,
    completedCount,
    progress,
    documents,
    addDocument,
    removeDocument,
    reminders,
    unreadCount,
    markReminderRead,
    markAllRemindersRead,
    notificationsEnabled]

  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp(): AppContextValue {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used inside AppProvider');
  }
  return context;
}