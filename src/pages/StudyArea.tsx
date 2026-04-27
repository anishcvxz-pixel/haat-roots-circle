import PageHeader from "@/components/layout/PageHeader";
import SectionIntro from "@/components/layout/SectionIntro";
import PageTransition from "@/components/layout/PageTransition";
import { haats } from "@/data/researchData";
import { MapPin, Image as ImageIcon } from "lucide-react";

const profile = [
  ["State", "Chhattisgarh"],
  ["District", "Kondagaon"],
  ["Division", "Bastar"],
  ["Area", "~7,768 sq. km"],
  ["Population", "Predominantly tribal (Gond, Halba, Muria communities)"],
  ["Major livelihoods", "Agriculture, forest produce collection, small trade"],
  ["Key crops", "Paddy, maize, millets, vegetables"],
  ["Key forest produce", "Tendu leaves, mahua, char, chironji, lac, bamboo"],
];

const galleryLabels = [
  "Market Scene",
  "Sellers at Haat",
  "Forest Produce",
  "Women Vendors",
  "Transport to Market",
  "Product Display",
];

const StudyArea = () => (
  <>
    <PageHeader
      eyebrow="Page 02"
      title="Study Area — Kondagaon District, Chhattisgarh"
      description="A tribal-majority district in the Bastar division, characterised by rich forest cover, traditional livelihoods, and a vibrant network of weekly haat bazars."
    />

    <SectionIntro title="Setting the Scene">
      <p>
        Kondagaon lies in the heart of Chhattisgarh's Bastar plateau, where dense
        sal and bamboo forests meet small terraced fields cultivated by Gond,
        Halba, and Muria communities. Geography, ecology, and culture together
        shape an economy that is largely subsistence-based but deeply
        interconnected through weekly markets.
      </p>
      <p>
        This chapter introduces the district profile and the six haat bazars
        chosen for in-depth study. Together they offer a representative cross-section
        of how scale, location, and product mix vary across a single district.
      </p>
    </SectionIntro>

    <section className="section-pad">
      <div className="container-page grid lg:grid-cols-2 gap-8">
        {/* Profile */}
        <div className="card-earth p-8 leaf-pattern">
          <h2 className="text-2xl font-serif font-bold text-primary mb-5">District Profile</h2>
          <dl className="divide-y divide-border">
            {profile.map(([k, v]) => (
              <div key={k} className="grid grid-cols-3 gap-3 py-3 text-sm">
                <dt className="font-semibold text-secondary col-span-1">{k}</dt>
                <dd className="text-foreground/85 col-span-2">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Map placeholder */}
        <div className="card-earth p-8 flex flex-col">
          <h2 className="text-2xl font-serif font-bold text-primary mb-5">Location Map</h2>
          <div className="flex-1 min-h-[280px] border-2 border-dashed border-primary/30 rounded-lg bg-primary/5 flex flex-col items-center justify-center text-center p-6">
            <MapPin className="w-12 h-12 text-primary mb-3" />
            <p className="font-serif text-lg text-primary font-semibold">District Map</p>
            <p className="text-sm text-muted-foreground mt-1">Kondagaon, Chhattisgarh (To be added)</p>
          </div>
        </div>
      </div>
    </section>

    {/* Selected haats */}
    <section className="section-pad bg-muted/40 border-y border-border">
      <div className="container-page">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-2">Selected Haat Bazars</h2>
        <p className="text-muted-foreground mb-8">Six weekly markets across blocks of Kondagaon district selected for in-depth study.</p>

        <div className="overflow-x-auto card-earth">
          <table className="w-full text-sm">
            <thead className="bg-primary text-primary-foreground">
              <tr>
                {["Haat Name", "Block", "Market Day", "Nearby Villages", "Main Products"].map((h) => (
                  <th key={h} className="px-4 py-3 text-left font-semibold whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {haats.map((h, i) => (
                <tr key={h.name} className={i % 2 ? "bg-background/40" : ""}>
                  <td className="px-4 py-3 font-semibold text-primary">{h.name}</td>
                  <td className="px-4 py-3">{h.block}</td>
                  <td className="px-4 py-3"><span className="inline-block bg-accent/20 text-accent-foreground px-2 py-1 rounded text-xs font-medium">{h.marketDay}</span></td>
                  <td className="px-4 py-3 text-foreground/80">{h.villages}</td>
                  <td className="px-4 py-3 text-foreground/80">{h.products}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>

    {/* Gallery */}
    <section className="section-pad">
      <div className="container-page">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-2">Photo Gallery</h2>
        <p className="text-muted-foreground mb-8">Field photographs to be added after primary visits.</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryLabels.map((label) => (
            <div key={label} className="aspect-[4/3] rounded-lg border-2 border-dashed border-secondary/40 bg-secondary/5 flex flex-col items-center justify-center text-center p-4 hover:border-secondary/70 transition-colors">
              <ImageIcon className="w-8 h-8 text-secondary mb-2" />
              <span className="text-sm font-medium text-secondary">{label}</span>
              <span className="text-xs text-muted-foreground mt-1">Photo placeholder</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    <PageTransition
      summary="Having located the study geographically and identified the six anchor haats, the next chapter zooms into each of these markets individually — their sellers, products, and the everyday rhythms that distinguish one haat from another."
      prev={{ to: "/", chapter: "Chapter 01", label: "Introduction" }}
      next={{ to: "/haat-profiles", chapter: "Chapter 03", label: "Haat Bazar Profiles" }}
    />
  </>
);

export default StudyArea;
