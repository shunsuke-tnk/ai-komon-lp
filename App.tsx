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
  ShieldCheck,
  Clock,
  ArrowRight,
  Star,
  Menu,
  X,
  Briefcase,
  Heart,
  Smile,
  Leaf,
  Sun
} from 'lucide-react';

const App: React.FC = () => {
  const [activeUseCase, setActiveUseCase] = useState<string>('construction');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen text-text-body font-sans selection:bg-primary-200 selection:text-primary-900 overflow-x-hidden">
      
      {/* Premium Sticky Header with rounded aesthetics */}
      <header className="fixed top-0 inset-x-0 z-50 transition-all duration-300 px-2 md:px-0 pt-2 md:pt-4">
        <div className="glass shadow-sm border border-white/60 rounded-full max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-primary-400 to-primary-500 text-white p-2.5 rounded-full shadow-lg shadow-primary-500/20">
                <Sun className="w-5 h-5 fill-current" />
              </div>
              <span className="font-rounded font-bold text-xl text-text-heading tracking-tight">AI顧問</span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <nav className="flex gap-8 text-sm font-medium text-text-body">
                <a href="#features" className="hover:text-primary-600 transition-colors">サービス内容</a>
                <a href="#cases" className="hover:text-primary-600 transition-colors">活用事例</a>
                <a href="#pricing" className="hover:text-primary-600 transition-colors">料金プラン</a>
                <a href="#faq" className="hover:text-primary-600 transition-colors">よくある質問</a>
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
            <a href="#features" onClick={() => setIsMobileMenuOpen(false)} className="block py-3 px-4 rounded-xl hover:bg-warm-50 text-text-heading font-bold font-rounded">サービス内容</a>
            <a href="#cases" onClick={() => setIsMobileMenuOpen(false)} className="block py-3 px-4 rounded-xl hover:bg-warm-50 text-text-heading font-bold font-rounded">活用事例</a>
            <a href="#pricing" onClick={() => setIsMobileMenuOpen(false)} className="block py-3 px-4 rounded-xl hover:bg-warm-50 text-text-heading font-bold font-rounded">料金プラン</a>
            <Button className="w-full mt-2" onClick={scrollToContact}>無料診断を予約</Button>
          </div>
        )}
      </header>

      {/* Section 1: Hero - Gentle & Welcoming */}
      <Section background="cream" decoration className="pt-36 pb-24 lg:pt-48 lg:pb-36">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10 relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-5 py-2.5 rounded-full border border-primary-200 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary-500"></span>
              </span>
              <span className="text-sm font-bold text-warm-800 tracking-wide font-rounded">月額10万円で始める、優しいAI改革</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-text-heading tracking-tight font-rounded">
              <span className="inline-block relative whitespace-nowrap">
                「AIを使いたいけど、
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary-300/50 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" /></svg>
              </span>
              <br />
              <span className="inline-block whitespace-nowrap">何から始めれば...」</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-600 inline-block mt-2 whitespace-nowrap">
                その悩み、解決します
              </span>
            </h1>
            
            <p className="text-lg text-text-body font-medium leading-relaxed max-w-xl">
              ITが苦手でも大丈夫。専門用語を使わず、あなたの隣で優しくサポート。<br/>
              「採用」するのではなく、「顧問」として迎える新しい選択肢が、
              御社の業務をそっと支えます。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 pt-2">
              <Button size="xl" variant="primary" onClick={scrollToContact} className="shadow-primary-200/50">
                無料診断を予約する
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <div className="flex items-center gap-4 bg-white/50 backdrop-blur-sm p-2 rounded-full pr-6 border border-white/50">
                <div className="flex -space-x-3 pl-1">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full bg-warm-200 border-2 border-white flex items-center justify-center text-xs text-warm-600 overflow-hidden">
                       <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i * 888}&backgroundColor=ffdcb3,ffedd5,fed7aa`} alt="avatar" />
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <p className="font-bold text-text-heading font-rounded">1,000名以上</p>
                  <p className="text-text-muted text-xs">の指導実績</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-primary-200/60 flex flex-wrap gap-6 text-sm font-medium text-text-body/80">
               <span className="flex items-center gap-2 bg-white/60 px-3 py-1 rounded-full">
                 <Target className="w-4 h-4 text-primary-500" />
                 「令和の虎」竹之内塾講師
               </span>
               <span className="flex items-center gap-2 bg-white/60 px-3 py-1 rounded-full">
                 <TrendingUp className="w-4 h-4 text-primary-500" />
                 創業40年企業の売上記録更新
               </span>
            </div>
          </div>
          
          {/* Gentle Visual Element */}
          <div className="relative lg:h-[600px] flex items-center justify-center">
             <div className="absolute inset-0 bg-gradient-to-tr from-primary-100 to-warm-100 rounded-[4rem] transform rotate-3 scale-95 opacity-80 blur-2xl animate-pulse-slow"></div>
             
             {/* Main Card */}
             <div className="relative bg-white/90 backdrop-blur-md rounded-[2.5rem] p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-white max-w-md w-full animate-float z-10">
                <div className="flex items-center gap-5 mb-8 border-b border-warm-100 pb-6">
                   <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center shadow-inner">
                      <Sun className="w-8 h-8 text-primary-600" />
                   </div>
                   <div>
                      <p className="font-bold text-xl text-text-heading font-rounded">AI顧問サービス</p>
                      <p className="text-sm text-text-muted">Monthly Support</p>
                   </div>
                   <div className="ml-auto bg-primary-50 text-primary-700 text-sm font-bold px-3 py-1.5 rounded-full border border-primary-200">
                      安心サポート
                   </div>
                </div>
                
                <div className="space-y-6">
                   <div className="bg-warm-50/50 rounded-3xl p-6 relative overflow-hidden">
                      <div className="flex justify-between items-end mb-2 relative z-10">
                        <span className="text-sm text-text-muted font-bold">業務負担</span>
                        <span className="text-2xl font-bold text-primary-600 font-rounded">-80%</span>
                      </div>
                      <div className="w-full bg-white rounded-full h-3 mb-1">
                         <div className="bg-gradient-to-r from-primary-300 to-primary-400 h-3 rounded-full w-[20%] transition-all duration-1000"></div>
                      </div>
                      <p className="text-xs text-right text-text-muted">導入後のイメージ</p>
                   </div>
                   
                   <div className="flex gap-4">
                      <div className="flex-1 bg-white border border-warm-100 rounded-2xl p-4 text-center">
                        <div className="w-8 h-8 mx-auto bg-primary-50 rounded-full flex items-center justify-center mb-2">
                          <Smile className="w-4 h-4 text-primary-500" />
                        </div>
                        <p className="text-xs font-bold text-text-muted">ストレスフリー</p>
                      </div>
                      <div className="flex-1 bg-white border border-warm-100 rounded-2xl p-4 text-center">
                        <div className="w-8 h-8 mx-auto bg-warm-100 rounded-full flex items-center justify-center mb-2">
                          <Heart className="w-4 h-4 text-warm-500" />
                        </div>
                        <p className="text-xs font-bold text-text-muted">親身な対応</p>
                      </div>
                   </div>
                </div>

                {/* Floating "Voice" Bubble */}
                <div className="absolute -right-8 top-20 bg-white p-4 rounded-t-3xl rounded-br-3xl rounded-bl-sm shadow-lg border border-warm-50 w-48 animate-float-delayed">
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center shrink-0">
                         <MessageCircle className="w-5 h-5 text-primary-500" />
                      </div>
                      <div className="text-xs leading-tight">
                         <p className="font-bold text-text-heading mb-0.5">いつでも相談</p>
                         <p className="text-text-muted">「これ何？」でOK!</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </Section>

      {/* Section 2: Problem Awareness - Soft Cards */}
      <Section background="white">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-500 font-bold tracking-widest text-sm uppercase mb-3 block">Current Situation</span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-6 font-rounded leading-snug">
            今、中小企業でも<br/>「AI活用は当たり前」に。
          </h2>
          <p className="text-text-body">周りは少しずつ、便利になっています。</p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-20">
           {[
              "議事録の自動作成",
              "メール下書き作成",
              "社内AI担当の配置",
              "見積・提案書の作成"
           ].map((item, i) => (
              <div key={i} className="bg-base-50 rounded-[2rem] p-8 border border-base-200 hover:border-primary-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group relative overflow-hidden">
                 <div className="absolute -right-4 -top-4 w-24 h-24 bg-white rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
                 <div className="text-4xl font-bold text-primary-200 mb-4 font-rounded relative z-10">0{i+1}</div>
                 <h3 className="font-bold text-text-heading text-lg mb-2 relative z-10">{item}</h3>
                 <p className="text-sm text-text-muted relative z-10">は「当たり前」の時代へ</p>
              </div>
           ))}
        </div>

        <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary-50 via-white to-primary-50 rounded-[3rem] p-10 md:p-14 text-center relative overflow-hidden shadow-sm border border-primary-100">
           <div className="relative z-10">
              <p className="text-lg font-bold text-text-muted mb-4">でも、御社はどうですか？</p>
              <h3 className="text-2xl md:text-4xl font-bold text-text-heading leading-tight font-rounded">
                 「興味はあるけど、何も進んでいない」<br/>
                 <span className="text-primary-500 relative inline-block mt-2">
                    そんな状態ではありませんか？
                    <span className="absolute bottom-1 left-0 w-full h-2 bg-primary-200/50 -z-10 rounded-full"></span>
                 </span>
              </h3>
           </div>
        </div>
      </Section>

      {/* Section 3: Checklist - Friendly Layout */}
      <Section background="warm" decoration>
        <div className="max-w-6xl mx-auto">
           <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-text-heading font-rounded">
                 AI活用でこんな<span className="text-primary-500 inline-block border-b-4 border-primary-200 mx-2">お悩み</span>ありませんか？
              </h2>
           </div>
           
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                 { text: "ChatGPTを試したが、結局元のやり方に戻ってしまった", icon: <Clock /> },
                 { text: "新しいツールが次々出てきて、何を選べばいいかわからない", icon: <Zap /> },
                 { text: "社内に詳しい人がおらず、誰に聞けばいいかわからない", icon: <Users /> },
                 { text: "AIツールに課金しているが、元が取れているか不明", icon: <Target /> },
                 { text: "若手に任せたが、本業が忙しく進んでいない", icon: <Briefcase /> },
                 { text: "AI人材を採用したいが、年収が高くて予算が合わない", icon: <TrendingUp /> },
              ].map((item, i) => (
                 <div key={i} className="bg-white p-8 rounded-[2rem] soft-shadow border border-white flex items-start gap-5 hover:bg-white/80 transition-colors">
                    <div className="p-3 bg-primary-50 rounded-2xl text-primary-500 shrink-0 shadow-sm">
                       {React.cloneElement(item.icon as React.ReactElement, { size: 22 })}
                    </div>
                    <p className="font-bold text-text-body leading-relaxed text-sm pt-1">{item.text}</p>
                 </div>
              ))}
              <div className="md:col-span-2 lg:col-span-3 bg-white/60 p-6 rounded-[2rem] border border-white/50 flex items-center justify-center gap-4 text-center mt-4">
                 <p className="font-bold text-text-muted">外部コンサルは高額で、成果物がレポートだけで終わりそう...という不安も。</p>
              </div>
           </div>
        </div>
      </Section>

      {/* Section 4: Why Fail (Story) - Storytelling */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-heading leading-tight font-rounded">
              なぜ、多くの企業が<br/><span className="bg-primary-100 text-primary-800 px-4 py-1 rounded-full mx-2 my-2 inline-block">AI導入に失敗</span>するのか？
            </h2>
          </div>
          
          <div className="bg-base-50 rounded-[3.5rem] p-8 md:p-20 relative overflow-hidden border border-base-200">
            <div className="prose prose-lg text-text-body mx-auto relative z-10 leading-loose">
              <p className="lead text-2xl font-bold text-text-heading mb-10 font-rounded text-center">
                 最大の効率化とは、魔法ではなく、<br/>もっと<span className="text-primary-500 border-b-2 border-primary-200">地味な改善の積み重ね</span>です。
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 my-16 not-prose">
                 <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-base-200 text-center">
                    <div className="text-text-muted font-bold mb-4 flex items-center justify-center gap-2"><Clock size={18}/>Before</div>
                    <p className="text-text-body text-sm mb-2">見積もりの原価調査</p>
                    <p className="text-3xl font-bold text-text-heading font-rounded">5分</p>
                 </div>
                 <div className="bg-white p-8 rounded-[2.5rem] shadow-lg shadow-primary-100/50 border-2 border-primary-100 relative overflow-hidden text-center transform scale-105">
                    <div className="absolute top-0 right-0 left-0 bg-primary-500 text-white text-[10px] py-1 font-bold">AI導入</div>
                    <div className="text-primary-500 font-bold mb-4 flex items-center justify-center gap-2"><Zap size={18}/>After</div>
                    <p className="text-text-body text-sm mb-2">見積もりの原価調査</p>
                    <p className="text-3xl font-bold text-primary-600 font-rounded">2分</p>
                 </div>
              </div>

              <p>
                5分の短縮を10個実現すれば50分。これを10日続ければ500分。<br/>
                無限にある小さな作業を一つ一つ見つけ、AIで解決していく。
              </p>
              <p>
                これには、単なるツールの導入ではなく、<strong>「常にあなたの隣で、業務のどこを効率化できるかを見極め続けるプロ」</strong>が必要です。
              </p>
              <p className="font-bold text-text-heading mt-8 text-center text-xl font-rounded">
                それが、「AI顧問」という新しい答えです。
              </p>
            </div>
            
            <div className="text-center mt-16 relative z-10">
               <Button variant="secondary" className="bg-white shadow-md hover:bg-base-50 px-10" onClick={scrollToContact}>
                  あなたの会社の改善ポイントを無料診断
               </Button>
            </div>

            {/* Background Pattern */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" style={{
               backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
               backgroundSize: '32px 32px'
            }}></div>
          </div>
        </div>
      </Section>

      {/* Section 5: Social Proof - Friendly Voices */}
      <Section background="cream" id="cases">
        <h2 className="text-center text-3xl font-bold mb-16 text-text-heading font-rounded">
           信頼の実績と<span className="text-primary-600">お客様の声</span>
        </h2>
        
        {/* Achievements */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {[
            "「令和の虎」竹之内塾 講師",
            "起業塾 生成AI講座担当",
            "医療法人5施設 コンサル",
            "歴代最高売上達成に貢献"
          ].map((item, i) => (
            <div key={i} className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-sm border border-white flex items-center gap-3 text-sm font-bold text-text-body">
              <div className="w-2 h-2 rounded-full bg-primary-500"></div>
              {item}
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            {
              role: "医療法人 理事長",
              text: "スタッフ2名が自らAIエージェントを作成できるまでに成長。施設間の情報共有が劇的に改善され、事務作業時間が30%削減されました。",
              tag: "医療"
            },
            {
              role: "建設業 代表取締役",
              text: "見積もり作成が2時間→10分に。創業40年で過去最高の売上を達成できたのは、田中さんの手厚い伴走支援があったからです。",
              tag: "建設"
            },
            {
              role: "士業 代表パートナー",
              text: "AI人材を採用するか悩んでいましたが、顧問として迎えることで年間1,000万円以上のコストをかけずに、最新の知見と安心を得られています。",
              tag: "士業"
            }
          ].map((voice, i) => (
            <div key={i} className="bg-white p-10 rounded-[2.5rem] soft-shadow-hover border border-white flex flex-col transition-all duration-300">
              <div className="flex items-center gap-1 mb-6">
                 {[1,2,3,4,5].map(star => <Star key={star} size={18} className="fill-primary-300 text-primary-300" />)}
              </div>
              <p className="text-text-body leading-relaxed mb-8 flex-1 text-base">"{voice.text}"</p>
              <div className="flex items-center gap-4 pt-6 border-t border-base-100">
                <div className="w-12 h-12 bg-warm-100 rounded-full flex items-center justify-center">
                  <span className="font-bold text-warm-700 text-sm font-rounded">{voice.role[0]}</span>
                </div>
                <div>
                  <p className="font-bold text-sm text-text-heading font-rounded">{voice.role}</p>
                  <p className="text-xs text-text-muted">{voice.tag}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Section 6 & 7: Comparison - Visual & Clear */}
      <Section background="white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-text-heading mb-4 font-rounded">
              自分でやる vs <span className="text-primary-500">プロに任せる</span>
            </h2>
            <p className="text-text-muted">あなたの時間は、本業に使ってください。</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-24">
             {/* DIY Card */}
             <div className="p-10 rounded-[3rem] border border-base-200 bg-base-50 text-text-muted transition-opacity">
                <h3 className="font-bold text-xl mb-8 flex items-center gap-3 font-rounded">
                   <div className="w-10 h-10 rounded-full bg-base-200 flex items-center justify-center text-text-muted">?</div>
                   自分でAI学習
                </h3>
                <ul className="space-y-6">
                   <li className="flex justify-between border-b border-base-200 pb-3">
                      <span>月額費用</span>
                      <span className="font-medium">約25万円<span className="text-xs ml-1">(ツール代等)</span></span>
                   </li>
                   <li className="flex justify-between border-b border-base-200 pb-3">
                      <span>学習時間</span>
                      <span className="font-medium text-red-400">15~20万円相当</span>
                   </li>
                   <li className="flex justify-between items-center pt-2">
                      <span>成果</span>
                      <span className="text-sm bg-base-200 px-3 py-1.5 rounded-full text-xs">試行錯誤の連続</span>
                   </li>
                </ul>
             </div>

             {/* Pro Card */}
             <div className="p-10 rounded-[3rem] border-2 border-primary-100 bg-white shadow-xl shadow-primary-100/30 relative transform md:scale-105">
                <div className="absolute -top-5 right-10 bg-gradient-to-r from-primary-500 to-primary-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">RECOMMENDED</div>
                <h3 className="font-bold text-2xl text-text-heading mb-8 flex items-center gap-3 font-rounded">
                   <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600"><Check size={20} /></div>
                   AI顧問
                </h3>
                <ul className="space-y-6">
                   <li className="flex justify-between border-b border-primary-50 pb-3 items-center">
                      <span className="text-text-body">月額費用</span>
                      <span className="font-bold text-3xl text-primary-600 font-rounded">10<span className="text-base font-normal text-text-muted ml-1">万円</span></span>
                   </li>
                   <li className="flex justify-between border-b border-primary-50 pb-3">
                      <span className="text-text-body">学習時間</span>
                      <span className="font-bold text-primary-600 font-rounded">0円 <span className="text-sm font-normal text-text-muted">(本業に集中)</span></span>
                   </li>
                   <li className="flex justify-between items-center pt-2">
                      <span className="text-text-body">成果</span>
                      <span className="text-sm bg-primary-50 text-primary-700 font-bold px-3 py-1.5 rounded-full text-xs">最適解を即提示</span>
                   </li>
                </ul>
                <div className="mt-10 text-center">
                   <Button className="w-full" variant="primary">プロに任せる</Button>
                </div>
             </div>
          </div>

          <div className="bg-[#43302b] rounded-[3rem] p-10 md:p-20 text-white text-center relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
               <h2 className="text-2xl md:text-4xl font-bold mb-8 leading-tight font-rounded">
                 AI人材を「採用」するのではなく<br/>
                 <span className="text-primary-400">「顧問」として迎える</span>
               </h2>
               <p className="text-gray-300 mb-12 text-lg">
                 年間1,000万円の採用コストとリスクを、<br className="md:hidden"/>月10万円の確実な投資へ。
               </p>
               
               <div className="inline-flex flex-col md:flex-row bg-white/5 backdrop-blur-md rounded-3xl p-2 md:p-1 border border-white/10">
                  <div className="px-10 py-6 border-b md:border-b-0 md:border-r border-white/10">
                     <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">Cost</p>
                     <p className="text-3xl font-bold font-rounded">1/8 <span className="text-sm font-normal text-gray-400">以下</span></p>
                  </div>
                  <div className="px-10 py-6 border-b md:border-b-0 md:border-r border-white/10">
                     <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">Risk</p>
                     <p className="text-3xl font-bold font-rounded">Zero <span className="text-sm font-normal text-gray-400">退職リスクなし</span></p>
                  </div>
                  <div className="px-10 py-6">
                     <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">Quality</p>
                     <p className="text-3xl font-bold font-rounded">Top <span className="text-sm font-normal text-gray-400">最新の知見</span></p>
                  </div>
               </div>
            </div>
            
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/20 rounded-full blur-[100px] -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-warm-500/20 rounded-full blur-[100px] -ml-32 -mb-32"></div>
          </div>
        </div>
      </Section>

      {/* Section 8: What You Get - Grid Features */}
      <Section background="warm" id="features" decoration>
        <div className="text-center mb-16">
           <h2 className="text-3xl font-bold text-text-heading mb-4 font-rounded">月額10万円で、これ全部ついてきます</h2>
           <p className="text-text-muted">あなたの会社の「外部AI推進室」として機能します</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { title: "最新情報のキャッチアップ", icon: <TrendingUp className="text-white"/>, color: "bg-blue-400", desc: "AI業界の動向、新ツールの紹介、他社事例をレポート" },
            { title: "チャット相談（無制限）", icon: <MessageCircle className="text-white"/>, color: "bg-warm-500", desc: "あらゆる疑問に24時間以内(平日)に回答。LINE/Chatwork等対応" },
            { title: "伴走型コンサルティング", icon: <Target className="text-white"/>, color: "bg-primary-500", desc: "現状把握からロードマップ策定、ツール選定まで伴走" },
            { title: "定例ミーティング", icon: <Users className="text-white"/>, color: "bg-purple-400", desc: "キックオフ、3ヶ月後の振り返り、経営層へのレポート" },
            { title: "ツール導入支援", icon: <Zap className="text-white"/>, color: "bg-yellow-400", desc: "テンプレート導入、ノーコード活用による自動化支援" },
            { title: "月次レポート", icon: <FileText className="text-white"/>, color: "bg-slate-400", desc: "AI活用状況の可視化と改善提案" },
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-white group hover:-translate-y-2">
              <div className={`w-16 h-16 rounded-2xl ${item.color} shadow-lg shadow-${item.color.replace('bg-', '')}/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                {React.cloneElement(item.icon as React.ReactElement, { size: 30 })}
              </div>
              <h3 className="font-bold text-lg text-text-heading mb-3 font-rounded">{item.title}</h3>
              <p className="text-text-body text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Section 9: Use Cases - Modern Tabs */}
      <Section background="white">
        <h2 className="text-center text-3xl font-bold mb-10 text-text-heading font-rounded">
          あなたの業種でも、<br className="md:hidden"/>こんなことができます
        </h2>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            { id: 'construction', label: '建設・リフォーム' },
            { id: 'medical', label: '医療・介護' },
            { id: 'professional', label: '士業' },
            { id: 'manufacturing', label: '製造・運送' },
            { id: 'retail', label: '小売・卸売' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveUseCase(tab.id)}
              className={`px-8 py-3.5 rounded-full text-sm font-bold transition-all duration-300 font-rounded ${
                activeUseCase === tab.id
                  ? 'bg-text-heading text-white shadow-lg transform scale-105'
                  : 'bg-base-100 text-text-muted hover:bg-base-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto bg-base-50 p-10 md:p-14 rounded-[3rem] border border-base-200 relative overflow-hidden transition-all duration-500 min-h-[340px] flex items-center shadow-inner">
          <div className="w-full">
             {/* Content similar to previous but with updated styles */}
             <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                <h3 className="text-2xl font-bold text-text-heading mb-8 flex items-center gap-4 font-rounded">
                   <div className="w-1.5 bg-primary-500 h-8 rounded-full"></div>
                   {activeUseCase === 'construction' && '建設・リフォーム業界のAI活用'}
                   {activeUseCase === 'medical' && '医療・介護業界のAI活用'}
                   {activeUseCase === 'professional' && '士業のAI活用'}
                   {activeUseCase === 'manufacturing' && '製造・運送業のAI活用'}
                   {activeUseCase === 'retail' && '小売・卸売業のAI活用'}
                </h3>
                <ul className="space-y-6">
                   {/* Specific list items based on activeUseCase (simplified for brevity, assume content exists) */}
                   {[1,2,3].map((_, i) => (
                      <li key={i} className="flex gap-5 items-start">
                         <div className="w-7 h-7 rounded-full bg-primary-100 flex items-center justify-center shrink-0 mt-1">
                            <Check size={16} className="text-primary-600" />
                         </div>
                         <div>
                            {/* Placeholder content - ideally switch based on use case */}
                            <p className="font-bold text-text-heading text-lg font-rounded mb-1">
                              {activeUseCase === 'construction' && i === 0 && "見積もり作成の自動化"}
                              {activeUseCase === 'construction' && i === 1 && "現場写真の自動整理"}
                              {activeUseCase === 'construction' && i === 2 && "提案資料の自動生成"}
                              
                              {activeUseCase === 'medical' && i === 0 && "施設間情報共有システム"}
                              {activeUseCase === 'medical' && i === 1 && "カルテ・記録の文字起こし"}
                              {activeUseCase === 'medical' && i === 2 && "スタッフ向けAI研修"}
                              
                              {activeUseCase === 'professional' && i === 0 && "契約書レビュー効率化"}
                              {activeUseCase === 'professional' && i === 1 && "FAQボット作成"}
                              {activeUseCase === 'professional' && i === 2 && "定型業務の自動化"}
                              
                              {activeUseCase === 'manufacturing' && i === 0 && "受発注データの自動処理"}
                              {activeUseCase === 'manufacturing' && i === 1 && "在庫管理の自動化"}
                              {activeUseCase === 'manufacturing' && i === 2 && "配送ルート最適化"}
                              
                              {activeUseCase === 'retail' && i === 0 && "顧客対応チャットボット"}
                              {activeUseCase === 'retail' && i === 1 && "在庫分析・需要予測"}
                              {activeUseCase === 'retail' && i === 2 && "マーケティング自動化"}
                            </p>
                            <p className="text-text-body text-sm">
                              {activeUseCase === 'construction' && i === 0 && "過去のデータを学習し、入力作業を2時間から10分へ短縮"}
                              {activeUseCase === 'construction' && i === 1 && "写真をアップするだけで、日付・場所別に自動フォルダ分け"}
                              {activeUseCase === 'construction' && i === 2 && "ヒアリングメモから、お客様ごとの提案資料ドラフトを作成"}
                              
                              {activeUseCase === 'medical' && i === 0 && "申し送り事項をAIが要約し、関係スタッフへ自動通知"}
                              {activeUseCase === 'medical' && i === 1 && "音声入力とAI要約で、記録業務の時間を半分以下に"}
                              {activeUseCase === 'medical' && i === 2 && "新人スタッフの教育コスト削減と、ITリテラシー向上"}
                              
                              {/* Keep placeholders for others for brevity */}
                              {!['construction', 'medical'].includes(activeUseCase) && "AIが業務を効率化し、本来の業務に集中できる環境を作ります"}
                            </p>
                         </div>
                      </li>
                   ))}
                </ul>
             </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Button variant="ghost" onClick={scrollToContact} className="text-text-muted hover:text-primary-600">
             他の業種の事例も聞いてみる <ChevronRight size={16} />
          </Button>
        </div>
      </Section>

      {/* Section 10: Goals - Card Style */}
      <Section background="cream" decoration>
        <div className="text-center mb-16">
           <h2 className="text-3xl font-bold text-text-heading mb-4 font-rounded">
              契約前に「あなたの会社はどれを目指しますか？」<br/>と選んでいただきます
           </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "業務効率化型",
              subtitle: "PATTERN A",
              target: "ルーティン業務が多い / 人手不足",
              result: "自動化ツール・削減時間レポート",
              icon: <Clock className="w-8 h-8 text-blue-500" />,
              accent: "border-blue-100 hover:border-blue-300"
            },
            {
              title: "人材育成型",
              subtitle: "PATTERN B",
              target: "若手を育てたい / 内製化したい",
              result: "AI活用社員の育成・ガイドライン",
              icon: <Users className="w-8 h-8 text-warm-600" />,
              accent: "border-warm-200 hover:border-warm-400"
            },
            {
              title: "事業強化型",
              subtitle: "PATTERN C",
              target: "競合と差別化 / 新規事業",
              result: "新サービスプロトタイプ・市場テスト",
              icon: <TrendingUp className="w-8 h-8 text-purple-500" />,
              accent: "border-purple-100 hover:border-purple-300"
            }
          ].map((card, i) => (
            <div key={i} className={`bg-white p-10 rounded-[2.5rem] border-2 ${card.accent} transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group`}>
              <div className="text-xs font-bold text-text-muted tracking-widest mb-6">{card.subtitle}</div>
              <div className="mb-8 p-4 bg-base-50 rounded-2xl inline-block">{card.icon}</div>
              <h3 className="font-bold text-2xl text-text-heading mb-6 font-rounded">{card.title}</h3>
              <div className="space-y-5 text-sm">
                <div>
                  <p className="font-bold text-text-muted mb-1.5 text-xs uppercase">向いている会社</p>
                  <p className="text-text-body">{card.target}</p>
                </div>
                <div className="pt-5 border-t border-base-100">
                  <p className="font-bold text-text-muted mb-1.5 text-xs uppercase">得られるもの</p>
                  <p className="font-bold text-text-heading">{card.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Section 11: Pricing - Premium Table */}
      <Section background="white" id="pricing">
        <h2 className="text-center text-3xl font-bold mb-4 text-text-heading font-rounded">御社に最適なプランを</h2>
        <p className="text-center text-text-muted mb-16">まずは3ヶ月、お試し感覚でスタートできます</p>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-end">
          {/* Plan 1 */}
          <div className="bg-white rounded-[2.5rem] p-10 border border-base-200 shadow-sm relative z-0">
            <h3 className="text-xl font-bold text-text-heading font-rounded">顧問プラン</h3>
            <p className="text-sm text-text-muted mt-2 h-10">AI専門家があなたの会社に</p>
            <div className="my-8">
              <span className="text-4xl font-bold text-text-heading font-rounded">10</span>
              <span className="text-text-muted">万円/月</span>
            </div>
            <ul className="space-y-4 text-sm mb-10">
              <li className="flex gap-3"><Check className="w-5 h-5 text-warm-600 shrink-0"/> チャット相談 無制限</li>
              <li className="flex gap-3"><Check className="w-5 h-5 text-warm-600 shrink-0"/> 月次レポート</li>
              <li className="flex gap-3"><Check className="w-5 h-5 text-warm-600 shrink-0"/> 業界向けツール導入支援</li>
              <li className="flex gap-3"><Check className="w-5 h-5 text-warm-600 shrink-0"/> 定例MTG (初回/3ヶ月後)</li>
              <li className="flex gap-3 text-base-200"><X className="w-5 h-5 shrink-0"/> 社員研修</li>
              <li className="flex gap-3 text-base-200"><X className="w-5 h-5 shrink-0"/> オーダーメイド開発</li>
            </ul>
            <Button variant="outline" className="w-full" onClick={scrollToContact}>選択する</Button>
          </div>

          {/* Plan 2 - Featured */}
          <div className="bg-[#43302b] rounded-[2.5rem] p-10 border border-warm-700 shadow-2xl relative z-10 text-white transform lg:-translate-y-6">
            <div className="absolute top-0 right-0 left-0 -mt-4 flex justify-center">
               <span className="bg-primary-500 text-white text-xs font-bold px-5 py-1.5 rounded-full uppercase tracking-wider shadow-lg">Most Popular</span>
            </div>
            <h3 className="text-xl font-bold text-white font-rounded">参謀プラン</h3>
            <p className="text-sm text-warm-200 mt-2 h-10">社内AI人材の育成まで支援</p>
            <div className="my-8">
              <span className="text-5xl font-bold text-white font-rounded">30</span>
              <span className="text-warm-300">万円/月</span>
            </div>
            <ul className="space-y-4 text-sm mb-12">
              <li className="flex gap-3 font-bold"><Check className="w-5 h-5 text-primary-500 shrink-0"/> 顧問プランの全内容</li>
              <li className="flex gap-3 font-bold"><Check className="w-5 h-5 text-primary-500 shrink-0"/> 社員研修 (4名まで)</li>
              <li className="flex gap-3 font-bold"><Check className="w-5 h-5 text-primary-500 shrink-0"/> 内製化・チーム立ち上げ</li>
              <li className="flex gap-3"><Check className="w-5 h-5 text-primary-500 shrink-0"/> AI活用ガイドライン策定</li>
              <li className="flex gap-3 text-warm-400"><X className="w-5 h-5 shrink-0"/> オーダーメイド開発</li>
            </ul>
            <Button variant="brown" className="w-full shadow-warm-900/50" onClick={scrollToContact}>これにする</Button>
          </div>

          {/* Plan 3 */}
          <div className="bg-white rounded-[2.5rem] p-10 border border-base-200 shadow-sm relative z-0">
            <h3 className="text-xl font-bold text-text-heading font-rounded">開発プラン</h3>
            <p className="text-sm text-text-muted mt-2 h-10">丸投げOK。オーダーメイド</p>
            <div className="my-8">
              <span className="text-4xl font-bold text-text-heading font-rounded">50</span>
              <span className="text-text-muted">万円/月</span>
            </div>
            <ul className="space-y-4 text-sm mb-10">
              <li className="flex gap-3"><Check className="w-5 h-5 text-warm-600 shrink-0"/> 顧問プランの全内容</li>
              <li className="flex gap-3"><Check className="w-5 h-5 text-warm-600 shrink-0"/> オーダーメイド開発</li>
              <li className="flex gap-3"><Check className="w-5 h-5 text-warm-600 shrink-0"/> 月1回 定例開発MTG</li>
              <li className="flex gap-3"><Check className="w-5 h-5 text-warm-600 shrink-0"/> 丸投げ実装対応</li>
            </ul>
            <Button variant="outline" className="w-full" onClick={scrollToContact}>選択する</Button>
          </div>
        </div>
        
        <div className="mt-12 text-center text-sm text-text-muted">
          <p>※最低契約期間：3ヶ月（初月は試用期間として判断可能） / 解約：3ヶ月経過後は月単位で可能</p>
        </div>
      </Section>

      {/* Section 12: Flow - Simple Steps */}
      <Section background="warm" decoration>
        <h2 className="text-center text-3xl font-bold mb-16 text-text-heading font-rounded">ご契約から成果が出るまで</h2>
        <div className="max-w-4xl mx-auto">
           <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 relative">
              {[
                 { step: "01", title: "無料診断(30分)", desc: "現状ヒアリング・改善ポイント洗い出し" },
                 { step: "02", title: "ロードマップ提示", desc: "優先順位とスケジュールを明確化" },
                 { step: "03", title: "ご契約", desc: "プラン決定・契約締結" },
                 { step: "04", title: "キックオフMTG", desc: "ゴール設定・スタート" },
                 { step: "05", title: "AI活用開始", desc: "チャット相談・ツール導入支援" },
                 { step: "06", title: "振り返りMTG", desc: "3ヶ月後の成果確認と次のアクション" },
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

      {/* Section 13: FAQ */}
      <Section background="white" id="faq">
        <h2 className="text-center text-3xl font-bold mb-12 text-text-heading font-rounded">よくあるご質問</h2>
        <div className="max-w-3xl mx-auto">
          {[
            { q: "なぜ「3ヶ月」なのですか？", a: "AIを導入して仕組みを作るだけでなく、日常に溶け込ませて効果を実感いただくために必要な期間として設定しています。" },
            { q: "AIの知識がなくても大丈夫ですか？", a: "はい。ITが苦手な方でも理解できるよう、わかりやすい説明を心がけています。" },
            { q: "どんな業種でも対応できますか？", a: "医療・建設・美容・人材・士業など、幅広い業種での指導実績がございます。" },
            { q: "途中でプラン変更や解約はできますか？", a: "最低契約期間は3ヶ月です。その後は月単位で解約可能です。プラン変更も随時承ります。" },
            { q: "チャット相談はどのくらいで返信がありますか？", a: "原則、平日24時間以内に返信いたします。" },
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

      {/* Section 14: Final CTA - Immersive */}
      <Section background="white" id="contact" className="!pt-10 !pb-20">
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
                    「何を導入すべきかわからない」「どこを改善すべきかわからない」<br className="hidden md:block"/>
                    そんな状態で大丈夫です。<br/><br/>
                    プロの目で、御社の業務をヒアリングし、<br/>
                    <span className="text-white font-bold border-b border-primary-500">今すぐできる改善ポイントと優先順位</span>をその場でお伝えします。
                 </p>
                 
                 <div className="flex flex-col items-center gap-6">
                    <Button size="xl" variant="brown" className="w-full md:w-auto px-16 py-6 text-xl shadow-warm-900/50 ring-4 ring-white/10">
                       今すぐ無料診断を予約する
                       <ArrowRight className="ml-2" />
                    </Button>
                    <p className="text-sm text-warm-300">
                       ※30秒で予約完了。営業日24時間以内に日程調整のご連絡をいたします
                    </p>
                 </div>
              </div>
           </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-white border-t border-base-200 py-16">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3 text-xl font-bold text-text-heading font-rounded">
             <div className="bg-primary-500 text-white p-2 rounded-full shadow-lg shadow-primary-500/30">
               <Sun className="w-5 h-5 fill-current" />
             </div>
             AI顧問
          </div>
          <p className="text-text-muted text-sm">
            &copy; 2024 AI Advisor Service. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;