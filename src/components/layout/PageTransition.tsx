import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";

type NavRef = { to: string; label: string; chapter: string };

type Props = {
  summary: string;
  prev?: NavRef;
  next?: NavRef;
};

/**
 * PageTransition — closes each chapter with a brief synthesis paragraph
 * and a guided link to the next page so the site reads as one report.
 */
const PageTransition = ({ summary, prev, next }: Props) => (
  <section className="section-pad bg-gradient-parchment border-t border-border">
    <div className="container-page max-w-5xl">
      <div className="card-earth p-6 md:p-8">
        <p className="text-xs uppercase tracking-[0.25em] text-secondary font-semibold mb-3">
          In summary
        </p>
        <p className="text-foreground/85 leading-relaxed text-pretty mb-6">
          {summary}
        </p>

        <div className="grid sm:grid-cols-2 gap-3 pt-5 border-t border-border">
          {prev ? (
            <Link
              to={prev.to}
              className="group flex items-start gap-3 p-4 rounded-lg border border-border bg-background/60 hover:border-primary/40 hover:bg-background transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-secondary mt-0.5 shrink-0 group-hover:-translate-x-1 transition-transform" />
              <div>
                <div className="text-[11px] uppercase tracking-widest text-muted-foreground">Previous · {prev.chapter}</div>
                <div className="font-serif font-semibold text-primary">{prev.label}</div>
              </div>
            </Link>
          ) : <div />}
          {next ? (
            <Link
              to={next.to}
              className="group flex items-start gap-3 p-4 rounded-lg border border-border bg-background/60 hover:border-primary/40 hover:bg-background transition-colors sm:text-right sm:justify-end"
            >
              <div className="sm:order-1">
                <div className="text-[11px] uppercase tracking-widest text-muted-foreground">Next · {next.chapter}</div>
                <div className="font-serif font-semibold text-primary">{next.label}</div>
              </div>
              <ArrowRight className="w-5 h-5 text-secondary mt-0.5 shrink-0 group-hover:translate-x-1 transition-transform sm:order-2" />
            </Link>
          ) : <div />}
        </div>
      </div>
    </div>
  </section>
);

export default PageTransition;
