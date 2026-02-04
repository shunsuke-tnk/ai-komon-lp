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

          {/* 4つの失敗パターン - 横並び */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { num: "01", text: "AIで何ができるか\nわからない" },
              { num: "02", text: "情報更新が早すぎて\n追いきれない" },
              { num: "03", text: "ツールを入れたけど\n使わなくなった" },
              { num: "04", text: "一部だけ効率化して\n他は変わらない" },
            ].map((item, i) => (
              <div key={i} className="bg-warm-50 border border-warm-100 rounded-2xl p-5 text-center">
                <span className="text-3xl font-bold text-warm-200 font-rounded">{item.num}</span>
                <p className="text-text-body font-medium mt-2 text-sm leading-relaxed whitespace-pre-line">{item.text}</p>
              </div>
            ))}
          </div>

          {/* 失敗のループ構造 */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-text-heading font-rounded text-center mb-6">
              多くの会社が陥る「負のループ」
            </h3>
            <div className="bg-base-50 rounded-[2rem] p-6 md:p-8 border border-base-200">
              <div className="flex flex-col items-center gap-3">
                {[
                  { text: "AIにできることがわからない", icon: "😕" },
                  { text: "情報更新が早すぎて追いきれない", icon: "😰" },
                  { text: "諦めて情報収集をやめる", icon: "😔" },
                  { text: "知識が「議事録要約」など一部で止まる", icon: "📝" },
                  { text: "他の業務への応用が思いつかない", icon: "🤷" },
                  { text: "効果を実感できず、使わなくなる", icon: "📉" },
                ].map((item, i, arr) => (
                  <React.Fragment key={i}>
                    <div className="flex items-center gap-3 bg-white rounded-xl px-6 py-3 shadow-sm w-full max-w-md">
                      <span className="text-xl">{item.icon}</span>
                      <p className="text-text-body text-sm md:text-base">{item.text}</p>
                    </div>
                    {i < arr.length - 1 && (
                      <ChevronDown className="w-5 h-5 text-base-300" />
                    )}
                  </React.Fragment>
                ))}
              </div>
              <p className="text-center text-red-500 font-bold mt-6 text-lg">
                → AI導入失敗
              </p>
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
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary-500 font-bold tracking-widest text-sm uppercase mb-3 block">My Story</span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-heading leading-tight font-rounded">
              なぜ、「伴走」にこだわるのか
            </h2>
          </div>

          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-lg">
            <div className="prose prose-lg max-w-none text-text-body leading-relaxed">

              <h3 className="text-2xl font-bold text-text-heading font-rounded mt-0">残業だらけの営業時代</h3>

              <p>
                冒頭、トップセールスなどと大それたことを言いましたが、決してかっこいいものではなく、泥臭い道のりでした。
              </p>

              <p>
                あらゆることがアナログ。手書きでメモし、大量にコピーし、手入力を繰り返す・・・<strong>毎日0時を超えるのが当たり前でした。</strong>
              </p>

              <p>
                見積もり作成に2時間以上。原価表すらなく、FAXを照らし合わせて原価を調べる。朝から晩まで現場に出て、帰社してから事務作業。どれだけ頑張っても0時より早く帰れない。
              </p>

              <p className="text-xl font-bold text-text-heading my-8 text-center">
                「このままじゃ一生残業地獄から抜け出せない。」
              </p>

              <p>
                そう気づいた日から、来る日も来る日も効率化に取り掛かりました。
              </p>

              <p>
                提案資料は、選ぶだけで自動で完成するようにしました。原価表は、全て仕様書も含めて見積書と連動するように改善。見積もりシステムを自作し、数量を入れるだけで6種類の見積書が完成し、契約処理まで行えるものになりました。
              </p>

              <p>
                誰が使っても使いやすいものにするために、完成後も何十回も修正を繰り返しました。
              </p>

              <p className="text-xl font-bold text-primary-600">
                その結果、見積もり作成にかかる時間は2時間から15分まで短縮しました。
              </p>

              <hr className="my-8 border-base-200" />

              <p className="text-xl font-bold text-text-heading">
                決して、かっこいいものじゃなかった。
              </p>

              <p className="text-lg text-text-heading leading-relaxed">
                それを教えてくれる人が、僕の横にいたら<br/>
                <strong>どれだけ楽だっただろう・・・。</strong>
              </p>

              <p>
                そんな想いから、このサービスを作りました。
              </p>

              <p>
                AIに詳しいだけではありません。<strong>現場の痛みと、それを乗り越える泥臭いプロセスを知っています。</strong>だから、一時的な代行ではなく、現場に定着するまで「伴走」するサービスを。
              </p>

            </div>
          </div>

          {/* Before/After Results */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
            {[
              { label: "見積もり作成", before: "2時間", after: "15分" },
              { label: "勤務時間", before: "0時残業", after: "定時帰り" },
              { label: "セールス実績", before: "-", after: "全国トップ複数回" },
              { label: "会社実績", before: "-", after: "過去最高売上" },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-4 text-center shadow-sm">
                <p className="text-xs text-text-muted mb-1">{item.label}</p>
                <p className="text-sm text-base-400 line-through">{item.before}</p>
                <p className="text-lg font-bold text-primary-600 font-rounded">{item.after}</p>
              </div>
            ))}
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
