export type Language = 'en' | 'hi';

export interface User {
  fullName: string;
  email: string;
  phone: string;
}

export interface BereavementCase {
  id: string;
  deceasedName: string;
  relationship: string;
  state: string;
  dateOfDeath: string;
  createdAt: string;
  archived: boolean;
}

export type TaskPriority = 'urgent' | 'important' | 'later';

export interface Task {
  id: string;
  title: string;
  titleHi: string;
  authority: string;
  description: string;
  requiredDocuments: string[];
  website: {label: string;url: string;};
  aiExplanation: string;
  priority: TaskPriority;
  timeline: string;
  completed: boolean;
}

export type DocumentStatus = 'verified' | 'processing' | 'missing';

export interface VaultDocument {
  id: string;
  name: string;
  type: string;
  sizeLabel: string;
  uploadedAt: string;
  status: DocumentStatus;
}

export interface Reminder {
  id: string;
  title: string;
  body: string;
  when: string;
  read: boolean;
  tone: 'reminder' | 'update' | 'deadline';
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  text: string;
}

export interface ExtractedField {
  key: string;
  label: string;
  value: string;
}