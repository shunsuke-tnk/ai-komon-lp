import React, { useState } from 'react';
import { Section } from './components/Section';
import { Button } from './components/Button';
import { AccordionItem } from './components/Accordion';
import {
  Check,
  ChevronRight,
  MessageCircle,
  TrendingUp,
  Users,
  Zap,
  Target,
  Clock,
  ArrowRight,
  Star,
  Menu,
  X,
  Lightbulb,
  Award,
  Calendar,
  Building,
  GraduationCap,
  Rocket,
  Sun,
  ChevronDown,
  Sparkles,
  Settings,
  Video,
  MessageSquare,
  CheckCircle,
  XCircle,
} from 'lucide-react';

const App: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const scrollToContact = () => {
    window.location.href = '/contact';
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

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

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <nav className="flex gap-8 text-sm font-medium text-text-body">
                <button onClick={() => scrollToSection('issues')} className="hover:text-primary-600 transition-colors">課題</button>
                <button onClick={() => scrollToSection('story')} className="hover:text-primary-600 transition-colors">実績</button>
                <button onClick={() => scrollToSection('pricing')} className="hover:text-primary-600 transition-colors">料金プラン</button>
                <button onClick={() => scrollToSection('faq')} className="hover:text-primary-600 transition-colors">FAQ</button>
              </nav>
              <Button size="sm" variant="primary" onClick={scrollToContact} className="shadow-none ring-1 ring-white/50 animate-none">
                無料診断を予約
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-text-body hover:bg-warm-100 rounded-full transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-24 left-4 right-4 bg-white/95 backdrop-blur-xl rounded-3xl shadow-xl border border-white/50 p-6 flex flex-col gap-4 animate-in slide-in-from-top-5 origin-top z-40">
            <button onClick={() => scrollToSection('issues')} className="block py-3 px-4 rounded-xl hover:bg-warm-50 text-text-heading font-bold font-rounded text-left">課題</button>
            <button onClick={() => scrollToSection('story')} className="block py-3 px-4 rounded-xl hover:bg-warm-50 text-text-heading font-bold font-rounded text-left">実績</button>
            <button onClick={() => scrollToSection('pricing')} className="block py-3 px-4 rounded-xl hover:bg-warm-50 text-text-heading font-bold font-rounded text-left">料金プラン</button>
            <button onClick={() => scrollToSection('faq')} className="block py-3 px-4 rounded-xl hover:bg-warm-50 text-text-heading font-bold font-rounded text-left">FAQ</button>
            <Button className="w-full mt-2 animate-none" onClick={scrollToContact}>無料診断を予約</Button>
          </div>
        )}
      </header>

      {/* ==================== HERO SECTION ==================== */}
      <section className="relative min-h-screen pt-36 pb-24 lg:pt-48 lg:pb-36 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero.png')" }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-xl lg:max-w-2xl">
            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-text-heading tracking-tight font-rounded mb-6 space-y-2">
              <span className="block">あなたに寄り添う</span>
              <span className="block relative">
                <span className="relative inline-block">
                  AI専門家を
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary-300/50 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" /></svg>
                </span>
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-600 block">
                月10万円で御社に。
              </span>
            </h1>

            <p className="text-lg text-text-body font-medium leading-relaxed mb-8">
              「AIのこと、誰に聞けば・・・」は、もう終わり。<br/>
              専門家が御社のAI活用を0から伴走支援します。
            </p>

            {/* CTA */}
            <div className="mb-8">
              <Button size="xl" variant="primary" onClick={scrollToContact} className="shadow-primary-200/50">
                無料AI活用診断に申し込む
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <p className="text-sm text-text-muted mt-2 ml-12">毎月3社限定・Zoom 30分</p>
            </div>

            {/* Target Cards */}
            <div className="pt-8 border-t border-primary-200/60">
              <p className="text-sm font-bold text-text-muted mb-3">こんな方におすすめ</p>
              <div className="space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  <span className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-3 py-2 rounded-lg text-sm text-text-body">
                    <Check className="w-4 h-4 text-primary-500 shrink-0" />
                    何から始めればいいかわからない
                  </span>
                  <span className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-3 py-2 rounded-lg text-sm text-text-body">
                    <Check className="w-4 h-4 text-primary-500 shrink-0" />
                    事務作業の時間を減らしたい
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <span className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-3 py-2 rounded-lg text-sm text-text-body">
                    <Check className="w-4 h-4 text-primary-500 shrink-0" />
                    若手にAIを教えられる人がいない
                  </span>
                  <span className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-3 py-2 rounded-lg text-sm text-text-body">
                    <Check className="w-4 h-4 text-primary-500 shrink-0" />
                    AIは入れたが定着しない
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <span className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-3 py-2 rounded-lg text-sm text-text-body">
                    <Check className="w-4 h-4 text-primary-500 shrink-0" />
                    情報更新が早すぎてついていけない
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== ISSUES SECTION ==================== */}
      <Section background="warm" id="issues" decoration>
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-text-heading font-rounded leading-snug">
            こんなお悩みありませんか？
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* 左側: 男性 */}
          <div className="hidden md:block absolute left-0 top-8 -translate-x-1/2 w-52 lg:w-64">
            <img
              src="/images/1.png"
              alt=""
              className="w-full h-auto object-contain"
            />
          </div>

          {/* 右側: 女性（少し下に配置） */}
          <div className="hidden md:block absolute right-0 top-32 translate-x-1/2 w-52 lg:w-64">
            <img
              src="/images/2.png"
              alt=""
              className="w-full h-auto object-contain"
            />
          </div>

          {/* 中央: チェックリスト */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-[3rem] p-8 md:p-12 soft-shadow border border-white">
              <div className="space-y-5">
                {[
                  "同じ内容を、何度も別の場所に入力している",
                  "過去のファイルやデータを探すだけで10分、20分と時間が消えていく",
                  "日報・議事録・報告書。「ちょっとした作業」の積み重ねが負担に",
                  "現場スタッフへの情報共有。伝えるだけなのに、余計な手間がかかる",
                  "AIに興味はあるけど、難しそう。導入しても定着しない気がする",
                  "既存のシステムは変えられない。結局、手入力は残るんでしょ？",
                  "本当は、目の前の人ともっと向き合う時間がほしい",
                ].map((text, i) => (
                  <label key={i} className="flex items-center gap-4 cursor-pointer group">
                    <div className="w-6 h-6 rounded-lg border-2 border-primary-300 bg-primary-50 flex items-center justify-center shrink-0 group-hover:border-primary-400 transition-colors">
                      <Check className="w-4 h-4 text-primary-500" />
                    </div>
                    <span className="text-text-body leading-relaxed font-medium">{text}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-primary-50 via-white to-primary-50 rounded-[2rem] px-10 py-6 border border-primary-100">
            <p className="text-2xl md:text-3xl font-bold text-text-heading font-rounded">
              だからこそ、<span className="text-primary-600">寄り添う専門家</span>が必要です。<br/>
              一人で抱え込まず、一緒に解決しませんか？
            </p>
          </div>
        </div>
      </Section>

      {/* ==================== WHY FAIL SECTION ==================== */}
      <Section background="white" id="why-fail" className="!pt-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-text-heading leading-normal font-rounded text-center mb-12">
            なぜ、多くの会社が<br/>
            <span className="bg-primary-100 text-primary-800 px-4 py-1 rounded-full inline-block mt-2">AI導入に失敗</span>するのか
          </h2>

          {/* 成功企業 vs 失敗企業の対比 */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* 成功企業 */}
            <div className="bg-primary-50 rounded-[2rem] pl-6 pr-4 pt-6 pb-10 md:pl-8 md:pr-5 md:pt-8 md:pb-14 border-2 border-primary-200 shadow-lg shadow-primary-100/50">
              <div className="flex items-center gap-3 mb-8">
                <span className="w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center text-2xl font-bold">◎</span>
                <h4 className="font-bold text-primary-800 text-xl md:text-2xl font-rounded">AIを活用できている企業</h4>
              </div>
              <ul className="space-y-6">
                {[
                  "経理処理はAIで自動仕訳",
                  "議事録はAIで自動生成",
                  "入力作業はExcelに自動転記",
                  "レポートはAIが自動作成",
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3 text-primary-700">
                    <Check className="w-6 h-6 text-primary-500 shrink-0 mt-0.5" />
                    <span className="text-lg md:text-xl leading-relaxed font-medium">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 失敗企業 */}
            <div className="bg-base-50 rounded-[2rem] pl-6 pr-4 pt-6 pb-10 md:pl-8 md:pr-5 md:pt-8 md:pb-14 border-2 border-base-200 shadow-lg shadow-base-100/50">
              <div className="flex items-center gap-3 mb-8">
                <span className="w-12 h-12 bg-base-300 text-white rounded-full flex items-center justify-center text-2xl font-bold">×</span>
                <h4 className="font-bold text-text-heading text-xl md:text-2xl font-rounded">うまくいかない企業</h4>
              </div>
              <ul className="space-y-6">
                {[
                  "経理処理を1件ずつ手入力",
                  "議事録を手書きメモから作成",
                  "Excelに手入力して手動で集計",
                  "手書きのメモから転記",
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3 text-text-body">
                    <X className="w-6 h-6 text-base-500 shrink-0 mt-0.5" />
                    <span className="text-lg md:text-xl leading-relaxed font-medium">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 共通点への導入 */}
          <div className="text-center pt-4 pb-12 md:pb-16">
            <p className="text-2xl md:text-3xl font-bold text-text-heading font-rounded">
              うまくいかない企業には、<span className="text-primary-600">ある共通点</span>があります。
            </p>
          </div>

          {/* 失敗のループ構造 */}
          <div className="mb-10">
            <div className="bg-base-50 rounded-[2rem] p-6 md:p-10 border border-base-200">
              <h3 className="text-2xl md:text-3xl font-bold text-text-heading font-rounded text-center mb-10">
                多くの会社が陥る「負のループ」
              </h3>
              {/* 上段 3つ */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 relative">
                {[
                  {
                    num: "1",
                    title: "AIにできることがわからない",
                    desc: "ChatGPTは知っているけど、自社業務にどう活かせるか見当がつかない",
                  },
                  {
                    num: "2",
                    title: "情報更新が早すぎて追いきれない",
                    desc: "毎週のように新しいツールが出て、どれを使えばいいかわからない",
                  },
                  {
                    num: "3",
                    title: "諦めて情報収集をやめる",
                    desc: "忙しい日常業務の中で、AI情報を追うことを後回しにしてしまう",
                  },
                ].map((item, i) => (
                  <div key={i} className="relative">
                    <div className="bg-white rounded-2xl p-5 border border-base-100 shadow-sm h-full">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="w-7 h-7 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-sm font-bold">{item.num}</span>
                        <h4 className="font-bold text-text-heading text-base leading-tight">{item.title}</h4>
                      </div>
                      <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
                    </div>
                    {/* 横矢印（1→2, 2→3） */}
                    {i < 2 && (
                      <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                        <ChevronRight className="w-6 h-6 text-warm-300" />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* 縦矢印（上段→下段） */}
              <div className="flex justify-end md:pr-[16.67%] py-2">
                <ChevronDown className="w-6 h-6 text-warm-300" />
              </div>

              {/* 下段 3つ（右から左へ流れる） */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 relative">
                {[
                  {
                    num: "6",
                    title: "効果を実感できず、使わなくなる",
                    desc: "結局「AIは難しい」という結論になり、元の業務に戻ってしまう",
                  },
                  {
                    num: "5",
                    title: "他の業務への応用が思いつかない",
                    desc: "自社の業務フローのどこにAIが使えるのか、発想が広がらない",
                  },
                  {
                    num: "4",
                    title: "知識が「議事録要約」など一部で止まる",
                    desc: "試しに使ってみたものの、それ以上の活用方法が見つからない",
                  },
                ].map((item, i) => (
                  <div key={i} className="relative">
                    <div className={`bg-white rounded-2xl p-5 border shadow-sm h-full ${item.num === "6" ? "border-red-200 bg-red-50/30" : "border-base-100"}`}>
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold ${item.num === "6" ? "bg-red-100 text-red-500" : "bg-primary-100 text-primary-600"}`}>{item.num}</span>
                        <h4 className={`font-bold text-base leading-tight ${item.num === "6" ? "text-red-600" : "text-text-heading"}`}>{item.title}</h4>
                      </div>
                      <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
                    </div>
                    {/* 横矢印（6←5, 5←4）右から左なので、左に矢印 */}
                    {i < 2 && (
                      <div className="hidden md:flex absolute -left-3 top-1/2 -translate-y-1/2 z-10 rotate-180">
                        <ChevronRight className="w-6 h-6 text-warm-300" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 本当に必要なもの */}
          <div className="bg-primary-50 rounded-[2rem] p-8 md:p-10 mb-10 border border-primary-100">
            <h3 className="text-xl font-bold text-primary-800 font-rounded text-center mb-2">
              本当に必要なのは、新しいツールではありません
            </h3>
            <p className="text-center text-primary-700 mb-8">
              「業務のどこにAIが使えるか」を見極める専門家です。
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  title: "業務を分解する",
                  desc: "御社の業務を細かく分解し、AIでできる部分とできない部分を切り分けます",
                },
                {
                  title: "使える場所を見つける",
                  desc: "「ここはAIで効率化できますよ」を、業務全体から見つけ出します",
                },
                {
                  title: "情報を追い続ける",
                  desc: "日々進化するAI情報を常にキャッチアップ。あなたの代わりに追い続けます",
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-6 text-center">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary-600 font-bold">{i + 1}</span>
                  </div>
                  <h4 className="font-bold text-text-heading mb-2">{item.title}</h4>
                  <p className="text-sm text-text-muted leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 安心メッセージ */}
          <div className="bg-[#43302b] rounded-[2rem] p-8 md:p-10 text-center text-white">
            <p className="text-warm-200 mb-2">安心してください。</p>
            <p className="text-2xl md:text-3xl font-bold font-rounded mb-4">
              それ、全部AI顧問がやります。
            </p>
            <p className="text-warm-200 leading-relaxed">
              情報収集も、業務の分解も、<br className="md:hidden" />
              「どこにAIが使えるか」を見つけることも。<br/>
              <span className="text-white font-medium">あなたは本業に集中してください。</span>
            </p>
          </div>
        </div>
      </Section>

      {/* ==================== WHY ME / STORY SECTION ==================== */}
      <Section background="cream" id="story">
        {/* セクションヘッダー */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-primary-500 font-medium tracking-widest text-sm uppercase mb-4 block">My Story</span>
          <h2 className="text-3xl md:text-5xl font-bold text-text-heading leading-tight font-rounded">
            なぜ、「伴走」に<br className="md:hidden" />こだわるのか
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Part 1: 残業だらけの営業時代 - 左テキスト / 右写真 */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start mb-20 md:mb-28">
            {/* 左: テキスト */}
            <div className="order-2 md:order-1">
              <h3 className="text-2xl md:text-3xl font-bold text-text-heading font-rounded mb-8">
                残業だらけの営業時代
              </h3>
              <div className="space-y-6 text-lg text-text-body leading-[1.9]">
                <p>
                  今でこそ「AI活用」「効率化」などと、大それたことを言っていますが、私のサラリーマン時代は決して格好よいものでもなく、ただただ泥臭い道のりでした。
                </p>
                <p>
                  あらゆることがアナログ。たくさん手書きでメモし、大量にコピーし、手入力を繰り返す。容量が悪く、頭より体を動かして覚える。
                </p>
                <p>
                  それでも仕事が終わらなくて、<span className="font-bold text-text-heading">毎日0時を超えるのが当たり前でした。</span>
                </p>
                <p>
                  おまけに当時の会社には、原価表すらなく、FAXの束から該当原価を調べては見積書に転記して電卓を叩く。現場から戻ってから事務作業を行い、見積書１枚作るのに2時間以上かかっていました。
                </p>
                <p className="text-xl font-bold text-text-heading">
                  どれだけ頑張っても0時より早く帰れない。
                </p>
                <p>
                  本当にそんな日々でした。
                </p>
              </div>
            </div>
            {/* 右: 写真 */}
            <div className="order-1 md:order-2 md:sticky md:top-32">
              <div className="aspect-[4/3] bg-gradient-to-br from-base-200 to-base-300 rounded-2xl flex items-center justify-center overflow-hidden">
                <div className="text-center text-base-400">
                  <Clock className="w-16 h-16 mx-auto mb-3 opacity-50" />
                  <p className="text-sm">残業イメージ写真</p>
                </div>
              </div>
            </div>
          </div>

          {/* 転換点 - ドラマティックな引用（全幅） */}
          <div className="bg-[#43302b] rounded-3xl py-14 md:py-20 px-6 md:px-12 mb-20 md:mb-28">
            <div className="mx-auto text-center">
              <p className="text-lg md:text-4xl font-bold text-white leading-snug font-rounded whitespace-nowrap">
                「このままじゃ、一生残業地獄から抜け出せない。」
              </p>
            </div>
          </div>

          {/* Part 2: 死に物狂いの効率化 - 左写真 / 右テキスト */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start mb-20 md:mb-28">
            {/* 左: 写真 */}
            <div className="md:sticky md:top-32">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center overflow-hidden">
                <div className="text-center text-primary-400">
                  <Settings className="w-16 h-16 mx-auto mb-3 opacity-50" />
                  <p className="text-sm">効率化イメージ写真</p>
                </div>
              </div>
            </div>
            {/* 右: テキスト */}
            <div>
              <div className="space-y-6 text-lg text-text-body leading-[1.9]">
                <p>
                  この頃、世の中にChatGPTが登場し、騒がれ始めていました。私は「これしかない！」と思い、死に物狂いでAIを学んだのです。
                </p>
                <p>
                  0時に作業が終わった後、深夜に時間を作り、来る日も来る日も効率化に取り掛かる日々。
                </p>
                <p>
                  提案資料は選ぶだけで自動で完成するように。
                </p>
                <p>
                  見積もりシステムを自作し、数量を入れれば自動でたった10分で6種類の見積書が完成、契約処理まで終えられるものに。
                </p>
                <p>
                  その他、経理処理、売り上げデータ管理、報告書、顧客管理など...とにかく目につくものを片っ端から直していく。
                </p>
                <p className="font-bold text-text-heading">
                  少なくとも50ファイル以上。<br />
                  身の回りのすべてを、端から端まで効率化しました。
                </p>
              </div>
            </div>
          </div>

          {/* 成果ハイライト - 全幅 */}
          <div className="bg-primary-100 rounded-3xl py-14 md:py-20 px-8 md:px-12 mb-20 md:mb-28">
            <div className="max-w-4xl mx-auto">
              {/* ストーリーの導入 */}
              <div className="text-center mb-10 md:mb-12">
                <p className="text-text-muted text-lg md:text-xl leading-relaxed mb-4">
                  その結果、
                </p>
                <p className="text-text-heading text-xl md:text-2xl font-bold leading-relaxed font-rounded">
                  営業の仕事をこなしながら、<br className="md:hidden" />
                  これだけのことを同時にできるようになりました。
                </p>
              </div>

              {/* 達成項目リスト */}
              <div className="grid md:grid-cols-2 gap-4 md:gap-5 mb-12">
                <div className="bg-white rounded-2xl p-5 md:p-6 shadow-sm">
                  <p className="text-primary-600 text-sm font-medium mb-2">営業成績</p>
                  <p className="text-text-heading text-lg md:text-xl font-bold leading-snug">5年連続で個人年間売上2億円を維持</p>
                </div>
                <div className="bg-white rounded-2xl p-5 md:p-6 shadow-sm">
                  <p className="text-primary-600 text-sm font-medium mb-2">マーケティング</p>
                  <p className="text-text-heading text-lg md:text-xl font-bold leading-snug">Web制作・チラシ作成など全業務を担当</p>
                </div>
                <div className="bg-white rounded-2xl p-5 md:p-6 shadow-sm">
                  <p className="text-primary-600 text-sm font-medium mb-2">会社への貢献</p>
                  <p className="text-text-heading text-lg md:text-xl font-bold leading-snug">創業40年で過去最高集客数・最高売上を達成</p>
                </div>
                <div className="bg-white rounded-2xl p-5 md:p-6 shadow-sm">
                  <p className="text-primary-600 text-sm font-medium mb-2">外部活動</p>
                  <p className="text-text-heading text-lg md:text-xl font-bold leading-snug">経営塾でAI講座を担当・AIコンサルも実施</p>
                </div>
              </div>

              {/* 結論 */}
              <div className="text-center pt-8 border-t border-primary-200">
                <p className="text-text-heading text-xl md:text-2xl font-bold leading-relaxed mb-6">
                  <span className="underline decoration-primary-500 decoration-4 underline-offset-4">業務量は圧倒的に増えた</span>にも関わらず、
                </p>
                <p className="text-2xl md:text-3xl text-text-heading font-bold font-rounded leading-relaxed">
                  定時で帰ることができるようになったのです。
                </p>
              </div>
            </div>
          </div>

          {/* Part 3: 感情的クライマックス - 左テキスト / 右余白 */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center mb-20 md:mb-28">
            <div className="space-y-8 text-lg text-text-body leading-[1.9]">
              <p className="text-2xl md:text-3xl font-bold text-text-heading font-rounded leading-relaxed">
                あの頃、すぐに聞ける人がいたら、<br />
                どれだけ楽だっただろう。
              </p>
              <p className="text-xl md:text-2xl text-text-heading leading-relaxed">
                そんな人になれたら、<br />
                どれだけ楽になる人がいるだろう。
              </p>
              <p className="text-xl text-primary-600 font-bold">
                そんな想いから、このサービスを作りました。
              </p>
            </div>
            <div className="hidden md:block"></div>
          </div>

          {/* 中間CTA */}
          <div className="text-center mb-20 md:mb-28">
            <Button size="lg" variant="primary" onClick={scrollToContact} className="shadow-primary-200/50">
              無料AI活用診断に申し込む
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <p className="text-sm text-text-muted mt-3">毎月3社限定・Zoom 30分</p>
          </div>

          {/* Part 4: 使命 */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-3xl p-10 md:p-14 shadow-lg border border-primary-100">
              <div className="space-y-8 text-lg md:text-xl text-text-body leading-[1.9] text-center">
                <p>
                  私は、200万円以上かけてAIを学んできましたが、<br />
                  AIに詳しいだけの人ではありません。
                </p>
                <p className="text-xl md:text-2xl font-bold text-text-heading">
                  現場の痛みと、それを乗り越える<br className="md:hidden" />泥臭いプロセスを知っています。
                </p>
                <p>
                  だから、一時的な代行ではなく、
                </p>
                <p className="text-xl md:text-2xl font-bold text-primary-600 font-rounded">
                  現場に定着するまで「伴走」するサービスを。
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ==================== CONCEPT SECTION ==================== */}
      <Section background="white" id="concept">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-heading leading-tight font-rounded">
              AI人材を「採用」するのではなく<br/>
              <span className="text-primary-500">「顧問」として迎える</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* 採用カード */}
            <div className="p-8 md:p-10 rounded-[3rem] border border-base-200 bg-base-50 text-text-muted">
              <h3 className="font-bold text-2xl mb-6 flex items-center gap-4 font-rounded">
                <div className="w-12 h-12 rounded-full bg-base-200 flex items-center justify-center text-text-muted text-xl">?</div>
                AI人材を採用
              </h3>
              <ul className="space-y-4 text-lg">
                <li className="border-b border-base-200 pb-3">
                  <div className="flex justify-between mb-1">
                    <span>月額コスト</span>
                    <span className="font-medium flex items-center gap-2"><X className="w-5 h-5 text-base-300" />25万円〜</span>
                  </div>
                  <p className="text-sm text-right">給与・社会保険・福利厚生</p>
                </li>
                <li className="border-b border-base-200 pb-3">
                  <div className="flex justify-between mb-1">
                    <span>導入スピード</span>
                    <span className="font-medium flex items-center gap-2"><X className="w-5 h-5 text-base-300" />採用活動が必要</span>
                  </div>
                  <p className="text-sm text-right">求人・面接・選考で数ヶ月</p>
                </li>
                <li className="border-b border-base-200 pb-3">
                  <div className="flex justify-between mb-1">
                    <span>教育</span>
                    <span className="font-medium flex items-center gap-2"><X className="w-5 h-5 text-base-300" />教育が必要</span>
                  </div>
                  <p className="text-sm text-right">社内教育の負担が発生</p>
                </li>
                <li className="border-b border-base-200 pb-3">
                  <div className="flex justify-between mb-1">
                    <span>スキル</span>
                    <span className="font-medium flex items-center gap-2"><X className="w-5 h-5 text-base-300" />見極めが困難</span>
                  </div>
                  <p className="text-sm text-right">採用後のミスマッチリスク</p>
                </li>
                <li className="pt-2">
                  <div className="flex justify-between mb-1">
                    <span>継続性</span>
                    <span className="font-medium flex items-center gap-2"><X className="w-5 h-5 text-base-300" />辞めるリスク</span>
                  </div>
                  <p className="text-sm text-right">退職時の引き継ぎ問題</p>
                </li>
              </ul>
            </div>

            {/* AI顧問カード */}
            <div className="p-8 md:p-10 rounded-[3rem] border-2 border-primary-100 bg-white shadow-xl shadow-primary-100/30 relative transform md:scale-105">
              <div className="absolute -top-5 right-10 bg-gradient-to-r from-primary-500 to-primary-600 text-white text-sm font-bold px-5 py-2.5 rounded-full shadow-lg">RECOMMENDED</div>
              <h3 className="font-bold text-3xl text-text-heading mb-6 flex items-center gap-4 font-rounded">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600"><Check size={24} /></div>
                AI顧問
              </h3>
              <ul className="space-y-4 text-lg">
                <li className="border-b border-primary-50 pb-3">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-text-body">月額コスト</span>
                    <span className="font-bold text-primary-600 flex items-center gap-2 text-xl"><Check className="w-5 h-5" />10万円〜</span>
                  </div>
                  <p className="text-sm text-right text-text-muted">シンプルな月額制</p>
                </li>
                <li className="border-b border-primary-50 pb-3">
                  <div className="flex justify-between mb-1">
                    <span className="text-text-body">導入スピード</span>
                    <span className="font-bold text-primary-600 flex items-center gap-2 text-xl"><Check className="w-5 h-5" />今すぐ始められる</span>
                  </div>
                  <p className="text-sm text-right text-text-muted">契約後すぐにスタート</p>
                </li>
                <li className="border-b border-primary-50 pb-3">
                  <div className="flex justify-between mb-1">
                    <span className="text-text-body">教育</span>
                    <span className="font-bold text-primary-600 flex items-center gap-2 text-xl"><Check className="w-5 h-5" />教育してくれる</span>
                  </div>
                  <p className="text-sm text-right text-text-muted">むしろ御社を教育</p>
                </li>
                <li className="border-b border-primary-50 pb-3">
                  <div className="flex justify-between mb-1">
                    <span className="text-text-body">スキル</span>
                    <span className="font-bold text-primary-600 flex items-center gap-2 text-xl"><Check className="w-5 h-5" />実績で証明済み</span>
                  </div>
                  <p className="text-sm text-right text-text-muted">どんなAIにも対応可能</p>
                </li>
                <li className="pt-2">
                  <div className="flex justify-between mb-1">
                    <span className="text-text-body">継続性</span>
                    <span className="font-bold text-primary-600 flex items-center gap-2 text-xl"><Check className="w-5 h-5" />辞めない</span>
                  </div>
                  <p className="text-sm text-right text-text-muted">安定した長期サポート</p>
                </li>
              </ul>
              <div className="mt-8 text-center">
                <Button className="w-full text-lg py-4" variant="primary" onClick={scrollToContact}>AI顧問に相談する</Button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ==================== PRICING SECTION ==================== */}
      <Section background="warm" id="pricing" decoration>
        <div className="text-center mb-8">
          <span className="text-primary-500 font-bold tracking-widest text-sm uppercase mb-3 block">PLANS</span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-heading font-rounded">御社に最適なプランを</h2>
          <p className="text-text-muted mt-4">モニター価格で提供中</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {/* Plan 1: 伴走プラン */}
          <div className="bg-white rounded-[2.5rem] p-10 border border-base-200 shadow-lg relative flex flex-col">
            <div className="absolute top-6 right-6 bg-primary-100 text-primary-700 text-xs font-bold px-3 py-1 rounded-full">まずは始めたい方</div>
            <h3 className="text-xl font-bold text-text-heading font-rounded">伴走プラン</h3>
            <p className="text-sm text-text-muted mt-2 h-10">AI専門家があなたの会社に</p>
            <div className="my-8">
              <span className="text-base-400 line-through text-lg">15万円</span>
              <span className="text-primary-500 text-sm ml-2">モニター価格</span>
              <div>
                <span className="text-7xl font-bold text-primary-500 font-rounded">10</span>
                <span className="text-text-muted">万円/月</span>
              </div>
            </div>
            <ul className="space-y-4 text-sm flex-1">
              <li className="flex gap-3"><Check className="w-5 h-5 text-primary-500 shrink-0"/> チャット相談 無制限</li>
              <li className="flex gap-3"><Check className="w-5 h-5 text-primary-500 shrink-0"/> キックオフ/振り返りMTG</li>
              <li className="flex gap-3"><Check className="w-5 h-5 text-primary-500 shrink-0"/> 月次レポート</li>
              <li className="flex gap-3 text-base-300"><X className="w-5 h-5 shrink-0"/> 社員研修</li>
              <li className="flex gap-3 text-base-300"><X className="w-5 h-5 shrink-0"/> オーダーメイド開発</li>
            </ul>
            <button onClick={scrollToContact} className="w-full bg-gradient-to-r from-primary-400 to-primary-500 text-white font-bold py-4 px-8 rounded-full shadow-[0_4px_20px_-4px_rgba(251,146,60,0.5)] hover:shadow-[0_8px_25px_-4px_rgba(251,146,60,0.6)] hover:-translate-y-2 hover:scale-105 transition-all duration-300 mt-10">
              選択する
            </button>
          </div>

          {/* Plan 2: 自走プラン */}
          <div className="bg-white rounded-[2.5rem] p-10 border border-base-200 shadow-lg relative flex flex-col">
            <div className="absolute top-6 right-6 bg-primary-100 text-primary-700 text-xs font-bold px-3 py-1 rounded-full">スタッフを育てたい方</div>
            <h3 className="text-xl font-bold text-text-heading font-rounded">自走プラン</h3>
            <p className="text-sm text-text-muted mt-2 h-10">社内AI人材の育成まで支援</p>
            <div className="my-8">
              <span className="text-base-400 line-through text-lg">40万円</span>
              <span className="text-primary-500 text-sm ml-2">モニター価格</span>
              <div>
                <span className="text-7xl font-bold text-primary-500 font-rounded">30</span>
                <span className="text-text-muted">万円/月</span>
              </div>
            </div>
            <ul className="space-y-4 text-sm flex-1">
              <li className="flex gap-3"><Check className="w-5 h-5 text-primary-500 shrink-0"/> 伴走プランの全内容</li>
              <li className="flex gap-3"><Check className="w-5 h-5 text-primary-500 shrink-0"/> 社員研修 (4名まで)</li>
              <li className="flex gap-3"><Check className="w-5 h-5 text-primary-500 shrink-0"/> 内製化支援</li>
              <li className="flex gap-3 text-base-300"><X className="w-5 h-5 shrink-0"/> オーダーメイド開発</li>
            </ul>
            <button onClick={scrollToContact} className="w-full bg-gradient-to-r from-primary-400 to-primary-500 text-white font-bold py-4 px-8 rounded-full shadow-[0_4px_20px_-4px_rgba(251,146,60,0.5)] hover:shadow-[0_8px_25px_-4px_rgba(251,146,60,0.6)] hover:-translate-y-2 hover:scale-105 transition-all duration-300 mt-10">
              選択する
            </button>
          </div>

          {/* Plan 3: 開発プラン */}
          <div className="bg-white rounded-[2.5rem] p-10 border border-base-200 shadow-lg relative flex flex-col">
            <div className="absolute top-6 right-6 bg-primary-100 text-primary-700 text-xs font-bold px-3 py-1 rounded-full">専用ツールを作りたい方</div>
            <h3 className="text-xl font-bold text-text-heading font-rounded">開発プラン</h3>
            <p className="text-sm text-text-muted mt-2 h-10">丸投げOK。オーダーメイド</p>
            <div className="my-8">
              <span className="text-base-400 line-through text-lg">60万円</span>
              <span className="text-primary-500 text-sm ml-2">モニター価格</span>
              <div>
                <span className="text-7xl font-bold text-primary-500 font-rounded">50</span>
                <span className="text-text-muted">万円/月</span>
              </div>
            </div>
            <ul className="space-y-4 text-sm flex-1">
              <li className="flex gap-3"><Check className="w-5 h-5 text-primary-500 shrink-0"/> 要件整理</li>
              <li className="flex gap-3"><Check className="w-5 h-5 text-primary-500 shrink-0"/> 月1開発MTG</li>
              <li className="flex gap-3"><Check className="w-5 h-5 text-primary-500 shrink-0"/> オーダーメイド開発</li>
              <li className="flex gap-3"><Check className="w-5 h-5 text-primary-500 shrink-0"/> チャット相談(開発関連)</li>
            </ul>
            <button onClick={scrollToContact} className="w-full bg-gradient-to-r from-primary-400 to-primary-500 text-white font-bold py-4 px-8 rounded-full shadow-[0_4px_20px_-4px_rgba(251,146,60,0.5)] hover:shadow-[0_8px_25px_-4px_rgba(251,146,60,0.6)] hover:-translate-y-2 hover:scale-105 transition-all duration-300 mt-10">
              選択する
            </button>
          </div>
        </div>

        <div className="mt-12 text-center text-sm text-text-muted">
          <p>※最低契約期間：3ヶ月（最初の1ヶ月は試用期間として解約可能）</p>
        </div>
      </Section>

      {/* ==================== COMPARISON SECTION ==================== */}
      <Section background="white" id="comparison">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center text-2xl md:text-3xl font-bold mb-12 text-text-heading font-rounded">機能別対応状況</h2>

          {/* プランヘッダー */}
          <div className="grid grid-cols-4 gap-2 md:gap-4 mb-2">
            <div></div>
            {[
              { name: "伴走プラン", price: "10", target: "まずはAI活用を\n始めたい方" },
              { name: "自走プラン", price: "30", target: "社内にAI人材を\n育てたい方" },
              { name: "開発プラン", price: "50", target: "専用ツールを\n作りたい方" },
            ].map((plan, i) => (
              <div key={i} className={`text-center py-4 md:py-6 px-2 md:px-4 rounded-t-2xl ${i === 1 ? 'bg-primary-50 border-2 border-b-0 border-primary-200' : 'bg-warm-50 border border-b-0 border-warm-200'}`}>
                <p className="font-bold text-text-heading text-sm md:text-base font-rounded mb-1">{plan.name}</p>
                <p className="text-primary-500 font-bold text-lg md:text-2xl font-rounded">
                  ¥{plan.price}<span className="text-xs md:text-sm text-text-muted font-normal">万円</span>
                </p>
                <p className="text-[10px] md:text-xs text-text-muted mt-1">/月</p>
              </div>
            ))}
          </div>

          {/* 機能一覧 */}
          <div className="bg-warm-50 rounded-b-2xl rounded-tl-2xl overflow-hidden border border-warm-200">
            {[
              { feature: "チャット相談", desc: "Slackでいつでも質問", plans: [true, true, "開発関連のみ"] },
              { feature: "キックオフMTG", desc: "現状把握と目標設定", plans: [true, true, true] },
              { feature: "振り返りMTG", desc: "3ヶ月後の成果確認", plans: [true, true, true] },
              { feature: "社員研修", desc: "4名までのAI活用研修", plans: [false, true, false] },
              { feature: "内製化支援", desc: "自社でAI活用を進める体制づくり", plans: [false, true, true] },
              { feature: "月1開発MTG", desc: "進捗確認とフィードバック", plans: [false, false, true] },
              { feature: "オーダーメイド開発", desc: "御社専用AIツールを構築", plans: [false, false, true] },
            ].map((row, i) => (
              <div key={i} className={`grid grid-cols-4 gap-2 md:gap-4 ${i % 2 === 0 ? 'bg-white' : 'bg-warm-50/50'}`}>
                {/* 機能名 */}
                <div className="py-2.5 md:py-3 px-3 md:px-6">
                  <p className="font-bold text-text-heading text-sm md:text-base">{row.feature}</p>
                  <p className="text-[10px] md:text-xs text-text-muted mt-0.5 hidden md:block">{row.desc}</p>
                </div>
                {/* プラン別対応 */}
                {row.plans.map((val, j) => (
                  <div key={j} className={`flex items-center justify-center py-2.5 md:py-3 ${j === 1 ? 'bg-primary-50/30' : ''}`}>
                    {val === true ? (
                      <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-gradient-to-br from-primary-400 to-primary-500 flex items-center justify-center shadow-sm shadow-primary-200">
                        <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" />
                      </div>
                    ) : val === false ? (
                      <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-base-100 flex items-center justify-center">
                        <span className="text-base-300 text-sm font-bold">—</span>
                      </div>
                    ) : (
                      <div className="text-center">
                        <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-primary-100 flex items-center justify-center mx-auto border-2 border-primary-300">
                          <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary-500" />
                        </div>
                        <p className="text-[8px] md:text-[10px] text-text-muted mt-0.5">{val}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* こんな方に */}
          <div className="grid grid-cols-4 gap-2 md:gap-4 mt-6">
            <div className="py-4 px-3 md:px-6">
              <p className="text-primary-500 font-bold text-sm">こんな方に</p>
            </div>
            {[
              "まずはAI活用を\n始めたい方",
              "社内にAI人材を\n育てたい方",
              "専用ツールを\n作りたい方",
            ].map((target, i) => (
              <div key={i} className={`py-3 md:py-4 px-2 md:px-4 rounded-xl ${i === 1 ? 'bg-primary-50 border border-primary-200' : 'bg-warm-50 border border-warm-200'}`}>
                <p className="text-center text-xs md:text-sm text-text-body whitespace-pre-line leading-relaxed">{target}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ==================== FLOW SECTION ==================== */}
      <Section background="cream" id="flow" decoration>
        <h2 className="text-center text-3xl font-bold mb-16 text-text-heading font-rounded">ご利用の流れ</h2>
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col gap-4">
            {/* Step 01 */}
            <div className="bg-white rounded-2xl p-6 border-l-4 border-primary-500 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl font-bold text-primary-500 font-rounded">01</span>
                <h3 className="text-xl font-bold text-text-heading font-rounded">無料AI活用診断</h3>
              </div>
              <p className="text-text-body leading-relaxed mb-3">
                改善の第一歩は<span className="font-bold text-text-heading">現状を把握すること</span>。<br />
                一緒に業務を棚卸しし、「何が改善できて、何ができないか」を明確にします。
              </p>
              <div className="flex gap-2">
                <span className="bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded">完全無料</span>
                <span className="bg-base-100 text-text-body text-xs font-bold px-3 py-1 rounded">Zoom 30分</span>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex justify-center text-primary-300">
              <ChevronDown className="w-8 h-8" />
            </div>

            {/* Step 02 */}
            <div className="bg-white rounded-2xl p-6 border border-base-200 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl font-bold text-primary-500 font-rounded">02</span>
                <h3 className="text-xl font-bold text-text-heading font-rounded">ロードマップ提示</h3>
              </div>
              <p className="text-text-body leading-relaxed">
                「何を」「どの順番で」改善するか、具体的な計画と期間をご提示します。
              </p>
            </div>

            {/* Arrow */}
            <div className="flex justify-center text-primary-300">
              <ChevronDown className="w-8 h-8" />
            </div>

            {/* Step 03 */}
            <div className="bg-white rounded-2xl p-6 border border-base-200 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl font-bold text-primary-500 font-rounded">03</span>
                <h3 className="text-xl font-bold text-text-heading font-rounded">ご契約</h3>
              </div>
              <p className="text-text-body leading-relaxed">
                最適なプランをご選択。最初の1ヶ月は試用期間なので安心してスタートできます。
              </p>
            </div>

            {/* Arrow */}
            <div className="flex justify-center text-primary-300">
              <ChevronDown className="w-8 h-8" />
            </div>

            {/* Step 04 */}
            <div className="bg-white rounded-2xl p-6 border border-base-200 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl font-bold text-primary-500 font-rounded">04</span>
                <h3 className="text-xl font-bold text-text-heading font-rounded">サービス開始</h3>
              </div>
              <p className="text-text-body leading-relaxed">
                キックオフMTGで目標を共有。いつでも相談できる体制で伴走します。
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ==================== FAQ SECTION ==================== */}
      <Section background="white" id="faq">
        <h2 className="text-center text-3xl font-bold mb-12 text-text-heading font-rounded">よくあるご質問</h2>
        <div className="max-w-3xl mx-auto">
          {[
            { q: "なぜ「3ヶ月」なのですか？", a: "AIを導入して仕組みを作るだけでなく、日常業務に溶け込ませて習慣化するために必要な期間として設定しています。" },
            { q: "試用期間とは？", a: "最初の1ヶ月間は相性を判断いただく試用期間として、途中で解約が可能です。" },
            { q: "プラン変更は可能ですか？", a: "はい、可能です。状況に応じてプランの変更を承ります。" },
            { q: "私の業界（介護など）でも利用できますか？", a: "はい。現場業務の効率化という本質は業種を問わず共通しており、医療・介護・建設など幅広い業種で効果が出ています。" },
            { q: "従業員規模は？", a: "1人〜大規模企業まで対応可能です。" },
            { q: "返信速度は？", a: "原則、平日24時間以内に返信いたします。" },
            { q: "どんな相談ができますか？", a: "AIに関することなら何でも可能です。「こんなこと聞いていいのかな？」と思うこともお気軽にご相談ください。" },
          ].map((item, i) => (
            <AccordionItem
              key={i}
              title={item.q}
              isOpen={openFaqIndex === i}
              onClick={() => toggleFaq(i)}
            >
              {item.a}
            </AccordionItem>
          ))}
        </div>
      </Section>

      {/* ==================== CREDENTIALS SECTION ==================== */}
      <Section background="warm" id="credentials" decoration>
        <div className="text-center mb-16">
          <span className="text-primary-500 font-bold tracking-widest text-sm uppercase mb-3 block">Credentials</span>
          <h2 className="text-3xl font-bold text-text-heading font-rounded">指導実績</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { icon: <Award />, title: "竹之内塾 講師", desc: "「令和の虎」竹之内教博社長運営" },
            { icon: <GraduationCap />, title: "起業塾での指導", desc: "複数の起業塾で講座担当" },
            { icon: <Building />, title: "医療法人コンサル", desc: "5施設展開の医療法人を支援" },
            { icon: <Users />, title: "1000人以上", desc: "経営者への指導実績" },
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-[2rem] text-center border border-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-4 text-primary-500">
                {React.cloneElement(item.icon as React.ReactElement, { size: 28 })}
              </div>
              <h3 className="font-bold text-text-heading mb-2 font-rounded">{item.title}</h3>
              <p className="text-sm text-text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ==================== NEXT STEP / CTA SECTION ==================== */}
      <Section background="warm" className="!py-20 md:!py-28">
        <div className="max-w-4xl mx-auto text-center">
          {/* Label */}
          <span className="text-primary-500 font-bold tracking-widest text-sm uppercase mb-4 block">NEXT STEP</span>

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-bold text-text-heading mb-8 leading-tight font-rounded">
            まずは<span className="text-primary-500">無料診断</span>から
          </h2>

          {/* Sub copy */}
          <div className="mb-6">
            <p className="text-lg md:text-xl text-text-heading font-bold leading-relaxed">
              「何を導入すべきかわからない」<br />
              「どこを改善すべきかわからない」
            </p>
          </div>

          <p className="text-text-muted mb-6">そんな状態で大丈夫です。</p>

          <div className="mb-10">
            <p className="text-text-heading font-bold text-lg md:text-xl leading-relaxed">
              大事なのは、「どこを直すべきか」を知ること。<br />
              それがわかれば、あとは一つずつ進めるだけです。
            </p>
          </div>

          {/* 3 Feature Cards */}
          <div className="grid grid-cols-3 gap-3 md:gap-4 max-w-2xl mx-auto mb-8">
            {[
              { icon: <Video className="w-5 h-5 md:w-6 md:h-6" />, title: "Zoomで実施", desc: "30分・オンライン" },
              { icon: <MessageSquare className="w-5 h-5 md:w-6 md:h-6" />, title: "業務ヒアリング", desc: "御社の課題を把握" },
              { icon: <CheckCircle className="w-5 h-5 md:w-6 md:h-6" />, title: "改善点を提示", desc: "優先順位もお伝え" },
            ].map((item, i) => (
              <div key={i} className="bg-primary-100 border border-primary-200 rounded-xl p-4 md:p-6">
                <div className="text-primary-500 flex justify-center mb-2">
                  {item.icon}
                </div>
                <p className="font-bold text-text-heading text-sm md:text-base mb-1">{item.title}</p>
                <p className="text-[10px] md:text-xs text-text-muted">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* No pressure message */}
          <p className="flex items-center justify-center gap-2 text-text-muted text-sm mb-8">
            <XCircle className="w-4 h-4" />
            押し売りは一切ありません。診断だけでもOK。
          </p>

          {/* CTA Button */}
          <div className="flex flex-col items-center gap-4">
            <Button size="xl" variant="primary" onClick={scrollToContact} className="w-full md:w-auto px-12 md:px-16 py-5 md:py-6 text-lg md:text-xl shadow-lg shadow-primary-300/30">
              無料AI活用診断に申し込む
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <p className="text-sm text-text-muted">
              ※ 毎月3社限定 / Zoom 30分
            </p>
          </div>
        </div>
      </Section>

      {/* ==================== FOOTER ==================== */}
      <footer className="bg-white border-t border-base-200 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10">
            <div className="flex items-center gap-3 text-xl font-bold text-text-heading font-rounded">
              <div className="bg-primary-500 text-white p-2 rounded-full shadow-lg shadow-primary-500/30">
                <Sun className="w-5 h-5 fill-current" />
              </div>
              AI顧問
            </div>
            <div className="flex gap-6 text-sm text-text-muted">
              <a href="#" className="hover:text-primary-600 transition-colors">利用規約</a>
              <a href="#" className="hover:text-primary-600 transition-colors">プライバシーポリシー</a>
              <a href="#" className="hover:text-primary-600 transition-colors">特定商取引法</a>
            </div>
          </div>
          <div className="text-center">
            <p className="text-text-muted text-sm mb-2">株式会社ノヴァリス</p>
            <p className="text-text-muted text-xs">
              &copy; 2024 AI Advisor Service. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
