"use client";

import { STATISTICS } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "@/lib/motion.tsx";
import { 
  Users, 
  CreditCard, 
  Globe, 
  ThumbsUp 
} from "lucide-react";

const iconMap = {
  users: Users,
  "credit-card": CreditCard,
  globe: Globe,
  "thumbs-up": ThumbsUp,
};

export function StatisticsSection() {
  return (
    <section className="w-full py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {STATISTICS.map((stat, index) => {
          const IconComponent = iconMap[stat.icon as keyof typeof iconMap];
          
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="h-full card-hover border-t-4 border-t-primary">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-2">
                    <div className="rounded-full bg-primary/10 p-3 mb-2">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <p className="text-3xl font-bold">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}