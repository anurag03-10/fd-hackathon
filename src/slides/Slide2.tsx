import {
  AlertTriangle, Clock, Search, XCircle, TrendingDown,
  Activity, BarChart3, Shield, Server, FileCheck, Scan,
  Database, Users, DollarSign, Gauge, type LucideIcon
} from 'lucide-react';

interface EvidenceSource {
  area: string;
  sources: string[];
  icon: LucideIcon;
  color: string;
  borderColor: string;
}

interface Problem {
  icon: LucideIcon;
  title: string;
  desc: string;
  severity: 'high' | 'medium';
}

interface Impact {
  icon: LucideIcon;
  label: string;
}

const EVIDENCE_SOURCES: EvidenceSource[] = [
  { area: 'Traffic & Criticality', sources: ['AppLogIQ', 'Splunk'], icon: BarChart3, color: 'text-blue-400', borderColor: 'border-blue-400/20' },
  { area: 'Runtime Health', sources: ['AppDynamics', 'Logs'], icon: Activity, color: 'text-red-400', borderColor: 'border-red-400/20' },
  { area: 'Performance Validation', sources: ['JMeter Reports', 'Pipeline Artefacts'], icon: Gauge, color: 'text-amber-400', borderColor: 'border-amber-400/20' },
  { area: 'Governance', sources: ['TCC Approvals'], icon: Shield, color: 'text-emerald-400', borderColor: 'border-emerald-400/20' },
  { area: 'Platform Readiness', sources: ['Namespace Capacity'], icon: Server, color: 'text-purple-400', borderColor: 'border-purple-400/20' },
  { area: 'Release Hygiene', sources: ['Image Tags', 'PURL Validation'], icon: Scan, color: 'text-cyan-400', borderColor: 'border-cyan-400/20' },
  { area: 'Documentation', sources: ['Feature Manual Completeness'], icon: FileCheck, color: 'text-orange-400', borderColor: 'border-orange-400/20' },
  { area: 'Doc Quality', sources: ['Template Compliance', 'Doc Reviewer'], icon: Database, color: 'text-pink-400', borderColor: 'border-pink-400/20' },
];

const PROBLEMS: Problem[] = [
  {
    icon: Clock,
    title: 'Wrong Release Window',
    desc: 'Critical or high-traffic APIs released at the wrong time increase customer exposure.',
    severity: 'high',
  },
  {
    icon: Search,
    title: 'False Confidence',
    desc: 'Releases appear healthy despite missing performance evidence or hidden latency regressions.',
    severity: 'high',
  },
  {
    icon: TrendingDown,
    title: 'Slow Delivery',
    desc: 'Release Managers spend hours chasing approvals, reports, screenshots, and evidence.',
    severity: 'medium',
  },
  {
    icon: XCircle,
    title: 'Un-Testable Journeys',
    desc: 'CCA journeys cannot be fully E2E tested due to unavailable test profiles. Night releases may not receive enough customer traffic for effective validation.',
    severity: 'high',
  },
  {
    icon: Shield,
    title: 'Inconsistent Governance',
    desc: 'Documentation quality and approval standards vary across teams, increasing audit and control risk.',
    severity: 'medium',
  },
];

const IMPACTS: Impact[] = [
  { icon: Users, label: 'Increased customer disruption risk' },
  { icon: Clock, label: 'Slower time-to-market' },
  { icon: DollarSign, label: 'Higher operational overhead' },
  { icon: AlertTriangle, label: 'More firefighting and escalations' },
  { icon: TrendingDown, label: 'Reduced confidence in release decisions' },
];

function DynamicIcon({ icon: Icon, size, className }: { icon: LucideIcon; size: number; className?: string }) {
  return <Icon size={size} className={className} />;
}

