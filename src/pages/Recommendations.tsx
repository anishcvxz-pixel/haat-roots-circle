import PageHeader from "@/components/layout/PageHeader";
import SectionIntro from "@/components/layout/SectionIntro";
import PageTransition from "@/components/layout/PageTransition";

type Rec = { num: number; icon: string; title: string; desc: string };

const recs: Rec[] = [
  { num: 1, icon: "⚖️", title: "Common Weighing Facility", desc: "Install government-verified weighing machines at each haat with a trained operator." },
  { num: 2, icon: "🚐", title: "Shared Transport Model", desc: "Facilitate shared vehicle routes for sellers from remote villages to reduce per-person transport cost." },
  { num: 3, icon: "🏚️", title: "Storage Facility", desc: "Build low-cost shared storage units near haat grounds for perishable and non-perishable produce." },
  { num: 4, icon: "🛍️", title: "SHG/VDVK Product Corner", desc: "Dedicate a branded stall or zone at each haat exclusively for SHG and VDVK products." },
  { num: 5, icon: "🗺️", title: "Product Zoning and Signage", desc: "Organize haat into clear product zones (vegetables, NTFP, grains, handicrafts) with bilingual signage." },
  { num: 6, icon: "♻️", title: "Waste Segregation and Composting", desc: "Set up bins for organic and plastic waste; link organic waste to composting units." },
  { num: 7, icon: "📋", title: "Seller Database", desc: "Maintain a register/digital database of regular sellers for welfare scheme linkage." },
  { num: 8, icon: "🏷️", title: "Local Branding — Kondagaon Products", desc: "Develop a local brand identity (e.g., \"Kondagaon Haat\") for forest and handmade products." },
  { num: 9, icon: "🤝", title: "Direct Buyer Linkage", desc: "Connect SHG and NTFP sellers directly with institutional buyers (schools, hospitals, urban cooperatives)." },
  { num: 10, icon: "📊", title: "Weekly Price Display Board", desc: "Install a price board at each haat showing current market rates for key commodities." },
];

// Priority quadrants: rec numbers placed by ease (x) × impact (y)
const quadrants = {
  highImpactEasy:   [1, 5, 10],
  highImpactHard:   [3, 8, 9],
  lowImpactEasy:    [7],
  lowImpactHard:    [2, 4, 6],
};

const findRec = (n: number) => recs.find((r) => r.num === n)!;

const Recommendations = () => (
  <>
    <PageHeader
      eyebrow="Page 09"
      title="Recommendations for Strengthening Haat Bazar Systems"
      description="Based on field observations and stakeholder interviews, the following recommendations are proposed to improve the functioning of haat bazars as platforms for local livelihoods and circular economy."
    />

    <SectionIntro title="From Findings to Action">
      <p>
        The recommendations below emerged directly from sellers, buyers, SHG
        members, and local officials interviewed during fieldwork. They are
        deliberately practical — calibrated to the scale, budgets, and
        institutional capacity available at the village and block level.
      </p>
      <p>
        Each recommendation is presented as a numbered card and then placed on
        a 2×2 priority matrix that compares ease of implementation against
        expected impact, helping FES and partner agencies sequence the work.
      </p>
    </SectionIntro>

    <section className="section-pad">
      <div className="container-page grid md:grid-cols-2 gap-5">
        {recs.map((r) => (
          <div key={r.num} className="card-earth p-6 border-l-4 border-l-accent hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-12 h-12 rounded-full bg-gradient-warm text-primary-foreground flex items-center justify-center font-serif font-bold text-lg shadow-soft">
                {r.num}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-2xl">{r.icon}</span>
                  <h3 className="font-serif text-lg font-bold text-primary">{r.title}</h3>
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed">{r.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Priority matrix */}
    <section className="section-pad bg-muted/40 border-y border-border">
      <div className="container-page">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-2">Priority Matrix</h2>
        <p className="text-muted-foreground mb-8">Top recommendations mapped on Ease of Implementation × Impact Level.</p>

        <div className="card-earth p-6 md:p-8">
          <div className="flex gap-3 md:gap-4">
            {/* Y-axis label */}
            <div className="flex items-center justify-center shrink-0">
              <span className="block -rotate-90 whitespace-nowrap text-xs uppercase tracking-widest text-secondary font-semibold">
                Impact Level ↑
              </span>
            </div>

            <div className="flex-1 min-w-0">
              {/* X-axis label */}
              <div className="text-center text-xs uppercase tracking-widest text-secondary font-semibold mb-3">Ease of Implementation →</div>

              <div className="grid grid-cols-2 grid-rows-2 gap-3 md:gap-4">
                {/* High impact, easy (top-left desirable) */}
                <Quadrant title="High Impact · Easy" tint="bg-success/10 border-success/40" items={quadrants.highImpactEasy.map(findRec)} />
                <Quadrant title="High Impact · Hard" tint="bg-accent/10 border-accent/40" items={quadrants.highImpactHard.map(findRec)} />
                <Quadrant title="Low Impact · Easy" tint="bg-muted border-border" items={quadrants.lowImpactEasy.map(findRec)} />
                <Quadrant title="Low Impact · Hard" tint="bg-destructive/10 border-destructive/40" items={quadrants.lowImpactHard.map(findRec)} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <PageTransition
      summary="Recommendations gain credibility from the data behind them. The final chapter opens up the underlying field dataset — sellers, buyers, prices, products, and problems — through an interactive dashboard that lets readers explore the evidence themselves."
      prev={{ to: "/problems-gaps", chapter: "Chapter 08", label: "Problems and Gaps" }}
      next={{ to: "/dashboard", chapter: "Chapter 10", label: "Field Data Dashboard" }}
    />
  </>
);

const Quadrant = ({ title, tint, items }: { title: string; tint: string; items: Rec[] }) => (
  <div className={`rounded-lg border-2 ${tint} p-4 min-h-[180px]`}>
    <h4 className="text-xs uppercase tracking-wider font-bold text-foreground/70 mb-3">{title}</h4>
    <ul className="space-y-2">
      {items.map((r) => (
        <li key={r.num} className="flex items-start gap-2 text-sm">
          <span className="shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">{r.num}</span>
          <span className="text-foreground/85 font-medium">{r.title}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default Recommendations;
