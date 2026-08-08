import 'package:flutter/material.dart';

void main() {
  runApp(const GriefOSApp());
}

class GriefOSApp extends StatelessWidget {
  const GriefOSApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'GriefOS',
      home: Scaffold(
        body: Center(
          child: Text('GriefOS'),
        ),
      ),
    );
  }
}