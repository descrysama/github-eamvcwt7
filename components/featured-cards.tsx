"use client";

import { useState } from "react";
import Image from "next/image";
import { FEATURED_CARDS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, CreditCard, Plus, ShoppingCart } from "lucide-react";
import { motion } from "@/lib/motion.tsx";

export function FeaturedCards() {
  return (
    <section className="w-full">
      <div className="flex flex-col items-center text-center mb-12">
        <Badge variant="outline" className="mb-3">
          Featured Cards
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Premium Prepaid Cards
        </h2>
        <p className="text-muted-foreground max-w-2xl">
          Choose from our selection of premium prepaid cards designed to fit your lifestyle and financial needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {FEATURED_CARDS.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Card className="overflow-hidden h-full card-hover">
              <div className="relative h-48 w-full">
                <Image 
                  src={card.image} 
                  alt={card.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <Badge className="bg-primary/90 hover:bg-primary text-primary-foreground">
                    Popular
                  </Badge>
                </div>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-primary" />
                  {card.name}
                </CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </CardHeader>
              <CardContent className="pb-4">
                <p className="font-semibold text-xl mb-4">
                  ${card.price}
                  <span className="text-sm text-muted-foreground font-normal"> one-time fee</span>
                </p>
                <ul className="space-y-2">
                  {card.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full gap-2">
                  <ShoppingCart className="h-4 w-4" />
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}