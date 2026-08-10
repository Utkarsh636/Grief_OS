class BereavementCase {
  final String id;
  final String deceasedName;
  final String relationship;
  final String state;
  final String dateOfDeath;
  final String createdAt;
  final bool archived;

  const BereavementCase({
    required this.id,
    required this.deceasedName,
    required this.relationship,
    required this.state,
    required this.dateOfDeath,
    required this.createdAt,
    required this.archived,
  });

  BereavementCase copyWith({
    bool? archived,
  }) {
    return BereavementCase(
      id: id,
      deceasedName: deceasedName,
      relationship: relationship,
      state: state,
      dateOfDeath: dateOfDeath,
      createdAt: createdAt,
      archived: archived ?? this.archived,
    );
  }
}
