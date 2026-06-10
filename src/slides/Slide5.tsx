import {
  ShieldCheck, TrendingUp, CheckCircle2,
  Users, DollarSign, Activity, Eye,
  CheckSquare, Rocket, Layers,
  Sparkles, Target, type LucideIcon
} from 'lucide-react';

interface BenefitData {
  number: string;
  title: string;
  icon: LucideIcon;
  iconColor: string;
  iconBg: string;
  points: string[];
  subPoints?: string[];
  subLabel?: string;
  highlight: string;
  highlightIcon?: LucideIcon;
  integrations?: string[];
  futureItems?: string[];
  futureLabel?: string;
}

const BENEFITS: BenefitData[] = [
  {
    number: '1',
    title: 'Customer Protection & Service Reliability',
    icon: ShieldCheck,
    iconColor: 'text-confidence-go',
    iconBg: 'bg-confidence-go/8 border border-confidence-go/12',
    points: [
      'Selecting the optimal release window',
      'Enforcing readiness gates',
      'Detecting performance and runtime risks early',
    ],
    highlight: 'Improves outcomes for difficult-to-test journeys such as CCA by aligning releases with real validation opportunities.',
    highlightIcon: Eye,
  },
  {
    number: '2',
    title: 'Faster Time-To-Market',
    icon: Rocket,
    iconColor: 'text-hsbc-red',
    iconBg: 'bg-hsbc-red/8 border border-hsbc-red/12',
    points: [
      'Transform release readiness into a repeatable 2–5 minute workflow',
    ],
    subPoints: ['TCC Approvals', 'Performance Reports', 'Traffic Evidence', 'Documentation Completeness'],
    subLabel: 'Reduce time spent chasing:',
    highlight: '',
  },
  {
    number: '3',
    title: 'Stronger Governance & Audit Readiness',
    icon: CheckSquare,
    iconColor: 'text-indigo-600',
    iconBg: 'bg-indigo-600/8 border border-indigo-600/12',
    points: [
      'Standardised evidence checklist for every release',
    ],
    subPoints: ['Approvals', 'Runtime Metrics', 'Performance Evidence', 'Capacity Validation', 'Documentation Compliance'],
    highlight: 'Creates consistent release decisioning across teams and reduces dependency on individual judgement.',
    highlightIcon: Target,
  },
  {
    number: '4',
    title: 'Lower Operational Cost & Fewer Escalations',
    icon: DollarSign,
    iconColor: 'text-confidence-conditional',
    iconBg: 'bg-confidence-conditional/8 border border-confidence-conditional/12',
    points: [
      'Earlier identification of readiness gaps leads to:',
    ],
    subPoints: ['Fewer failed releases', 'Fewer hotfixes', 'Reduced firefighting', 'Smoother DevOps, QA and SRE handoffs'],
    highlight: '',
  },
  {
    number: '5',
    title: 'Strategic Fit For HSBC',
    icon: Layers,
    iconColor: 'text-hsbc-red',
    iconBg: 'bg-hsbc-red/8 border border-hsbc-red/12',
    points: [
      'Leverages existing HSBC capabilities rather than replacing them:',
    ],
    integrations: ['AppLogIQ', 'Doc Reviewer', 'Existing Governance Processes'],
    futureItems: ['CI/CD Release Gates', 'Automated Evidence Collection', 'Jira Task Creation For Missing Artefacts', 'Intelligent Release Approvals'],
    futureLabel: 'Future evolution:',
    highlight: '',
  },
];

function BenefitIcon({ icon: Icon, size, className }: { icon: LucideIcon; size: number; className?: string }) {
  return <Icon size={size} className={className} />;
}

