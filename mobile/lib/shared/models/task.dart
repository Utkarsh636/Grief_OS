enum TaskPriority {
  urgent,
  important,
  later,
}

class Task {
  final String id;
  final String title;
  final String titleHi;
  final String authority;
  final String description;
  final List<String> requiredDocuments;
  final String websiteLabel;
  final String websiteUrl;
  final String aiExplanation;
  final TaskPriority priority;
  final String timeline;
  bool completed;

  Task({
    required this.id,
    required this.title,
    required this.titleHi,
    required this.authority,
    required this.description,
    required this.requiredDocuments,
    required this.websiteLabel,
    required this.websiteUrl,
    required this.aiExplanation,
    required this.priority,
    required this.timeline,
    this.completed = false,
  });

  Task copyWith({
    bool? completed,
  }) {
    return Task(
      id: id,
      title: title,
      titleHi: titleHi,
      authority: authority,
      description: description,
      requiredDocuments: requiredDocuments,
      websiteLabel: websiteLabel,
      websiteUrl: websiteUrl,
      aiExplanation: aiExplanation,
      priority: priority,
      timeline: timeline,
      completed: completed ?? this.completed,
    );
  }
}
