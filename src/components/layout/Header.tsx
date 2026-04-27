import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Leaf } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/study-area", label: "Study Area" },
  { to: "/haat-profiles", label: "Haat Profiles" },
  { to: "/stakeholders", label: "Stakeholders" },
  { to: "/product-flow", label: "Product Flow" },
  { to: "/circular-economy", label: "Circular Economy" },
  { to: "/household-economy", label: "Household Economy" },
  { to: "/problems-gaps", label: "Problems & Gaps" },
  { to: "/recommendations", label: "Recommendations" },
  { to: "/dashboard", label: "Data Dashboard" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-[var(--transition-smooth)]",
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft border-b border-border"
          : "bg-background/80 backdrop-blur-sm"
      )}
    >
      <div className="container-page flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-gradient-earth flex items-center justify-center shadow-soft group-hover:scale-105 transition-transform">
            <Leaf className="w-5 h-5 text-primary-foreground" strokeWidth={2.4} />
          </div>
          <div className="leading-tight">
            <div className="font-serif font-bold text-primary text-lg">FES</div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground -mt-0.5 hidden sm:block">
              Haat Bazar Study
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden xl:flex items-center gap-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  isActive
                    ? "text-primary bg-primary/10"
                    : "text-foreground/75 hover:text-primary hover:bg-muted"
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="xl:hidden p-2 rounded-md hover:bg-muted text-foreground"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="xl:hidden border-t border-border bg-background animate-fade-in">
          <div className="container-page py-3 grid gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "px-3 py-2.5 rounded-md text-sm font-medium",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-muted"
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
