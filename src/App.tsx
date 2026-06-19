import React, { useState, useEffect } from 'react';
import { 
  motion, 
  AnimatePresence 
} from 'motion/react';
import { 
  Terminal, 
  Cpu, 
  Layers, 
  Activity, 
  ArrowUpRight, 
  Lock, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Shield, 
  ArrowRight, 
  ChevronDown, 
  ChevronUp, 
  Briefcase, 
  RefreshCw, 
  ExternalLink,
  Laptop
} from 'lucide-react';

import { Language, Project } from './types';
import { PROJECTS, EXPERIENCES, CORE_VALUES, DICTIONARY } from './data';
import { getVisualizer } from './components/InteractiveVisuals';

export default function App() {
  const [lang, setLang] = useState<Language>('EN');
  const [activeTab, setActiveTab] = useState<'all' | 'web-design' | 'branding' | 'ui-ux' | '3d-animation'>('all');
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const [activePreviewProject, setActivePreviewProject] = useState<Project | null>(null);
  
  // Contact Form States
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formSubject, setFormSubject] = useState('');
  const [formMsg, setFormMsg] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [submitResult, setSubmitResult] = useState<'success' | 'error' | null>(null);
  
  // Local active transmissions (Simulated database persistence in memory/localStorage)
  const [transmissions, setTransmissions] = useState<Array<{
    id: string;
    timestamp: string;
    name: string;
    email: string;
    subject: string;
    message: string;
  }>>([]);

  // Load transmissions from localStorage on start
  useEffect(() => {
    const saved = localStorage.getItem('neon_transmissions');
    if (saved) {
      try {
        setTransmissions(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse saved transmissions', e);
      }
    }
  }, []);

  // Set UTC clock
  const [timeStr, setTimeStr] = useState('');
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Uzbekistan is UTC+5
      const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
      const uzTime = new Date(utc + (3600000 * 5));
      const hours = String(uzTime.getHours()).padStart(2, '0');
      const minutes = String(uzTime.getMinutes()).padStart(2, '0');
      const seconds = String(uzTime.getSeconds()).padStart(2, '0');
      setTimeStr(`${hours}:${minutes}:${seconds} [UTC+5]`);
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const d = DICTIONARY[lang];

  // Projects filtering
  const filteredProjects = activeTab === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeTab);

  // Send message implementation
  const handleSubmitMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail || !formMsg) {
      setSubmitResult('error');
      return;
    }

    setIsSending(true);
    setSubmitResult(null);

    // Simulated cryptographic encryption wait
    setTimeout(() => {
      const newTx = {
        id: `SYS_TX_${Math.floor(Math.random() * 900000 + 100000)}`,
        timestamp: new Date().toISOString().replace('T', ' ').substring(0, 19),
        name: formName,
        email: formEmail,
        subject: formSubject || 'GENERAL_DIGITAL_MANIFEST',
        message: formMsg
      };

      const updated = [newTx, ...transmissions];
      setTransmissions(updated);
      localStorage.setItem('neon_transmissions', JSON.stringify(updated));

      setIsSending(false);
      setSubmitResult('success');

      // Clear fields
      setFormName('');
      setFormEmail('');
      setFormSubject('');
      setFormMsg('');

      // Auto-clear success banner after 8 seconds
      setTimeout(() => {
        setSubmitResult(null);
      }, 8000);
    }, 2000);
  };

  const handleClearTransmissions = () => {
    setTransmissions([]);
    localStorage.removeItem('neon_transmissions');
  };

  const handleSmoothScroll = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="app-root" className="min-h-screen bg-[#050508] relative selection:bg-[#00f3ff] selection:text-black">
      {/* Dynamic Cyber Grid Overlay background */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050508]/60 to-[#050508] pointer-events-none z-0" />

      {/* ----------------- FIXED TOP NAVIGATION HEADER ----------------- */}
      <header className="sticky top-0 left-0 right-0 z-50 bg-[#050508]/85 backdrop-blur-md border-b border-white/5 px-4 py-3 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleSmoothScroll('hero')}>
            <span className="font-mono text-xs text-[#00f3ff] border border-[#00f3ff]/30 px-1.5 py-0.5 rounded-sm tracking-wider bg-[#00f3ff]/5">
              SYS
            </span>
            <span className="font-sans font-bold text-lg tracking-[3px] text-white">
              NEON_LABS
            </span>
            <span className="hidden sm:inline font-mono text-[9px] text-slate-500">
              [v1.07_NODE]
            </span>
          </div>

          {/* Nav Actions */}
          <nav className="hidden md:flex items-center gap-6 font-mono text-xs">
            <button 
              onClick={() => handleSmoothScroll('hero')} 
              className="text-slate-400 hover:text-[#00f3ff] transition-colors tracking-widest uppercase"
            >
              {d.nav_home}
            </button>
            <button 
              onClick={() => handleSmoothScroll('works')} 
              className="text-slate-400 hover:text-[#39ff14] transition-colors tracking-widest uppercase"
            >
              {d.nav_works}
            </button>
            <button 
              onClick={() => handleSmoothScroll('about')} 
              className="text-slate-400 hover:text-[#bd00ff] transition-colors tracking-widest uppercase"
            >
              {d.nav_about}
            </button>
            <button 
              onClick={() => handleSmoothScroll('contact')} 
              className="text-slate-400 hover:text-[#00f3ff] transition-colors tracking-widest uppercase"
            >
              {d.nav_contact}
            </button>
          </nav>

          {/* Right Side Tools */}
          <div className="flex items-center gap-4">
            
            {/* Clock */}
            <div className="hidden lg:flex items-center gap-2 font-mono text-[10px] text-slate-400 bg-white/5 border border-white/5 px-2.5 py-1 rounded-xs">
              <Activity className="w-3 h-3 text-[#39ff14] animate-pulse" />
              <span>{timeStr || '00:00:00 [UTC+5]'}</span>
            </div>

            {/* Language Switch */}
            <div className="flex bg-white/5 border border-white/10 rounded-xs p-0.5 font-mono text-[10px]">
              <button 
                onClick={() => setLang('EN')}
                className={`px-2 py-1 rounded-xs transition-all ${lang === 'EN' ? 'bg-[#00f3ff] text-black font-semibold shadow-xs' : 'text-slate-400 hover:text-white'}`}
              >
                EN
              </button>
              <button 
                onClick={() => setLang('UZ')}
                className={`px-2 py-1 rounded-xs transition-all ${lang === 'UZ' ? 'bg-[#00f3ff] text-black font-semibold shadow-xs' : 'text-slate-400 hover:text-white'}`}
              >
                UZ
              </button>
            </div>
            
            {/* Quick Contact CTA */}
            <button 
              onClick={() => handleSmoothScroll('contact')}
              className="hidden sm:inline bg-[#00f3ff]/10 hover:bg-[#00f3ff]/20 text-[#00f3ff] border border-[#00f3ff]/30 hover:border-[#00f3ff] px-3 py-1 text-xs font-mono tracking-wider transition-all rounded-xs active:scale-95"
            >
              {d.nav_collab}
            </button>
          </div>
        </div>
      </header>

      {/* ----------------- MOBILE NAVIGATION BOTTOM RAIL ----------------- */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#050508]/90 backdrop-blur-md border-t border-white/5 px-6 py-3 flex items-center justify-around font-mono text-[10px] text-slate-400 shadow-xl">
        <button onClick={() => handleSmoothScroll('hero')} className="flex flex-col items-center gap-1 hover:text-[#00f3ff]">
          <Cpu className="w-4 h-4" />
          <span>HOME</span>
        </button>
        <button onClick={() => handleSmoothScroll('works')} className="flex flex-col items-center gap-1 hover:text-[#39ff14]">
          <Layers className="w-4 h-4" />
          <span>WORKS</span>
        </button>
        <button onClick={() => handleSmoothScroll('about')} className="flex flex-col items-center gap-1 hover:text-[#bd00ff]">
          <Terminal className="w-4 h-4" />
          <span>ABOUT</span>
        </button>
        <button onClick={() => handleSmoothScroll('contact')} className="flex flex-col items-center gap-1 hover:text-[#00f3ff]">
          <Mail className="w-4 h-4" />
          <span>CONNECT</span>
        </button>
      </div>

      {/* ----------------- MAIN CONTENT SCROLL LAYOUT ----------------- */}
      <main className="max-w-7xl mx-auto px-4 py-8 md:px-8 pb-24 z-10 relative">

        {/* ================= SECTION 1: HERO SCREEN ================= */}
        <section id="hero" className="min-h-[80vh] flex flex-col justify-center py-12 md:py-20 border-b border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              
              <div className="flex items-center gap-2 text-[#39ff14] font-mono text-xs tracking-widest">
                <span className="w-2 h-2 rounded-full bg-[#39ff14] animate-ping" />
                <span className="bg-[#39ff14]/10 border border-[#39ff14]/20 px-2 py-0.5 rounded-xs font-bold text-[9px]">
                  ● CORE_SYS_ACTIVE
                </span>
                <span className="text-slate-500">|</span>
                <span className="text-slate-400 tracking-wider">TASHKENT TERMINAL LINK</span>
              </div>

              {/* Spectacular huge display heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-none text-white max-w-4xl">
                {lang === 'EN' ? (
                  <>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-400">Pushing the boundaries</span> <br className="hidden md:inline" />
                    of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f3ff] via-[#bf5aff] to-[#39ff14] drop-shadow-[0_0_15px_rgba(0,243,255,0.15)]">digital engineering.</span>
                  </>
                ) : (
                  <>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">Muhandislik estetikasi</span> <br className="hidden md:inline" />
                    va <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f3ff] via-[#bf5aff] to-[#39ff14] drop-shadow-[0_0_15px_rgba(0,243,255,0.15)]">raqamli arxitektura.</span>
                  </>
                )}
              </h1>

              {/* Humble, precise description */}
              <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-2xl font-mono font-light">
                {d.hero_subtitle}
              </p>

              {/* Action and Metrics */}
              <div className="flex flex-wrap items-center gap-4 mt-4">
                <button 
                  onClick={() => handleSmoothScroll('contact')}
                  className="bg-white hover:bg-[#00f3ff] text-black px-6 py-3 font-mono text-xs font-bold tracking-widest flex items-center gap-3 group transition-all rounded-xs active:scale-95 shadow-lg shadow-white/5 hover:shadow-[#00f3ff]/20 cursor-pointer"
                >
                  {d.hero_cta}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <button 
                  onClick={() => handleSmoothScroll('works')}
                  className="bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white px-5 py-3 font-mono text-xs border border-white/10 hover:border-white/25 tracking-widest transition-all rounded-xs active:scale-95 cursor-pointer"
                >
                  {d.nav_works_long}
                </button>
              </div>

              {/* Embedded grid details metrics */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/5">
                <div>
                  <div className="font-mono text-[10px] text-slate-500 tracking-wider">
                    {d.hero_stats_projects}
                  </div>
                  <div className="text-xl font-bold font-sans text-white mt-1">
                    10_COMPLETED
                  </div>
                </div>
                <div>
                  <div className="font-mono text-[10px] text-slate-500 tracking-wider">
                    {d.hero_stats_uptime}
                  </div>
                  <div className="text-xl font-bold font-sans text-[#39ff14] mt-1">
                    99.999% SLA
                  </div>
                </div>
                <div className="col-span-2 md:col-span-1">
                  <div className="font-mono text-[10px] text-slate-500 tracking-wider">
                    GEOPOLITICAL ZONE
                  </div>
                  <div className="text-xl font-bold font-sans text-[#00f3ff] mt-1 uppercase">
                    UZB / GLOBAL
                  </div>
                </div>
              </div>

            </div>

            {/* Hero Right Visual Column - Custom procedural particle widget or stylized radar */}
            <div className="lg:col-span-4 flex justify-center items-center py-6">
              <div className="w-full max-w-[320px] aspect-square relative bg-[#050508] border border-white/10 rounded-lg p-5 flex flex-col justify-between overflow-hidden shadow-2xl">
                <div className="absolute inset-0 grid-bg-dense opacity-20 pointer-events-none" />
                
                {/* Visual core radar circle element */}
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none">
                  <div className="w-[180px] h-[180px] border border-[#00f3ff]/15 rounded-full animate-pulse flex items-center justify-center">
                    <div className="w-[120px] h-[120px] border border-[#bf5aff]/20 rounded-full animate-spin flex items-center justify-center" style={{ animationDuration: '10s' }}>
                      <div className="w-[60px] h-[60px] border border-dashed border-[#39ff14]/30 rounded-full" />
                    </div>
                  </div>
                  {/* Glowing center dot */}
                  <div className="absolute w-2 h-2 bg-[#00f3ff] rounded-full shadow-[0_0_8px_rgba(0,243,255,0.8)]" />
                </div>

                <div className="flex justify-between items-center text-[8px] font-mono text-slate-400">
                  <span>ORBITAL TERMINOLOGY</span>
                  <span className="text-[#39ff14]">O_SECURE</span>
                </div>

                <div className="flex flex-col gap-1 items-center font-mono my-auto">
                  <div className="text-[9px] text-[#00f3ff] tracking-widest">
                    CYBERNETIC_NODE_ACTIVE
                  </div>
                  <div className="text-xs text-white font-bold font-mono tracking-wider mt-1">
                    NEON_LABS SERVER_SYS
                  </div>
                  <div className="text-[8px] text-slate-500 mt-1">
                    PORT 3000 // FULLSEC_SSL
                  </div>
                </div>

                <div className="flex justify-between items-end text-[7px] font-mono text-slate-500">
                  <span>CAPACITY: 94.2%</span>
                  <span>SYNC_CHALLENGE: VALID</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ================= SECTION 2: TECHNOLOGICAL ENVELOPE ================= */}
        <section id="tech-envelope" className="py-16 border-b border-white/5">
          <div className="flex flex-col gap-4 mb-12">
            <div className="text-[#bd00ff] font-mono text-xs tracking-[4px] uppercase font-bold">
              // 01 / STACK SEGREGATION
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              {d.tech_stack_title}
            </h2>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-2xl font-mono text-light">
              {d.tech_stack_desc}
            </p>
          </div>

          {/* 4 Cards dynamic envelope stack */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Front-End Node */}
            <div className="bg-[#050508] border border-[#00f3ff]/20 hover:border-[#00f3ff] p-6 rounded-sm transition-all duration-300 relative group flex flex-col justify-between h-[210px] overflow-hidden shadow-xs hover:shadow-[#00f3ff]/5">
              <div className="absolute top-0 right-0 w-[80px] h-[80px] bg-[#00f3ff]/5 rounded-bl-full translate-x-4 -translate-y-4 transition-transform group-hover:scale-125" />
              <div className="flex justify-between items-start">
                <div className="p-2 border border-[#00f3ff]/20 bg-[#00f3ff]/5 rounded-xs text-[#00f3ff]">
                  <Layers className="w-5 h-5" />
                </div>
                <span className="font-mono text-[9px] text-slate-500 tracking-wider">[INDEX_01]</span>
              </div>
              <div>
                <h3 className="font-sans font-bold text-base text-white tracking-wide mt-4">
                  {d.tech_front}
                </h3>
                <p className="text-slate-400 text-xs font-mono mt-2 leading-relaxed">
                  React 19, TypeScript schemas, tailwind directives, custom high-performance canvas frameworks.
                </p>
              </div>
            </div>

            {/* Design/UX Node */}
            <div className="bg-[#050508] border border-[#bd00ff]/20 hover:border-[#bd00ff] p-6 rounded-sm transition-all duration-300 relative group flex flex-col justify-between h-[210px] overflow-hidden shadow-xs hover:shadow-[#bd00ff]/5">
              <div className="absolute top-0 right-0 w-[80px] h-[80px] bg-[#bd00ff]/5 rounded-bl-full translate-x-4 -translate-y-4 transition-transform group-hover:scale-125" />
              <div className="flex justify-between items-start">
                <div className="p-2 border border-[#bd00ff]/20 bg-[#bd00ff]/5 rounded-xs text-[#bd00ff]">
                  <Cpu className="w-5 h-5" />
                </div>
                <span className="font-mono text-[9px] text-slate-500 tracking-wider">[INDEX_02]</span>
              </div>
              <div>
                <h3 className="font-sans font-bold text-base text-white tracking-wide mt-4">
                  {d.tech_ux}
                </h3>
                <p className="text-slate-400 text-xs font-mono mt-2 leading-relaxed">
                  Rigid Golden ratios, responsive spatial grid architecture, custom pixel constraints, physics motions.
                </p>
              </div>
            </div>

            {/* Back-End Node */}
            <div className="bg-[#050508] border border-[#39ff14]/20 hover:border-[#39ff14] p-6 rounded-sm transition-all duration-300 relative group flex flex-col justify-between h-[210px] overflow-hidden shadow-xs hover:shadow-[#39ff14]/5">
              <div className="absolute top-0 right-0 w-[80px] h-[80px] bg-[#39ff14]/5 rounded-bl-full translate-x-4 -translate-y-4 transition-transform group-hover:scale-125" />
              <div className="flex justify-between items-start">
                <div className="p-2 border border-[#39ff14]/20 bg-[#39ff14]/5 rounded-xs text-[#39ff14]">
                  <Lock className="w-5 h-5" />
                </div>
                <span className="font-mono text-[9px] text-slate-500 tracking-wider">[INDEX_03]</span>
              </div>
              <div>
                <h3 className="font-sans font-bold text-base text-white tracking-wide mt-4">
                  {d.tech_back}
                </h3>
                <p className="text-slate-400 text-xs font-mono mt-2 leading-relaxed">
                  GraphQL streaming, decoupling middleware, PBKDF2 hashing, AES-GCM browser cryptographic files.
                </p>
              </div>
            </div>

            {/* Generative systems Node */}
            <div className="bg-[#050508] border border-[#00f3ff]/20 hover:border-[#00f3ff] p-6 rounded-sm transition-all duration-300 relative group flex flex-col justify-between h-[210px] overflow-hidden shadow-xs hover:shadow-[#00f3ff]/5">
              <div className="absolute top-0 right-0 w-[80px] h-[80px] bg-[#00f3ff]/5 rounded-bl-full translate-x-4 -translate-y-4 transition-transform group-hover:scale-125" />
              <div className="flex justify-between items-start">
                <div className="p-2 border border-[#00f3ff]/20 bg-[#00f3ff]/5 rounded-xs text-[#00f3ff]">
                  <Activity className="w-5 h-5" />
                </div>
                <span className="font-mono text-[9px] text-slate-500 tracking-wider">[INDEX_04]</span>
              </div>
              <div>
                <h3 className="font-sans font-bold text-base text-white tracking-wide mt-4">
                  {d.tech_gen}
                </h3>
                <p className="text-slate-400 text-xs font-mono mt-2 leading-relaxed">
                  GLSL procedural shaders, Verlet integration models, gravity mesh vectors, particle oscillators.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ================= SECTION 3: SELECTED WORKS / PROJECTS ================= */}
        <section id="works" className="py-16 border-b border-white/5 scroll-mt-14">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            
            <div className="flex flex-col gap-3">
              <div className="text-[#39ff14] font-mono text-xs tracking-[4px] uppercase font-bold">
                // 02 / SELECTED WORK RELEASES
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                {lang === 'EN' ? 'SELECTED CODENAME WORKS' : 'TANLANGAN LOYIHALAR_01-10'}
              </h2>
            </div>

            {/* HIGH TECH TAB SYSTEM FILTERS */}
            <div className="flex flex-wrap gap-1.5 bg-white/5 border border-white/10 p-1 rounded-sm scrollbar-none font-mono text-xs max-w-full overflow-x-auto">
              {[
                { id: 'all', label: d.filter_all },
                { id: 'web-design', label: d.filter_web },
                { id: 'branding', label: d.filter_brand },
                { id: 'ui-ux', label: d.filter_ui },
                { id: '3d-animation', label: d.filter_3d },
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id as any);
                    setExpandedProject(null);
                  }}
                  className={`px-3 py-1.5 transition-all rounded-xs uppercase tracking-wider cursor-pointer whitespace-nowrap ${
                    activeTab === tab.id 
                      ? 'bg-white text-black font-semibold' 
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

          </div>

          {/* PROJECTS CARDS CONTAINER GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className={`bg-[#050508]/80 border rounded-sm overflow-hidden flex flex-col justify-between shadow-xl transition-all duration-300 relative group min-h-[360px] ${project.accentColor}`}
                >
                  
                  {/* Visual Title / Meta Header block */}
                  <div className="p-4 border-b border-white/5 flex items-center justify-between font-mono text-[10px] bg-black/40 text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                      CODENAME: {project.title}
                    </span>
                    <span className="uppercase tracking-widest text-[#00f3ff]">
                      {project.category.replace('-', '_')}
                    </span>
                  </div>

                  {/* HOVER REVEALS LIVE HIGH-FIDELITY CANVAS INTERACTIVE WIDGET */}
                  <div className="relative">
                    {getVisualizer(project.id)}
                  </div>

                  {/* Body textual content */}
                  <div className="p-6 flex-1 flex flex-col justify-between gap-5 bg-black/10">
                    <div>
                      <h3 className="font-sans font-bold text-xl text-white tracking-wider flex items-center gap-2">
                        {project.title}
                        <span className="font-mono text-slate-500 text-[10px] font-normal font-mono px-2 py-0.5 border border-white/5 bg-white/5">
                          RE_v1.0
                        </span>
                      </h3>

                      <p className="text-slate-300 text-xs font-mono mt-3 leading-relaxed">
                        {project.description[lang]}
                      </p>

                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {project.tech.map((t, ti) => (
                          <span 
                            key={ti} 
                            className="text-[9px] font-mono font-medium text-slate-400 border border-white/10 bg-white/5 px-2 py-0.5 rounded-xs"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Specifications Accordion and CTA Trigger */}
                    <div className="border-t border-white/5 pt-4 mt-2">
                      <div className="flex items-center justify-between gap-2">
                        
                        {/* Specifications Toggle */}
                        <button
                          onClick={() => setExpandedProject(
                            expandedProject === project.id ? null : project.id
                          )}
                          className="text-[10px] font-mono tracking-wider flex items-center gap-1 text-slate-400 hover:text-white transition-all cursor-pointer"
                        >
                          {expandedProject === project.id ? (
                            <>
                              COLLAPSE SPECS <ChevronUp className="w-3.5 h-3.5" />
                            </>
                          ) : (
                            <>
                              EXAMINE SPECS <ChevronDown className="w-3.5 h-3.5" />
                            </>
                          )}
                        </button>

                        <button
                          onClick={() => setActivePreviewProject(project)}
                          className="bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/30 px-3 py-1.5 text-[9px] font-mono tracking-widest rounded-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                        >
                          LAUNCH DEMO <ArrowUpRight className="w-3 h-3" />
                        </button>

                      </div>

                      {/* Expanded Specification Details Area */}
                      <AnimatePresence>
                        {expandedProject === project.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden font-mono text-[10px]"
                          >
                            <div className="pt-4 flex flex-col gap-3.5 border-t border-dashed border-white/10 mt-3 text-slate-400 bg-black/30 p-3 rounded-xs">
                              
                              {/* Specific custom metrics layout */}
                              <div className="grid grid-cols-2 gap-2">
                                {project.metrics.map((met, mIdx) => (
                                  <div key={mIdx} className="bg-white/5 p-2 border border-white/5 rounded-xs">
                                    <div className="text-slate-500 text-[8px] tracking-wider font-mono">
                                      {met.label[lang]}
                                    </div>
                                    <span className="text-[11px] font-bold text-white tracking-widest mt-0.5 block">
                                      {met.value}
                                    </span>
                                  </div>
                                ))}
                              </div>

                              {/* Bullets lists */}
                              <div>
                                <span className="text-slate-500 text-[8px] uppercase tracking-[2px] font-bold block mb-1">
                                  {d.project_technologies}
                                </span>
                                <ul className="list-none space-y-1 pl-1">
                                  {project.details[lang].map((detail, dIdx) => (
                                    <li key={dIdx} className="flex items-start gap-1.5 leading-relaxed">
                                      <span className="text-[#39ff14] mt-0.5">•</span>
                                      {detail}
                                    </li>
                                  ))}
                                </ul>
                              </div>

                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                    </div>

                  </div>

                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </section>

        {/* ================= SECTION 4: ABOUT ME / TIMELINE ================= */}
        <section id="about" className="py-16 border-b border-white/5 scroll-mt-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Col: Estetik Bio / Shaxsiyat */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="text-[#bf5aff] font-mono text-xs tracking-[4px] uppercase font-bold">
                // 03 / THE HUMAN ELEMENT
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                {d.about_personality_title}
              </h2>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed font-mono font-light bg-white/5 border border-white/5 p-6 rounded-xs relative overflow-hidden">
                <span className="absolute top-2 right-2 text-white/5 font-mono text-6xl font-bold font-sans pointer-events-none">[NL]</span>
                {d.about_personality_text}
              </p>
              
              {/* Highlight statistics box */}
              <div className="bg-gradient-to-r from-[#bd00ff]/10 to-transparent p-4 border-l-2 border-[#bd00ff] max-w-sm mt-2">
                <div className="font-mono text-[9px] text-[#bd00ff] tracking-widest font-bold">
                  ACTIVE EXPERIMENTAL PHASES
                </div>
                <div className="font-sans font-bold text-white text-base mt-1 leading-snug">
                  Transforming math concepts into clean, high-performance designs.
                </div>
              </div>
            </div>

            {/* Right Col: Timeline Chronicles */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="text-[#39ff14] font-mono text-xs tracking-[4px] uppercase font-bold">
                // CHRONOLOGICAL SEQUENCE
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                {d.about_path_title}
              </h2>

              <div className="flex flex-col border-l border-white/10 pl-6 ml-2 space-y-8 relative">
                {EXPERIENCES.map((exp, idx) => (
                  <div key={idx} className="relative group">
                    {/* Circle marker dot */}
                    <div className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 bg-[#050508] border border-[#39ff14] rounded-full group-hover:scale-125 transition-transform" />
                    
                    <span className="font-mono text-[10px] text-[#39ff14] font-bold tracking-widest">
                      {exp.period}
                    </span>
                    <h3 className="font-sans font-bold text-lg text-white mt-1">
                      {exp.role[lang]} <span className="text-slate-500 text-xs font-mono font-normal">@ {exp.company}</span>
                    </h3>
                    <p className="text-slate-400 text-xs font-mono mt-2 leading-relaxed">
                      {exp.description[lang]}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Governing Archetypes values grid */}
          <div className="mt-16 pt-16 border-t border-white/5">
            <div className="text-center max-w-2xl mx-auto flex flex-col items-center gap-3 mb-12">
              <div className="text-[#00f3ff] font-mono text-xs tracking-[4px] uppercase font-bold">
                // GOVERNING ARCHETYPES
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                {d.about_values_title}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {CORE_VALUES.map((val, idx) => (
                <div key={idx} className="bg-black/30 border border-white/5 p-6 rounded-xs hover:border-[#00f3ff]/40 transition-colors">
                  <div className="font-mono text-xs text-[#00f3ff] font-bold tracking-wider mb-2">
                    {idx + 1}. {val.title[lang]}
                  </div>
                  <p className="text-slate-400 text-xs font-mono leading-relaxed mt-1">
                    {val.desc[lang]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 5: LET'S COLLABORATE ================= */}
        <section id="contact" className="py-16 scroll-mt-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Col: Contact Form Area */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              
              <div className="flex flex-col gap-3">
                <div className="text-[#00f3ff] font-mono text-xs tracking-[4px] uppercase font-bold">
                  // 04 / SECURE COMMUNICATIONS SOCKET
                </div>
                <h2 className="text-3xl font-black text-white tracking-tight">
                  {d.contact_title}
                </h2>
                <p className="text-slate-400 text-xs font-mono leading-relaxed font-light">
                  {d.contact_subtitle}
                </p>
              </div>

              {/* Form implementation */}
              <form onSubmit={handleSubmitMessage} className="flex flex-col gap-5 mt-4">
                
                {/* Entity name */}
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-[9px] text-slate-400 tracking-wider font-bold">
                    {d.contact_form_name}
                  </label>
                  <input 
                    type="text" 
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    required
                    placeholder={d.contact_form_name_placeholder}
                    className="bg-[#050508] border border-white/10 focus:border-[#00f3ff] focus:ring-1 focus:ring-[#00f3ff] px-4 py-3 rounded-xs text-xs font-mono text-white outline-hidden placeholder:text-slate-600 transition-colors"
                  />
                </div>

                {/* Email address */}
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-[9px] text-slate-400 tracking-wider font-bold">
                    {d.contact_form_email}
                  </label>
                  <input 
                    type="email" 
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    required
                    placeholder={d.contact_form_email_placeholder}
                    className="bg-[#050508] border border-white/10 focus:border-[#00f3ff] focus:ring-1 focus:ring-[#00f3ff] px-4 py-3 rounded-xs text-xs font-mono text-white outline-hidden placeholder:text-slate-600 transition-colors"
                  />
                </div>

                {/* Transmission protocols Subject list dropdown selection */}
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-[9px] text-slate-400 tracking-wider font-bold">
                    {d.contact_form_subject}
                  </label>
                  <select 
                    value={formSubject}
                    onChange={(e) => setFormSubject(e.target.value)}
                    className="bg-[#050508] border border-white/10 focus:border-[#00f3ff] px-4 py-3 rounded-xs text-xs font-mono text-white outline-hidden transition-colors"
                  >
                    <option value="" className="bg-[#050508]">{lang === 'EN' ? 'General inquiry default socket' : 'Umumiy kelishuv standart kanali'}</option>
                    <option value="WEB_DESIGN_PROT" className="bg-[#050508]">{lang === 'EN' ? 'Custom web platform engineering' : 'Veb-platformani ishga tushirish'}</option>
                    <option value="BRAND_ENG_PROT" className="bg-[#050508]">{lang === 'EN' ? 'Cryptographic branding frameworks' : 'Kriptografik brending tizimi'}</option>
                    <option value="UI_UX_PROT" className="bg-[#050508]">{lang === 'EN' ? 'Interactive systems UI/UX' : 'UI/UX interaktiv tuzilmasi'}</option>
                    <option value="THREE_D_PROT" className="bg-[#050508]">{lang === 'EN' ? 'WebGL 3D mathematical visuals' : 'WebGL 3D vizualizatsiyalar'}</option>
                  </select>
                </div>

                {/* Message block */}
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-[9px] text-slate-400 tracking-wider font-bold">
                    {d.contact_form_msg}
                  </label>
                  <textarea 
                    value={formMsg}
                    onChange={(e) => setFormMsg(e.target.value)}
                    required
                    rows={5}
                    placeholder={d.contact_form_msg_placeholder}
                    className="bg-[#050508] border border-white/10 focus:border-[#00f3ff] focus:ring-1 focus:ring-[#00f3ff] px-4 py-3 rounded-xs text-xs font-mono text-white outline-hidden placeholder:text-slate-600 transition-colors resize-y leading-relaxed"
                  />
                </div>

                {/* Submit state indicator */}
                <button
                  type="submit"
                  disabled={isSending}
                  className="bg-[#00f3ff] hover:bg-white text-black font-bold font-mono tracking-widest text-xs py-3.5 px-6 rounded-xs flex items-center justify-center gap-2 group transition-all cursor-pointer active:scale-95 disabled:opacity-50"
                >
                  {isSending ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin text-black" />
                      {d.contact_form_sending}
                    </>
                  ) : (
                    <>
                      {d.contact_form_submit}
                      <Send className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>

                {/* Feedbacks notification banner logs */}
                <AnimatePresence>
                  {submitResult === 'success' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="bg-[#39ff14]/10 border border-[#39ff14]/30 p-4 rounded-xs text-[#39ff14] font-mono text-xs flex items-start gap-3 mt-2"
                    >
                      <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                      <span>{d.contact_form_success}</span>
                    </motion.div>
                  )}

                  {submitResult === 'error' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="bg-red-500/10 border border-red-500/30 p-4 rounded-xs text-red-500/90 font-mono text-xs flex items-start gap-3 mt-2"
                    >
                      <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                      <span>{d.contact_form_error}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

              </form>
            </div>

            {/* Right Col: Coordinates detail block */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              
              <div className="bg-black/40 border border-white/5 p-6 rounded-xs relative overflow-hidden flex flex-col gap-6">
                <div className="absolute inset-0 grid-bg-dense opacity-10 pointer-events-none" />
                
                <h3 className="font-sans font-bold text-lg text-white border-b border-white/5 pb-4">
                  {lang === 'EN' ? 'CONTACT INFORMATION' : 'ALOQA MAʻLUMOTLARI'}
                </h3>

                {/* Coordinate location */}
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#00f3ff] shrink-0 mt-0.5" />
                  <div className="font-mono text-xs">
                    <div className="text-slate-500 font-bold text-[9px] tracking-widest">{d.contact_detail_loc}</div>
                    <div className="text-slate-300 mt-1 leading-snug">{d.contact_detail_loc_val}</div>
                  </div>
                </div>

                {/* Email communication socket */}
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#39ff14] shrink-0 mt-0.5" />
                  <div className="font-mono text-xs">
                    <div className="text-slate-500 font-bold text-[9px] tracking-widest">{d.contact_detail_comm}</div>
                    <a href="mailto:hello@neonlabs.co" className="text-slate-300 hover:text-[#39ff14] hover:underline mt-1 block">
                      hello@neonlabs.co
                    </a>
                  </div>
                </div>

                {/* Operating hours */}
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#bd00ff] shrink-0 mt-0.5" />
                  <div className="font-mono text-xs">
                    <div className="text-slate-500 font-bold text-[9px] tracking-widest">{d.contact_detail_hours}</div>
                    <div className="text-slate-300 mt-1 leading-snug">{d.contact_detail_hours_val}</div>
                  </div>
                </div>

                {/* Secured CV download link */}
                <div className="border-t border-dashed border-white/10 pt-4 flex flex-col gap-2.5">
                  <span className="font-mono text-[9px] text-slate-500 font-bold tracking-widest">SECURE SYSTEMS VERIFICATION</span>
                  <a 
                    href="#download_cv" 
                    onClick={(e) => {
                      e.preventDefault();
                      alert(lang === 'EN' ? 'Curriculum Vitae validation token successfully generated.' : 'Tarjimai hol tekshiruv kaliti yaratildi.');
                    }}
                    className="text-xs font-mono text-[#00f3ff] hover:text-white flex items-center gap-1.5 hover:underline transition-colors"
                  >
                    <span>{d.footer_ready_resume}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>

              {/* ACTIVE MEMORY LOG CABINET */}
              {transmissions.length > 0 && (
                <div className="bg-black/60 border border-white/5 p-5 rounded-xs flex flex-col gap-4">
                  <div className="flex justify-between items-center text-[9px] font-mono border-b border-white/5 pb-2">
                    <span className="text-[#39ff14]/80 font-bold">● LOCAL TRANSMISSIONS SECURE ACTIVE LOGS</span>
                    <button 
                      type="button"
                      onClick={handleClearTransmissions}
                      className="text-slate-500 hover:text-red-400 font-semibold cursor-pointer"
                    >
                      CLEAR_ALL
                    </button>
                  </div>

                  <div className="max-h-[140px] overflow-y-auto space-y-3 pr-2 scrollbar-none font-mono text-[9px]">
                    {transmissions.map((tx) => (
                      <div key={tx.id} className="bg-white/5 p-2.5 border-l border-[#00f3ff]/30 text-slate-400">
                        <div className="flex justify-between font-bold text-[#00f3ff] text-[8px] mb-1">
                          <span>{tx.id}</span>
                          <span>{tx.timestamp}</span>
                        </div>
                        <div className="truncate"><span className="text-slate-500">FROM_ENTITY:</span> {tx.name} &lt;{tx.email}&gt;</div>
                        <div className="truncate"><span className="text-slate-500">SUBJECT:</span> {tx.subject}</div>
                        <div className="text-slate-300 mt-1 bg-black/40 p-1 rounded-xs break-all line-clamp-2 italic">"{tx.message}"</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

          </div>
        </section>

      </main>

      {/* ================= EXTRA FEATURE: LIVE DEMO PROCESS OVERLAY MODAL ================= */}
      <AnimatePresence>
        {activePreviewProject && (
          <div className="fixed inset-0 bg-[#050508]/95 backdrop-blur-md z-50 flex items-center justify-center p-4">
            
            {/* Modal outer frame */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="bg-[#050508] border border-[#00f3ff]/60 w-full max-w-2xl rounded-sm shadow-2xl relative overflow-hidden flex flex-col justify-between"
            >
              {/* Animated corner decorations */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#00f3ff]" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#00f3ff]" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#00f3ff]" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#00f3ff]" />
              
              {/* Modal header details */}
              <div className="bg-black/50 border-b border-white/10 p-4 flex justify-between items-center font-mono text-[10px] text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Laptop className="w-3.5 h-3.5 text-[#00f3ff] animate-pulse" />
                  <span>SECURE INTERACTIVE PROCESS SYSTEM PREVIEW: {activePreviewProject.title}</span>
                </span>
                
                <button
                  type="button"
                  onClick={() => setActivePreviewProject(null)}
                  className="text-[#00f3ff] hover:text-white hover:bg-white/5 border border-[#00f3ff]/30 px-2.5 py-0.5 rounded-sm transition-all uppercase cursor-pointer"
                >
                  {lang === 'EN' ? 'HALT PROCESS' : 'JARAYONNI TOXISH'}
                </button>
              </div>

              {/* Core interactive playground showcase area */}
              <div className="p-8 flex flex-col gap-6">
                
                <div className="flex flex-col gap-1">
                  <div className="text-[9px] font-mono text-slate-500 tracking-widest uppercase">
                    ENVIRONMENT RENDERING WINDOW // VIRTUAL LIVE TEST BED
                  </div>
                  <h3 className="font-sans font-extrabold text-2xl text-white tracking-wider">
                    {activePreviewProject.title}
                  </h3>
                </div>

                {/* Center live interaction simulator widget */}
                <div className="bg-[#030305] border border-white/5 p-4 rounded-xs min-h-[180px] flex items-center justify-center relative">
                  <div className="w-full">
                    {getVisualizer(activePreviewProject.id)}
                  </div>
                </div>

                {/* Metrics and Instructions */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-[10px]">
                  
                  {/* System properties list */}
                  <div className="bg-white/5 p-3.5 border border-white/5 rounded-xs">
                    <span className="text-slate-500 text-[8px] font-bold tracking-widest block mb-2">SYSTEM PARAMETERS</span>
                    <div className="space-y-1.5 text-slate-300">
                      <div>REVISION CORE: <span className="text-white">v1.2 // SECURE</span></div>
                      <div>INTERFACES: <span className="text-[#39ff14]">ACTIVE / PASSING</span></div>
                      <div>RESONANCE LIMIT: <span className="text-white">60 HZ UNLOCKED</span></div>
                    </div>
                  </div>

                  {/* Operation manual */}
                  <div className="bg-white/5 p-3.5 border border-white/5 rounded-xs">
                    <span className="text-slate-500 text-[8px] font-bold tracking-widest block mb-2">INTELLIGENT REACTION MANUAL</span>
                    <p className="text-slate-400 leading-relaxed font-light">
                      {lang === 'EN' ? (
                        'Interact directly inside the canvas matrix sandbox. Move cursor to displace orbits, click or tap inputs to trigger state changes, and examine localized cryptographic logic updates instantly.'
                      ) : (
                        'Matritsa komponenti ichida toʻgʻridan-toʻgʻri ishlash. Kursorni harakatlantirish orqali tugunlarni yoʻllang, buyruq darchasini bosib parametrlarni darhol moslashtiring.'
                      )}
                    </p>
                  </div>

                </div>

              </div>

              {/* Modal footer credits */}
              <div className="bg-black/60 border-t border-white/5 p-3 flex justify-between items-center text-[8px] font-mono text-slate-500">
                <span>COMPILED SECURE MODULES: CLOUD ENGINE READY</span>
                <span className="text-[#00f3ff]">SOCKET STATE: CONNECTED</span>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ----------------- CORE STATUTORY FOOTER ----------------- */}
      <footer className="bg-black/80 border-t border-white/5 py-12 px-4 md:px-8 font-mono text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-between gap-6">
          
          {/* Slogan */}
          <div className="flex flex-col items-center gap-2 max-w-md">
            <span className="text-[#39ff14] text-[8px] tracking-[4px] uppercase font-bold">
              // INITIALIZE SHIELD CONNECTIVITY
            </span>
            <h3 className="font-sans font-bold text-lg text-white tracking-widest uppercase">
              {d.footer_ready_title}
            </h3>
            <p className="text-slate-500 text-[10px] leading-relaxed">
              {lang === 'EN' ? (
                'Systematic, high-performance designs mapped uniquely per cryptographic parameters. Join forces to code the future.'
              ) : (
                'Kriptografik parametrlar boʻyicha ishlab chiqiladigan maxsus tizimli loyihalar. Kelajakni dizayn va muhandislik bilan birga quring.'
              )}
            </p>
          </div>

          {/* Action Footer Toggles */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
            <button
              onClick={() => handleSmoothScroll('contact')}
              className="bg-[#39ff14] hover:bg-white text-black text-[10px] font-bold px-4 py-2.5 rounded-xs tracking-wider transition-all cursor-pointer active:scale-95"
            >
              {d.footer_ready_cta}
            </button>
            <button
              onClick={() => handleSmoothScroll('hero')}
              className="bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white text-[10px] px-4 py-2.5 rounded-xs border border-white/10 hover:border-white/20 tracking-wider transition-all cursor-pointer"
            >
              {d.back_to_top}
            </button>
          </div>

          <div className="border-t border-white/5 w-full pt-8 mt-6 flex flex-col md:flex-row items-center justify-between text-[8.5px] text-slate-500 gap-4">
            <div>
              © {new Date().getFullYear()} NEON_LABS GLOBAL DIGITAL SHOWCASE. SECURITY ALL RIGHTS SEALED.
            </div>
            <div className="flex items-center gap-4">
              <span>LATENCY: ZERO_MS</span>
              <span>•</span>
              <span>RESONANCE STATE: SYSTEMIC</span>
              <span>•</span>
              <span>ENGINE: VITE × REACT</span>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
