import 'package:flutter/material.dart';
import 'theme/app_theme.dart';

class GriefOSApp extends StatelessWidget {
  const GriefOSApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'GriefOS',
      theme: AppTheme.lightTheme,
      home: const Scaffold(
        body: Center(
          child: Text('GriefOS'),
        ),
      ),
    );
  }
}