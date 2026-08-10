import 'package:flutter/material.dart';

import '../../app/theme/app_colors.dart';
import '../../shared/widgets/app_button.dart';
import '../auth/login_screen.dart';
import '../auth/register_screen.dart';

class WelcomeScreen extends StatefulWidget {
  const WelcomeScreen({super.key});

  @override
  State<WelcomeScreen> createState() => _WelcomeScreenState();
}

class _WelcomeScreenState extends State<WelcomeScreen>
    with SingleTickerProviderStateMixin {
  late final AnimationController _controller;

  @override
  void initState() {
    super.initState();

    _controller = AnimationController(
      vsync: this,
      duration: const Duration(milliseconds: 600),
    )..forward();
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final textTheme = Theme.of(context).textTheme;

    return Scaffold(
      backgroundColor: AppColors.background,
      body: SafeArea(
        child: FadeTransition(
          opacity: _controller,
          child: SlideTransition(
            position: Tween<Offset>(
              begin: const Offset(0, 0.05),
              end: Offset.zero,
            ).animate(
              CurvedAnimation(
                parent: _controller,
                curve: const Cubic(0.22, 1, 0.36, 1),
              ),
            ),
            child: Padding(
              padding: const EdgeInsets.fromLTRB(24, 28, 24, 24),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  // Private by default badge
                  Container(
                    padding: const EdgeInsets.symmetric(
                      horizontal: 12,
                      vertical: 6,
                    ),
                    decoration: BoxDecoration(
                      color: AppColors.sageSoft,
                      borderRadius: BorderRadius.circular(999),
                    ),
                    child: const Row(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        Icon(
                          Icons.lock_outline,
                          size: 14,
                          color: AppColors.primary,
                        ),
                        SizedBox(width: 8),
                        Text(
                          'Private by default',
                          style: TextStyle(
                            fontSize: 12,
                            fontWeight: FontWeight.w500,
                            color: AppColors.primary,
                          ),
                        ),
                      ],
                    ),
                  ),

                  const SizedBox(height: 32),

                  Text(
                    'You do not have to figure this out alone.',
                    style: textTheme.headlineMedium?.copyWith(
                      fontSize: 34,
                      height: 1.15,
                    ),
                  ),

                  const SizedBox(height: 16),

                  ConstrainedBox(
                    constraints: const BoxConstraints(
                      maxWidth: 360,
                    ),
                    child: Text(
                      'GriefOS walks you through the paperwork that follows a loss — one clear step at a time, at your own pace.',
                      style: textTheme.bodyMedium?.copyWith(
                        fontSize: 15,
                        height: 1.55,
                        color: AppColors.textSecondary,
                      ),
                    ),
                  ),

                  const SizedBox(height: 40),

                  const _FeatureItem(
                    text: 'A roadmap built for your state and situation',
                  ),
                  const SizedBox(height: 12),
                  const _FeatureItem(
                    text: 'Documents scanned once, reused everywhere',
                  ),
                  const SizedBox(height: 12),
                  const _FeatureItem(
                    text: 'Plain-language answers whenever you are stuck',
                  ),

                  const Spacer(),

                  AppButton(
                    fullWidth: true,
                    onPressed: () {
                      Navigator.of(context).push(
                        MaterialPageRoute(
                          builder: (_) => const RegisterScreen(),
                        ),
                      );
                    },
                    child: const Text('Create an account'),
                  ),

                  const SizedBox(height: 12),

                  AppButton(
                    variant: AppButtonVariant.secondary,
                    fullWidth: true,
                    onPressed: () {
                      Navigator.of(context).push(
                        MaterialPageRoute(
                          builder: (_) => const LoginScreen(),
                        ),
                      );
                    },
                    child: const Text('Log in'),
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}

class _FeatureItem extends StatelessWidget {
  final String text;

  const _FeatureItem({
    required this.text,
  });

  @override
  Widget build(BuildContext context) {
    return Row(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Padding(
          padding: const EdgeInsets.only(top: 7),
          child: Container(
            width: 6,
            height: 6,
            decoration: const BoxDecoration(
              color: AppColors.clay,
              shape: BoxShape.circle,
            ),
          ),
        ),
        const SizedBox(width: 12),
        Expanded(
          child: Text(
            text,
            style: const TextStyle(
              fontSize: 15,
              height: 1.4,
              color: AppColors.textPrimary,
            ),
          ),
        ),
      ],
    );
  }
}

