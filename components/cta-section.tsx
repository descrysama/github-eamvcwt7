"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CreditCard } from "lucide-react";
import { motion } from "@/lib/motion.tsx";

export function CtaSection() {
  return (
    <section className="w-full py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Card className="overflow-hidden border-none bg-primary/10">
          <CardContent className="p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <CreditCard className="h-6 w-6 text-primary" />
                  <h3 className="text-2xl font-bold">Ready to get started?</h3>
                </div>
                <p className="text-lg mb-8 max-w-md">
                  Join thousands of satisfied customers who use our premium prepaid cards for shopping, travel, and everyday expenses.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="gap-2">
                    Sign Up Now
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="relative h-64 w-full">
                  <div className="absolute -right-10 top-1/2 -translate-y-1/2 -rotate-12 transform bg-primary/90 rounded-2xl shadow-2xl p-8 w-80 h-48 flex items-center justify-center">
                    <span className="text-white text-xl font-bold">Limited Time Offer: No Activation Fee!</span>
                  </div>
                  <div className="absolute -left-4 top-1/2 -translate-y-1/2 rotate-6 transform bg-white rounded-2xl shadow-xl p-8 w-80 h-48 flex items-center justify-center">
                    <span className="text-primary text-xl font-bold">First Month Free!</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}