export default function Slide2() {
  return (
    <div className="slide-container bg-hsbc-navy bg-grid">
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-8 py-12 h-full flex flex-col">
        {/* Title */}
        <div className="animate-fade-in mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-hsbc-red/20 border border-hsbc-red/30 flex items-center justify-center">
              <AlertTriangle size={20} className="text-hsbc-red" />
            </div>
            <h2 className="text-4xl font-bold text-white">The Problem</h2>
          </div>
          <p className="text-hsbc-gray-300 text-lg ml-[52px]">
            Release Decisions Are High-Stakes, But Evidence Is Scattered
          </p>
        </div>

        {/* Main content area */}
        <div className="flex-1 flex gap-8 min-h-0">
          {/* Left: Evidence sources */}
          <div className="w-[45%] flex flex-col">
            <h3 className="text-xs font-semibold text-hsbc-gray-400 uppercase tracking-widest mb-3">
              Today, release readiness is assessed manually across multiple systems
            </h3>
            <div className="grid grid-cols-2 gap-2.5 flex-1">
              {EVIDENCE_SOURCES.map((src, i) => (
                <div
                  key={src.area}
                  className={`glass-card-hover px-3 py-2.5 flex items-start gap-2.5 animate-fade-in-left stagger-${i + 1}`}
                >
                  <div className={`mt-0.5 p-1.5 rounded-lg bg-white/[0.04] border ${src.borderColor}`}>
                    <DynamicIcon icon={src.icon} size={14} className={src.color} />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs font-semibold text-hsbc-gray-100 block">{src.area}</span>
                    <span className="text-[10px] text-hsbc-gray-400 block truncate">{src.sources.join(' / ')}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: What Goes Wrong + Business Impact */}
          <div className="w-[55%] flex flex-col gap-4">
            {/* What Goes Wrong */}
            <div className="flex-1 flex flex-col min-h-0">
              <h3 className="text-xs font-semibold text-hsbc-gray-400 uppercase tracking-widest mb-3">
                What Goes Wrong
              </h3>
              <div className="flex-1 flex flex-col gap-2 overflow-y-auto pr-1">
                {PROBLEMS.map((problem, i) => (
                  <div
                    key={problem.title}
                    className={`glass-card px-4 py-3 flex items-start gap-3 animate-fade-in-right stagger-${i + 1}`}
                  >
                    <div className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${
                      problem.severity === 'high'
                        ? 'bg-hsbc-red/15 border border-hsbc-red/20'
                        : 'bg-confidence-conditional/15 border border-confidence-conditional/20'
                    }`}>
                      <DynamicIcon
                        icon={problem.icon}
                        size={16}
                        className={problem.severity === 'high' ? 'text-hsbc-red' : 'text-confidence-conditional'}
                      />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-hsbc-gray-100">{problem.title}</span>
                      <p className="text-xs text-hsbc-gray-400 leading-relaxed mt-0.5">{problem.desc}</p>
                    </div>
                    <div className={`shrink-0 ml-auto mt-1 text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${
                      problem.severity === 'high'
                        ? 'bg-hsbc-red/10 text-hsbc-red border border-hsbc-red/20'
                        : 'bg-confidence-conditional/10 text-confidence-conditional border border-confidence-conditional/20'
                    }`}>
                      {problem.severity}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Impact */}
            <div className="glass-card px-5 py-4 animate-fade-in-up stagger-5">
              <div className="flex items-center gap-2 mb-3">
                <TrendingDown size={16} className="text-hsbc-red" />
                <h3 className="text-xs font-semibold text-hsbc-gray-400 uppercase tracking-widest">Business Impact</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {IMPACTS.map((impact) => (
                  <div key={impact.label} className="flex items-center gap-1.5 bg-hsbc-red/[0.06] border border-hsbc-red/10 rounded-lg px-3 py-1.5">
                    <DynamicIcon icon={impact.icon} size={12} className="text-hsbc-red/70" />
                    <span className="text-[11px] text-hsbc-gray-300 font-medium">{impact.label}</span>
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
