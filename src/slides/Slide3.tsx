import {
  Radar, ShieldCheck, FileText, BarChart3,
  Gauge, AlertTriangle, ClipboardCheck, ArrowRight,
  CheckCircle2, XCircle, AlertCircle, BookOpen, Zap, Code,
  ToggleRight, Layers, type LucideIcon
} from 'lucide-react';

interface InputItem {
  icon: LucideIcon;
  label: string;
  color: string;
  optional?: boolean;
}

interface SignalCategory {
  title: string;
  icon: LucideIcon;
  color: string;
  borderColor: string;
  bgColor: string;
  items: string[];
  badge?: string;
}

interface ScoringBand {
  range: string;
  label: string;
  bgColor: string;
  textColor: string;
  borderColor: string;
  icon: LucideIcon;
}

interface OutputItem {
  icon: LucideIcon;
  title: string;
  sub: string;
  color: string;
}

const INPUT_ITEMS: InputItem[] = [
  { icon: Zap, label: 'API Name', color: 'text-hsbc-red' },
  { icon: Code, label: 'PR / Code Delta', color: 'text-blue-400' },
  { icon: BookOpen, label: 'Feature Manual (Confluence)', color: 'text-emerald-400' },
  { icon: FileText, label: 'Jira Release Ticket', color: 'text-amber-400', optional: true },
];

const SIGNAL_CATEGORIES: SignalCategory[] = [
  {
    title: 'Customer & Business Impact',
    icon: BarChart3,
    color: 'text-blue-400',
    borderColor: 'border-blue-400/20',
    bgColor: 'bg-blue-400/[0.06]',
    items: ['Traffic & Criticality (AppLogIQ / Splunk)'],
  },
  {
    title: 'Testability & Quality',
    icon: ClipboardCheck,
    color: 'text-emerald-400',
    borderColor: 'border-emerald-400/20',
    bgColor: 'bg-emerald-400/[0.06]',
    items: ['E2E Testability', 'Test Profile Availability', 'Performance Test Status (Pass / Fail / Missing)'],
  },
  {
    title: 'Key Performance Metrics',
    icon: Gauge,
    color: 'text-amber-400',
    borderColor: 'border-amber-400/20',
    bgColor: 'bg-amber-400/[0.06]',
    items: ['Runtime Health', 'Error Rate Analysis', 'E95 Latency Monitoring', 'Regression Detection'],
  },
  {
    title: 'Governance & Platform Readiness',
    icon: ShieldCheck,
    color: 'text-purple-400',
    borderColor: 'border-purple-400/20',
    bgColor: 'bg-purple-400/[0.06]',
    items: ['TCC Approval Validation', 'Namespace Capacity Assessment', 'Image Tag Validation', 'PURL Verification'],
  },
  {
    title: 'Documentation Intelligence',
    icon: FileText,
    color: 'text-pink-400',
    borderColor: 'border-pink-400/20',
    bgColor: 'bg-pink-400/[0.06]',
    items: ['Template Compliance', 'Missing Sections Detection', 'Extra Sections Detection', 'Feature Manual Delta Analysis'],
    badge: 'Powered by Doc Reviewer',
  },
];

const SCORING_BANDS: ScoringBand[] = [
  { range: '80–100%', label: 'Go', bgColor: 'bg-confidence-go/10', textColor: 'text-confidence-go', borderColor: 'border-confidence-go/20', icon: CheckCircle2 },
  { range: '50–79%', label: 'Conditional Go', bgColor: 'bg-confidence-conditional/10', textColor: 'text-confidence-conditional', borderColor: 'border-confidence-conditional/20', icon: AlertCircle },
  { range: 'Below 50%', label: 'No-Go', bgColor: 'bg-confidence-nogo/10', textColor: 'text-confidence-nogo', borderColor: 'border-confidence-nogo/20', icon: XCircle },
];

const OUTPUT_ITEMS: OutputItem[] = [
  { icon: BarChart3, title: 'Confidence Score', sub: '0–100%', color: 'text-hsbc-red' },
  { icon: ToggleRight, title: 'Day vs Night Release', sub: 'Recommendation', color: 'text-indigo-400' },
  { icon: Radar, title: 'Risk Radar', sub: 'Low / Medium / High', color: 'text-amber-400' },
  { icon: Layers, title: 'Evidence Checklist', sub: 'Green / Amber / Red', color: 'text-emerald-400' },
  { icon: AlertTriangle, title: 'Exact Actions Required', sub: 'To Reach "Go"', color: 'text-confidence-conditional' },
  { icon: FileText, title: 'AI Summaries', sub: 'Technical (Code Delta) + Functional (Feature Manual)', color: 'text-blue-400' },
];

function DynamicIcon({ icon: Icon, size, className }: { icon: LucideIcon; size: number; className?: string }) {
  return <Icon size={size} className={className} />;
}

