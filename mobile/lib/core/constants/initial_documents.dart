import '../../shared/models/vault_document.dart';

const List<VaultDocument> initialVaultDocuments = [
  VaultDocument(
    id: 'doc-1',
    name: 'Death Certificate',
    type: 'PDF',
    sizeLabel: '1.2 MB',
    uploadedAt: '12 Jul 2026',
    status: DocumentStatus.verified,
  ),
  VaultDocument(
    id: 'doc-2',
    name: 'Aadhaar Card — Ramesh Kumar',
    type: 'JPG',
    sizeLabel: '840 KB',
    uploadedAt: '12 Jul 2026',
    status: DocumentStatus.verified,
  ),
  VaultDocument(
    id: 'doc-3',
    name: 'Bank Passbook — SBI',
    type: 'PDF',
    sizeLabel: '2.1 MB',
    uploadedAt: '14 Jul 2026',
    status: DocumentStatus.processing,
  ),
  VaultDocument(
    id: 'doc-4',
    name: 'LIC Policy Bond',
    type: 'PDF',
    sizeLabel: '3.4 MB',
    uploadedAt: '18 Jul 2026',
    status: DocumentStatus.verified,
  ),
];