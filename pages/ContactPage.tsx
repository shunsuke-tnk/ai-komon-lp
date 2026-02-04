import React, { useState } from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { Sun, ArrowLeft, Check, Send } from 'lucide-react';

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
      // Here you would integrate with Google Apps Script or EmailJS
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Example: Send to Google Apps Script
      // const response = await fetch('YOUR_GOOGLE_APPS_SCRIPT_URL', {
      //   method: 'POST',
      //   body: JSON.stringify(formData),
      // });

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

      <Section background="cream" decoration className="pt-36 pb-24 lg:pt-48 lg:pb-36">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary-500 font-bold tracking-widest text-sm uppercase mb-3 block">CONTACT</span>
            <h1 className="text-3xl md:text-4xl font-bold text-text-heading mb-4 font-rounded">
              無料AI活用診断
            </h1>
            <p className="text-text-body">
              以下のフォームにご記入ください。<br />
              営業日24時間以内にご連絡いたします。
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl border border-white">
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-2xl text-red-600 text-sm">
                {error}
              </div>
            )}

            <div className="space-y-6">
              {/* Company Name */}
              <div>
                <label htmlFor="companyName" className="block text-sm font-bold text-text-heading mb-2">
                  会社名 <span className="text-primary-500">*</span>
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  required
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-2xl border border-base-200 focus:border-primary-300 focus:ring-4 focus:ring-primary-100 transition-all outline-none text-text-body"
                  placeholder="株式会社〇〇建設"
                />
              </div>

              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-text-heading mb-2">
                  お名前 <span className="text-primary-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-2xl border border-base-200 focus:border-primary-300 focus:ring-4 focus:ring-primary-100 transition-all outline-none text-text-body"
                  placeholder="山田 太郎"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-text-heading mb-2">
                  メールアドレス <span className="text-primary-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-2xl border border-base-200 focus:border-primary-300 focus:ring-4 focus:ring-primary-100 transition-all outline-none text-text-body"
                  placeholder="example@company.co.jp"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-bold text-text-heading mb-2">
                  電話番号
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-2xl border border-base-200 focus:border-primary-300 focus:ring-4 focus:ring-primary-100 transition-all outline-none text-text-body"
                  placeholder="03-1234-5678"
                />
                <p className="text-xs text-text-muted mt-2">※ ハイフン付きで入力してください（例: 03-1234-5678）</p>
              </div>

              {/* Plan */}
              <div>
                <label htmlFor="plan" className="block text-sm font-bold text-text-heading mb-2">
                  ご検討中のプラン
                </label>
                <select
                  id="plan"
                  name="plan"
                  value={formData.plan}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-2xl border border-base-200 focus:border-primary-300 focus:ring-4 focus:ring-primary-100 transition-all outline-none text-text-body bg-white"
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
                <label htmlFor="message" className="block text-sm font-bold text-text-heading mb-2">
                  ご相談内容・ご質問など
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-2xl border border-base-200 focus:border-primary-300 focus:ring-4 focus:ring-primary-100 transition-all outline-none text-text-body resize-none"
                  placeholder="現在のお悩みや、ご質問があればご記入ください"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button
                  type="submit"
                  variant="primary"
                  size="xl"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                      送信中...
                    </>
                  ) : (
                    <>
                      無料相談を申し込む
                      <Send className="w-5 h-5 ml-2" />
                    </>
                  )}
                </Button>
              </div>

            </div>
          </form>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-white border-t border-base-200 py-10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-text-muted text-sm mb-2">株式会社ノヴァリス</p>
          <p className="text-text-muted text-xs">
            &copy; 2024 AI Advisor Service. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;
