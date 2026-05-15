import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Users, ClipboardList } from "lucide-react";
import heroImg from "@/assets/hero-haat.jpg";
import PageTransition from "@/components/layout/PageTransition";

const themes = [
  { icon: "🌿", title: "Tribal Livelihoods" },
  { icon: "🌾", title: "Forest & Farm Produce" },
  { icon: "👩", title: "Women & SHGs" },
  { icon: "🏘️", title: "VDVKs" },
  { icon: "🔄", title: "Circular Economy" },
  { icon: "🛒", title: "Product Flow" },
  { icon: "🏠", title: "Household Economy" },
];

const stats = [
  { icon: MapPin, label: "Haats Studied", value: "4" },
  { icon: Users, label: "Villages Covered", value: "25+" },
  { icon: ClipboardList, label: "Respondents Interviewed", value: "80+" },
];

const Home = () => (
  <>
    {/* Hero */}
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="Tribal women selling vegetables and forest produce at a weekly haat bazar in Kondagaon"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      <div className="container-page py-24 md:py-36 lg:py-44 text-primary-foreground">
        <div className="max-w-3xl animate-fade-in">
          <span className="inline-block text-[11px] tracking-[0.25em] uppercase bg-accent text-accent-foreground px-3 py-1.5 rounded-full font-semibold mb-6">
            Foundation for Ecological Security · FES
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold leading-[1.05] text-balance">
            Haat Bazar Systems &amp; Local Circular Economy
          </h1>
          <p className="mt-5 text-lg md:text-xl opacity-95 max-w-2xl text-pretty">
            A field study of weekly markets in Kondagaon district, Chhattisgarh.
          </p>
          <p className="mt-3 text-sm opacity-80 uppercase tracking-widest">
            Internship Period · April – May 2026
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/study-area"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-md font-semibold shadow-elevated hover:translate-y-[-2px] transition-transform"
            >
              Explore the Study <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur border border-primary-foreground/30 px-6 py-3 rounded-md font-semibold hover:bg-primary-foreground/20 transition-colors"
            >
              View Data Dashboard
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* Intro */}
    <section className="section-pad">
      <div className="container-page max-w-4xl text-center">
        <p className="text-lg md:text-xl text-foreground/85 leading-relaxed text-pretty">
          Weekly haat bazars are the economic heartbeat of tribal and rural
          communities in the Bastar region. This research explores how these
          markets function as nodes of <span className="text-primary font-semibold">local circular economy</span> — connecting
          forest produce collectors, farmers, artisans, women SHG members, and
          local traders in a web of livelihoods and resource flows.
        </p>
      </div>
    </section>

    {/* Themes */}
    <section className="section-pad bg-muted/40 border-y border-border">
      <div className="container-page">
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-[0.25em] text-secondary font-semibold">Research Themes</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mt-2">Key Themes Explored</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {themes.map((t) => (
            <div
              key={t.title}
              className="card-earth leaf-pattern p-6 text-center hover:-translate-y-1"
            >
              <div className="text-4xl mb-3">{t.icon}</div>
              <div className="font-serif font-semibold text-primary">{t.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="section-pad">
      <div className="container-page">
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-[0.25em] text-secondary font-semibold">Snapshot</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mt-2">Study Area at a Glance</h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="card-earth p-8 text-center">
              <div className="w-14 h-14 mx-auto rounded-full bg-gradient-warm flex items-center justify-center mb-4">
                <s.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="text-4xl md:text-5xl font-serif font-bold text-primary">{s.value}</div>
              <div className="mt-2 text-sm uppercase tracking-wide text-muted-foreground font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* About FES */}
    <section className="section-pad bg-gradient-parchment border-t border-border">
      <div className="container-page max-w-4xl">
        <div className="card-earth p-8 md:p-12 leaf-pattern">
          <p className="text-xs uppercase tracking-[0.25em] text-secondary font-semibold mb-2">About FES</p>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-4">
            Foundation for Ecological Security
          </h2>
          <p className="text-foreground/80 leading-relaxed text-pretty">
            FES is a national-level non-governmental organization working on
            natural resource governance, ecological restoration, and community
            livelihoods across India. The organisation partners with rural
            communities to strengthen common lands, forests, and water bodies as
            the foundation of resilient livelihoods.
          </p>
        </div>
      </div>
    </section>

    <PageTransition
      summary="The chapters that follow trace the haat bazar system from the ground up — beginning with the geography and people of Kondagaon, then moving through individual market profiles, the stakeholders who animate them, and the flows of products, value, and waste that connect forest, farm, and household."
      next={{ to: "/study-area", chapter: "Chapter 02", label: "Study Area — Kondagaon District" }}
    />
  </>
);

export default Home;
