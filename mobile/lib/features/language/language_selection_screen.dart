import 'package:flutter/material.dart';

import '../../app/localization/app_translations.dart';
import '../../app/theme/app_colors.dart';
import '../../shared/widgets/app_button.dart';
import '../../shared/widgets/screen_header.dart';

class LanguageSelectionScreen extends StatefulWidget {
  const LanguageSelectionScreen({super.key});

  @override
  State<LanguageSelectionScreen> createState() =>
      _LanguageSelectionScreenState();
}

class _LanguageSelectionScreenState
    extends State<LanguageSelectionScreen> {
  final _languageController = AppLanguageController();

  @override
  void dispose() {
    _languageController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return AnimatedBuilder(
      animation: _languageController,
      builder: (context, _) {
        final language = _languageController.language;
        final t = _languageController.translate;

        return Scaffold(
          backgroundColor: AppColors.background,
          body: SafeArea(
            child: Padding(
              padding: const EdgeInsets.fromLTRB(24, 20, 24, 24),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  ScreenHeader(
                    title: t('language.title'),
                    subtitle: t('language.subtitle'),
                    onBack: () => Navigator.of(context).pop(),
                  ),

                  const SizedBox(height: 28),

                  _LanguageOption(
                    label: 'English',
                    caption: 'Continue in English',
                    selected: language == 'en',
                    onTap: () {
                      _languageController.setLanguage('en');
                    },
                  ),

                  const SizedBox(height: 12),

                  _LanguageOption(
                    label: 'हिन्दी',
                    caption: 'हिन्दी में जारी रखें',
                    selected: language == 'hi',
                    onTap: () {
                      _languageController.setLanguage('hi');
                    },
                  ),

                  const Spacer(),

                  AppButton(
                    fullWidth: true,
                    onPressed: () {
                      Navigator.of(context).pushReplacement(
                        MaterialPageRoute(
                          builder: (_) => const _DashboardPlaceholder(),
                        ),
                      );
                    },
                    child: Text(t('common.continue')),
                  ),
                ],
              ),
            ),
          ),
        );
      },
    );
  }
}

class _LanguageOption extends StatelessWidget {
  final String label;
  final String caption;
  final bool selected;
  final VoidCallback onTap;

  const _LanguageOption({
    required this.label,
    required this.caption,
    required this.selected,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return Material(
      color: Colors.transparent,
      child: InkWell(
        borderRadius: BorderRadius.circular(16),
        onTap: onTap,
        child: Container(
          width: double.infinity,
          padding: const EdgeInsets.symmetric(
            horizontal: 20,
            vertical: 20,
          ),
          decoration: BoxDecoration(
            color: selected
                ? AppColors.sageSoft
                : AppColors.surface,
            borderRadius: BorderRadius.circular(16),
            border: Border.all(
              color: selected
                  ? AppColors.primary
                  : AppColors.border,
            ),
          ),
          child: Row(
            children: [
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      label,
                      style: const TextStyle(
                        fontSize: 20,
                        fontWeight: FontWeight.w600,
                        color: AppColors.textPrimary,
                      ),
                    ),
                    const SizedBox(height: 2),
                    Text(
                      caption,
                      style: const TextStyle(
                        fontSize: 14,
                        color: AppColors.textSecondary,
                      ),
                    ),
                  ],
                ),
              ),

              Container(
                width: 28,
                height: 28,
                decoration: BoxDecoration(
                  shape: BoxShape.circle,
                  color: selected
                      ? AppColors.primary
                      : Colors.transparent,
                  border: Border.all(
                    color: selected
                        ? AppColors.primary
                        : AppColors.border,
                  ),
                ),
                child: selected
                    ? const Icon(
                        Icons.check,
                        size: 18,
                        color: Colors.white,
                      )
                    : null,
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
