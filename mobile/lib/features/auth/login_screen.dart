import 'package:flutter/material.dart';
import 'register_screen.dart';

import '../../app/theme/app_colors.dart';
import '../../shared/widgets/app_button.dart';
import '../../shared/widgets/app_text_field.dart';
import '../../shared/widgets/screen_header.dart';

class LoginScreen extends StatefulWidget {
  const LoginScreen({super.key});

  @override
  State<LoginScreen> createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  final _emailController = TextEditingController();
  final _passwordController = TextEditingController();

  String? _error;
  String? _notice;

  @override
  void dispose() {
    _emailController.dispose();
    _passwordController.dispose();
    super.dispose();
  }

  void _submit() {
    final email = _emailController.text.trim();
    final password = _passwordController.text;

    if (email.isEmpty || password.isEmpty) {
      setState(() {
        _error = 'Enter your email and password to continue.';
        _notice = null;
      });
      return;
    }

    setState(() {
      _error = null;
      _notice = null;
    });

    // The React version creates a demo user here.
    // Shared authentication state will be added once the
    // onboarding flow is complete.
    Navigator.of(context).push(
      MaterialPageRoute(
        builder: (_) => const _DashboardPlaceholder(),
      ),
    );
  }

  void _forgotPassword() {
    setState(() {
      _error = null;
      _notice = 'We have sent a reset link to your email.';
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.background,
      body: SafeArea(
        child: SingleChildScrollView(
          keyboardDismissBehavior: ScrollViewKeyboardDismissBehavior.onDrag,
          padding: const EdgeInsets.fromLTRB(24, 20, 24, 24),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              ScreenHeader(
                title: 'Welcome back',
                subtitle: 'Pick up where you left off.',
                onBack: () => Navigator.of(context).pop(),
              ),

              const SizedBox(height: 28),

              AppTextField(
                label: 'Email',
                hint: 'Enter your email',
                controller: _emailController,
                keyboardType: TextInputType.emailAddress,
              ),

              const SizedBox(height: 18),

              AppTextField(
                label: 'Password',
                hint: 'Enter your password',
                controller: _passwordController,
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

              if (_notice != null) ...[
                const SizedBox(height: 16),
                Container(
                  width: double.infinity,
                  padding: const EdgeInsets.symmetric(
                    horizontal: 16,
                    vertical: 12,
                  ),
                  decoration: BoxDecoration(
                    color: AppColors.sageSoft,
                    borderRadius: BorderRadius.circular(12),
                  ),
                  child: Text(
                    _notice!,
                    style: const TextStyle(
                      fontSize: 14,
                      color: AppColors.primary,
                    ),
                  ),
                ),
              ],

              const SizedBox(height: 28),

              AppButton(
                fullWidth: true,
                onPressed: _submit,
                child: const Text('Log in'),
              ),

              const SizedBox(height: 12),

              AppButton(
                variant: AppButtonVariant.ghost,
                fullWidth: true,
                onPressed: _forgotPassword,
                child: const Text('Forgot password?'),
              ),

              const SizedBox(height: 32),

              Center(
                child: TextButton(
                  onPressed: () {
                    Navigator.of(context).push(
                      MaterialPageRoute(
                        builder: (_) => const RegisterScreen(),
                      ),
                    );
                  },
                  child: const Text(
                    'New here?  Create an account',
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class _DashboardPlaceholder extends StatelessWidget {
  const _DashboardPlaceholder();

  @override
  Widget build(BuildContext context) {
    return const Scaffold(
      body: Center(
        child: Text('Dashboard'),
      ),
    );
  }
}

