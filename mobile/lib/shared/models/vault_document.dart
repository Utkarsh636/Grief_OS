enum DocumentStatus {
  verified,
  processing,
  missing,
}

class VaultDocument {
  final String id;
  final String name;
  final String type;
  final String sizeLabel;
  final String uploadedAt;
  final DocumentStatus status;

  const VaultDocument({
    required this.id,
    required this.name,
    required this.type,
    required this.sizeLabel,
    required this.uploadedAt,
    required this.status,
  });
}
