import 'package:flutter/material.dart';

import '../../app/theme/app_colors.dart';

enum AppButtonVariant {
  primary,
  secondary,
  ghost,
  danger,
}

class AppButton extends StatelessWidget {
  const AppButton({
    super.key,
    required this.onPressed,
    required this.child,
    this.variant = AppButtonVariant.primary,
    this.fullWidth = false,
    this.icon,
  });

  final VoidCallback? onPressed;
  final Widget child;
  final AppButtonVariant variant;
  final bool fullWidth;
  final Widget? icon;

  @override
  Widget build(BuildContext context) {
    final button = _buildButton();

    if (fullWidth) {
      return SizedBox(
        width: double.infinity,
        child: button,
      );
    }

    return button;
  }

  Widget _buildButton() {
    switch (variant) {
      case AppButtonVariant.primary:
        return FilledButton(
          onPressed: onPressed,
          style: _style(
            backgroundColor: AppColors.primary,
            foregroundColor: Colors.white,
          ),
          child: _content(),
        );

      case AppButtonVariant.secondary:
        return OutlinedButton(
          onPressed: onPressed,
          style: _style(
            backgroundColor: AppColors.surface,
            foregroundColor: AppColors.textPrimary,
            borderColor: AppColors.border,
          ),
          child: _content(),
        );

      case AppButtonVariant.ghost:
        return TextButton(
          onPressed: onPressed,
          style: _style(
            backgroundColor: Colors.transparent,
            foregroundColor: AppColors.primary,
          ),
          child: _content(),
        );

      case AppButtonVariant.danger:
        return OutlinedButton(
          onPressed: onPressed,
          style: _style(
            backgroundColor: AppColors.error.withValues(alpha: 0.08),
            foregroundColor: AppColors.error,
            borderColor: AppColors.error.withValues(alpha: 0.2),
          ),
          child: _content(),
        );
    }
  }

  Widget _content() {
    if (icon == null) {
      return child;
    }

    return Row(
      mainAxisSize: MainAxisSize.min,
      children: [
        icon!,
        const SizedBox(width: 8),
        child,
      ],
    );
  }

  ButtonStyle _style({
    required Color backgroundColor,
    required Color foregroundColor,
    Color? borderColor,
  }) {
    return ButtonStyle(
      minimumSize: const WidgetStatePropertyAll(
        Size(0, 52),
      ),
      padding: const WidgetStatePropertyAll(
        EdgeInsets.symmetric(horizontal: 20),
      ),
      backgroundColor: WidgetStatePropertyAll(backgroundColor),
      foregroundColor: WidgetStatePropertyAll(foregroundColor),
      shape: WidgetStatePropertyAll(
        RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(16),
          side: borderColor == null
              ? BorderSide.none
              : BorderSide(color: borderColor),
        ),
      ),
      elevation: const WidgetStatePropertyAll(0),
      textStyle: const WidgetStatePropertyAll(
        TextStyle(
          fontSize: 15,
          fontWeight: FontWeight.w500,
        ),
      ),
    );
  }
}