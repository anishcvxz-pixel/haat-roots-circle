import PageHeader from "@/components/layout/PageHeader";
import { haats } from "@/data/researchData";

const flowNodes = [
  "Local Resources",
  "Local Production",
  "Local Selling at Haat",
  "Local Consumption",
  "Reuse / Waste Recovery",
  "Income Returns to Household",
];

const practices = [
  { icon: "🌿", title: "Local Sourcing", desc: "Products sourced from nearby forests and farms, reducing input costs and carbon footprint." },
  { icon: "🧺", title: "Reuse of Baskets & Sacks", desc: "Traditional bamboo baskets, cloth bags, and gunny sacks reused across market cycles." },
  { icon: "🍃", title: "Natural Packaging", desc: "Sal leaves, banana leaves, and mahua leaves used for wrapping food items instead of plastic." },
  { icon: "🔧", title: "Repair and Reuse", desc: "Farm tools, utensils, and equipment repaired and sold at haat rather than discarded." },
  { icon: "🐄", title: "Food Waste as Animal Feed", desc: "Unsold vegetables and food scraps fed to cattle and poultry by sellers." },
  { icon: "👩", title: "Women-Led Processing", desc: "Women process raw forest/farm produce at home, adding value before sale." },
  { icon: "♻️", title: "Low Plastic Packaging", desc: "Traditional sellers use minimal or zero plastic, relying on natural and reusable materials." },
  { icon: "🌾", title: "Composting Practices", desc: "Some SHG groups convert organic waste from haats into compost for farm use." },
];

type Rating = "g" | "y" | "r";
const dot = (r: Rating) =>
  r === "g" ? "bg-success" : r === "y" ? "bg-warning" : "bg-destructive";

const scores: { haat: string; ratings: Rating[] }[] = [
  { haat: haats[0].name, ratings: ["g", "y", "y", "g", "r"] },
  { haat: haats[1].name, ratings: ["g", "g", "g", "g", "y"] },
  { haat: haats[2].name, ratings: ["g", "g", "y", "y", "r"] },
  { haat: haats[3].name, ratings: ["y", "y", "y", "y", "r"] },
  { haat: haats[4].name, ratings: ["g", "g", "g", "g", "y"] },
  { haat: haats[5].name, ratings: ["g", "g", "y", "y", "r"] },
];

const scoreCols = ["Local sourcing", "Natural packaging", "Reuse practices", "Women's role", "Waste mgmt"];

const CircularEconomy = () => (
  <>
    <PageHeader
      eyebrow="Page 06"
      title="Circular Economy Practices in Haat Bazars"
      description="Haat bazars in Kondagaon exhibit several naturally occurring circular economy practices — rooted in necessity, tradition, and community culture. These practices reduce waste, conserve resources, and keep economic value within the local community."
    />

    {/* Circular flow */}
    <section className="section-pad">
      <div className="container-page">
        <div className="card-earth p-6 md:p-10 leaf-pattern">
          <h2 className="text-2xl font-serif font-bold text-primary text-center mb-8">The Local Loop</h2>
          <div className="relative mx-auto" style={{ width: 560, height: 560, maxWidth: "100%" }}>
            <div className="absolute inset-[12%] rounded-full border-2 border-dashed border-primary/30 animate-spin-slow" />
            <div className="absolute inset-0 rounded-full border-2 border-accent/40" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full bg-gradient-warm flex items-center justify-center text-center text-primary-foreground shadow-elevated">
              <div className="font-serif font-bold leading-tight">Local<br/>Circular<br/>Loop</div>
            </div>
            {flowNodes.map((node, i) => {
              const angle = (i / flowNodes.length) * 2 * Math.PI - Math.PI / 2;
              const r = 230;
              const x = Math.cos(angle) * r;
              const y = Math.sin(angle) * r;
              return (
                <div
                  key={node}
                  className="absolute left-1/2 top-1/2 bg-primary text-primary-foreground text-xs sm:text-sm font-semibold px-3 py-2 rounded-lg shadow-soft text-center max-w-[140px]"
                  style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
                >
                  {node}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>

    {/* Practices grid */}
    <section className="section-pad bg-muted/40 border-y border-border">
      <div className="container-page">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-8 text-center">Observed Practices</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {practices.map((p) => (
            <div key={p.title} className="card-earth p-6 hover:-translate-y-1">
              <div className="text-4xl mb-3">{p.icon}</div>
              <h3 className="font-serif text-lg font-bold text-primary mb-2">{p.title}</h3>
              <p className="text-sm text-foreground/80 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Score card */}
    <section className="section-pad">
      <div className="container-page">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-2">Circular Economy Score Card</h2>
        <p className="text-muted-foreground mb-6">Comparative rating across studied haats (placeholder ratings).</p>
        <div className="overflow-x-auto card-earth">
          <table className="w-full text-sm">
            <thead className="bg-primary text-primary-foreground">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Haat</th>
                {scoreCols.map((c) => (
                  <th key={c} className="px-4 py-3 text-center font-semibold whitespace-nowrap">{c}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {scores.map((s, i) => (
                <tr key={s.haat} className={i % 2 ? "bg-background/40" : ""}>
                  <td className="px-4 py-3 font-semibold text-primary whitespace-nowrap">{s.haat}</td>
                  {s.ratings.map((r, j) => (
                    <td key={j} className="px-4 py-3 text-center">
                      <span className={`inline-block w-4 h-4 rounded-full ${dot(r)}`} title={r === "g" ? "Strong" : r === "y" ? "Moderate" : "Weak"} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-success" /> Strong</span>
          <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-warning" /> Moderate</span>
          <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-destructive" /> Weak</span>
        </div>
      </div>
    </section>
  </>
);

export default CircularEconomy;
