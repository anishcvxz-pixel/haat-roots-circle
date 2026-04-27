import PageHeader from "@/components/layout/PageHeader";
import { ArrowRight, TreePine, Tractor, Truck, Store, Users, Recycle } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const stages = [
  { icon: TreePine, title: "Forest / Farm / Household", color: "bg-primary" },
  { icon: Tractor, title: "Collection / Production", color: "bg-primary" },
  { icon: Truck, title: "Transport to Haat", color: "bg-secondary" },
  { icon: Store, title: "Haat Bazar (Trading)", color: "bg-accent text-accent-foreground" },
  { icon: Users, title: "Buyer / Trader", color: "bg-secondary" },
  { icon: Recycle, title: "Consumption / Resale / Reuse", color: "bg-secondary" },
];

const journeys = [
  {
    icon: "🌿",
    title: "NTFP Journey",
    steps: ["Collected from forest", "Dried/processed at home", "Carried by foot or cycle", "Sold at haat", "Bought by trader", "Sent to city market"],
  },
  {
    icon: "🥬",
    title: "Vegetable Journey",
    steps: ["Grown in household farm", "Harvested morning of haat day", "Transported by shared vehicle", "Sold directly to consumers", "Leftover used as animal feed"],
  },
  {
    icon: "🧺",
    title: "Handmade Products Journey",
    steps: ["Raw material sourced locally", "Made by SHG/artisan", "Displayed at haat", "Sold to local buyers", "Profit returned to household savings"],
  },
];

const categoryData = [
  { name: "NTFP", value: 28 },
  { name: "Vegetables", value: 24 },
  { name: "Grains/Pulses", value: 15 },
  { name: "Cooked Food", value: 12 },
  { name: "Handicrafts/SHG", value: 8 },
  { name: "Livestock", value: 7 },
  { name: "Other", value: 6 },
];

const ProductFlow = () => (
  <>
    <PageHeader
      eyebrow="Page 05"
      title="Product Flow in Haat Bazar Systems"
      description="From forest and farm to consumer — tracing how goods, money, and value move through the weekly market."
    />

    {/* Main flow */}
    <section className="section-pad">
      <div className="container-page">
        <div className="card-earth p-6 md:p-10">
          <div className="flex flex-col lg:flex-row items-stretch gap-3 lg:gap-2">
            {stages.map((s, i) => (
              <div key={s.title} className="flex flex-col lg:flex-row items-center gap-3 lg:gap-2 flex-1">
                <div className={`flex-1 w-full p-5 rounded-lg ${s.color} text-primary-foreground text-center shadow-soft`}>
                  <s.icon className="w-7 h-7 mx-auto mb-2" />
                  <div className="text-sm font-semibold leading-tight">{s.title}</div>
                </div>
                {i < stages.length - 1 && (
                  <ArrowRight className="w-6 h-6 text-secondary shrink-0 rotate-90 lg:rotate-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Journeys */}
    <section className="section-pad bg-muted/40 border-y border-border">
      <div className="container-page">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-8 text-center">Three Product Journeys</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {journeys.map((j) => (
            <div key={j.title} className="card-earth p-6 leaf-pattern hover:-translate-y-1">
              <div className="text-4xl mb-3">{j.icon}</div>
              <h3 className="font-serif text-xl font-bold text-primary mb-4">{j.title}</h3>
              <ol className="space-y-2.5">
                {j.steps.map((step, i) => (
                  <li key={step} className="flex gap-3 text-sm text-foreground/85">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center">{i + 1}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Category breakdown */}
    <section className="section-pad">
      <div className="container-page">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-2">Product Category Breakdown</h2>
        <p className="text-muted-foreground mb-6">Approximate share of sellers across product categories (placeholder data).</p>
        <div className="card-earth p-6">
          <ResponsiveContainer width="100%" height={380}>
            <BarChart data={categoryData} layout="vertical" margin={{ left: 30, right: 30, top: 10, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis type="number" stroke="hsl(var(--muted-foreground))" fontSize={12} unit="%" />
              <YAxis type="category" dataKey="name" stroke="hsl(var(--foreground))" fontSize={13} width={110} />
              <Tooltip
                contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8 }}
                formatter={(v) => [`${v}%`, "Sellers"]}
              />
              <Bar dataKey="value" fill="hsl(var(--primary))" radius={[0, 6, 6, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  </>
);

export default ProductFlow;
