"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CARD_DATA } from "@/lib/constants";
import { motion } from "@/lib/motion.tsx";
import { Search, SlidersHorizontal } from "lucide-react";

export function CardsTable() {
  const [filters, setFilters] = useState({
    cardBin: "",
    whiteCardType: "all",
    cardModel: "",
    cardNetwork: "all",
    expirationDate: "all",
    price: "",
    country: "all"
  });

  const uniqueValues = {
    whiteCardType: [...new Set(CARD_DATA.map(card => card.whiteCardType))],
    cardNetwork: [...new Set(CARD_DATA.map(card => card.cardNetwork))],
    expirationDate: [...new Set(CARD_DATA.map(card => card.expirationDate))],
    country: [...new Set(CARD_DATA.map(card => card.country))]
  };

  const filteredData = CARD_DATA.filter(card => {
    return (
      card.cardBin.toLowerCase().includes(filters.cardBin.toLowerCase()) &&
      (filters.whiteCardType === "all" || card.whiteCardType === filters.whiteCardType) &&
      card.cardModel.toLowerCase().includes(filters.cardModel.toLowerCase()) &&
      (filters.cardNetwork === "all" || card.cardNetwork === filters.cardNetwork) &&
      (filters.expirationDate === "all" || card.expirationDate === filters.expirationDate) &&
      (filters.price === "" || card.price.toString().includes(filters.price)) &&
      (filters.country === "all" || card.country === filters.country)
    );
  });

  return (
    <div className="space-y-4">
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <SlidersHorizontal className="h-5 w-5 text-muted-foreground" />
            <h3 className="font-semibold">Filter Cards</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Card Bin</label>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  className="pl-8"
                  placeholder="Search bin..."
                  value={filters.cardBin}
                  onChange={(e) => setFilters({ ...filters, cardBin: e.target.value })}
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">White Card Type</label>
              <Select
                value={filters.whiteCardType}
                onValueChange={(value) => setFilters({ ...filters, whiteCardType: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="All types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All types</SelectItem>
                  {uniqueValues.whiteCardType.map((type) => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Card Model</label>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  className="pl-8"
                  placeholder="Search model..."
                  value={filters.cardModel}
                  onChange={(e) => setFilters({ ...filters, cardModel: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Card Network</label>
              <Select
                value={filters.cardNetwork}
                onValueChange={(value) => setFilters({ ...filters, cardNetwork: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="All networks" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All networks</SelectItem>
                  {uniqueValues.cardNetwork.map((network) => (
                    <SelectItem key={network} value={network}>{network}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Expiration Date</label>
              <Select
                value={filters.expirationDate}
                onValueChange={(value) => setFilters({ ...filters, expirationDate: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="All dates" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All dates</SelectItem>
                  {uniqueValues.expirationDate.map((date) => (
                    <SelectItem key={date} value={date}>{date}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Price</label>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  className="pl-8"
                  placeholder="Search price..."
                  value={filters.price}
                  onChange={(e) => setFilters({ ...filters, price: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Country</label>
              <Select
                value={filters.country}
                onValueChange={(value) => setFilters({ ...filters, country: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="All countries" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All countries</SelectItem>
                  {uniqueValues.country.map((country) => (
                    <SelectItem key={country} value={country}>{country}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Card Bin</TableHead>
              <TableHead>White Card Type</TableHead>
              <TableHead>Card Model</TableHead>
              <TableHead>Card Network</TableHead>
              <TableHead>Expiration Date</TableHead>
              <TableHead>Country</TableHead>
              <TableHead>Price</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.map((card) => (
              <TableRow key={card.cardBin} className="hover:bg-muted/50">
                <TableCell className="font-mono">{card.cardBin}</TableCell>
                <TableCell>
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                    {card.whiteCardType}
                  </Badge>
                </TableCell>
                <TableCell>{card.cardModel}</TableCell>
                <TableCell>
                  <Badge variant="secondary">
                    {card.cardNetwork}
                  </Badge>
                </TableCell>
                <TableCell>{card.expirationDate}</TableCell>
                <TableCell>
                  <Badge variant="outline">
                    {card.country}
                  </Badge>
                </TableCell>
                <TableCell className="font-medium">${card.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}