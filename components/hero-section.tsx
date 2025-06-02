"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "@/lib/motion.tsx";
import { ArrowRight, CreditCard, Shield, Star } from "lucide-react";
import { SITE_NAME, SITE_DESCRIPTION } from "@/lib/constants";

export function HeroSection() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.pexels.com/photos/6347720/pexels-photo-6347720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Hero background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/20">
              <Star className="h-4 w-4 text-primary" fill="currentColor" />
              <span className="text-sm font-medium">Premium Prepaid Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              The <span className="text-primary">Premium</span> Prepaid Card Experience
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 max-w-xl">
              {SITE_DESCRIPTION}. Secure, convenient, and accepted worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="gap-2 text-base">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2 text-base bg-white/10 border-white/20 hover:bg-white/20">
                View Plans
              </Button>
            </div>
            
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8">
              {[
                { icon: CreditCard, text: "No Credit Check" },
                { icon: Shield, text: "Secure & Protected" },
                { icon: Star, text: "Premium Benefits" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="rounded-full bg-primary/20 p-1.5">
                    <item.icon className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative h-[500px] w-full">
              <div className="absolute top-10 right-0 card-shine">
                <Image
                  src="https://images.pexels.com/photos/4386373/pexels-photo-4386373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Gold prepaid card"
                  width={400}
                  height={250}
                  className="rounded-xl shadow-2xl"
                />
              </div>
              <div className="absolute bottom-0 left-20 card-shine">
                <Image
                  src="https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Gold prepaid card with phone"
                  width={350}
                  height={220}
                  className="rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}