import { Facebook, Instagram, Linkedin } from "lucide-react";
import logoFasul from "@/assets/logo-fasul.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-8 mb-8">
          {/* Logo */}
          <img 
            src={logoFasul} 
            alt="FASUL" 
            className="h-16 object-contain"
          />
          
          {/* Social Media */}
          <div className="flex gap-4">
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors" 
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors" 
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors" 
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 text-center text-sm text-primary-foreground/80">
          <p>
            © 2025 FASUL. Todos os direitos reservados. | Nota 5 no MEC - Reconhecimento oficial
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;