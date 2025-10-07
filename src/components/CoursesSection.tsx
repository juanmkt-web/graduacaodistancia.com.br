import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock, Award, Sparkles } from "lucide-react";
const CoursesSection = () => {
  const [selectedArea, setSelectedArea] = useState("Todos");
  const areas = ["Todos", "TI", "Gestão", "Educação", "Marketing", "Segurança/Social"];
  const courses = [{
    name: "Administração",
    area: "Gestão",
    duration: "4 anos",
    type: "Bacharelado",
    benefits: ["Estágio orientado", "Certificação intermediária"],
    comingSoon: false
  }, {
    name: "Análise e Desenvolvimento de Sistemas",
    area: "TI",
    duration: "2 anos",
    type: "Tecnólogo",
    benefits: ["Estágio orientado", "Banco de vagas"],
    comingSoon: false
  }, {
    name: "Gestão de Recursos Humanos",
    area: "Gestão",
    duration: "2 anos",
    type: "Tecnólogo",
    benefits: ["Certificação intermediária", "Banco de vagas"],
    comingSoon: false
  }, {
    name: "Pedagogia",
    area: "Educação",
    duration: "4 anos",
    type: "Licenciatura",
    benefits: ["Estágio supervisionado", "Certificação intermediária"],
    comingSoon: true
  }, {
    name: "Gestão da Tecnologia da Informação",
    area: "TI",
    duration: "2 anos",
    type: "Tecnólogo",
    benefits: ["Certificação intermediária", "Banco de vagas"],
    comingSoon: false
  }, {
    name: "Negócios Imobiliários",
    area: "Gestão",
    duration: "2 anos",
    type: "Tecnólogo",
    benefits: ["Estágio orientado", "Certificação intermediária"],
    comingSoon: false
  }, {
    name: "Logística",
    area: "Gestão",
    duration: "2 anos",
    type: "Tecnólogo",
    benefits: ["Estágio orientado", "Banco de vagas"],
    comingSoon: false
  }, {
    name: "Processos Gerenciais",
    area: "Gestão",
    duration: "2 anos",
    type: "Tecnólogo",
    benefits: ["Certificação intermediária", "Banco de vagas"],
    comingSoon: false
  }, {
    name: "Gestão de Marketing",
    area: "Gestão",
    duration: "2 anos",
    type: "Tecnólogo",
    benefits: ["Estágio orientado", "Certificação intermediária"],
    comingSoon: false
  }, {
    name: "Ciências Contábeis",
    area: "Gestão",
    duration: "4 anos",
    type: "Bacharelado",
    benefits: ["Estágio orientado", "Certificação intermediária"],
    comingSoon: false
  }, {
    name: "Gestão Comercial",
    area: "Gestão",
    duration: "2 anos",
    type: "Tecnólogo",
    benefits: ["Banco de vagas", "Certificação intermediária"],
    comingSoon: false
  }, {
    name: "Segurança Pública",
    area: "Segurança/Social",
    duration: "2 anos",
    type: "Tecnólogo",
    benefits: ["Certificação intermediária", "Estágio orientado"],
    comingSoon: false
  }, {
    name: "Gestão Pública",
    area: "Segurança/Social",
    duration: "2 anos",
    type: "Tecnólogo",
    benefits: ["Certificação intermediária", "Banco de vagas"],
    comingSoon: false
  }, {
    name: "Serviço Social",
    area: "Segurança/Social",
    duration: "4 anos",
    type: "Bacharelado",
    benefits: ["Estágio supervisionado", "Certificação intermediária"],
    comingSoon: false
  }, {
    name: "Marketing Digital",
    area: "Marketing",
    duration: "2 anos",
    type: "Tecnólogo",
    benefits: ["Certificação intermediária", "Banco de vagas"],
    comingSoon: true
  }, {
    name: "Gestão Financeira",
    area: "Gestão",
    duration: "2 anos",
    type: "Tecnólogo",
    benefits: ["Certificação intermediária", "Banco de vagas"],
    comingSoon: false
  }];
  const filteredCourses = selectedArea === "Todos" ? courses : courses.filter(course => course.area === selectedArea);
  const scrollToOffer = () => {
    const element = document.getElementById("oferta");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section id="cursos" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          Escolha seu Futuro: Cursos de Graduação EAD Mais Procurados na FASUL
        </h2>

        <div className="text-center mb-8">
          <h3 className="text-xl font-semibold text-primary mb-2">
            Formações Rápidas: Tecnólogos a partir de 2 Anos
          </h3>
          <p className="text-muted-foreground">Certificados Semestrais: Um diferencial da FASUL EAD para seu currículo</p>
        </div>

        {/* Area Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {areas.map(area => <Button key={area} variant={selectedArea === area ? "default" : "outline"} onClick={() => setSelectedArea(area)} className={selectedArea === area ? "bg-primary text-primary-foreground" : "hover:bg-primary/10"}>
              {area}
            </Button>)}
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course, index) => <Card key={index} className="p-6 bg-card hover:shadow-medium transition-all duration-300 hover:-translate-y-2 flex flex-col border-border">
              <div className="flex-1 space-y-4">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-xl font-semibold text-foreground">
                    {course.name}
                  </h3>
                  <div className="flex flex-col gap-2 shrink-0">
                    <Badge className="bg-accent text-accent-foreground">
                      {course.type}
                    </Badge>
                    {course.comingSoon && <Badge className="bg-primary text-primary-foreground flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        Em breve
                      </Badge>}
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="w-4 h-4" />
                    <span>EAD</span>
                  </div>
                </div>

                <div className="space-y-2">
                  {course.benefits.map((benefit, i) => <div key={i} className="flex items-center gap-2 text-sm">
                      <Award className="w-4 h-4 text-accent" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>)}
                </div>

                <Badge variant="outline" className="border-accent text-accent w-full justify-center bg-[#1e1e1e]">
                  Certificação intermediária disponível
                </Badge>
              </div>

              <div className="mt-6 flex gap-2">
                
                <Button onClick={scrollToOffer} size="sm" className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90">
                  Quero bolsa
                </Button>
              </div>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default CoursesSection;