import { VaultDocument } from '../types';

export interface ScannableDocument {
  id: string;
  name: string;
  nameHi: string;
  hint: string;
}

export const scannableDocuments: ScannableDocument[] = [
{ id: 'aadhaar', name: 'Aadhaar Card', nameHi: 'आधार कार्ड', hint: 'Of the deceased' },
{ id: 'pan', name: 'PAN Card', nameHi: 'पैन कार्ड', hint: 'For financial claims' },
{ id: 'death-certificate', name: 'Death Certificate', nameHi: 'मृत्यु प्रमाण पत्र', hint: 'Required by every office' },
{ id: 'passbook', name: 'Bank Passbook', nameHi: 'बैंक पासबुक', hint: 'First page with IFSC' }];


export const initialVaultDocuments: VaultDocument[] = [
{
  id: 'doc-1',
  name: 'Death Certificate',
  type: 'PDF',
  sizeLabel: '1.2 MB',
  uploadedAt: '12 Jul 2026',
  status: 'verified'
},
{
  id: 'doc-2',
  name: 'Aadhaar Card — Ramesh Kumar',
  type: 'JPG',
  sizeLabel: '840 KB',
  uploadedAt: '12 Jul 2026',
  status: 'verified'
},
{
  id: 'doc-3',
  name: 'Bank Passbook — SBI',
  type: 'PDF',
  sizeLabel: '2.1 MB',
  uploadedAt: '14 Jul 2026',
  status: 'processing'
},
{
  id: 'doc-4',
  name: 'LIC Policy Bond',
  type: 'PDF',
  sizeLabel: '3.4 MB',
  uploadedAt: '18 Jul 2026',
  status: 'verified'
}];