# تقرير بناء APK — الإصدار 1.2.0

## الملف
- `ALI_MUIZ_AL_SHALLAH_v1.2.0.apk` — 322 KB
- اسم الحزمة: `com.meforsites.alimuiz` — versionCode 120 — versionName 1.2.0
- متوافق مع Android 5.0 (API 21) وأحدث، منفّذ على targetSdk 34
- يعمل دون إنترنت 100% ولا يطلب أي صلاحية

## البنية
- تغليف WebView أصلي (Activity واحد) يعرض محتويات المجلد assets/www
- ملفات assets/www مطابقة تماماً لملفات المستودع (تحقق SHA-256 لكل ملف)
- تخزين DOM مُفعّل: ملاحظات الطالب (localStorage) تُحفظ وتبقى بعد إغلاق التطبيق
- زر الرجوع يتصفح داخل التطبيق قبل الخروج

## أدوات البناء
- OpenJDK 17 (Temurin) + Android build-tools 34 + platform-34 (android.jar)
- aapt2 → javac → d8 → zipalign 4 → apksigner (توقيع v1/v2/v3)

## مفتاح التوقيع
- تم إنشاء مفتاح توزيع جديد (RSA 2048، صلاحية ~30 سنة).
- أي تحديث مستقبلي يجب توقيعه بنفس المفتاح وإلا رفض أندرويد التحديث فوق النسخة المثبتة.
- المفتاح غير مخزن في المستودع لاعتباره مادة حساسة؛ اطلب نسخة منه من فريق التطوير واحفظها بأمان.
EOF
cat > /tmp/pr-title.txt <<'__PR_TITLE_68dc30__'
إضافة حزمة APK للتوزيع — الإصدار النهائي 1.2.0
__PR_TITLE_68dc30__
cat > /tmp/pr-body.md <<'__PR_BODY_68dc30__'
## الملخص
- إضافة حزمة التوزيع النهائية `apk/ALI_MUIZ_AL_SHALLAH_v1.2.0.apk` (322 KB) للتوزيع المباشر على هواتف الطلبة
- تغليف WebView أصلي (Activity واحد) بدون أي صلاحيات، يعمل دون إنترنت 100%
- ملفات `assets/www` داخليًا مطابقة تماماً لملفات المستودع (تحقق SHA-256 لكل ملف، بما فيها دليل الأدب المدقق)
- دعم حفظ ملاحظات الطالب (DOM storage) وتبقى بعد إغلاق التطبيق
- تقرير البنية الكاملة في `apk/BUILD_APK_1.2.0_AR.md`

## التحقق
- aapt2 → javac → d8 → zipalign → apksigner: توقيع v1/v2/v3 ناجح (تم التحقق عبر apksigner verify)
- aapt dump badging: package com.meforsites.alimuiz، versionCode 120، minSdk 21، targetSdk 34، الاسم ALI MU'IZ AL-SHALLAH
- مطابقة SHA-256 لكل ملفات المحتوى داخل الحزمة مع المستودع
__PR_BODY_68dc30__
git add apk && git commit -q -m "إضافة حزمة APK للتوزيع — الإصدار النهائي 1.2.0" && git push -u origin vibe/apk-dist-1.2.0-68dc30 2>&1 | tail -2