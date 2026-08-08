import 'package:flutter/material.dart';

class GriefOSApp extends StatelessWidget {
  const GriefOSApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'GriefOS',
      home: const Scaffold(
        body: Center(
          child: Text('GriefOS'),
        ),
      ),
    );
  }
}