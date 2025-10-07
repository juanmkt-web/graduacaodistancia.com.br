import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
const Footer = () => {
  return <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 mb-8 max-w-4xl py-[8px] mx-[240px] px-[77px]">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Central de Atendimento</p>
                  <p className="text-sm text-primary-foreground/80">0800 123 4567</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">E-mail</p>
                  <p className="text-sm text-primary-foreground/80">
                    contato@fasul.edu.br
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Sede</p>
                  <p className="text-sm text-primary-foreground/80">
                    São Paulo, SP
                    <br />
                    Mais de 300 polos em todo Brasil
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social & Links */}
          <div className="mx-[95px]">
            <h3 className="text-xl font-bold mb-4">Redes Sociais</h3>
            <div className="flex gap-4 mb-6">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <div className="space-y-2 text-sm">
              <a href="#" className="block hover:text-accent transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="block hover:text-accent transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="block hover:text-accent transition-colors">
                Trabalhe Conosco
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 text-center text-sm text-primary-foreground/80">
          
          <p>
            © 2025 FASUL. Todos os direitos reservados. | Nota 5 no MEC - Reconhecimento oficial
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;