"use client";

import { Check } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

interface PricingCardProps {
  name: string;
  price: number;
  period: string;
  features: string[];
  featured?: boolean;
  CTAButtonText: string;
}

export function PricingCard({
  name,
  price,
  period,
  features,
  featured,
  CTAButtonText,
}: PricingCardProps) {
  return (
    <>
      <div className="relative rounded-lg border border-zinc-800 bg-zinc-900 p-6">
        {featured && (
          <div className="absolute -top-2 right-4 rounded-full bg-white px-3 py-1 text-sm font-medium text-black">
            Em Alta
          </div>
        )}
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium text-white">{name}</h3>
            <div className="mt-2 flex items-baseline">
              <span className="text-5xl font-bold tracking-tight text-white">
                R${price}
              </span>
              <span className="ml-1 text-sm font-medium text-zinc-400">
                /{period}
              </span>
            </div>
          </div>
          <Link href={"/subscription"}>
            <Button className="mb-4 w-full bg-blue-600 hover:bg-blue-700">
              {CTAButtonText}
            </Button>
          </Link>
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-zinc-400" />
                <span className="text-sm text-zinc-300">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
