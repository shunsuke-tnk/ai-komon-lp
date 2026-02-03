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
  FileText,
  Zap,
  Target,
  Clock,
  ArrowRight,
  Star,
  Menu,
  X,
  AlertTriangle,
  Lightbulb,
  Award,
  Calendar,
  Building,
  GraduationCap,
  Rocket,
  Sun,
  ChevronDown,
  Sparkles,
  BookOpen,
  Settings,
  Image,
  PenTool
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
              <Button size="sm" variant="primary" onClick={scrollToContact} className="shadow-none ring-1 ring-white/50">
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
            <Button className="w-full mt-2" onClick={scrollToContact}>無料診断を予約</Button>
          </div>
        )}
      </header>

      {/* ==================== HERO SECTION ==================== */}
      <Section background="cream" decoration className="pt-36 pb-24 lg:pt-48 lg:pb-36">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-10 relative z-10">
            {/* Animated Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-5 py-2.5 rounded-full border border-primary-200 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary-500"></span>
              </span>
              <span className="text-sm font-bold text-warm-800 tracking-wide font-rounded">AI PARTNER & ADVISOR - DIGITAL TRANSFORMATION</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-text-heading tracking-tight font-rounded">
              <span className="inline-block relative whitespace-nowrap">
                現場を知るAI顧問が、
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary-300/50 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" /></svg>
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-600 inline-block mt-2 whitespace-nowrap">
                月10万円で御社に
              </span>
            </h1>

            <p className="text-lg text-text-body font-medium leading-relaxed max-w-xl mx-auto">
              実務の現場を知り尽くしたAI専門家が、<br/>
              御社のAI活用を0から伴走支援します。
            </p>

            {/* Authority Badges */}
            <div className="flex flex-wrap gap-3 justify-center">
              <span className="flex items-center gap-2 bg-white/70 px-4 py-2 rounded-full text-sm font-bold text-text-body border border-white/50">
                <Award className="w-4 h-4 text-primary-500" />
                複数回全国トップセールス獲得
              </span>
              <span className="flex items-center gap-2 bg-white/70 px-4 py-2 rounded-full text-sm font-bold text-text-body border border-white/50">
                <TrendingUp className="w-4 h-4 text-primary-500" />
                5年連続 個人年間売上2億円
              </span>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-5 pt-2 justify-center">
              <Button size="xl" variant="primary" onClick={scrollToContact} className="shadow-primary-200/50">
                無料AI活用診断に申し込む
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            <p className="text-sm text-text-muted">毎月3社限定・Zoom 30分</p>

            {/* Target Cards */}
            <div className="pt-8 border-t border-primary-200/60">
              <p className="text-sm font-bold text-text-muted mb-4">こんな方におすすめ</p>
              <div className="flex flex-wrap gap-3 justify-center">
                {[
                  "AIを使いたいが何から始めればいいかわからない",
                  "書類作成・記録業務の時間を短縮したい",
                  "若手にAIを教えられる人がいない"
                ].map((text, i) => (
                  <span key={i} className="flex items-center gap-2 bg-white/60 px-4 py-2 rounded-full text-sm text-text-body">
                    <Check className="w-4 h-4 text-primary-500" />
                    {text}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ==================== ISSUES SECTION ==================== */}
      <Section background="warm" id="issues" decoration>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-500 font-bold tracking-widest text-sm uppercase mb-3 block">Current Situation</span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-6 font-rounded leading-snug">
            こんなお悩みありませんか？
          </h2>
          <p className="text-text-body">
            日々のケアや対応に追われ、新しい技術を取り入れる余裕がない。<br/>
            そんな経営者・施設長の悩みを解決します。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { text: "日中は現場対応、定時後に事務処理。毎月35時間以上の残業", icon: <Clock /> },
            { text: "書類作成に2時間以上。過去の記録や資料を見ながら手入力する日々", icon: <FileText /> },
            { text: "日報・記録・報告書作成。この「ちょっとした作業」の積み重ねが残業に", icon: <PenTool /> },
            { text: "利用者様への案内や掲示物がいつも似たようなものになり、マンネリ化している", icon: <Image /> },
            { text: "採用チラシやパンフレットの外注費が高いが、自分で作るスキルも時間もない", icon: <BookOpen /> },
            { text: "AI導入の始め方がわからず、高額な投資のイメージがある", icon: <AlertTriangle /> },
            { text: "AI人材の採用コストが高く、教育できる人もいない", icon: <Users /> },
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-[2rem] soft-shadow border border-white flex items-start gap-5 hover:bg-white/80 transition-colors">
              <div className="p-3 bg-primary-50 rounded-2xl text-primary-500 shrink-0 shadow-sm">
                {React.cloneElement(item.icon as React.ReactElement, { size: 22 })}
              </div>
              <p className="font-bold text-text-body leading-relaxed text-sm pt-1">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-primary-50 via-white to-primary-50 rounded-[2rem] px-10 py-6 border border-primary-100">
            <p className="text-xl font-bold text-text-heading font-rounded">
              毎日0時残業から定時帰りを実現した私が、<br/>
              <span className="text-primary-600">0から一緒に解決します</span>
            </p>
          </div>
        </div>
      </Section>

      {/* ==================== WHY FAIL SECTION ==================== */}
      <Section background="white" id="why-fail">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-heading leading-tight font-rounded">
              なぜ、多くの会社が<br/><span className="bg-primary-100 text-primary-800 px-4 py-1 rounded-full mx-2 my-2 inline-block">AI導入に失敗</span>するのか
            </h2>
          </div>

          <div className="bg-base-50 rounded-[3.5rem] p-8 md:p-16 relative overflow-hidden border border-base-200">
            {/* Comparison */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-[2rem] border border-base-200">
                <div className="text-text-muted font-bold mb-4 flex items-center gap-2">
                  <X size={18} className="text-red-400"/>
                  多くの人が想像する効率化
                </div>
                <ul className="space-y-3 text-text-body">
                  <li className="flex items-center gap-2"><ChevronRight size={16} className="text-base-300"/>「ボタン一つで終わる」</li>
                  <li className="flex items-center gap-2"><ChevronRight size={16} className="text-base-300"/>「自動で完璧に仕上がる」</li>
                </ul>
              </div>
              <div className="bg-primary-50 p-8 rounded-[2rem] border-2 border-primary-200">
                <div className="text-primary-600 font-bold mb-4 flex items-center gap-2">
                  <Check size={18}/>
                  本当の効率化
                </div>
                <ul className="space-y-3 text-text-body">
                  <li className="flex items-center gap-2"><Check size={16} className="text-primary-500"/>資料を探す5分を<span className="font-bold">2分</span>に</li>
                  <li className="flex items-center gap-2"><Check size={16} className="text-primary-500"/>文章作成3分を<span className="font-bold">1分</span>に</li>
                  <li className="flex items-center gap-2"><Check size={16} className="text-primary-500"/>ファイル整理の2分を<span className="font-bold">30秒</span>に</li>
                </ul>
              </div>
            </div>

            <div className="prose prose-lg text-text-body mx-auto relative z-10 leading-loose text-center">
              <p className="text-xl font-bold text-text-heading mb-6 font-rounded">
                最大の効率化とは、<br/>
                <span className="text-primary-500 border-b-2 border-primary-200">地味な改善の積み重ね</span>です。
              </p>

              <p className="text-base">
                アプリ導入や外注だけでは解決しません。<br/>
                <strong>「業務の分解」と「AIの適用可否」を判断し続ける専門家</strong>が必要です。
              </p>

              <div className="mt-10 pt-10 border-t border-base-200">
                <p className="font-bold text-text-heading text-2xl font-rounded flex items-center justify-center gap-3">
                  <Lightbulb className="w-8 h-8 text-primary-500" />
                  だから、「AI顧問」という答え
                </p>
                <p className="text-base text-text-muted mt-2">常に寄り添い伴走する、新しいかたちの支援です</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ==================== WHY ME / STORY SECTION ==================== */}
      <Section background="cream" id="story" decoration>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary-500 font-bold tracking-widest text-sm uppercase mb-3 block">My Story</span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-heading leading-tight font-rounded">
              なぜ、「伴走」にこだわるのか
            </h2>
          </div>

          {/* Story Content */}
          <div className="bg-white rounded-[3rem] p-8 md:p-14 mb-16 border border-white shadow-xl">
            <div className="prose prose-lg text-text-body max-w-none">
              <div className="flex items-start gap-6 mb-10">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center shrink-0">
                  <Clock className="w-10 h-10 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-heading font-rounded mb-2">残業だらけの営業時代</h3>
                  <p className="text-text-body">毎日0時帰り。アナログ業務の山に埋もれ、見積もり作成、書類整理、報告書...全てが手作業でした。</p>
                </div>
              </div>

              <div className="flex items-start gap-6 mb-10">
                <div className="w-20 h-20 bg-gradient-to-br from-warm-100 to-warm-200 rounded-full flex items-center justify-center shrink-0">
                  <Settings className="w-10 h-10 text-warm-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-heading font-rounded mb-2">システム自作と徹底的なデジタル化</h3>
                  <p className="text-text-body">50ファイル以上のテンプレートを自作。「誰がやっても同じ品質でできる仕組み」を構築しました。</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-200 to-primary-300 rounded-full flex items-center justify-center shrink-0">
                  <Rocket className="w-10 h-10 text-primary-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-heading font-rounded mb-2">そして、結果が出た</h3>
                  <p className="text-text-body">効率化への執念が、全国トップセールスと創業40年で過去最高売上という成果につながりました。</p>
                </div>
              </div>
            </div>
          </div>

          {/* Before/After Results */}
          <h3 className="text-center text-2xl font-bold text-text-heading font-rounded mb-10">Before / After 実績</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { label: "書類作成", before: "2時間", after: "10分" },
              { label: "勤務時間", before: "0時残業", after: "定時帰り" },
              { label: "セールス実績", before: "-", after: "全国トップ複数回" },
              { label: "会社実績", before: "-", after: "創業40年で過去最高売上" },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-[2rem] p-6 text-center border border-white shadow-lg">
                <p className="text-sm text-text-muted mb-2">{item.label}</p>
                <div className="flex items-center justify-center gap-2 mb-1">
                  <span className="text-base-400 line-through text-sm">{item.before}</span>
                  <ArrowRight className="w-4 h-4 text-primary-500" />
                </div>
                <p className="text-xl font-bold text-primary-600 font-rounded">{item.after}</p>
              </div>
            ))}
          </div>

          {/* Conclusion Message */}
          <div className="bg-[#43302b] rounded-[3rem] p-10 md:p-14 text-white text-center relative overflow-hidden">
            <div className="relative z-10">
              <p className="text-lg md:text-xl leading-relaxed mb-6">
                AIに詳しいだけではありません。<br/>
                <span className="font-bold">現場の痛みと、それを乗り越える泥臭いプロセスを知っています。</span>
              </p>
              <p className="text-warm-200">
                だから、一時的な代行ではなく、<br/>
                現場に定着するまで<span className="text-white font-bold">「伴走」</span>するサービスを作りました。
              </p>
            </div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-[100px] -mr-32 -mt-32"></div>
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
            <div className="p-10 rounded-[3rem] border border-base-200 bg-base-50 text-text-muted">
              <h3 className="font-bold text-xl mb-8 flex items-center gap-3 font-rounded">
                <div className="w-10 h-10 rounded-full bg-base-200 flex items-center justify-center text-text-muted">?</div>
                AI人材を採用する場合
              </h3>
              <ul className="space-y-6">
                <li className="flex justify-between border-b border-base-200 pb-3">
                  <span>月額コスト</span>
                  <span className="font-medium">25万円〜<span className="text-xs ml-1">(給与等)</span></span>
                </li>
                <li className="flex justify-between border-b border-base-200 pb-3">
                  <span>導入スピード</span>
                  <span className="font-medium text-red-400">数ヶ月かかる</span>
                </li>
                <li className="flex justify-between border-b border-base-200 pb-3">
                  <span>教育</span>
                  <span className="font-medium">社内負担あり</span>
                </li>
                <li className="flex justify-between border-b border-base-200 pb-3">
                  <span>スキル</span>
                  <span className="font-medium">見極め困難</span>
                </li>
                <li className="flex justify-between pt-2">
                  <span>継続性</span>
                  <span className="text-sm bg-red-100 text-red-600 px-3 py-1.5 rounded-full text-xs">辞めるリスク</span>
                </li>
              </ul>
            </div>

            {/* AI顧問カード */}
            <div className="p-10 rounded-[3rem] border-2 border-primary-100 bg-white shadow-xl shadow-primary-100/30 relative transform md:scale-105">
              <div className="absolute -top-5 right-10 bg-gradient-to-r from-primary-500 to-primary-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">RECOMMENDED</div>
              <h3 className="font-bold text-2xl text-text-heading mb-8 flex items-center gap-3 font-rounded">
                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600"><Check size={20} /></div>
                AI顧問
              </h3>
              <ul className="space-y-6">
                <li className="flex justify-between border-b border-primary-50 pb-3 items-center">
                  <span className="text-text-body">月額コスト</span>
                  <span className="font-bold text-3xl text-primary-600 font-rounded">10<span className="text-base font-normal text-text-muted ml-1">万円</span></span>
                </li>
                <li className="flex justify-between border-b border-primary-50 pb-3">
                  <span className="text-text-body">導入スピード</span>
                  <span className="font-bold text-primary-600">今すぐ開始</span>
                </li>
                <li className="flex justify-between border-b border-primary-50 pb-3">
                  <span className="text-text-body">教育</span>
                  <span className="font-bold text-primary-600">逆に御社を教育</span>
                </li>
                <li className="flex justify-between border-b border-primary-50 pb-3">
                  <span className="text-text-body">スキル</span>
                  <span className="font-bold text-primary-600">実績証明済み</span>
                </li>
                <li className="flex justify-between items-center pt-2">
                  <span className="text-text-body">継続性</span>
                  <span className="text-sm bg-primary-50 text-primary-700 font-bold px-3 py-1.5 rounded-full text-xs">辞めない(安定)</span>
                </li>
              </ul>
              <div className="mt-10 text-center">
                <Button className="w-full" variant="primary" onClick={scrollToContact}>AI顧問に相談する</Button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ==================== PRICING SECTION ==================== */}
      <Section background="warm" id="pricing" decoration>
        <div className="text-center mb-16">
          <span className="text-primary-500 font-bold tracking-widest text-sm uppercase mb-3 block">PLANS</span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-heading font-rounded">御社に最適なプランを</h2>
          <p className="text-text-muted mt-4">モニター価格で提供中</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-end">
          {/* Plan 1: 伴走プラン */}
          <div className="bg-white rounded-[2.5rem] p-10 border border-base-200 shadow-sm relative z-0">
            <div className="absolute top-6 right-6 bg-primary-100 text-primary-700 text-xs font-bold px-3 py-1 rounded-full">まずは始めたい方</div>
            <h3 className="text-xl font-bold text-text-heading font-rounded">伴走プラン</h3>
            <p className="text-sm text-text-muted mt-2 h-10">AI専門家があなたの会社に</p>
            <div className="my-8">
              <span className="text-base-400 line-through text-lg">15万円</span>
              <span className="text-primary-500 text-sm ml-2">モニター価格</span>
              <div>
                <span className="text-4xl font-bold text-text-heading font-rounded">10</span>
                <span className="text-text-muted">万円/月</span>
              </div>
            </div>
            <ul className="space-y-4 text-sm mb-10">
              <li className="flex gap-3"><Check className="w-5 h-5 text-warm-600 shrink-0"/> チャット相談 無制限</li>
              <li className="flex gap-3"><Check className="w-5 h-5 text-warm-600 shrink-0"/> キックオフ/振り返りMTG</li>
              <li className="flex gap-3"><Check className="w-5 h-5 text-warm-600 shrink-0"/> 月次レポート</li>
              <li className="flex gap-3 text-base-300"><X className="w-5 h-5 shrink-0"/> 社員研修</li>
              <li className="flex gap-3 text-base-300"><X className="w-5 h-5 shrink-0"/> オーダーメイド開発</li>
            </ul>
            <Button variant="outline" className="w-full" onClick={scrollToContact}>選択する</Button>
          </div>

          {/* Plan 2: 自走プラン - Featured */}
          <div className="bg-[#43302b] rounded-[2.5rem] p-10 border border-warm-700 shadow-2xl relative z-10 text-white transform lg:-translate-y-6">
            <div className="absolute top-0 right-0 left-0 -mt-4 flex justify-center">
              <span className="bg-primary-500 text-white text-xs font-bold px-5 py-1.5 rounded-full uppercase tracking-wider shadow-lg">スタッフを育てたい方</span>
            </div>
            <h3 className="text-xl font-bold text-white font-rounded">自走プラン</h3>
            <p className="text-sm text-warm-200 mt-2 h-10">社内AI人材の育成まで支援</p>
            <div className="my-8">
              <span className="text-warm-400 line-through text-lg">40万円</span>
              <span className="text-primary-400 text-sm ml-2">モニター価格</span>
              <div>
                <span className="text-5xl font-bold text-white font-rounded">30</span>
                <span className="text-warm-300">万円/月</span>
              </div>
            </div>
            <ul className="space-y-4 text-sm mb-12">
              <li className="flex gap-3 font-bold"><Check className="w-5 h-5 text-primary-500 shrink-0"/> 伴走プランの全内容</li>
              <li className="flex gap-3 font-bold"><Check className="w-5 h-5 text-primary-500 shrink-0"/> 社員研修 (4名まで)</li>
              <li className="flex gap-3 font-bold"><Check className="w-5 h-5 text-primary-500 shrink-0"/> 内製化支援</li>
              <li className="flex gap-3 text-warm-400"><X className="w-5 h-5 shrink-0"/> オーダーメイド開発</li>
            </ul>
            <Button variant="brown" className="w-full shadow-warm-900/50" onClick={scrollToContact}>これにする</Button>
          </div>

          {/* Plan 3: エージェント開発 */}
          <div className="bg-white rounded-[2.5rem] p-10 border border-base-200 shadow-sm relative z-0">
            <div className="absolute top-6 right-6 bg-purple-100 text-purple-700 text-xs font-bold px-3 py-1 rounded-full">専用ツールを作りたい方</div>
            <h3 className="text-xl font-bold text-text-heading font-rounded">エージェント開発</h3>
            <p className="text-sm text-text-muted mt-2 h-10">丸投げOK。オーダーメイド</p>
            <div className="my-8">
              <span className="text-base-400 line-through text-lg">60万円</span>
              <span className="text-primary-500 text-sm ml-2">モニター価格</span>
              <div>
                <span className="text-4xl font-bold text-text-heading font-rounded">50</span>
                <span className="text-text-muted">万円/月</span>
              </div>
            </div>
            <ul className="space-y-4 text-sm mb-10">
              <li className="flex gap-3"><Check className="w-5 h-5 text-warm-600 shrink-0"/> 要件整理</li>
              <li className="flex gap-3"><Check className="w-5 h-5 text-warm-600 shrink-0"/> 月1開発MTG</li>
              <li className="flex gap-3"><Check className="w-5 h-5 text-warm-600 shrink-0"/> オーダーメイド開発</li>
              <li className="flex gap-3"><Check className="w-5 h-5 text-warm-600 shrink-0"/> チャット相談(開発関連)</li>
            </ul>
            <Button variant="outline" className="w-full" onClick={scrollToContact}>選択する</Button>
          </div>
        </div>

        <div className="mt-12 text-center text-sm text-text-muted">
          <p>※最低契約期間：3ヶ月（最初の1ヶ月は試用期間として解約可能）</p>
        </div>
      </Section>

      {/* ==================== COMPARISON SECTION ==================== */}
      <Section background="white" id="comparison">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center text-2xl font-bold mb-10 text-text-heading font-rounded">機能別対応状況</h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-base-200">
                  <th className="text-left py-4 px-4 font-rounded text-text-heading">機能</th>
                  <th className="text-center py-4 px-4 font-rounded text-text-heading">伴走プラン</th>
                  <th className="text-center py-4 px-4 font-rounded text-text-heading bg-primary-50">自走プラン</th>
                  <th className="text-center py-4 px-4 font-rounded text-text-heading">開発プラン</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "チャット相談", plans: [true, true, "開発関連のみ"] },
                  { feature: "キックオフ/振り返りMTG", plans: [true, true, true] },
                  { feature: "月次レポート", plans: [true, true, false] },
                  { feature: "社員研修", plans: [false, "4名まで", false] },
                  { feature: "内製化支援", plans: [false, true, false] },
                  { feature: "オーダーメイド開発", plans: [false, false, true] },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-base-100">
                    <td className="py-4 px-4 text-text-body font-medium">{row.feature}</td>
                    {row.plans.map((val, j) => (
                      <td key={j} className={`text-center py-4 px-4 ${j === 1 ? 'bg-primary-50/50' : ''}`}>
                        {val === true ? <Check className="w-5 h-5 text-primary-500 mx-auto" /> :
                         val === false ? <X className="w-5 h-5 text-base-300 mx-auto" /> :
                         <span className="text-sm text-text-body">{val}</span>}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* ==================== FLOW SECTION ==================== */}
      <Section background="cream" id="flow" decoration>
        <h2 className="text-center text-3xl font-bold mb-16 text-text-heading font-rounded">ご利用の流れ</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 relative">
            {[
              { step: "01", title: "無料AI活用診断", desc: "現状把握と改善可否の明確化 (Zoom 30分)" },
              { step: "02", title: "ロードマップ提示", desc: "改善計画の提示" },
              { step: "03", title: "ご契約", desc: "プラン選択（初月試用期間）" },
              { step: "04", title: "サービス開始", desc: "キックオフMTG、Slack連携" },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start group">
                <div className="text-5xl font-bold text-primary-200 group-hover:text-primary-300 transition-colors leading-none -mt-2 font-rounded">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-heading mb-2 font-rounded">{item.title}</h3>
                  <p className="text-text-body leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
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
      <Section background="white" className="!pt-10 !pb-20">
        <div className="max-w-5xl mx-auto relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-warm-500 rounded-[3.5rem] transform rotate-1 opacity-20 blur-3xl"></div>
          <div className="bg-gradient-to-br from-[#43302b] to-[#2a1e1b] rounded-[3.5rem] p-10 md:p-24 text-center relative overflow-hidden shadow-2xl">

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-500/20 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none"></div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight font-rounded">
                まずは無料診断から
              </h2>
              <p className="text-lg text-warm-100 mb-12 leading-relaxed max-w-2xl mx-auto">
                「何を導入すべきかわからない」状態でOK。<br/>
                現場の課題をお聞かせください。
              </p>

              <div className="flex flex-col items-center gap-6">
                <Button size="xl" variant="brown" onClick={scrollToContact} className="w-full md:w-auto px-16 py-6 text-xl shadow-warm-900/50 ring-4 ring-white/10">
                  無料AI活用診断に申し込む
                  <ArrowRight className="ml-2" />
                </Button>
                <p className="text-sm text-warm-300">
                  毎月3社限定
                </p>
              </div>
            </div>
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
