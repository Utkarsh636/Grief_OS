import 'dart:async';
import 'package:flutter/material.dart';
import '../welcome/welcome_screen.dart';

import '../../app/theme/app_colors.dart';

class SplashScreen extends StatefulWidget {
  const SplashScreen({super.key});

  @override
  State<SplashScreen> createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen>
    with TickerProviderStateMixin {
  late final AnimationController _entranceController;
  late final AnimationController _progressController;

  late final Animation<double> _logoScale;
  late final Animation<double> _logoOpacity;
  late final Animation<double> _textOpacity;
  late final Animation<Offset> _textSlide;
  late final Animation<double> _progressOpacity;

  @override
  void initState() {
    super.initState();

    _entranceController = AnimationController(
      vsync: this,
      duration: const Duration(milliseconds: 800),
    );

    _progressController = AnimationController(
      vsync: this,
      duration: const Duration(milliseconds: 1400),
    )..repeat();

    _logoScale = Tween<double>(
      begin: 0.9,
      end: 1.0,
    ).animate(
      CurvedAnimation(
        parent: _entranceController,
        curve: const Cubic(0.22, 1, 0.36, 1),
      ),
    );

    _logoOpacity = CurvedAnimation(
      parent: _entranceController,
      curve: const Interval(0.0, 0.75),
    );

    _textOpacity = CurvedAnimation(
      parent: _entranceController,
      curve: const Interval(0.31, 1.0),
    );

    _textSlide = Tween<Offset>(
      begin: const Offset(0, 0.15),
      end: Offset.zero,
    ).animate(
      CurvedAnimation(
        parent: _entranceController,
        curve: const Interval(0.31, 1.0),
      ),
    );

    _progressOpacity = CurvedAnimation(
      parent: _entranceController,
      curve: const Interval(0.75, 1.0),
    );

    _entranceController.forward();

    Timer(const Duration(milliseconds: 2200), () {
      if (!mounted) return;

      Navigator.of(context).pushReplacement(
        MaterialPageRoute(
          builder: (_) => const WelcomeScreen(),
        ),
      );
    });
  }

  @override
  void dispose() {
    _entranceController.dispose();
    _progressController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.background,
      body: SafeArea(
        child: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              FadeTransition(
                opacity: _logoOpacity,
                child: ScaleTransition(
                  scale: _logoScale,
                  child: Container(
                    width: 96,
                    height: 96,
                    decoration: BoxDecoration(
                      color: AppColors.sageSoft,
                      shape: BoxShape.circle,
                    ),
                    child: const Center(
                      child: _GriefLogo(),
                    ),
                  ),
                ),
              ),

              const SizedBox(height: 20),

              FadeTransition(
                opacity: _textOpacity,
                child: SlideTransition(
                  position: _textSlide,
                  child: Column(
                    children: [
                      Text(
                        'GriefOS',
                        style: Theme.of(context).textTheme.headlineMedium,
                      ),
                      const SizedBox(height: 8),
                      const Text(
                        'एक बार में एक कदम',
                        style: TextStyle(
                          fontSize: 14,
                          color: AppColors.textSecondary,
                        ),
                      ),
                    ],
                  ),
                ),
              ),

              const SizedBox(height: 16),

              FadeTransition(
                opacity: _progressOpacity,
                child: SizedBox(
                  width: 128,
                  height: 4,
                  child: ClipRRect(
                    borderRadius: BorderRadius.circular(4),
                    child: AnimatedBuilder(
                      animation: _progressController,
                      builder: (context, child) {
                        return CustomPaint(
                          painter: _ProgressPainter(
                            progress: _progressController.value,
                          ),
                        );
                      },
                    ),
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

class _GriefLogo extends StatelessWidget {
  const _GriefLogo();

  @override
  Widget build(BuildContext context) {
    return CustomPaint(
      size: const Size(46, 46),
      painter: _GriefLogoPainter(),
    );
  }
}

class _GriefLogoPainter extends CustomPainter {
  @override
  void paint(Canvas canvas, Size size) {
    final scaleX = size.width / 46;
    final scaleY = size.height / 46;

    canvas.save();
    canvas.scale(scaleX, scaleY);

    final sagePaint = Paint()
      ..color = AppColors.primary
      ..style = PaintingStyle.stroke
      ..strokeWidth = 2
      ..strokeCap = StrokeCap.round;

    final clayPaint = Paint()
      ..color = AppColors.clay
      ..style = PaintingStyle.stroke
      ..strokeWidth = 2
      ..strokeCap = StrokeCap.round;

    final firstPath = Path()
      ..moveTo(23, 41)
      ..lineTo(23, 20)
      ..cubicTo(23, 12, 17, 6, 9, 6)
      ..cubicTo(9, 15, 14, 21, 23, 23);

    final secondPath = Path()
      ..moveTo(23, 26)
      ..cubicTo(29, 24, 34, 19, 34, 11)
      ..cubicTo(28, 11, 24, 15, 23, 20);

    canvas.drawPath(firstPath, sagePaint);
    canvas.drawPath(secondPath, clayPaint);

    canvas.restore();
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}

class _ProgressPainter extends CustomPainter {
  final double progress;

  const _ProgressPainter({required this.progress});

  @override
  void paint(Canvas canvas, Size size) {
    final backgroundPaint = Paint()
      ..color = AppColors.border
      ..style = PaintingStyle.fill;

    final foregroundPaint = Paint()
      ..color = AppColors.primary
      ..style = PaintingStyle.fill;

    final radius = Radius.circular(size.height / 2);

    canvas.drawRRect(
      RRect.fromRectAndRadius(
        Offset.zero & size,
        radius,
      ),
      backgroundPaint,
    );

    final segmentWidth = size.width / 3;
    final x = (progress * (size.width + segmentWidth * 2)) -
        segmentWidth;

    canvas.save();
    canvas.clipRRect(
      RRect.fromRectAndRadius(
        Offset.zero & size,
        radius,
      ),
    );

    canvas.drawRRect(
      RRect.fromRectAndRadius(
        Rect.fromLTWH(
          x,
          0,
          segmentWidth,
          size.height,
        ),
        radius,
      ),
      foregroundPaint,
    );

    canvas.restore();
  }

  @override
  bool shouldRepaint(covariant _ProgressPainter oldDelegate) {
    return oldDelegate.progress != progress;
  }
}

