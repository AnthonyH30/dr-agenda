import { PricingCard } from "./pricing-card";

const plans = [
  {
    name: "Starter",
    price: 15,
    period: "month",
    features: [
      "Up to 10,000 data points per month",
      "Email support",
      "Community forum access",
      "Cancel anytime",
    ],
  },
  {
    name: "Pro",
    price: 40,
    period: "quarter",
    featured: true,
    features: [
      "Advanced analytics dashboard",
      "Customizable reports and charts",
      "Real-time data tracking",
      "Integration with third-party tools",
      "Everything in Hobby Plan",
    ],
  },
  {
    name: "Premium",
    price: 120,
    period: "year",
    features: [
      "Unlimited data storage",
      "Customizable dashboards",
      "Advanced data segmentation",
      "Real-time data processing",
      "AI-powered insights and recommendations",
      "Everything in Hobby Plan",
      "Everything in Pro Plan",
    ],
  },
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-black px-4 py-20 text-white">
      <div className="mx-auto max-w-6xl space-y-12">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold">
            Simple pricing for advanced people
          </h1>
          <p className="mx-auto max-w-2xl text-gray-400">
            Our pricing is designed for advanced people who need more features
            and more flexibility.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <PricingCard key={plan.name} {...plan} />
          ))}
        </div>
      </div>
    </div>
  );
}
