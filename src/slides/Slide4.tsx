import {
  Sun, Moon, ShieldCheck, AlertTriangle, CheckCircle2,
  XCircle, AlertCircle, Gauge, Server, FileText, Code,
  Zap, ToggleLeft, Clock, Activity, type LucideIcon
} from 'lucide-react';

interface WindowScenario {
  scenario: string;
  icon: LucideIcon;
  iconColor: string;
  iconBg: string;
  recommendation: string;
  reasons: string[];
  tag: string;
  tagColor: string;
}

interface ScoringDriver {
  risk: string;
  category: string;
  icon: LucideIcon;
  color: string;
}

interface EdgeCase {
  title: string;
  icon: LucideIcon;
  actions: string[];
  severity: 'nogo' | 'conditional';
}

const WINDOW_SCENARIOS: WindowScenario[] = [
  {
    scenario: 'High Traffic / Critical API',
    icon: Moon,
    iconColor: 'text-indigo-400',
    iconBg: 'bg-indigo-400/10 border border-indigo-400/20',
    recommendation: 'Night Release',
    reasons: ['Minimise customer exposure', 'Reduce potential business impact'],
    tag: 'Night',
    tagColor: 'text-indigo-400 bg-indigo-400/10 border-indigo-400/20',
  },
  {
    scenario: 'Low Traffic + E2E Testable',
    icon: Sun,
    iconColor: 'text-amber-400',
    iconBg: 'bg-amber-400/10 border border-amber-400/20',
    recommendation: 'Day Release',
    reasons: ['Safe validation through available test profiles', 'Faster issue identification'],
    tag: 'Day',
    tagColor: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
  },
  {
    scenario: 'Low Traffic + Not E2E Testable (CCA-Type Journeys)',
    icon: Sun,
    iconColor: 'text-amber-400',
    iconBg: 'bg-amber-400/10 border border-amber-400/20',
    recommendation: 'Day Release',
    reasons: ['Relies on real customer traffic for validation', 'Night traffic may be too low to detect issues'],
    tag: 'Day',
    tagColor: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
  },
];

const SCORING_DRIVERS: ScoringDriver[] = [
  { risk: 'Missing TCC Approval', category: 'Governance Risk', icon: ShieldCheck, color: 'text-purple-400' },
  { risk: 'Insufficient Namespace Capacity', category: 'Deployment Risk', icon: Server, color: 'text-cyan-400' },
  { risk: 'Missing/Failed Performance Tests', category: 'Quality Risk', icon: Gauge, color: 'text-amber-400' },
  { risk: 'High Error Rate or E95 Regression', category: 'Customer Experience Risk', icon: Activity, color: 'text-red-400' },
  { risk: 'Documentation Non-Compliance', category: 'Operational Risk', icon: FileText, color: 'text-pink-400' },
  { risk: 'High-Risk Code Delta', category: 'Change Risk', icon: Code, color: 'text-blue-400' },
];

const EDGE_CASES: EdgeCase[] = [
  {
    title: 'Un-Testable Journeys (CCA-Type)',
    icon: AlertCircle,
    actions: ['Flags E2E limitations', 'Recommends Day Release', 'Adds monitoring and rollback conditions'],
    severity: 'conditional',
  },
  {
    title: 'Conflicting Signals',
    icon: Zap,
    actions: ['Example: Low traffic but increasing error rates', 'Result: Conditional Go or No-Go despite low traffic'],
    severity: 'nogo',
  },
  {
    title: 'Missing Evidence',
    icon: AlertTriangle,
    actions: ['Missing Performance Report', 'Missing TCC Approval', 'Missing PURL', 'Confidence Score drops and exact blockers are highlighted'],
    severity: 'nogo',
  },
  {
    title: 'Capacity Risk',
    icon: Server,
    actions: ['Namespace approaching limits', 'Result: Conditional Go or No-Go with remediation actions'],
    severity: 'conditional',
  },
  {
    title: 'Documentation Drift',
    icon: FileText,
    actions: ['Feature Manual missing rollback, monitoring, or required template sections', 'Result: Readiness concerns raised before release'],
    severity: 'conditional',
  },
  {
    title: 'High-Risk Change Types',
    icon: Code,
    actions: ['Dependency Upgrades', 'Authentication Components', 'Payment Flows', 'Large Code Deltas', 'Risk Radar increases and additional controls are recommended'],
    severity: 'nogo',
  },
  {
    title: 'Release Timing Constraints',
    icon: Clock,
    actions: ['Requested release window conflicts with recommendation', 'Tool explains risks and suggests mitigations such as enhanced monitoring or staged rollout'],
    severity: 'conditional',
  },
];

function DynamicIcon({ icon: Icon, size, className }: { icon: LucideIcon; size: number; className?: string }) {
  return <Icon size={size} className={className} />;
}

