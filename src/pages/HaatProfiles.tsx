import { useState } from "react";
import PageHeader from "@/components/layout/PageHeader";
import SectionIntro from "@/components/layout/SectionIntro";
import PageTransition from "@/components/layout/PageTransition";
import { haats } from "@/data/researchData";
import { Image as ImageIcon, AlertTriangle, Users } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const HaatProfiles = () => {
  const [selected, setSelected] = useState(haats[0].name);
  const haat = haats.find((h) => h.name === selected)!;

  return (
    <>
      <PageHeader
        eyebrow="Page 03"
        title="Haat Bazar Profiles"
        description="Detailed profiles of each studied haat — sellers, products, key challenges, and field observations."
      />

      <SectionIntro title="Four Markets, Four Stories">
        <p>
          No two haats are alike. While all share the basic rhythm of a weekly
          gathering, each carries a distinct character shaped by its catchment
          villages, dominant product mix, and the seller groups who arrive
          before sunrise to claim their pitch.
        </p>
        <p>
          Use the selector below to move between the four studied haats. Each
          profile draws on direct observation and seller interviews to capture
          the on-ground reality — what is sold, who sells, what works, and
          where the market falls short.
        </p>
      </SectionIntro>

      <section className="section-pad">
        <div className="container-page">
          <div className="card-earth p-5 mb-8 flex flex-col sm:flex-row sm:items-center gap-3">
            <label className="text-sm font-semibold text-secondary uppercase tracking-wider">Select Haat</label>
            <Select value={selected} onValueChange={setSelected}>
              <SelectTrigger className="sm:max-w-xs bg-background">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {haats.map((h) => (
                  <SelectItem key={h.name} value={h.name}>{h.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <article className="card-earth leaf-pattern p-6 md:p-10 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">{haat.name}</h2>
            <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm text-foreground/80">
              <span><strong className="text-secondary">Block:</strong> {haat.block}</span>
              <span><strong className="text-secondary">Market Day:</strong> {haat.marketDay}</span>
              <span><strong className="text-secondary">Est. Sellers:</strong> {haat.sellers}</span>
              <span><strong className="text-secondary">Est. Buyers:</strong> {haat.buyers}</span>
            </div>

            <div className="grid lg:grid-cols-3 gap-6 mt-8">
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-secondary mb-3">Main Product Categories</h3>
                  <div className="flex flex-wrap gap-2">
                    {haat.productTags.map((t) => (
                      <span key={t} className="px-3 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/20">{t}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-secondary mb-3 flex items-center gap-2">
                    <Users className="w-4 h-4" /> Key Seller Groups
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {haat.sellerGroups.map((g) => (
                      <span key={g} className="px-3 py-1.5 bg-accent/15 text-accent-foreground text-sm font-medium rounded-full border border-accent/30">{g}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-secondary mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-destructive" /> Major Problems
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {haat.problems.map((p) => (
                      <span key={p} className="px-3 py-1.5 bg-destructive/10 text-destructive text-sm font-medium rounded-full border border-destructive/30">{p}</span>
                    ))}
                  </div>
                </div>

                <blockquote className="quote-block">
                  <p>“{haat.fieldNote}”</p>
                  <footer className="not-italic mt-2 text-xs text-muted-foreground">— Field note</footer>
                </blockquote>
              </div>

              <div className="aspect-square lg:aspect-auto rounded-lg border-2 border-dashed border-secondary/40 bg-secondary/5 flex flex-col items-center justify-center text-center p-6">
                <ImageIcon className="w-10 h-10 text-secondary mb-2" />
                <p className="font-medium text-secondary">{haat.name}</p>
                <p className="text-xs text-muted-foreground mt-1">Photo placeholder</p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <PageTransition
        summary="These profiles reveal the diversity of haats across a single district. To understand how each market actually functions, we now turn to the people who make it work — the producers, intermediaries, support institutions, and governance bodies that constitute the wider stakeholder ecosystem."
        prev={{ to: "/study-area", chapter: "Chapter 02", label: "Study Area" }}
        next={{ to: "/stakeholders", chapter: "Chapter 04", label: "Stakeholder Mapping" }}
      />
    </>
  );
};

export default HaatProfiles;
