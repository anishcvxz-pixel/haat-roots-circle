import { ReactNode } from "react";

type Props = {
  label?: string;
  title?: string;
  children: ReactNode;
};

/**
 * SectionIntro — a short, report-style introductory paragraph used at the
 * top of each chapter to give context before charts and tables begin.
 */
const SectionIntro = ({ label = "Introduction", title, children }: Props) => (
  <section className="section-pad">
    <div className="container-page max-w-4xl">
      <div className="card-earth p-6 md:p-8 leaf-pattern border-l-4 border-l-primary">
        <p className="text-xs uppercase tracking-[0.25em] text-secondary font-semibold mb-2">
          {label}
        </p>
        {title && (
          <h2 className="text-xl md:text-2xl font-serif font-bold text-primary mb-3">
            {title}
          </h2>
        )}
        <div className="text-foreground/85 leading-relaxed text-pretty space-y-3">
          {children}
        </div>
      </div>
    </div>
  </section>
);

export default SectionIntro;
