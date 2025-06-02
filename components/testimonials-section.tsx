"use client";

import Image from "next/image";
import { TESTIMONIALS } from "@/lib/constants";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "@/lib/motion.tsx";
import { 
  Quote, 
  Star 
} from "lucide-react";

export function TestimonialsSection() {
  return (
    <section className="w-full">
      <div className="flex flex-col items-center text-center mb-12">
        <Badge variant="outline" className="mb-3">
          Testimonials
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          What Our Customers Say
        </h2>
        <p className="text-muted-foreground max-w-2xl">
          Hear from our satisfied customers about their experiences with our prepaid cards.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Card className="h-full card-hover">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <Quote className="h-6 w-6 text-primary" />
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 text-primary"
                        fill="currentColor"
                      />
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="italic">{testimonial.content}</p>
              </CardContent>
              <CardFooter>
                <div className="flex items-center gap-3">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}