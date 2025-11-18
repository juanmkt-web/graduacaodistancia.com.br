import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "O diploma da FASUL EAD tem validade nacional?",
      answer:
        "Sim. A FASUL possui nota 5 no MEC; o diploma é registrado e válido em todo o Brasil, tendo o mesmo valor de um diploma presencial.",
    },
    {
      question: "Como funcionam as bolsas e financiamentos (PROUNI/FIES)?",
      answer:
        "Oferecemos diversas opções de financiamento: PROUNI (bolsas do governo), FIES (financiamento estudantil) e parcelamento direto pela FASUL. Nossa equipe está pronta para orientar você sobre a melhor opção para seu caso.",
    },
    {
      question: "Quando recebo os certificados semestrais?",
      answer:
        "Ao final de cada semestre você pode solicitar o certificado intermediário para incluir no seu currículo. Isso permite que você comece a usar sua formação no mercado de trabalho antes mesmo de concluir o curso.",
    },
    {
      question: "Posso fazer estágio enquanto curso?",
      answer:
        "Sim — temos apoio do nosso núcleo de estágios e parcerias com empresas em todo o Brasil. Oferecemos orientação e encaminhamento para vagas de estágio durante todo o seu curso.",
    },
    {
      question: "Os cursos EAD têm a mesma qualidade que os presenciais?",
      answer:
        "Sim! A FASUL possui nota 5 no MEC, a nota máxima de qualidade. Nossos cursos EAD seguem as mesmas diretrizes e exigências dos cursos presenciais, com professores qualificados e material didático de excelência.",
    },
    {
      question: "Como funcionam as Pós-Graduações?",
      answer:
        "Ao concluir a sua graduação, você ganha 2 Pós-Graduações gratuitas para dar continuidade nos seus estudos e na sua carreira",
    },
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Perguntas Frequentes sobre a Graduação EAD na FASUL
        </h2>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
      </div>
    </section>
  );
};

export default FAQSection;
