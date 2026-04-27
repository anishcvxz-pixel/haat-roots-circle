import { useMemo, useState } from "react";
import PageHeader from "@/components/layout/PageHeader";
import SectionIntro from "@/components/layout/SectionIntro";
import PageTransition from "@/components/layout/PageTransition";
import { fieldRows, haats } from "@/data/researchData";
import { Download, Search, Users, ShoppingBag, UsersRound, Layers, Coins, AlertCircle, Recycle } from "lucide-react";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
  PieChart, Pie, Cell, Legend,
} from "recharts";

const ALL = "All";

const summary = [
  { icon: Users, label: "Total Sellers Interviewed", value: "48" },
  { icon: ShoppingBag, label: "Total Buyers Interviewed", value: "22" },
  { icon: UsersRound, label: "SHG / VDVK Members", value: "14" },
  { icon: Layers, label: "Product Categories", value: "8" },
  { icon: Coins, label: "Average Daily Sale", value: "₹520" },
  { icon: AlertCircle, label: "Most Common Problem", value: "Low Prices (68%)" },
  { icon: Recycle, label: "Circular Practices Observed", value: "6 types" },
];

const PIE_COLORS = [
  "hsl(var(--primary))", "hsl(var(--accent))", "hsl(var(--secondary))",
  "hsl(var(--primary-glow))", "hsl(var(--success))", "hsl(var(--destructive))",
  "hsl(var(--warning))", "hsl(var(--muted-foreground))",
];

