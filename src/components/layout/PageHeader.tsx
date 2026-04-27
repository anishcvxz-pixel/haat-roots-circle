import { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
};

const PageHeader = ({ eyebrow, title, description, children }: Props) => (
  <section className="bg-gradient-parchment border-b border-border">
    <div className="container-page py-12 md:py-16">
      {eyebrow && (
        <div className="inline-block text-xs uppercase tracking-[0.2em] text-secondary font-semibold mb-3">
          {eyebrow}
        </div>
      )}
      <h1 className="text-3xl md:text-5xl font-serif font-bold text-primary text-balance">
        {title}
      </h1>
      {description && (
        <p className="mt-4 max-w-3xl text-base md:text-lg text-foreground/80 text-pretty leading-relaxed">
          {description}
        </p>
      )}
      {children}
    </div>
  </section>
);

export default PageHeader;
