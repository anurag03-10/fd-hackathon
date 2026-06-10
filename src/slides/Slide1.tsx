import {
  Radar, Sun, Moon, ShieldCheck, AlertTriangle,
  ClipboardCheck, FileText, Activity, Users, Zap, ChevronRight,
  BarChart3, Target, ArrowRight, type LucideIcon
} from 'lucide-react';

const INPUTS: { icon: LucideIcon; label: string; color: string; optional?: boolean }[] = [
  { icon: FileText, label: 'PR / Code Delta', color: 'text-blue-400' },
  { icon: ClipboardCheck, label: 'Feature Manual', color: 'text-emerald-400' },
  { icon: FileText, label: 'Jira Release Ticket', color: 'text-amber-400', optional: true },
];

const OUTPUTS: { icon: LucideIcon; label: string; sub: string; color: string }[] = [
  { icon: BarChart3, label: 'Confidence Score', sub: '0–100%', color: 'text-hsbc-red' },
  { icon: Moon, label: 'Day vs Night', sub: 'Recommendation', color: 'text-indigo-400' },
  { icon: Radar, label: 'Risk Radar', sub: 'Low / Medium / High', color: 'text-amber-400' },
  { icon: ShieldCheck, label: 'Decision', sub: 'Go / Conditional Go / No-Go', color: 'text-confidence-go' },
  { icon: AlertTriangle, label: 'Blockers', sub: 'Actionable Next Steps', color: 'text-confidence-conditional' },
  { icon: ClipboardCheck, label: 'Evidence Summary', sub: 'Audit-Friendly', color: 'text-hsbc-gray-200' },
];

const TEAMS: { icon: LucideIcon; label: string }[] = [
  { icon: Users, label: 'Release Managers' },
  { icon: Activity, label: 'DevOps Teams' },
  { icon: ShieldCheck, label: 'QA Teams' },
  { icon: Radar, label: 'SRE Teams' },
  { icon: Target, label: 'Change & Release Governance' },
];

function DynamicIcon({ icon: Icon, size, className }: { icon: LucideIcon; size: number; className?: string }) {
  return <Icon size={size} className={className} />;
}

export default function Slide1() {
  return (
    <div className="slide-container bg-hsbc-navy bg-grid">
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-hsbc-red/[0.03] blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-16 flex flex-col items-center justify-center h-full">
        {/* Team badge */}
        <div className="animate-fade-in mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-hsbc-red/10 border border-hsbc-red/20">
            <div className="w-2 h-2 rounded-full bg-hsbc-red animate-pulse" />
            <span className="text-hsbc-gray-300 text-sm font-medium tracking-wide">TEAM: FD DevCops</span>
          </div>
        </div>

        {/* Title */}
        <div className="animate-fade-in-up text-center mb-4">
          <h1 className="text-7xl font-extrabold tracking-tight mb-3">
            <span className="text-gradient-red">Release</span>
            <span className="text-white">Radar</span>
          </h1>
          <p className="text-xl text-hsbc-gray-300 font-light tracking-wide">
            AI-Assisted Release Confidence & Day/Night Release Advisor
          </p>
        </div>

        {/* Hook */}
        <div className="animate-fade-in-up stagger-2 glass-card px-8 py-5 max-w-3xl text-center mb-10">
          <p className="text-hsbc-gray-100 text-lg leading-relaxed">
            Every release gets a <span className="text-white font-semibold">confidence score</span>, a{' '}
            <span className="text-white font-semibold">release window recommendation</span>, and a{' '}
            <span className="text-white font-semibold">checklist-backed Go / Conditional Go / No-Go decision</span>{' '}
            — in <span className="text-gradient-gold font-semibold">minutes, not meetings</span>.
          </p>
        </div>

        {/* Flow: Inputs → Process → Outputs */}
        <div className="animate-fade-in-up stagger-3 w-full max-w-6xl mb-10">
          <div className="flex items-stretch justify-center gap-6">
            {/* Inputs */}
            <div className="flex flex-col gap-3 min-w-[200px]">
              <h3 className="text-xs font-semibold text-hsbc-gray-400 uppercase tracking-widest mb-1 text-center">Inputs</h3>
              {INPUTS.map((item) => (
                <div key={item.label} className="glass-card-hover px-4 py-3 flex items-center gap-3">
                  <DynamicIcon icon={item.icon} size={18} className={item.color} />
                  <span className="text-sm text-hsbc-gray-100 font-medium">{item.label}</span>
                  {item.optional && (
                    <span className="text-[10px] text-hsbc-gray-500 bg-hsbc-gray-500/10 px-1.5 py-0.5 rounded">OPT</span>
                  )}
                </div>
              ))}
              <div className="glass-card-hover px-4 py-3 flex items-center gap-3">
                <Zap size={18} className="text-hsbc-red" />
                <span className="text-sm text-hsbc-gray-100 font-medium">API Name</span>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex items-center">
              <div className="flex flex-col items-center gap-1">
                <ArrowRight size={24} className="text-hsbc-red/60" />
                <span className="text-[10px] text-hsbc-gray-500 uppercase tracking-wider">Evaluate</span>
              </div>
            </div>

            {/* Central Processing */}
            <div className="gradient-border flex flex-col items-center justify-center px-8 py-4 min-w-[200px]">
              <Radar size={40} className="text-hsbc-red mb-2 animate-pulse-glow rounded-full" />
              <span className="text-sm font-bold text-white">ReleaseRadar</span>
              <span className="text-[10px] text-hsbc-gray-400 mt-1">AI Engine</span>
              <div className="flex gap-2 mt-3">
                <Sun size={14} className="text-amber-400" />
                <span className="text-[10px] text-hsbc-gray-400">|</span>
                <Moon size={14} className="text-indigo-400" />
              </div>
            </div>

            {/* Arrow */}
            <div className="flex items-center">
              <div className="flex flex-col items-center gap-1">
                <ArrowRight size={24} className="text-hsbc-red/60" />
                <span className="text-[10px] text-hsbc-gray-500 uppercase tracking-wider">Generate</span>
              </div>
            </div>

            {/* Outputs */}
            <div className="flex flex-col gap-2 min-w-[220px]">
              <h3 className="text-xs font-semibold text-hsbc-gray-400 uppercase tracking-widest mb-1 text-center">Outputs</h3>
              {OUTPUTS.map((item) => (
                <div key={item.label} className="glass-card-hover px-4 py-2.5 flex items-center gap-3">
                  <DynamicIcon icon={item.icon} size={16} className={item.color} />
                  <div>
                    <span className="text-sm text-hsbc-gray-100 font-medium">{item.label}</span>
                    <span className="block text-[10px] text-hsbc-gray-500">{item.sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Who It's For */}
        <div className="animate-fade-in-up stagger-4">
          <h3 className="text-xs font-semibold text-hsbc-gray-400 uppercase tracking-widest text-center mb-3">Who It's For</h3>
          <div className="flex items-center gap-2">
            {TEAMS.map((team, i) => (
              <div key={team.label} className="flex items-center gap-2">
                <div className="glass-card px-4 py-2 flex items-center gap-2">
                  <DynamicIcon icon={team.icon} size={14} className="text-hsbc-gray-300" />
                  <span className="text-xs text-hsbc-gray-300 font-medium whitespace-nowrap">{team.label}</span>
                </div>
                {i < TEAMS.length - 1 && <ChevronRight size={12} className="text-hsbc-gray-600" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
