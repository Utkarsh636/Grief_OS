import 'package:flutter/foundation.dart';

import 'package:mobile/core/constants/initial_documents.dart';
import 'package:mobile/core/constants/initial_tasks.dart';
import 'package:mobile/shared/models/bereavement_case.dart';
import 'package:mobile/shared/models/task.dart';
import 'package:mobile/shared/models/user.dart';
import 'package:mobile/shared/models/vault_document.dart';

class AppState extends ChangeNotifier {
  String _language = 'en';

  User? _user;

  BereavementCase? _activeCase = const BereavementCase(
    id: 'case-1',
    deceasedName: 'Ramesh Kumar',
    relationship: 'Father',
    state: 'Maharashtra',
    dateOfDeath: '2026-07-08',
    createdAt: '10 Jul 2026',
    archived: false,
  );

  List<Task> _tasks = List<Task>.from(initialTasks);

  List<VaultDocument> _documents =
      List<VaultDocument>.from(initialVaultDocuments);

  String get language => _language;
  User? get user => _user;
  BereavementCase? get activeCase => _activeCase;
  List<Task> get tasks => List.unmodifiable(_tasks);
  List<VaultDocument> get documents => List.unmodifiable(_documents);

  int get completedCount =>
      _tasks.where((task) => task.completed).length;

  int get progress {
    if (_tasks.isEmpty) return 0;

    return ((completedCount / _tasks.length) * 100).round();
  }

  void setLanguage(String language) {
    if (language != 'en' && language != 'hi') return;
    if (_language == language) return;

    _language = language;
    notifyListeners();
  }

  void login(User user) {
    _user = user;
    notifyListeners();
  }

  void logout() {
    _user = null;
    notifyListeners();
  }

  void toggleTask(String id) {
    _tasks = _tasks.map((task) {
      if (task.id != id) return task;

      return task.copyWith(
        completed: !task.completed,
      );
    }).toList();

    notifyListeners();
  }

  void createCase({
    required String deceasedName,
    required String relationship,
    required String state,
    required String dateOfDeath,
  }) {
    _activeCase = BereavementCase(
      id: 'case-${DateTime.now().millisecondsSinceEpoch}',
      deceasedName: deceasedName,
      relationship: relationship,
      state: state,
      dateOfDeath: dateOfDeath,
      createdAt: _formatDate(DateTime.now()),
      archived: false,
    );

    _tasks = initialTasks
        .map((task) => task.copyWith(completed: false))
        .toList();

    notifyListeners();
  }

  void archiveCase() {
    if (_activeCase == null) return;

    _activeCase = _activeCase!.copyWith(
      archived: true,
    );

    notifyListeners();
  }

  void addDocument(VaultDocument document) {
    _documents = [
      document,
      ..._documents,
    ];

    notifyListeners();
  }

  void removeDocument(String id) {
    _documents = _documents
        .where((document) => document.id != id)
        .toList();

    notifyListeners();
  }

  String _formatDate(DateTime date) {
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];

    return '${date.day.toString().padLeft(2, '0')} '
        '${months[date.month - 1]} ${date.year}';
  }
}

