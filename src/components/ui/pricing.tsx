import { PricingCard } from "./pricing-card";

const plans = [
  {
    name: "Gratuito",
    price: 0,
    period: "mês",
    features: [
      "Até 50 agendamentos por mês",
      "Confirmações por WhatsApp",
      "Agenda online básica",
      "Cadastro de pacientes",
      "Suporte por email",
    ],
    CTAButtonText: "Teste grátis",
  },
  {
    name: "Essential",
    price: 59,
    period: "mês",
    featured: true,
    features: [
      "Agendamentos ilimitados",
      "Sistema de lembretes automáticos",
      "Histórico completo de pacientes",
      "Relatórios e análises avançadas",
      "Integração com WhatsApp Business",
      "Suporte prioritário 24/7",
      "Personalização da agenda",
      "Multi-usuários",
    ],
    CTAButtonText: "Assinar essential",
  },
];

export default function Pricing() {
  return (
    <div id="planos" className="min-h-screen bg-black px-4 py-20 text-white">
      <div className="mx-auto max-w-6xl space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="text-4xl font-bold">
            Escolha o plano ideal para sua clínica
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Comece gratuitamente e atualize quando precisar. Sem compromisso,
            cancele a qualquer momento.
          </p>
        </div>

        <div className="mx-auto grid max-w-[900px] gap-8 md:grid-cols-2">
          {plans.map((plan) => (
            <PricingCard key={plan.name} {...plan} />
          ))}
        </div>
      </div>
    </div>
  );
}
