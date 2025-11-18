import { Button } from "@/components/ui/button";
import { CheckCircle2, Award, MapPin, GraduationCap, Star, ShieldCheck } from "lucide-react";
import heroImage from "@/assets/hero-students.jpg";
import mecSeal from "@/assets/seal-mec-5.png";
const HeroSection = () => {
  const scrollToOffer = () => {
    const element = document.getElementById("oferta");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <section className="relative min-h-screen pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-gradient-hero">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Alunos felizes estudando a Graduação a Distância EAD da FASUL, faculdade nota 5 no MEC"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-hero/80" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Conteúdo centralizado */}
          <div className="text-white space-y-8 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight animate-reveal-left">
              <span className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-lg mb-4">URGENTE</span>
              <br />
              Sua Graduação EAD com mensalidades a partir de <span className="text-accent">R$ 89,00 por Mês</span>
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-white/90 animate-fade-in max-w-3xl mx-auto">
              <strong>Ganhe 3 Pós-Graduações grátis</strong> (2 para você e 1 para presentear um amigo ou familiar).
              tudo isso com mensalidades fixas + Certificação emitida por faculdade.
            </p>

            {/* Bullets - Grid de 3 colunas em desktop */}
            <div className="grid md:grid-cols-3 gap-6 animate-fade-in max-w-4xl mx-auto pt-4">
              <div className="flex flex-col items-center gap-3 bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                <Award className="w-8 h-8 text-accent flex-shrink-0" />
                <span className="text-base font-medium">Nota Máxima 5 no MEC</span>
              </div>
              <div className="flex flex-col items-center gap-3 bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                <CheckCircle2 className="w-8 h-8 text-accent flex-shrink-0" />
                <span className="text-base font-medium">Mensalidade fixa até o final do curso</span>
              </div>
              <div className="flex flex-col items-center gap-3 bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                <MapPin className="w-8 h-8 text-accent flex-shrink-0" />
                <span className="text-base font-medium">27 anos de tradição e mais de 300 polos</span>
              </div>
            </div>

            {/* CTA */}
            <div className="animate-bounce-in pt-6">
              <Button
                onClick={scrollToOffer}
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 text-base md:text-lg font-bold px-6 md:px-12 py-6 md:py-7 h-auto shadow-accent hover:shadow-accent hover:scale-105 transition-all animate-pulse-soft"
              >
                GARANTIR MINHA BOLSA AGORA!
              </Button>
              <p className="text-sm text-white/80 mt-4">
                Vagas LIMITADAS • Aceitamos PROUNI e FIES • Parcelamento FASUL
              </p>
            </div>
          </div>
        </div>

        {/* Trust Badges Row */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center">
            <div className="flex flex-col items-center gap-2 text-white/90 animate-fade-in animate-stagger-1">
              <Award className="w-8 h-8 text-accent" />
              <span className="text-sm font-medium text-center">Nota 5 MEC</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-white/90 animate-fade-in animate-stagger-2">
              <GraduationCap className="w-8 h-8 text-accent" />
              <span className="text-sm font-medium text-center">25 anos</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-white/90 animate-fade-in animate-stagger-3">
              <MapPin className="w-8 h-8 text-accent" />
              <span className="text-sm font-medium text-center">Mais de 300 polos</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-white/90 animate-fade-in animate-stagger-4">
              <GraduationCap className="w-8 h-8 text-accent" />
              <span className="text-sm font-medium text-center">Mais de 2000 cursos</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-white/90 animate-fade-in animate-stagger-5">
              <ShieldCheck className="w-8 h-8 text-accent" />
              <span className="text-sm font-medium text-center">Reclame Aqui Ótimo</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-white/90 animate-fade-in animate-stagger-6">
              <Star className="w-8 h-8 text-accent" />
              <span className="text-sm font-medium text-center">4,5 estrelas GME</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