export default function Slide3() {
  return (
    <div className="slide-container bg-hsbc-navy bg-grid">
      <div className="absolute inset-0 bg-radial-glow-center pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-14 py-10 h-full flex flex-col">
        {/* Title */}
        <div className="animate-fade-in mb-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-400/20 border border-emerald-400/30 flex items-center justify-center">
              <Radar size={20} className="text-emerald-400" />
            </div>
            <h2 className="text-4xl font-bold text-white">The Solution</h2>
          </div>
          <p className="text-hsbc-gray-300 text-lg ml-[52px]">
            ReleaseRadar Turns Scattered Signals Into One Decision
          </p>
        </div>

        <div className="flex-1 flex gap-6 min-h-0">
          {/* Left column: Inputs + Signals */}
          <div className="w-[38%] flex flex-col gap-4 min-h-0">
            {/* Inputs */}
            <div className="glass-card p-4 animate-fade-in-left stagger-1">
              <h3 className="text-xs font-semibold text-hsbc-gray-400 uppercase tracking-widest mb-2">Inputs</h3>
              <p className="text-[10px] text-hsbc-gray-500 mb-2">Release Manager provides:</p>
              <div className="flex flex-col gap-1.5">
                {INPUT_ITEMS.map((item) => (
                  <div key={item.label} className="flex items-center gap-2 bg-white/[0.03] rounded-lg px-3 py-2">
                    <DynamicIcon icon={item.icon} size={14} className={item.color} />
                    <span className="text-xs text-hsbc-gray-200 font-medium">{item.label}</span>
                    {item.optional && (
                      <span className="ml-auto text-[9px] text-hsbc-gray-500 bg-hsbc-gray-500/10 px-1.5 py-0.5 rounded">OPT</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Evidence Signals */}
            <div className="flex-1 flex flex-col gap-2 overflow-y-auto pr-1 min-h-0">
              <h3 className="text-xs font-semibold text-hsbc-gray-400 uppercase tracking-widest shrink-0">
                Evidence Signals Evaluated
              </h3>
              {SIGNAL_CATEGORIES.map((cat, i) => (
                <div
                  key={cat.title}
                  className={`glass-card px-3 py-2.5 animate-fade-in-left stagger-${i + 2}`}
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className={`p-1 rounded-md ${cat.bgColor} border ${cat.borderColor}`}>
                      <DynamicIcon icon={cat.icon} size={12} className={cat.color} />
                    </div>
                    <span className="text-xs font-semibold text-hsbc-gray-100">{cat.title}</span>
                    {cat.badge && (
                      <span className="ml-auto text-[9px] text-hsbc-gray-400 bg-white/[0.04] px-1.5 py-0.5 rounded">
                        {cat.badge}
                      </span>
                    )}
                  </div>
                  <div className="ml-5 flex flex-wrap gap-1">
                    {cat.items.map((item) => (
                      <span key={item} className="text-[10px] text-hsbc-gray-400 bg-white/[0.03] px-2 py-0.5 rounded">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Center arrow */}
          <div className="flex items-center justify-center w-8 shrink-0">
            <div className="flex flex-col items-center gap-2">
              <ArrowRight size={24} className="text-hsbc-red/40" />
              <div className="w-px h-8 bg-gradient-to-b from-transparent via-hsbc-red/20 to-transparent" />
              <Radar size={28} className="text-hsbc-red animate-pulse" />
              <div className="w-px h-8 bg-gradient-to-b from-transparent via-hsbc-red/20 to-transparent" />
              <ArrowRight size={24} className="text-hsbc-red/40" />
            </div>
          </div>

          {/* Right column: Scoring + Outputs */}
          <div className="w-[55%] flex flex-col gap-4 min-h-0">
            {/* Confidence Score Bands */}
            <div className="glass-card p-4 animate-fade-in-right stagger-1">
              <h3 className="text-xs font-semibold text-hsbc-gray-400 uppercase tracking-widest mb-3">
                Confidence Score Decisioning
              </h3>
              <div className="flex gap-3">
                {SCORING_BANDS.map((band) => (
                  <div key={band.label} className="flex-1">
                    <div className={`${band.bgColor} border ${band.borderColor} rounded-xl px-4 py-3 text-center`}>
                      <DynamicIcon icon={band.icon} size={20} className={`${band.textColor} mx-auto mb-1`} />
                      <div className={`text-lg font-bold ${band.textColor}`}>{band.range}</div>
                      <div className="text-xs font-semibold text-hsbc-gray-200">{band.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Outputs Grid */}
            <div className="flex-1 min-h-0">
              <h3 className="text-xs font-semibold text-hsbc-gray-400 uppercase tracking-widest mb-2">Outputs</h3>
              <div className="grid grid-cols-2 gap-2.5 h-full">
                {OUTPUT_ITEMS.map((item, i) => (
                  <div
                    key={item.title}
                    className={`glass-card-hover px-4 py-3 flex items-start gap-3 animate-fade-in-right stagger-${i + 2}`}
                  >
                    <div className="shrink-0 p-2 rounded-lg bg-white/[0.04]">
                      <DynamicIcon icon={item.icon} size={18} className={item.color} />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-hsbc-gray-100 block">{item.title}</span>
                      <span className="text-[10px] text-hsbc-gray-400 block">{item.sub}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
