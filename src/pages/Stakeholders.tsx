import PageHeader from "@/components/layout/PageHeader";
import { stakeholders } from "@/data/researchData";

const ringColors = {
  1: { bg: "bg-primary", text: "text-primary-foreground", label: "Core Market Actors" },
  2: { bg: "bg-secondary", text: "text-secondary-foreground", label: "Market Intermediaries" },
  3: { bg: "bg-accent", text: "text-accent-foreground", label: "Support & Governance" },
} as const;

const Stakeholders = () => {
  const ring1 = stakeholders.filter((s) => s.ring === 1);
  const ring2 = stakeholders.filter((s) => s.ring === 2);
  const ring3 = stakeholders.filter((s) => s.ring === 3);

  return (
    <>
      <PageHeader
        eyebrow="Page 04"
        title="Stakeholder Mapping"
        description="The haat bazar ecosystem involves a diverse set of stakeholders — each playing a distinct role in production, trade, governance, and support."
      />

      {/* Hub & spoke diagram */}
      <section className="section-pad">
        <div className="container-page">
          <div className="card-earth p-6 md:p-10 leaf-pattern">
            {/* Concentric rings - large screens */}
            <div className="hidden md:block relative mx-auto" style={{ width: 720, height: 720, maxWidth: "100%" }}>
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-accent/40" />
              <div className="absolute inset-[12%] rounded-full border-2 border-dashed border-secondary/40" />
              <div className="absolute inset-[28%] rounded-full border-2 border-dashed border-primary/40" />

              {/* center */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-earth flex items-center justify-center text-primary-foreground text-center shadow-elevated">
                <div>
                  <div className="font-serif font-bold leading-tight">Haat Bazar</div>
                  <div className="text-[10px] uppercase tracking-widest opacity-80 mt-1">Core Hub</div>
                </div>
              </div>

              {[
                { items: ring1, radius: 200, color: ringColors[1] },
                { items: ring2, radius: 290, color: ringColors[2] },
                { items: ring3, radius: 350, color: ringColors[3] },
              ].map(({ items, radius, color }, ringIdx) =>
                items.map((s, i) => {
                  const angle = (i / items.length) * 2 * Math.PI - Math.PI / 2;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  return (
                    <div
                      key={`${ringIdx}-${s.name}`}
                      className={`absolute left-1/2 top-1/2 ${color.bg} ${color.text} text-[11px] font-semibold px-3 py-1.5 rounded-full shadow-soft whitespace-nowrap hover:scale-110 transition-transform cursor-default`}
                      style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
                    >
                      {s.name}
                    </div>
                  );
                })
              )}
            </div>

            {/* Mobile fallback */}
            <div className="md:hidden space-y-6">
              {[ring1, ring2, ring3].map((arr, idx) => {
                const color = ringColors[(idx + 1) as 1 | 2 | 3];
                return (
                  <div key={idx}>
                    <h3 className={`text-sm font-semibold uppercase tracking-wider mb-3`}>
                      <span className={`inline-block w-3 h-3 rounded-full mr-2 ${color.bg}`} />
                      {color.label}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {arr.map((s) => (
                        <span key={s.name} className={`${color.bg} ${color.text} text-xs font-semibold px-3 py-1.5 rounded-full`}>{s.name}</span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Legend */}
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
              {[1, 2, 3].map((r) => {
                const c = ringColors[r as 1 | 2 | 3];
                return (
                  <div key={r} className="flex items-center gap-2">
                    <span className={`w-4 h-4 rounded-full ${c.bg}`} />
                    <span className="text-foreground/80">{c.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Detail table */}
      <section className="section-pad bg-muted/40 border-y border-border">
        <div className="container-page">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-2">Stakeholder Detail</h2>
          <p className="text-muted-foreground mb-6">Roles, products, needs, and challenges of each stakeholder group.</p>
          <div className="overflow-x-auto card-earth">
            <table className="w-full text-sm">
              <thead className="bg-primary text-primary-foreground">
                <tr>
                  {["Stakeholder", "Role", "Products / Services", "Key Needs", "Key Problems"].map((h) => (
                    <th key={h} className="px-4 py-3 text-left font-semibold whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {stakeholders.map((s, i) => (
                  <tr key={s.name} className={i % 2 ? "bg-background/40" : ""}>
                    <td className="px-4 py-3 font-semibold text-primary whitespace-nowrap">{s.name}</td>
                    <td className="px-4 py-3 text-foreground/80">{s.role}</td>
                    <td className="px-4 py-3 text-foreground/80">{s.products}</td>
                    <td className="px-4 py-3 text-foreground/80">{s.needs}</td>
                    <td className="px-4 py-3 text-foreground/80">{s.problems}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default Stakeholders;
