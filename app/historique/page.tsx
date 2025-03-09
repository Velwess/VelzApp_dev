"use client"

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Calendar, Package, Star } from "lucide-react";
import Link from "next/link";

export default function History() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto">
        <Link href="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour à l'accueil
          </Button>
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Historique et Favoris</h1>
          <p className="text-xl text-muted-foreground">
            Suivez vos achats et gérez vos produits préférés
          </p>
        </div>

        <div className="grid gap-8">
          <section>
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <Package className="mr-2 h-6 w-6" />
              Derniers Achats
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  id: 1,
                  name: "Crème Hydratante Bio",
                  date: "15 mars 2024",
                  price: "21.24€",
                  reduction: "15%"
                },
                {
                  id: 2,
                  name: "Shampooing Naturel",
                  date: "10 mars 2024",
                  price: "15.19€",
                  reduction: "20%"
                },
                {
                  id: 3,
                  name: "Sérum Visage",
                  date: "5 mars 2024",
                  price: "26.24€",
                  reduction: "25%"
                }
              ].map((purchase) => (
                <Card key={purchase.id} className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold">{purchase.name}</h3>
                    <span className="text-destructive font-bold">-{purchase.reduction}</span>
                  </div>
                  <p className="text-sm text-muted-foreground flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {purchase.date}
                  </p>
                  <p className="mt-2 font-bold">{purchase.price}</p>
                  <Link href={`/produits/${purchase.id}`} className="block mt-4">
                    <Button variant="outline" className="w-full">
                      Racheter
                    </Button>
                  </Link>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <Star className="mr-2 h-6 w-6" />
              Produits Favoris
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  id: 1,
                  name: "Crème Hydratante Bio",
                  price: "24.99€",
                  reduction: "15%"
                },
                {
                  id: 2,
                  name: "Shampooing Naturel",
                  price: "18.99€",
                  reduction: "20%"
                }
              ].map((favorite) => (
                <Card key={favorite.id} className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold">{favorite.name}</h3>
                    <span className="text-destructive font-bold">-{favorite.reduction}</span>
                  </div>
                  <p className="mt-2 font-bold">{favorite.price}</p>
                  <div className="flex gap-2 mt-4">
                    <Link href={`/produits/${favorite.id}`} className="flex-1">
                      <Button className="w-full">
                        Voir détails
                      </Button>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}