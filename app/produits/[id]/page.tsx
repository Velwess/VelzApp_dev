"use client"

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, ShoppingBag, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

const products = [
  {
    id: 1,
    name: "Soin anti âge Paula Choice",
    category: "Soins",
    /*price: 24.99,*/
    reduction: 15,
    image: "https://media.paulaschoice-eu.com/image/upload/f_auto,q_auto,dpr_auto/products/images/redesign/77051-Redesign-2?_i=AG",
    description: "Une crème hydratante 100% naturelle qui nourrit votre peau en profondeur. Enrichie en huiles essentielles et en vitamines.",
    details: [
      "-15 % sur les formules anti-âge",
"Carnet ou soin format voyage offert dès 50€",
"Trousse de toilette ou soin format voyage offert dès 75€ "
    ]
  },
  {
    id: 2,
    name: "Shampooing Naturel",
    category: "Hygiène",
    price: 18.99,
    reduction: 20,
    image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&q=80&w=500",
    description: "Un shampooing doux pour tous types de cheveux. Sa formule naturelle respecte votre cuir chevelu tout en apportant brillance et vitalité.",
    details: [
      "Pour tous types de cheveux",
      "pH neutre",
      "Sans sulfates",
      "Vegan"
    ]
  },
  {
    id: 3,
    name: "Sérum Visage",
    category: "Soins",
    price: 34.99,
    reduction: 25,
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&q=80&w=500",
    description: "Un sérum concentré qui combat les signes de l'âge et illumine votre teint. Enrichi en acide hyaluronique et en vitamine C.",
    details: [
      "Anti-âge",
      "Hydratant",
      "Non gras",
      "Pour tous types de peau"
    ]
  },
];

export default function ProductDetail() {
  const params = useParams();
  const product = products.find(p => p.id === parseInt(params.id as string));

  if (!product) {
    return <div>Produit non trouvé</div>;
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto">
        <Link href="/produits">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour aux produits
          </Button>
        </Link>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full rounded-lg object-cover"
            />
            {/*<div className="absolute top-4 right-4 bg-destructive text-destructive-foreground px-3 py-1 rounded-md text-lg font-bold">
              -{product.reduction}%
            </div>*/}
          </div>
          
          <div>
            <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
            <p className="text-muted-foreground mb-4">{product.category}</p>
            <div className="mb-6">
               <span className="text-3xl font-bold">
  {(product.price * (1 - product.reduction / 100)).toFixed(2)}€
</span> 
              <span className="ml-2 text-xl line-through text-muted-foreground">
                {product.price}€
              </span>
            </div>
            
            <p className="text-lg mb-6">{product.description}</p>
            
            <Card className="mb-6 p-4">
              <h3 className="font-semibold mb-2">Caractéristiques:</h3>
              <ul className="list-disc list-inside space-y-1">
                {product.details.map((detail, index) => (
                  <li key={index} className="text-muted-foreground">{detail}</li>
                ))}
              </ul>
            </Card>
            
            <div className="flex gap-4">
              <Button size="lg" className="flex-1">
                <ShoppingBag className="mr-2 h-4 w-4" />
                Ajouter au panier
              </Button>
              <Button variant="outline" size="lg">
                <Heart className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}