"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { NAVBAR_LINKS, SITE_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { 
  CreditCard, 
  Menu, 
  X, 
  User,
  LogIn
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled 
        ? "bg-background/95 backdrop-blur-sm border-b shadow-sm" 
        : "bg-transparent"
    )}>
      <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <CreditCard className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">{SITE_NAME}</span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {NAVBAR_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === link.href ? "text-primary" : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
            <ModeToggle />
            <Button variant="outline" size="sm">
              <LogIn className="mr-2 h-4 w-4" />
              Log In
            </Button>
            <Button size="sm">
              <User className="mr-2 h-4 w-4" />
              Sign Up
            </Button>
          </div>
          
          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center gap-4">
            <ModeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between py-4">
                    <Link href="/" className="flex items-center gap-2">
                      <CreditCard className="h-6 w-6 text-primary" />
                      <span className="font-bold text-xl">{SITE_NAME}</span>
                    </Link>
                    <SheetClose className="rounded-full hover:bg-accent p-2">
                      <X className="h-5 w-5" />
                      <span className="sr-only">Close menu</span>
                    </SheetClose>
                  </div>
                  <nav className="flex flex-col gap-4 py-8">
                    {NAVBAR_LINKS.map((link) => (
                      <SheetClose asChild key={link.href}>
                        <Link 
                          href={link.href}
                          className={cn(
                            "text-lg font-medium hover:text-primary transition-colors",
                            pathname === link.href ? "text-primary" : "text-muted-foreground"
                          )}
                        >
                          {link.label}
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>
                  <div className="mt-auto space-y-4">
                    <Button variant="outline" className="w-full">
                      <LogIn className="mr-2 h-4 w-4" />
                      Log In
                    </Button>
                    <Button className="w-full">
                      <User className="mr-2 h-4 w-4" />
                      Sign Up
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}