export default function Slide4() {
  return (
    <div className="slide-container bg-hsbc-navy bg-grid">
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-8 py-8 h-full flex flex-col">
        {/* Title */}
        <div className="animate-fade-in mb-5">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-blue-400/20 border border-blue-400/30 flex items-center justify-center">
              <ToggleLeft size={20} className="text-blue-400" />
            </div>
            <h2 className="text-4xl font-bold text-white">How It Works</h2>
          </div>
          <p className="text-hsbc-gray-300 text-lg ml-[52px]">
            Logic & Edge Cases
          </p>
        </div>

        <div className="flex-1 flex gap-6 min-h-0">
          {/* Left: Release Window Decisioning + Scoring */}
          <div className="w-[42%] flex flex-col gap-4 min-h-0 overflow-y-auto pr-1">
            {/* A. Release Window Decisioning */}
            <div className="glass-card p-4 animate-fade-in-left stagger-1">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 rounded-md bg-hsbc-red/20 border border-hsbc-red/30 flex items-center justify-center">
                  <span className="text-[10px] font-bold text-hsbc-red">A</span>
                </div>
                <h3 className="text-sm font-semibold text-hsbc-gray-100">Release Window Decisioning</h3>
              </div>
              <div className="flex flex-col gap-2">
                {WINDOW_SCENARIOS.map((s, i) => (
                  <div key={i} className="bg-white/[0.03] rounded-xl px-3 py-2.5">
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className={`p-1 rounded-md ${s.iconBg}`}>
                        <DynamicIcon icon={s.icon} size={14} className={s.iconColor} />
                      </div>
                      <span className="text-xs font-semibold text-hsbc-gray-200 flex-1">{s.scenario}</span>
                      <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full border ${s.tagColor}`}>
                        {s.tag}
                      </span>
                    </div>
                    <div className="ml-5 flex flex-col gap-0.5">
                      {s.reasons.map((r, j) => (
                        <div key={j} className="flex items-center gap-1.5">
                          <div className="w-1 h-1 rounded-full bg-hsbc-gray-500" />
                          <span className="text-[10px] text-hsbc-gray-400">{r}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* B. Explainable Confidence Scoring */}
            <div className="glass-card p-4 animate-fade-in-left stagger-3">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 rounded-md bg-hsbc-red/20 border border-hsbc-red/30 flex items-center justify-center">
                  <span className="text-[10px] font-bold text-hsbc-red">B</span>
                </div>
                <h3 className="text-sm font-semibold text-hsbc-gray-100">Explainable Confidence Scoring</h3>
              </div>

              {/* Scoring Bands Visual */}
              <div className="flex gap-2 mb-3">
                <div className="flex-1 bg-confidence-go/10 border border-confidence-go/20 rounded-lg px-3 py-2 text-center">
                  <CheckCircle2 size={16} className="text-confidence-go mx-auto mb-0.5" />
                  <div className="text-sm font-bold text-confidence-go">80–100%</div>
                  <div className="text-[10px] text-hsbc-gray-300">Go</div>
                </div>
                <div className="flex-1 bg-confidence-conditional/10 border border-confidence-conditional/20 rounded-lg px-3 py-2 text-center">
                  <AlertCircle size={16} className="text-confidence-conditional mx-auto mb-0.5" />
                  <div className="text-sm font-bold text-confidence-conditional">50–79%</div>
                  <div className="text-[10px] text-hsbc-gray-300">Conditional Go</div>
                </div>
                <div className="flex-1 bg-confidence-nogo/10 border border-confidence-nogo/20 rounded-lg px-3 py-2 text-center">
                  <XCircle size={16} className="text-confidence-nogo mx-auto mb-0.5" />
                  <div className="text-sm font-bold text-confidence-nogo">&lt;50%</div>
                  <div className="text-[10px] text-hsbc-gray-300">No-Go</div>
                </div>
              </div>

              {/* Typical Scoring Drivers */}
              <div className="space-y-1.5">
                {SCORING_DRIVERS.map((driver) => (
                  <div key={driver.risk} className="flex items-center gap-2 bg-white/[0.02] rounded-lg px-3 py-1.5">
                    <DynamicIcon icon={driver.icon} size={12} className={driver.color} />
                    <span className="text-[11px] text-hsbc-gray-200 flex-1">{driver.risk}</span>
                    <span className="text-[9px] text-hsbc-gray-500 bg-white/[0.04] px-1.5 py-0.5 rounded">{driver.category}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Edge Cases */}
          <div className="w-[58%] flex flex-col min-h-0">
            <div className="glass-card p-4 flex-1 flex flex-col min-h-0 animate-fade-in-right stagger-2">
              <div className="flex items-center gap-2 mb-3 shrink-0">
                <div className="w-6 h-6 rounded-md bg-hsbc-red/20 border border-hsbc-red/30 flex items-center justify-center">
                  <span className="text-[10px] font-bold text-hsbc-red">C</span>
                </div>
                <h3 className="text-sm font-semibold text-hsbc-gray-100">Edge Cases ReleaseRadar Explicitly Handles</h3>
              </div>
              <div className="flex-1 overflow-y-auto pr-1">
                <div className="grid grid-cols-1 gap-2">
                  {EDGE_CASES.map((ec, i) => (
                    <div
                      key={i}
                      className={`bg-white/[0.02] rounded-xl px-4 py-2.5 border-l-2 ${
                        ec.severity === 'nogo'
                          ? 'border-l-confidence-nogo'
                          : 'border-l-confidence-conditional'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <DynamicIcon
                          icon={ec.icon}
                          size={14}
                          className={ec.severity === 'nogo' ? 'text-confidence-nogo' : 'text-confidence-conditional'}
                        />
                        <span className="text-xs font-semibold text-hsbc-gray-100">{ec.title}</span>
                        <span className={`ml-auto text-[9px] font-bold uppercase px-1.5 py-0.5 rounded-full ${
                          ec.severity === 'nogo'
                            ? 'bg-confidence-nogo/10 text-confidence-nogo border border-confidence-nogo/20'
                            : 'bg-confidence-conditional/10 text-confidence-conditional border border-confidence-conditional/20'
                        }`}>
                          {ec.severity === 'nogo' ? 'No-Go Risk' : 'Conditional'}
                        </span>
                      </div>
                      <div className="ml-5 flex flex-wrap gap-1">
                        {ec.actions.map((action, j) => (
                          <span key={j} className="text-[10px] text-hsbc-gray-400 bg-white/[0.03] px-2 py-0.5 rounded">
                            {action}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
