import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center font-bold text-primary-foreground text-xl">
              N
            </div>
            <div>
              <h1 className="text-lg font-semibold">NDWALANE MEDIA</h1>
              <p className="text-xs text-muted-foreground">Photographer • Visual Storyteller</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#portfolio" className="nav-link">Portfolio</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#contact" className="nav-link">Contact</a>
            <Button asChild className="btn-hero btn-primary">
              <a href="#contact">Book Us Now</a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col gap-4">
              <a href="#portfolio" className="nav-link text-base">Portfolio</a>
              <a href="#about" className="nav-link text-base">About</a>
              <a href="#contact" className="nav-link text-base">Contact</a>
              <Button asChild className="btn-hero btn-primary w-fit">
                <a href="#contact">Book Us Now</a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;