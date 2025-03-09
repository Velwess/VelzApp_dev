'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Heart, ShoppingBag, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const products = [
  {
    id: 1,
    name: 'Perfecteur de peau non-teinté',
    category: 'Beauté',
    price: 22.90,
    reduction: 0,
    image:
      'https://fr.erborian.com/dw/image/v2/BCDQ_PRD/on/demandware.static/-/Sites-erb_master/default/dw183289d3/FR/6AA10368.png?sw=500&sh=500',
    url: 'https://fr.erborian.com/skin-hero---perfecteur-de-peau-non-teinte-6AA10368.html?utm_source=google&utm_medium=paid&utm_campaign=smart_shopping&utm_term=all_products&gad_source=1&gclid=Cj0KCQiAlbW-BhCMARIsADnwaspKKFYfCtzhGcy2NKlzKFggtPq0Fg-EQykXlC6MOmpwhZuGnCX6bY8aAt-QEALw_wcB',
  },
  {
    id: 2,
    name: 'Anti blemish solution',
    category: 'Soin',
    price: 15,
    reduction: 0,
    image:
      'https://sdcdn.io/cl/cl_sku_6K0G01_3000x3000_0.jpg?height=700px&width=700px',
    url: 'https://www.sephora.fr/p/anti-blemish-solutions%E2%84%A2---lotion-clarifiante-anti-imperfections-P10025310.html',
  },
  {
    id: 3,
    name: 'Gamme anti âge Paula Choice',
    category: 'Soins',
    price: 15,
    reduction: 0,
    image:
      'https://media.paulaschoice-eu.com/image/upload/f_auto,q_auto,dpr_auto/products/images/redesign/77051-Redesign-2?_i=AG',
    url: 'https://www.paulaschoice.fr/fr/anti-age',
  },
];

export default function Products() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="fixed top-4 left-4 z-50">
        <Link href="/">
          <Button
            variant="ghost"
            className="bg-white/80 backdrop-blur-sm shadow-md hover:bg-white"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour à l'accueil
          </Button>
        </Link>
      </div>

      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Nos Produits</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden">
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-full transition-transform hover:scale-105"
                />
                <div className="absolute top-2 right-2 bg-destructive text-destructive-foreground px-2 py-1 rounded-md">
                  -{product.reduction}%
                </div>
              </div>
              <CardHeader>
                <CardTitle>{product.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{product.category}</p>
                <p className="text-lg font-bold mt-2">
                  {(product.price * (1 - product.reduction / 100)).toFixed(2)}€{' '}
                  <span className="text-sm line-through text-muted-foreground">
                    {product.price}€
                  </span>
                </p>
              </CardContent>
              <CardFooter className="flex gap-2">
                <a href={product.url} target="_blank" className="flex-1">
                  <Button className="w-full">Voir détails</Button>
                </a>
                <Button variant="outline" size="icon">
                  <Heart className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
