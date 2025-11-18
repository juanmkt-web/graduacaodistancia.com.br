import { Facebook, Instagram, Linkedin } from "lucide-react";
import logoFasul from "@/assets/fasul_branca.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4 mb-4">
          {/* Logo */}
          <img src={logoFasul} alt="FASUL" className="h-16 object-contain" />

          {/* Social Media */}
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/fasuleducacionalead"
              className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/fasulead/"
              className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/school/54152401/"
              className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 text-center text-sm text-primary-foreground/80">
          <p>© 2025 FASUL. Todos os direitos reservados. | Nota 5 no MEC - Reconhecimento oficial</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
