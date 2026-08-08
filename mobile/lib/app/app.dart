import 'package:flutter/material.dart';
import '../shared/widgets/screen_header.dart';

import '../shared/widgets/app_button.dart';
import '../shared/widgets/app_text_field.dart';
import 'theme/app_theme.dart';

class GriefOSApp extends StatelessWidget {
  const GriefOSApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'GriefOS',
      theme: AppTheme.lightTheme,
      home: const FormTestScreen(),
    );
  }
}

class FormTestScreen extends StatefulWidget {
  const FormTestScreen({super.key});

  @override
  State<FormTestScreen> createState() => _FormTestScreenState();
}

class _FormTestScreenState extends State<FormTestScreen> {
  String? selectedState;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Form Components'),
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(20),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const ScreenHeader(
              title: 'Create Case',
              subtitle: 'Enter the required information',
            ),

            const SizedBox(height: 24),

            const AppTextField(
              label: 'Full Name',
              hint: 'Enter your full name',
            ),

            const SizedBox(height: 20),

            const AppTextField(
              label: 'Mobile Number',
              hint: 'Enter mobile number',
              keyboardType: TextInputType.phone,
            ),

            const SizedBox(height: 20),

            AppSelectField(
              label: 'State',
              options: const [
                'Uttar Pradesh',
                'Rajasthan',
                'Maharashtra',
                'Bihar',
              ],
              value: selectedState,
              onChanged: (value) {
                setState(() {
                  selectedState = value;
                });
              },
            ),

            const SizedBox(height: 24),

            AppButton(
              fullWidth: true,
              onPressed: () {},
              child: const Text('Continue'),
            ),
          ],
        ),
      ),
    );
  }
}