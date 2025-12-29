'use client';

import { useState } from 'react';

export default function Dashboard() {
  const [repoUrl, setRepoUrl] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [scansLeft, setScansLeft] = useState(3); // سنربطها بقاعدة البيانات لاحقاً

  const handleScan = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!repoUrl) {
      alert('الرجاء إدخال رابط المستودع');
      return;
    }

    // التحقق من أن الرابط من GitHub
    if (!repoUrl.includes('github.com')) {
      alert('الرجاء إدخال رابط GitHub صحيح');
      return;
    }

    if (scansLeft <= 0) {
      alert('لقد استنفدت الفحوصات المجانية. يرجى الترقية للخطة المدفوعة.');
      return;
    }

    setIsScanning(true);
    
    try {
      // سنضيف API call هنا لاحقاً
      const response = await fetch('/api/scan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ repoUrl })
      });

      const data = await response.json();
      console.log('Scan result:', data);
      
      // تقليل عدد الفحوصات المتبقية
      setScansLeft(prev => prev - 1);
      
      // الانتقال لصفحة النتائج
      // سنضيفها لاحقاً
      
    } catch (error) {
      console.error('خطأ في الفحص:', error);
      alert('حدث خطأ في الفحص. حاول مرة أخرى.');
    } finally {
      setIsScanning(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">SecurityScanner</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">
              الفحوصات المتبقية: <strong className="text-blue-600">{scansLeft}</strong>
            </span>
            {scansLeft === 0 && (
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700">
                ترقية الحساب
              </button>
            )}
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Scan Form */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-3xl font-bold mb-2">فحص مستودع جديد</h2>
            <p className="text-gray-600 mb-8">
              أدخل رابط المستودع من GitHub للبدء في الفحص
            </p>

            <form onSubmit={handleScan} className="space-y-4">
              <div>
                <label htmlFor="repoUrl" className="block text-sm font-medium text-gray-700 mb-2">
                  رابط المستودع
                </label>
                <input
                  type="text"
                  id="repoUrl"
                  value={repoUrl}
                  onChange={(e) => setRepoUrl(e.target.value)}
                  placeholder="https://github.com/username/repository"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  disabled={isScanning}
                />
              </div>

              <button
                type="submit"
                disabled={isScanning || scansLeft === 0}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition"
              >
                {isScanning ? 'جاري الفحص...' : 'ابدأ الفحص'}
              </button>
            </form>

            {/* Info Box */}
            <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-semibold text-blue-900 mb-2">ما الذي سيتم فحصه؟</h3>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• الثغرات الأمنية في الكود</li>
                <li>• المكتبات القديمة أو المعرضة للخطر</li>
                <li>• كلمات المرور المكشوفة</li>
                <li>• مشاكل الصلاحيات والوصول</li>
              </ul>
            </div>
          </div>

          {/* Previous Scans (سنضيفها لاحقاً) */}
          <div className="mt-8 bg-white rounded-lg shadow-sm p-8">
            <h3 className="text-xl font-bold mb-4">الفحوصات السابقة</h3>
            <p className="text-gray-500 text-center py-8">
              لا توجد فحوصات سابقة حتى الآن
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}