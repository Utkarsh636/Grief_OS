import 'package:flutter/material.dart';

import '../features/splash/splash_screen.dart';
import 'theme/app_theme.dart';

class GriefOSApp extends StatelessWidget {
  const GriefOSApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'GriefOS',
      theme: AppTheme.lightTheme,
      home: const SplashScreen(),
    );
  }
}