import { Card } from "@/components/ui/card";
import { Star, Award, ShieldCheck } from "lucide-react";
import mecSeal from "@/assets/seal-mec-5.png";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";
const SocialProofSection = () => {
  const testimonials = [{
    name: "Ana Carolina Silva",
    course: "Administração",
    result: "Consegui vaga em 2 meses",
    text: "A FASUL mudou minha vida! O diploma foi reconhecido pela empresa e hoje sou gerente.",
    image: testimonial1,
    rating: 5
  }, {
    name: "João Pedro Santos",
    course: "Análise de Sistemas",
    result: "Emprego antes de formar",
    text: "Já estava trabalhando na área antes de concluir. O certificado semestral fez toda diferença!",
    image: testimonial2,
    rating: 5
  }, {
    name: "Maria Fernanda Costa",
    course: "Pedagogia",
    result: "Promoção na escola",
    text: "Consegui a promoção que tanto queria. O diploma EAD tem o mesmo valor do presencial!",
    image: testimonial3,
    rating: 5
  }];
  return <section id="depoimentos" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Por Que Escolher a FASUL Educacional? Credibilidade e Nota Máxima Comprovadas.
        </h2>

        {/* MEC Seal Highlight */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16 p-8 bg-gradient-card rounded-2xl shadow-medium">
          <img src={mecSeal} alt="Selo Nota Máxima 5 MEC" className="w-32 h-32 md:w-40 md:h-40 animate-float" />
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-primary mb-2">
              Nota Máxima 5 no MEC
            </h3>
            <p className="text-muted-foreground text-lg">
              Reconhecimento oficial do Ministério da Educação.
              <br />
              Diploma válido em todo o território nacional.
            </p>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Card className="p-6 text-center bg-card border-border">
            <Award className="w-12 h-12 text-accent mx-auto mb-3" />
            <h4 className="font-semibold text-lg mb-2">Nota 5 MEC</h4>
            <p className="text-muted-foreground text-sm">
              Excelência reconhecida
            </p>
          </Card>
          <Card className="p-6 text-center bg-card border-border">
            <ShieldCheck className="w-12 h-12 text-accent mx-auto mb-3" />
            <h4 className="font-semibold text-lg mb-2">Reclame Aqui</h4>
            <p className="text-muted-foreground text-sm">Avaliação Ótima</p>
          </Card>
          <Card className="p-6 text-center bg-card border-border">
            <Star className="w-12 h-12 text-accent mx-auto mb-3" />
            <h4 className="font-semibold text-lg mb-2">4.5 Estrelas</h4>
            <p className="text-muted-foreground text-sm">Google Meu Negócio</p>
          </Card>
        </div>

        {/* Testimonials */}
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">Opinião dos Alunos: Quem fez EAD na FASUL indica.</h3>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => <Card key={index} className="p-6 bg-card border-border hover:shadow-medium transition-all">
              <div className="flex items-center gap-4 mb-4">
                <img src={testimonial.image} alt={`Depoimento - ${testimonial.name}, ex-aluno de ${testimonial.course}`} className="w-16 h-16 rounded-full object-cover" />
                <div>
                  <h4 className="font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.course}
                  </p>
                  <div className="flex gap-1 mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-accent text-accent" />)}
                  </div>
                </div>
              </div>
              <p className="text-sm font-semibold mb-2 text-gray-950">
                {testimonial.result}
              </p>
              <p className="text-muted-foreground italic">
                "{testimonial.text}"
              </p>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default SocialProofSection;