const Dashboard = () => {
  const [filters, setFilters] = useState({
    haat: ALL, type: ALL, category: ALL, gender: ALL, village: "", income: ALL, problem: ALL,
  });

  const update = (k: keyof typeof filters) => (v: string) =>
    setFilters((f) => ({ ...f, [k]: v }));

  const filtered = useMemo(() => {
    return fieldRows.filter((r) => {
      if (filters.haat !== ALL && r.haat !== filters.haat) return false;
      if (filters.type !== ALL && r.type !== filters.type) return false;
      if (filters.category !== ALL && r.category !== filters.category) return false;
      if (filters.gender !== ALL && r.gender !== filters.gender) return false;
      if (filters.village && !r.village.toLowerCase().includes(filters.village.toLowerCase())) return false;
      if (filters.income !== ALL) {
        const ds = r.dailySale;
        if (filters.income === "Below ₹500" && !(ds > 0 && ds < 500)) return false;
        if (filters.income === "₹500–₹1000" && !(ds >= 500 && ds <= 1000)) return false;
        if (filters.income === "Above ₹1000" && !(ds > 1000)) return false;
      }
      if (filters.problem !== ALL && !r.problems.toLowerCase().includes(filters.problem.toLowerCase())) return false;
      return true;
    });
  }, [filters]);

  // Charts derived
  const sellersByHaat = haats.map((h) => ({ name: h.name.replace(" Haat", "").replace(" Main", ""), count: filtered.filter((r) => r.haat === h.name).length }));
  const categoryDist = useMemo(() => {
    const map = new Map<string, number>();
    filtered.forEach((r) => map.set(r.category, (map.get(r.category) ?? 0) + 1));
    return Array.from(map, ([name, value]) => ({ name, value }));
  }, [filtered]);
  const problemFreq = [
    { name: "Low Prices", value: 68 },
    { name: "Middlemen", value: 61 },
    { name: "Transport", value: 54 },
    { name: "Storage", value: 46 },
    { name: "Infrastructure", value: 49 },
    { name: "Weighing", value: 38 },
  ];
  const genderDist = useMemo(() => {
    const f = filtered.filter((r) => r.gender === "Female").length;
    const m = filtered.filter((r) => r.gender === "Male").length;
    return [{ name: "Female", value: f }, { name: "Male", value: m }];
  }, [filtered]);

  const filterDefs: { key: keyof typeof filters; label: string; opts: string[] }[] = [
    { key: "haat", label: "Haat Name", opts: [ALL, ...haats.map((h) => h.name)] },
    { key: "type", label: "Respondent Type", opts: [ALL, "Seller", "Buyer", "SHG Member", "VDVK", "Trader"] },
    { key: "category", label: "Product Category", opts: [ALL, "NTFP", "Vegetables", "Grains", "Handicrafts", "Cooked Food", "Livestock"] },
    { key: "gender", label: "Gender", opts: [ALL, "Female", "Male"] },
    { key: "income", label: "Income Range", opts: [ALL, "Below ₹500", "₹500–₹1000", "Above ₹1000"] },
    { key: "problem", label: "Problem Type", opts: [ALL, "Prices", "Transport", "Storage", "Middlemen", "Infrastructure"] },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Page 10"
        title="Field Data Dashboard"
        description="This dashboard presents data collected through primary field interviews at selected haat bazars in Kondagaon. All data is indicative and based on field observations during April–May 2026."
      />

      <SectionIntro title="Explore the Field Evidence">
        <p>
          This final chapter opens the underlying dataset. Use the filters
          below to narrow the records by haat, respondent type, product
          category, gender, income range, or reported problem. The summary
          tiles, charts, and table all update in real time to reflect the
          current selection.
        </p>
        <p>
          The data is indicative rather than statistically representative —
          drawn from interviews conducted across April–May 2026 to illustrate
          patterns, not to generalise. Names have been anonymised; photographs
          will be added once field-visit imagery is processed.
        </p>
      </SectionIntro>

      {/* Filters */}
      <section className="py-8 border-b border-border bg-muted/30">
        <div className="container-page">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-secondary mb-4">Filters</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {filterDefs.map((f) => (
              <div key={f.key}>
                <label className="text-xs text-muted-foreground mb-1 block">{f.label}</label>
                <Select value={filters[f.key] as string} onValueChange={update(f.key)}>
                  <SelectTrigger className="bg-background"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {f.opts.map((o) => <SelectItem key={o} value={o}>{o}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
            ))}
            <div>
              <label className="text-xs text-muted-foreground mb-1 block">Village / Block</label>
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Type to filter…"
                  value={filters.village}
                  onChange={(e) => update("village")(e.target.value)}
                  className="pl-9 bg-background"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Summary cards */}
      <section className="py-10">
        <div className="container-page">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
            {summary.map((s) => (
              <div key={s.label} className="card-earth p-5">
                <div className="w-10 h-10 rounded-lg bg-gradient-earth flex items-center justify-center mb-3">
                  <s.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div className="text-xl font-serif font-bold text-primary leading-tight">{s.value}</div>
                <div className="text-[11px] uppercase tracking-wide text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Charts */}
      <section className="py-10 bg-muted/30 border-y border-border">
        <div className="container-page grid lg:grid-cols-2 gap-6">
          <ChartCard title="Sellers by Haat (filtered)">
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={sellersByHaat}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={11} angle={-15} height={50} textAnchor="end" />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={11} allowDecimals={false} />
                <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8 }} />
                <Bar dataKey="count" fill="hsl(var(--primary))" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard title="Product Category Distribution (filtered)">
            <ResponsiveContainer width="100%" height={280}>
              <PieChart>
                <Pie data={categoryDist} dataKey="value" nameKey="name" outerRadius={100} label>
                  {categoryDist.map((_, i) => <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />)}
                </Pie>
                <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8 }} />
                <Legend wrapperStyle={{ fontSize: 11 }} />
              </PieChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard title="Problems Reported (frequency %)">
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={problemFreq} layout="vertical" margin={{ left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis type="number" stroke="hsl(var(--muted-foreground))" fontSize={11} unit="%" />
                <YAxis type="category" dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={11} width={100} />
                <Tooltip formatter={(v) => `${v}%`} contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8 }} />
                <Bar dataKey="value" fill="hsl(var(--destructive))" radius={[0, 6, 6, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard title="Gender Distribution (filtered sellers)">
            <ResponsiveContainer width="100%" height={280}>
              <PieChart>
                <Pie data={genderDist} dataKey="value" nameKey="name" innerRadius={60} outerRadius={100} label>
                  <Cell fill="hsl(var(--accent))" />
                  <Cell fill="hsl(var(--primary))" />
                </Pie>
                <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8 }} />
                <Legend wrapperStyle={{ fontSize: 12 }} />
              </PieChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>
      </section>

      {/* Table */}
      <section className="py-10">
        <div className="container-page">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div>
              <h2 className="text-2xl font-serif font-bold text-primary">Field Interview Data</h2>
              <p className="text-sm text-muted-foreground">{filtered.length} of {fieldRows.length} records shown</p>
            </div>
            <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2.5 rounded-md font-medium shadow-soft hover:bg-primary-glow transition-colors text-sm">
              <Download className="w-4 h-4" /> Download CSV
            </button>
          </div>

          <div className="card-earth overflow-x-auto">
            <table className="w-full text-xs">
              <thead className="bg-primary text-primary-foreground sticky top-0">
                <tr>
                  {["ID", "Date", "Haat", "Village", "Type", "Gender", "Category", "Product", "Source", "Qty", "Price", "Daily Sale", "Profit", "Transport", "Buyer", "Problems", "Circular Practice", "Suggestion", "Photo", "Quote"].map((h) => (
                    <th key={h} className="px-3 py-2.5 text-left font-semibold whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map((r, i) => (
                  <tr key={r.id} className={i % 2 ? "bg-background/40" : ""}>
                    <td className="px-3 py-2 font-semibold text-primary whitespace-nowrap">{r.id}</td>
                    <td className="px-3 py-2 whitespace-nowrap">{r.date}</td>
                    <td className="px-3 py-2 whitespace-nowrap">{r.haat}</td>
                    <td className="px-3 py-2 whitespace-nowrap">{r.village}</td>
                    <td className="px-3 py-2 whitespace-nowrap">{r.type}</td>
                    <td className="px-3 py-2 whitespace-nowrap">{r.gender}</td>
                    <td className="px-3 py-2 whitespace-nowrap">{r.category}</td>
                    <td className="px-3 py-2 whitespace-nowrap">{r.product}</td>
                    <td className="px-3 py-2 whitespace-nowrap">{r.source}</td>
                    <td className="px-3 py-2 whitespace-nowrap">{r.qty}</td>
                    <td className="px-3 py-2 whitespace-nowrap">₹{r.price}</td>
                    <td className="px-3 py-2 whitespace-nowrap font-semibold">₹{r.dailySale}</td>
                    <td className="px-3 py-2 whitespace-nowrap text-success font-medium">₹{r.profit}</td>
                    <td className="px-3 py-2 whitespace-nowrap">₹{r.transport}</td>
                    <td className="px-3 py-2 whitespace-nowrap">{r.buyerType}</td>
                    <td className="px-3 py-2">{r.problems}</td>
                    <td className="px-3 py-2">{r.circular}</td>
                    <td className="px-3 py-2">{r.suggestion}</td>
                    <td className="px-3 py-2 text-muted-foreground italic whitespace-nowrap">{r.photo}</td>
                    <td className="px-3 py-2 italic text-foreground/75 max-w-[220px]">“{r.quote}”</td>
                  </tr>
                ))}
                {filtered.length === 0 && (
                  <tr>
                    <td colSpan={20} className="px-3 py-10 text-center text-muted-foreground">No records match the selected filters.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-xs italic text-muted-foreground">
            Data collected through structured field interviews. Names anonymized. Photos pending field visit.
          </p>
        </div>
      </section>

      <PageTransition
        summary="This concludes the ten-chapter study of Haat Bazar Systems and Local Circular Economy in Kondagaon. The findings are intended as a working baseline for FES and partner organisations — a starting point for deeper enquiry, programme design, and continued conversation with the communities whose markets, livelihoods, and ecologies these chapters describe."
        prev={{ to: "/recommendations", chapter: "Chapter 09", label: "Recommendations" }}
        next={{ to: "/", chapter: "Return", label: "Back to Introduction" }}
      />
    </>
  );
};

const ChartCard = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="card-earth p-5">
    <h3 className="font-serif text-base font-semibold text-primary mb-3">{title}</h3>
    {children}
  </div>
);

export default Dashboard;
