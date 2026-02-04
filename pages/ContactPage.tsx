import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { Sun, ArrowLeft, Check, Send } from 'lucide-react';

// EmailJS設定
const EMAILJS_SERVICE_ID = 'service_ge0upmi';
const EMAILJS_TEMPLATE_ID = 'template_ai0rsz2';
const EMAILJS_PUBLIC_KEY = 'vx50aV6eOQr3aUKlJ';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    name: '',
    email: '',
    phone: '',
    plan: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const errorRef = useRef<HTMLDivElement>(null);

  // エラー時に自動スクロール
  useEffect(() => {
    if (error && errorRef.current) {
      errorRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [error]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // 電話番号のバリデーション（入力されている場合のみ）
    if (formData.phone && !formData.phone.includes('-')) {
      setError('電話番号にハイフンをつけてください（例: 03-1234-5678）');
      return;
    }

    setIsSubmitting(true);

    try {
      // Google Sheetsに送信
      const response = await fetch('https://script.google.com/macros/s/AKfycbw1zMNsitPgh5WA-RH0QZZSNcXEmU8ncJdx6LrTolBRhnP5SWx84zglP4ighssGWAXXuA/exec', {
        method: 'POST',
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('送信に失敗しました');
      }

      // プラン名を日本語に変換
      const planNames: { [key: string]: string } = {
        'banso': '伴走プラン（10万円/月）',
        'jiso': '自走プラン（30万円/月）',
        'kaihatsu': '開発プラン（50万円/月）',
        'undecided': 'まだ決めていない',
        '': '未選択'
      };

      // EmailJSで自動返信メール送信
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          to_email: formData.email,
          to_name: formData.name,
          company_name: formData.companyName,
          phone: formData.phone || '未入力',
          plan: planNames[formData.plan] || formData.plan,
          message: formData.message || 'なし',
          email: formData.email,
          calendar_link: 'https://calendar.app.google/N8cfmp62m55CpWcq7'
        },
        EMAILJS_PUBLIC_KEY
      );

      setIsSubmitted(true);
    } catch (err) {
      setError('送信に失敗しました。もう一度お試しください。');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen text-text-body font-sans selection:bg-primary-200 selection:text-primary-900 overflow-x-hidden">
        {/* Header */}
        <header className="fixed top-0 inset-x-0 z-50 transition-all duration-300 px-2 md:px-0 pt-2 md:pt-4">
          <div className="glass shadow-sm border border-white/60 rounded-full max-w-7xl mx-auto px-4 sm:px-8">
            <div className="flex justify-between items-center h-16 md:h-20">
              <a href="/" className="flex items-center gap-3">
                <div className="bg-gradient-to-br from-primary-400 to-primary-500 text-white p-2.5 rounded-full shadow-lg shadow-primary-500/20">
                  <Sun className="w-5 h-5 fill-current" />
                </div>
                <span className="font-rounded font-bold text-xl text-text-heading tracking-tight">AI顧問</span>
              </a>
            </div>
          </div>
        </header>

        <Section background="cream" decoration className="pt-36 pb-24 lg:pt-48 lg:pb-36 min-h-screen flex items-center">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <Check className="w-12 h-12 text-primary-600" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-text-heading mb-6 font-rounded">
              送信が完了しました
            </h1>
            <p className="text-lg text-text-body mb-10 leading-relaxed">
              お問い合わせいただきありがとうございます。<br />
              営業日24時間以内に担当者よりご連絡いたします。
            </p>
            <a href="/">
              <Button variant="primary" size="lg">
                <ArrowLeft className="w-5 h-5 mr-2" />
                トップページに戻る
              </Button>
            </a>
          </div>
        </Section>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-text-body font-sans selection:bg-primary-200 selection:text-primary-900 overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50 transition-all duration-300 px-2 md:px-0 pt-2 md:pt-4">
        <div className="glass shadow-sm border border-white/60 rounded-full max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <a href="/" className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-primary-400 to-primary-500 text-white p-2.5 rounded-full shadow-lg shadow-primary-500/20">
                <Sun className="w-5 h-5 fill-current" />
              </div>
              <span className="font-rounded font-bold text-xl text-text-heading tracking-tight">AI顧問</span>
            </a>
            <a href="/" className="text-sm text-text-muted hover:text-primary-600 transition-colors flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              トップに戻る
            </a>
          </div>
        </div>
      </header>

      <Section background="cream" decoration className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-primary-500 font-bold tracking-widest text-sm uppercase mb-2 block">CONTACT</span>
            <h1 className="text-2xl md:text-3xl font-bold text-text-heading mb-3 font-rounded">
              無料AI活用診断
            </h1>
            <p className="text-sm text-text-body">
              以下のフォームにご記入ください。<br />
              営業日24時間以内にご連絡いたします。
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-white">
            {error && (
              <div
                ref={errorRef}
                className="mb-4 p-3 bg-red-50 border-2 border-red-300 rounded-xl text-red-600 text-sm font-medium flex items-center gap-2 animate-pulse"
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {error}
              </div>
            )}

            <div className="space-y-4">
              {/* Company Name */}
              <div>
                <label htmlFor="companyName" className="block text-sm font-bold text-text-heading mb-1.5">
                  会社名 <span className="text-primary-500">*</span>
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  required
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-base-200 focus:border-primary-300 focus:ring-2 focus:ring-primary-100 transition-all outline-none text-text-body text-sm"
                  placeholder="株式会社〇〇建設"
                />
              </div>

              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-text-heading mb-1.5">
                  お名前 <span className="text-primary-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-base-200 focus:border-primary-300 focus:ring-2 focus:ring-primary-100 transition-all outline-none text-text-body text-sm"
                  placeholder="山田 太郎"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-text-heading mb-1.5">
                  メールアドレス <span className="text-primary-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-base-200 focus:border-primary-300 focus:ring-2 focus:ring-primary-100 transition-all outline-none text-text-body text-sm"
                  placeholder="example@company.co.jp"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-bold text-text-heading mb-1.5">
                  電話番号
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-base-200 focus:border-primary-300 focus:ring-2 focus:ring-primary-100 transition-all outline-none text-text-body text-sm"
                  placeholder="03-1234-5678"
                />
                <p className="text-xs text-text-muted mt-1">※ ハイフン付きで入力してください</p>
              </div>

              {/* Plan */}
              <div>
                <label htmlFor="plan" className="block text-sm font-bold text-text-heading mb-1.5">
                  ご検討中のプラン
                </label>
                <select
                  id="plan"
                  name="plan"
                  value={formData.plan}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-base-200 focus:border-primary-300 focus:ring-2 focus:ring-primary-100 transition-all outline-none text-text-body text-sm bg-white"
                >
                  <option value="">選択してください</option>
                  <option value="banso">伴走プラン（10万円/月）</option>
                  <option value="jiso">自走プラン（30万円/月）</option>
                  <option value="kaihatsu">開発プラン（50万円/月）</option>
                  <option value="undecided">まだ決めていない</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-text-heading mb-1.5">
                  ご相談内容・ご質問など
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-base-200 focus:border-primary-300 focus:ring-2 focus:ring-primary-100 transition-all outline-none text-text-body text-sm resize-none"
                  placeholder="現在のお悩みや、ご質問があればご記入ください"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                      送信中...
                    </>
                  ) : (
                    <>
                      無料相談を申し込む
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </div>

            </div>
          </form>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-white border-t border-base-200 py-6">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-text-muted text-sm mb-1">株式会社ノヴァリス</p>
          <p className="text-text-muted text-xs">
            &copy; 2024 AI Advisor Service. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;
