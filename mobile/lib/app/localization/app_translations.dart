import 'package:flutter/material.dart';

class AppTranslations {
  static const Map<String, Map<String, String>> _values = {
    'en': {
      'app.tagline': 'One step at a time',
      'common.continue': 'Continue',
      'language.title': 'Choose your language',
      'language.subtitle': 'You can change this any time in Settings.',
    },
    'hi': {
      'app.tagline': 'एक बार में एक कदम',
      'common.continue': 'आगे बढ़ें',
      'language.title': 'अपनी भाषा चुनें',
      'language.subtitle': 'आप इसे सेटिंग्स में कभी भी बदल सकते हैं।',
    },
  };

  static String get(
    String language,
    String key,
  ) {
    return _values[language]?[key] ?? _values['en']![key] ?? key;
  }
}

class AppLanguageController extends ChangeNotifier {
  String _language = 'en';

  String get language => _language;

  void setLanguage(String language) {
    if (language != 'en' && language != 'hi') return;

    if (_language == language) return;

    _language = language;
    notifyListeners();
  }

  String translate(String key) {
    return AppTranslations.get(_language, key);
  }
}
