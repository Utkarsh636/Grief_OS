import 'package:flutter/material.dart';

import '../../app/theme/app_colors.dart';
import 'login_screen.dart';
import '../language/language_selection_screen.dart';
import '../../shared/widgets/app_button.dart';
import '../../shared/widgets/app_text_field.dart';
import '../../shared/widgets/screen_header.dart';

class RegisterScreen extends StatefulWidget {
  const RegisterScreen({super.key});

  @override
  State<RegisterScreen> createState() => _RegisterScreenState();
}

class _RegisterScreenState extends State<RegisterScreen> {
  final _fullNameController = TextEditingController();
  final _emailController = TextEditingController();
  final _phoneController = TextEditingController();
  final _passwordController = TextEditingController();
  final _confirmPasswordController = TextEditingController();

  String? _error;

  @override
  void dispose() {
    _fullNameController.dispose();
    _emailController.dispose();
    _phoneController.dispose();
    _passwordController.dispose();
    _confirmPasswordController.dispose();
    super.dispose();
  }

  void _submit() {
    final fullName = _fullNameController.text.trim();
    final email = _emailController.text.trim();
    final phone = _phoneController.text.trim();
    final password = _passwordController.text;
    final confirmPassword = _confirmPasswordController.text;

    if (fullName.isEmpty ||
        email.isEmpty ||
        phone.isEmpty ||
        password.isEmpty) {
      setState(() {
        _error =
            'Please fill in every field so we can create your account.';
      });
      return;
    }

    if (password != confirmPassword) {
      setState(() {
        _error = 'The two passwords do not match.';
      });
      return;
    }

    setState(() {
      _error = null;
    });

    // Temporary navigation until the shared authentication state
    // is implemented.
    Navigator.of(context).push(
      MaterialPageRoute(
        builder: (_) => const LanguageSelectionScreen(),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.background,
      body: SafeArea(
        child: SingleChildScrollView(
          padding: const EdgeInsets.fromLTRB(24, 20, 24, 24),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              ScreenHeader(
                title: 'Create your account',
                subtitle: 'Everything you add stays private to you.',
                onBack: () => Navigator.of(context).pop(),
              ),

              const SizedBox(height: 28),

              AppTextField(
                label: 'Full name',
                hint: 'Enter your full name',
                controller: _fullNameController,
              ),

              const SizedBox(height: 18),

              AppTextField(
                label: 'Email',
                hint: 'Enter your email',
                controller: _emailController,
                keyboardType: TextInputType.emailAddress,
              ),

              const SizedBox(height: 18),

              AppTextField(
                label: 'Phone number',
                hint: 'Enter your phone number',
                controller: _phoneController,
                keyboardType: TextInputType.phone,
              ),

              const SizedBox(height: 6),

              const Padding(
                padding: EdgeInsets.only(left: 4),
                child: Text(
                  'Used only for reminders about deadlines.',
                  style: TextStyle(
                    fontSize: 12,
                    color: AppColors.textSecondary,
                  ),
                ),
              ),

              const SizedBox(height: 18),

              AppTextField(
                label: 'Password',
                hint: 'Create a password',
                controller: _passwordController,
                obscureText: true,
              ),

              const SizedBox(height: 18),

              AppTextField(
                label: 'Confirm password',
                hint: 'Enter your password again',
                controller: _confirmPasswordController,
                obscureText: true,
              ),

              if (_error != null) ...[
                const SizedBox(height: 16),
                Container(
                  width: double.infinity,
                  padding: const EdgeInsets.symmetric(
                    horizontal: 16,
                    vertical: 12,
                  ),
                  decoration: BoxDecoration(
                    color: AppColors.error.withValues(alpha: 0.08),
                    borderRadius: BorderRadius.circular(12),
                  ),
                  child: Text(
                    _error!,
                    style: const TextStyle(
                      fontSize: 14,
                      color: AppColors.error,
                    ),
                  ),
                ),
              ],

              const SizedBox(height: 28),

              AppButton(
                fullWidth: true,
                onPressed: _submit,
                child: const Text('Register'),
              ),

              const SizedBox(height: 12),

              AppButton(
                variant: AppButtonVariant.ghost,
                fullWidth: true,
                onPressed: () {
                  Navigator.of(context).push(
                    MaterialPageRoute(
                      builder: (_) => const LoginScreen(),
                    ),
                  );
                },
                child: const Text('Back to login'),
              ),
            ],
          ),
        ),
      ),
    );
  }
}


