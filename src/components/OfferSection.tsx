import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Clock, Sparkles, Gift, Award, Zap } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

// Form validation schema with proper security constraints
const formSchema = z.object({
  name: z.string().trim().min(2, "Nome deve ter pelo menos 2 caracteres").max(100, "Nome deve ter no máximo 100 caracteres"),
  email: z.string().trim().email("Email inválido").max(255, "Email deve ter no máximo 255 caracteres"),
  phone: z.string().trim().regex(/^[\d\s()+-]+$/, "Telefone deve conter apenas números e símbolos válidos").min(10, "Telefone deve ter pelo menos 10 dígitos").max(20, "Telefone deve ter no máximo 20 caracteres"),
  course: z.string().min(1, "Selecione um curso"),
  consent: z.boolean().refine(val => val === true, "Você deve aceitar receber contato")
});
const OfferSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    consent: false
  });
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let {
          hours,
          minutes,
          seconds
        } = prev;
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }
        return {
          hours,
          minutes,
          seconds
        };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Validate form data using zod schema
      const validatedData = formSchema.parse(formData);

      // If validation passes, show success message
      toast.success("Inscrição realizada! Em breve entraremos em contato via WhatsApp.");

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        course: "",
        consent: false
      });
    } catch (error) {
      // Sanitize error messages - never expose technical details
      if (error instanceof z.ZodError) {
        // Show only the first user-friendly validation error
        const firstError = error.errors[0];
        toast.error(firstError.message);
      } else {
        // Generic error message for any unexpected errors
        toast.error("Ocorreu um erro. Por favor, tente novamente.");
      }
    }
  };
  const isUrgent = timeLeft.hours === 0 && timeLeft.minutes < 60;
  return <section id="oferta" className="py-16 md:py-24 bg-gradient-hero text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Aproveite a Maior Campanha de Bolsas para sua Graduação a Distância!</h2>
          <p className="text-xl text-white/90">
            Vagas Limitadas • Inscrições Encerram em:
          </p>
        </div>

        {/* Countdown Timer */}
        <div className={`flex justify-center gap-4 mb-12 ${isUrgent ? "animate-pulse" : ""}`}>
          <div className="bg-accent text-accent-foreground rounded-lg p-4 min-w-[80px] text-center py-[16px] px-[16px]">
            <div className="text-3xl md:text-4xl font-bold mx-0 my-0 py-0">
              {String(timeLeft.hours).padStart(2, "0")}
            </div>
            <div className="text-sm">Horas</div>
          </div>
          <div className="bg-accent text-accent-foreground rounded-lg p-4 min-w-[80px] text-center">
            <div className="text-3xl md:text-4xl font-bold">
              {String(timeLeft.minutes).padStart(2, "0")}
            </div>
            <div className="text-sm">Minutos</div>
          </div>
          <div className="bg-accent text-accent-foreground rounded-lg p-4 min-w-[80px] text-center">
            <div className="text-3xl md:text-4xl font-bold">
              {String(timeLeft.seconds).padStart(2, "0")}
            </div>
            <div className="text-sm">Segundos</div>
          </div>
        </div>

        <div className="flex justify-center max-w-4xl mx-auto">
          {/* Benefits Card */}
          <Card className="p-8 bg-white/10 backdrop-blur-md border-white/20 w-full">
            <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
              <Gift className="w-6 h-6 text-accent" />
              Bônus Exclusivos Desta Campanha
            </h3>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Sparkles className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white">+10 Cursos de IA</p>
                  <p className="text-sm text-white/80">
                    Aprenda as principais ferramentas de Inteligência Artificial
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Award className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white">+2 Pós-Graduações grátis</p>
                  <p className="text-sm text-white/80">
                    Continue sua especialização sem custos adicionais
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Zap className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white">
                    Acesso ilimitado ao laboratório de IAs premium
                  </p>
                  <p className="text-sm text-white/80">
                    Ferramentas profissionais à sua disposição
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white">
                    Certificação intermediária por semestre
                  </p>
                  <p className="text-sm text-white/80">
                    Valorize seu currículo desde o primeiro semestre
                  </p>
                </div>
              </div>

              
            </div>

            {/* Price Highlight */}
            <div className="bg-accent text-accent-foreground rounded-lg p-6 text-center mb-8">
              <p className="text-sm mb-2">A partir de</p>
              <div className="text-4xl font-bold mb-1">R$ 89/mês</div>
              <p className="text-lg font-semibold">
                Apenas R$ 3,30 por dia
              </p>
            </div>

            <h3 className="text-xl font-bold mb-4 text-white">
              Bolsas e Financiamentos: PROUNI, FIES, Parcelamento FASUL
            </h3>
            <p className="text-white/90 mb-8">
              Diversas opções de financiamento e bolsas disponíveis. Consulte nossas condições especiais.
            </p>

            <Button size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-lg py-6 h-auto animate-pulse-soft" onClick={() => window.open('https://www.fasuleducacional.edu.br', '_blank')}>
              QUERO MINHA BOLSA
            </Button>
          </Card>
        </div>
      </div>
    </section>;
};
export default OfferSection;