export default function Slide5() {
  const b0 = BENEFITS[0];
  const b1 = BENEFITS[1];
  const b2 = BENEFITS[2];
  const b3 = BENEFITS[3];
  const b4 = BENEFITS[4];

  return (
    <div className="slide-container bg-white bg-grid">
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-hsbc-red/[0.02] to-transparent pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-14 py-8 h-full flex flex-col">
        {/* Title */}
        <div className="animate-fade-in mb-5">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-hsbc-red/10 border border-hsbc-red/15 flex items-center justify-center">
              <TrendingUp size={20} className="text-hsbc-red" />
            </div>
            <h2 className="text-4xl font-bold text-hsbc-gray-900">Benefits To HSBC</h2>
          </div>
        </div>

        {/* Benefits cards */}
        <div className="flex-1 flex gap-4 min-h-0 overflow-y-auto">
          <div className="flex-1 grid grid-cols-3 gap-3 auto-rows-min">
            {/* Benefit 1 - full width */}
            <div className="col-span-3 glass-card p-4 animate-fade-in-up stagger-1">
              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className={`w-10 h-10 rounded-xl ${b0.iconBg} flex items-center justify-center`}>
                    <BenefitIcon icon={b0.icon} size={20} className={b0.iconColor} />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-hsbc-red font-bold text-sm">01</span>
                    <h3 className="text-base font-semibold text-hsbc-gray-800">{b0.title}</h3>
                  </div>
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    {b0.points.map((p) => (
                      <span key={p} className="text-xs text-hsbc-gray-600 bg-hsbc-offwhite px-2.5 py-1 rounded-lg flex items-center gap-1">
                        <CheckCircle2 size={10} className="text-confidence-go" />
                        {p}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-start gap-2 bg-confidence-go/[0.04] border border-confidence-go/8 rounded-lg px-3 py-2">
                    <Eye size={14} className="text-confidence-go shrink-0 mt-0.5" />
                    <span className="text-xs text-hsbc-gray-600">{b0.highlight}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="col-span-1 glass-card p-4 animate-fade-in-up stagger-2">
              <div className={`w-8 h-8 rounded-lg ${b1.iconBg} flex items-center justify-center mb-3`}>
                <BenefitIcon icon={b1.icon} size={16} className={b1.iconColor} />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-hsbc-red font-bold text-sm">02</span>
                <h3 className="text-sm font-semibold text-hsbc-gray-800">{b1.title}</h3>
              </div>
              {b1.points.map((p) => (
                <p key={p} className="text-xs text-hsbc-gray-600 mb-2">{p}</p>
              ))}
              <p className="text-[10px] text-hsbc-gray-400 mb-1">{b1.subLabel}</p>
              <div className="flex flex-wrap gap-1">
                {b1.subPoints!.map((sp) => (
                  <span key={sp} className="text-[10px] text-hsbc-gray-500 bg-hsbc-offwhite px-2 py-0.5 rounded">{sp}</span>
                ))}
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="col-span-1 glass-card p-4 animate-fade-in-up stagger-3">
              <div className={`w-8 h-8 rounded-lg ${b2.iconBg} flex items-center justify-center mb-3`}>
                <BenefitIcon icon={b2.icon} size={16} className={b2.iconColor} />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-hsbc-red font-bold text-sm">03</span>
                <h3 className="text-sm font-semibold text-hsbc-gray-800">{b2.title}</h3>
              </div>
              {b2.points.map((p) => (
                <p key={p} className="text-xs text-hsbc-gray-600 mb-2">{p}</p>
              ))}
              <div className="flex flex-wrap gap-1 mb-2">
                {b2.subPoints!.map((sp) => (
                  <span key={sp} className="text-[10px] text-hsbc-gray-500 bg-hsbc-offwhite px-2 py-0.5 rounded">{sp}</span>
                ))}
              </div>
              <div className="flex items-start gap-1.5 bg-indigo-600/[0.04] border border-indigo-600/8 rounded-lg px-2.5 py-1.5">
                <Target size={12} className="text-indigo-600 shrink-0 mt-0.5" />
                <span className="text-[10px] text-hsbc-gray-600">{b2.highlight}</span>
              </div>
            </div>

            {/* Benefit 4 */}
            <div className="col-span-1 glass-card p-4 animate-fade-in-up stagger-4">
              <div className={`w-8 h-8 rounded-lg ${b3.iconBg} flex items-center justify-center mb-3`}>
                <BenefitIcon icon={b3.icon} size={16} className={b3.iconColor} />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-hsbc-red font-bold text-sm">04</span>
                <h3 className="text-sm font-semibold text-hsbc-gray-800">{b3.title}</h3>
              </div>
              {b3.points.map((p) => (
                <p key={p} className="text-xs text-hsbc-gray-600 mb-2">{p}</p>
              ))}
              <div className="flex flex-wrap gap-1">
                {b3.subPoints!.map((sp) => (
                  <span key={sp} className="text-[10px] text-hsbc-gray-500 bg-hsbc-offwhite px-2 py-0.5 rounded">{sp}</span>
                ))}
              </div>
            </div>

            {/* Benefit 5 - full width */}
            <div className="col-span-3 glass-card p-4 animate-fade-in-up stagger-5">
              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className={`w-10 h-10 rounded-xl ${b4.iconBg} flex items-center justify-center`}>
                    <BenefitIcon icon={b4.icon} size={20} className={b4.iconColor} />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-hsbc-red font-bold text-sm">05</span>
                    <h3 className="text-base font-semibold text-hsbc-gray-800">{b4.title}</h3>
                  </div>
                  <p className="text-xs text-hsbc-gray-600 mb-2">{b4.points[0]}</p>
                  <div className="flex gap-6 flex-wrap">
                    <div>
                      <p className="text-[10px] text-confidence-go font-semibold uppercase tracking-wider mb-1">Leverages Today</p>
                      <div className="flex gap-1.5">
                        {b4.integrations!.map((item) => (
                          <span key={item} className="text-xs text-hsbc-gray-700 bg-confidence-go/5 border border-confidence-go/10 px-2.5 py-1 rounded-lg flex items-center gap-1">
                            <CheckCircle2 size={10} className="text-confidence-go" />
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-[10px] text-hsbc-red font-semibold uppercase tracking-wider mb-1">Future Evolution</p>
                      <div className="flex flex-wrap gap-1.5">
                        {b4.futureItems!.map((item) => (
                          <span key={item} className="text-[10px] text-hsbc-gray-500 bg-hsbc-red/[0.03] border border-hsbc-red/8 px-2 py-0.5 rounded flex items-center gap-1">
                            <Sparkles size={8} className="text-hsbc-red" />
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="animate-fade-in-up stagger-6 mt-4">
          <div className="gradient-border glass-card px-8 py-5 text-center bg-white">
            <p className="text-xl text-hsbc-gray-800 font-light mb-2">
              ReleaseRadar makes releases boring — in the best possible way.
            </p>
            <div className="flex items-center justify-center gap-4">
              <span className="text-confidence-go font-semibold flex items-center gap-1">
                <CheckCircle2 size={14} /> Predictable
              </span>
              <span className="text-hsbc-red font-semibold flex items-center gap-1">
                <Activity size={14} /> Evidence-based
              </span>
              <span className="text-indigo-600 font-semibold flex items-center gap-1">
                <ShieldCheck size={14} /> Governed
              </span>
              <span className="text-confidence-go font-semibold flex items-center gap-1">
                <Users size={14} /> Safer for customers
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
