import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CreditCard, Shield, Star } from 'lucide-react';
import { CardsTable } from '@/components/cards-table';

export default function Home() {
  return (
    <div className="min-h-screen bg-muted/40">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Welcome to GoldCard</h1>
          <p className="text-muted-foreground">Choose from our premium selection of prepaid cards</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {[
            { icon: CreditCard, label: "Cards Available", value: "12+" },
            { icon: Shield, label: "Secure Transactions", value: "256-bit" },
            { icon: Star, label: "Customer Rating", value: "4.9/5" }
          ].map((stat, i) => (
            <Card key={i} className="bg-card">
              <CardContent className="flex items-center gap-4 p-6">
                <div className="rounded-full bg-primary/10 p-3">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Cards Table */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">Available Cards</h2>
          <Button variant="outline" className="text-primary">
            Download Price List
          </Button>
        </div>

        <CardsTable />
      </div>
    </div>
  );
}