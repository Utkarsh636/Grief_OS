import 'package:flutter_test/flutter_test.dart';

import 'package:mobile/app/app.dart';

void main() {
  testWidgets('GriefOS app loads', (WidgetTester tester) async {
    await tester.pumpWidget(const GriefOSApp());

    expect(find.text('Form Components'), findsOneWidget);
    expect(find.text('Full Name'), findsOneWidget);
    expect(find.text('Mobile Number'), findsOneWidget);
    expect(find.text('Continue'), findsOneWidget);
  });
}
