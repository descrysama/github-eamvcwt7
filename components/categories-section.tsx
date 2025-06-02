"use client";

import { CARD_CATEGORIES } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "@/lib/motion.tsx";
import { 
  Briefcase, 
  GraduationCap, 
  Plane, 
  ShoppingBag, 
  Gamepad2,
  Gift
} from "lucide-react";

const iconMap = {
  plane: Plane,
  "shopping-bag": ShoppingBag,
  briefcase: Briefcase,
  "graduation-cap": GraduationCap,
  "gamepad-2": Gamepad2,
  gift: Gift,
};

export function CategoriesSection() {
  return (
    <section className="w-full">
      <div className="flex flex-col items-center text-center mb-12">
        <Badge variant="outline" className="mb-3">
          Card Categories
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Find the Perfect Card
        </h2>
        <p className="text-muted-foreground max-w-2xl">
          Browse our selection of prepaid cards designed for different needs and lifestyles.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {CARD_CATEGORIES.map((category, index) => {
          const IconComponent = iconMap[category.icon as keyof typeof iconMap];
          
          return (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="h-full card-hover text-center cursor-pointer hover:border-primary transition-colors">
                <CardContent className="pt-6 flex flex-col items-center">
                  <div className="rounded-full bg-primary/10 p-4 mb-4">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <p className="font-medium">{category.name}</p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}