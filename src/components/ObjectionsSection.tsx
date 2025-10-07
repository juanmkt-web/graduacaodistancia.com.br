import { Award, DollarSign, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";

const ObjectionsSection = () => {
  const objections = [
    {
      icon: Award,
      title: "Validade (Diploma)",
      description:
        "Seu diploma é igual ao presencial: Reconhecimento MEC Nota 5 — válido em todo o Brasil.",
    },
    {
      icon: DollarSign,
      title: "Custo (Mensalidade)",
      description:
        "Mensalidade fixa, transparência total — parcelas a partir de R$ 89/mês + opções PROUNI/FIES.",
    },
    {
      icon: Clock,
      title: "Velocidade (Formação)",
      description:
        "Formação rápida: certificados semestrais e tecnólogos a partir de 2 anos para entrar no mercado.",
    },
  ];

  return (
    <section id="como-funciona" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          O Diploma da sua Graduação a Distância é Válido e Reconhecido pelo MEC?
        </h2>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {objections.map((objection, index) => (
            <Card
              key={index}
              className="p-6 bg-card hover:shadow-medium transition-all duration-300 hover:-translate-y-2 border-border"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center">
                  <objection.icon className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {objection.title}
                </h3>
                <p className="text-muted-foreground">{objection.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ObjectionsSection;
