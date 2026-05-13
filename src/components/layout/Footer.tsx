import fesLogo from "@/assets/fes-logo.png";

const Footer = () => (
  <footer className="mt-20 bg-gradient-earth text-primary-foreground">
    <div className="container-page py-12 grid gap-8 md:grid-cols-3">
      <div>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-primary-foreground/15 flex items-center justify-center">
            <Leaf className="w-5 h-5" />
          </div>
          <div>
            <div className="font-serif font-bold text-lg">Haat Bazar Systems</div>
            <div className="text-xs opacity-80">& Local Circular Economy</div>
          </div>
        </div>
        <p className="text-sm opacity-85 leading-relaxed">
          A field study of weekly markets in Kondagaon district, Chhattisgarh.
        </p>
      </div>

      <div>
        <h4 className="font-serif text-base font-semibold mb-3">Project Details</h4>
        <ul className="space-y-1.5 text-sm opacity-90">
          <li>Intern: Anish Tigga</li>
          <li>Organization: Foundation for Ecological Security (FES)</li>
          <li>Period: April – May 2026</li>
          <li>District: Kondagaon, Chhattisgarh</li>
        </ul>
      </div>

      <div>
        <h4 className="font-serif text-base font-semibold mb-3">Note</h4>
        <p className="text-sm opacity-85 leading-relaxed">
          Data collected through primary field interviews. All figures are
          indicative and based on field observations.
        </p>
      </div>
    </div>
    <div className="border-t border-primary-foreground/15">
      <div className="container-page py-4 text-xs opacity-75 flex flex-wrap justify-between gap-2">
        <span>© 2026 Foundation for Ecological Security</span>
        <span>Internship Research Report</span>
      </div>
    </div>
  </footer>
);

export default Footer;
