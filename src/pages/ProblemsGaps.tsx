import PageHeader from "@/components/layout/PageHeader";
import { ShieldAlert } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const problems = [
  { icon: "💰", title: "Low Prices", desc: "Sellers lack bargaining power; prices often dictated by traders and buyers." },
  { icon: "🔗", title: "Middlemen Dependency", desc: "Traders buy produce cheaply and resell at higher margins, reducing seller income." },
  { icon: "📦", title: "Poor Storage Facilities", desc: "No cold storage or warehouse; perishables lost post-haat day." },
  { icon: "🚗", title: "High Transport Costs", desc: "Remote villages face high informal transport costs, reducing net income." },
  { icon: "🏷️", title: "Weak Branding", desc: "Local products lack identity, labelling, or quality certification." },
  { icon: "🗑️", title: "Waste Management", desc: "No formal waste collection; organic and plastic waste accumulates at haat grounds." },
  { icon: "🏗️", title: "Lack of Market Infrastructure", desc: "No proper sheds, clean water, toilets, or display platforms for sellers." },
  { icon: "💳", title: "Credit Access Issues", desc: "Sellers struggle to access formal credit for buying inputs or expanding trade." },
  { icon: "⚖️", title: "Weighing Disputes", desc: "Inaccurate weighing scales create mistrust between sellers and buyers." },
  { icon: "📵", title: "Limited Digital Connectivity", desc: "Low mobile network and digital literacy limits use of apps or online selling." },
];

const frequency = [
  { name: "Low Prices", value: 68 },
  { name: "Middlemen", value: 61 },
  { name: "Transport Cost", value: 54 },
  { name: "Poor Infrastructure", value: 49 },
  { name: "No Storage", value: 46 },
  { name: "Weighing Disputes", value: 38 },
  { name: "Waste Management", value: 32 },
  { name: "Weak Branding", value: 28 },
  { name: "Credit Access", value: 25 },
  { name: "Digital Gap", value: 19 },
];

const ProblemsGaps = () => (
  <>
    <PageHeader
      eyebrow="Page 08"
      title="Problems and Gaps in Haat Bazar Systems"
      description="Despite their importance, haat bazars in Kondagaon face systemic challenges that limit their potential as platforms for local circular economy and livelihood improvement."
    />

    <section className="section-pad">
      <div className="container-page">
        <div className="grid md:grid-cols-2 gap-5">
          {problems.map((p) => (
            <div key={p.title} className="card-earth p-6 border-l-4 border-l-destructive hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="text-3xl shrink-0">{p.icon}</div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-primary mb-1">{p.title}</h3>
                  <p className="text-sm text-foreground/80 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-pad bg-muted/40 border-y border-border">
      <div className="container-page">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-2">Frequency of Reported Problems</h2>
        <p className="text-muted-foreground mb-6">Percentage of respondents who reported each problem (placeholder data).</p>
        <div className="card-earth p-6">
          <ResponsiveContainer width="100%" height={420}>
            <BarChart data={frequency} layout="vertical" margin={{ left: 30, right: 30 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis type="number" stroke="hsl(var(--muted-foreground))" fontSize={12} unit="%" />
              <YAxis type="category" dataKey="name" stroke="hsl(var(--foreground))" fontSize={12} width={140} />
              <Tooltip formatter={(v) => `${v}%`} contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8 }} />
              <Bar dataKey="value" fill="hsl(var(--destructive))" radius={[0, 6, 6, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>

    <section className="section-pad">
      <div className="container-page max-w-3xl">
        <div className="card-earth p-6 md:p-8 leaf-pattern border-l-4 border-l-accent">
          <div className="flex items-start gap-4">
            <ShieldAlert className="w-8 h-8 text-accent shrink-0" />
            <div>
              <h3 className="font-serif text-xl font-bold text-primary mb-2">Gender Dimension</h3>
              <p className="text-foreground/85 leading-relaxed">
                Women sellers face additional challenges beyond those listed
                above — including safety concerns at haat grounds, social
                mobility restrictions limiting travel to distant markets, and
                systematic undervaluation of products they sell. Addressing
                these requires targeted infrastructure (shelters, toilets,
                lighting) and SHG-led market organisation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default ProblemsGaps;
