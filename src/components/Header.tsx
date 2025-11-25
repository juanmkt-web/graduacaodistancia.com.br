import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logoFasul from "@/assets/fasul_azul.png";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
      setIsMobileMenuOpen(false);
    }
  };
  return <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "h-16 bg-header-bg shadow-medium" : "h-24 bg-header-bg"}`}>
        <nav className="container mx-auto px-4 h-full flex items-center justify-between">
          <div className="flex items-center">
            <img alt="FASUL Educacional EAD - Logo" className="h-auto max-h-12" src="/lovable-uploads/b780d81d-322f-4f5a-a11c-2acbed096d82.png" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("cursos")} className="relative text-header-foreground hover:text-accent transition-colors font-medium after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-accent after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
              Cursos
            </button>
            <button onClick={() => scrollToSection("como-funciona")} className="relative text-header-foreground hover:text-accent transition-colors font-medium after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-accent after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
              Como Funciona
            </button>
            <button onClick={() => scrollToSection("depoimentos")} className="relative text-header-foreground hover:text-accent transition-colors font-medium after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-accent after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
              Depoimentos
            </button>
            <button onClick={() => scrollToSection("faq")} className="relative text-header-foreground hover:text-accent transition-colors font-medium after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-accent after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
              FAQ
            </button>
          </div>

          <div className="flex items-center gap-4">
            <Button onClick={() => scrollToSection("oferta")} className="hidden md:flex bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-6 shadow-accent transition-all hover:scale-105">
              Garantir minha bolsa
            </Button>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-header-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && <div className="fixed inset-0 z-40 bg-header-bg pt-24 md:hidden">
          <div className="container mx-auto px-4 flex flex-col gap-4">
            <button onClick={() => scrollToSection("cursos")} className="text-left text-lg font-medium py-3 border-b border-header-foreground/20 text-header-foreground">
              Cursos
            </button>
            <button onClick={() => scrollToSection("como-funciona")} className="text-left text-lg font-medium py-3 border-b border-header-foreground/20 text-header-foreground">
              Como Funciona
            </button>
            <button onClick={() => scrollToSection("depoimentos")} className="text-left text-lg font-medium py-3 border-b border-header-foreground/20 text-header-foreground">
              Depoimentos
            </button>
            <button onClick={() => scrollToSection("faq")} className="text-left text-lg font-medium py-3 border-b border-header-foreground/20 text-header-foreground">
              FAQ
            </button>
          </div>
        </div>}
    </>;
};
export default Header;