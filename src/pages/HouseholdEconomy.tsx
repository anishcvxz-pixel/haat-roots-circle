import PageHeader from "@/components/layout/PageHeader";
import SectionIntro from "@/components/layout/SectionIntro";
import PageTransition from "@/components/layout/PageTransition";
import {
  PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend,
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
} from "recharts";

const allocation = [
  { name: "Food & daily needs", value: 35 },
  { name: "Education", value: 15 },
  { name: "Health", value: 12 },
  { name: "Farming inputs", value: 18 },
  { name: "Debt repayment", value: 10 },
  { name: "Savings", value: 10 },
];

const PIE_COLORS = [
  "hsl(var(--primary))",
  "hsl(var(--accent))",
  "hsl(var(--secondary))",
  "hsl(var(--primary-glow))",
  "hsl(var(--destructive))",
  "hsl(var(--success))",
];

const stats = [
  { label: "Average daily sale per seller", value: "₹350 – ₹800" },
  { label: "Average monthly haat income", value: "₹1,500 – ₹3,200" },
  { label: "Households dependent on haat as primary income", value: "~42%" },
];

const stories = [
  { quote: "I sell mahua and vegetables every Monday. The money goes directly to my children's school fees.", who: "Women seller, Kondagaon Haat" },
  { quote: "Our SHG group sells pickles and papad here. We save together and take loans when needed.", who: "SHG member, Pharasgaon Haat" },
  { quote: "Transport is costly but haat is the only place we can sell directly. No middleman takes cut here.", who: "Farmer, Makdi Haat" },
];

const incomeCompare = [
  { source: "Haat selling",   tribal: 4200, marginal: 2800, shg: 3600 },
  { source: "Agriculture",    tribal: 1500, marginal: 4200, shg: 2200 },
  { source: "Forest produce", tribal: 3800, marginal: 900,  shg: 1500 },
  { source: "MGNREGA",        tribal: 1800, marginal: 1600, shg: 1400 },
  { source: "Other",          tribal: 600,  marginal: 800,  shg: 1200 },
];

const HouseholdEconomy = () => (
  <>
    <PageHeader
      eyebrow="Page 07"
      title="Household Economy Impact of Haat Income"
      description="For most tribal and rural households in Kondagaon, haat income is a critical supplement — sometimes the only source of cash income. It supports essential expenditures and builds household resilience."
    />

    <SectionIntro title="Where the Haat Money Goes">
      <p>
        For most participating households, the haat is the single most reliable
        source of cash income across the year. The amounts are modest by urban
        standards, but they sustain food security, schooling, basic healthcare,
        and the small reinvestments that keep farming and forest collection
        viable.
      </p>
      <p>
        The visuals below show how a typical week's haat earnings are
        allocated, summarise headline income figures, share voices from sellers
        themselves, and compare income sources across three household types.
      </p>
    </SectionIntro>

    <section className="section-pad">
      <div className="container-page grid lg:grid-cols-2 gap-8">
        <div className="card-earth p-6">
          <h2 className="text-xl font-serif font-bold text-primary mb-4">Average Haat Income Allocation</h2>
          <ResponsiveContainer width="100%" height={340}>
            <PieChart>
              <Pie data={allocation} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={110} paddingAngle={2}>
                {allocation.map((_, i) => <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />)}
              </Pie>
              <Tooltip formatter={(v) => `${v}%`} contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8 }} />
              <Legend wrapperStyle={{ fontSize: 12 }} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="grid gap-4">
          {stats.map((s) => (
            <div key={s.label} className="card-earth p-6 leaf-pattern">
              <div className="text-2xl md:text-3xl font-serif font-bold text-primary">{s.value}</div>
              <div className="mt-1 text-sm text-muted-foreground uppercase tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-pad bg-muted/40 border-y border-border">
      <div className="container-page">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-2 text-center">Voices from the Field</h2>
        <p className="text-muted-foreground text-center mb-8">Excerpts from interviews with sellers and SHG members.</p>
        <div className="grid md:grid-cols-3 gap-5">
          {stories.map((s, i) => (
            <blockquote key={i} className="card-earth p-6 leaf-pattern">
              <div className="text-4xl text-accent font-serif leading-none mb-2">“</div>
              <p className="text-foreground/85 italic leading-relaxed">{s.quote}</p>
              <footer className="mt-4 text-sm text-secondary font-semibold not-italic">— {s.who}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>

    <section className="section-pad">
      <div className="container-page">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-2">Household Income Sources Comparison</h2>
        <p className="text-muted-foreground mb-6">Approximate monthly income (₹) from each source, by household type.</p>
        <div className="card-earth p-6">
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={incomeCompare} margin={{ top: 10, right: 20, left: 0, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="source" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8 }} formatter={(v) => `₹${v}`} />
              <Legend wrapperStyle={{ fontSize: 12 }} />
              <Bar dataKey="tribal" name="Tribal forest-dependent" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
              <Bar dataKey="marginal" name="Marginal farmer" fill="hsl(var(--secondary))" radius={[4, 4, 0, 0]} />
              <Bar dataKey="shg" name="SHG member" fill="hsl(var(--accent))" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>

    <PageTransition
      summary="The household impact is real but fragile. Behind the modest income figures lie persistent structural problems — low prices, middlemen dependency, weak infrastructure — that limit how far the haat can take a family. The next chapter examines these problems head-on."
      prev={{ to: "/circular-economy", chapter: "Chapter 06", label: "Circular Economy" }}
      next={{ to: "/problems-gaps", chapter: "Chapter 08", label: "Problems and Gaps" }}
    />
  </>
);

export default HouseholdEconomy;
