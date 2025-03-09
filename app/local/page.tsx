"use client"

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, MapPin, Navigation, Star, Clock, Tag, Phone, Globe, Mail, Calendar, Users, Percent } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Local() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "Tout voir" },
    { id: "beauty", name: "Beauté & Bien-être" },
    { id: "wellness", name: "Bien-être" },
    { id: "food", name: "Alimentation" },
    { id: "sport", name: "Sport" }
  ];

  const stores = [
    {
      id: 1,
      name: "Espace Zen",
      category: "wellness",
      distance: "0.5 km",
      rating: 4.8,
      reviews: 124,
      address: "15 rue du Commerce, 75015 Paris",
      phone: "01 23 45 67 89",
      website: "www.espacezen.fr",
      email: "contact@espacezen.fr",
      hours: "Lun-Sam: 9h-19h",
      description: "Centre de bien-être holistique proposant massages, méditation et soins énergétiques. Un havre de paix pour votre corps et votre esprit.",
      offers: [
        { title: "20% sur les massages", validUntil: "31 mai 2024" },
        { title: "Séance découverte -50%", validUntil: "30 avril 2024" },
        { title: "-15% pour les étudiants", validUntil: "Permanent" }
      ],
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=2000"
    },
    {
      id: 2,
      name: "Bio Market",
      category: "food",
      distance: "1.2 km",
      rating: 4.6,
      reviews: 89,
      address: "45 avenue des Fleurs, 75015 Paris",
      phone: "01 23 45 67 90",
      website: "www.biomarket.fr",
      email: "contact@biomarket.fr",
      hours: "Lun-Dim: 8h-20h",
      description: "Votre supermarché bio de proximité. Produits locaux et de saison pour une alimentation saine.",
      offers: [
        { title: "15% sur les produits bio", validUntil: "15 mai 2024" },
        { title: "Réduction senior le mardi", validUntil: "Permanent" },
        { title: "Panier surprise -30%", validUntil: "Chaque dimanche" }
      ],
      image: "https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80&w=2000"
    },
    {
      id: 3,
      name: "Beauty Store",
      category: "beauty",
      distance: "2.0 km",
      rating: 4.9,
      reviews: 156,
      address: "8 place de la République, 75011 Paris",
      phone: "01 23 45 67 91",
      website: "www.beautystore.fr",
      email: "contact@beautystore.fr",
      hours: "Mar-Sam: 10h-19h",
      description: "Institut de beauté premium proposant des soins personnalisés et des produits haut de gamme.",
      offers: [
        { title: "25% sur les soins visage", validUntil: "30 avril 2024" },
        { title: "Carte fidélité x2 points", validUntil: "31 mai 2024" },
        { title: "1er soin -50%", validUntil: "Permanent" }
      ],
      image: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&q=80&w=2000"
    },
    {
      id: 4,
      name: "FitClub",
      category: "sport",
      distance: "1.8 km",
      rating: 4.7,
      reviews: 203,
      address: "12 rue du Sport, 75015 Paris",
      phone: "01 23 45 67 92",
      website: "www.fitclub.fr",
      email: "contact@fitclub.fr",
      hours: "Lun-Dim: 6h-23h",
      description: "Salle de sport moderne avec équipements dernière génération et coachs certifiés.",
      offers: [
        { title: "Frais d'inscription offerts", validUntil: "30 avril 2024" },
        { title: "-30% sur l'abonnement annuel", validUntil: "15 mai 2024" },
        { title: "1 séance d'essai gratuite", validUntil: "Permanent" }
      ],
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=2000"
    }
  ];

  const filteredStores = selectedCategory === "all" 
    ? stores 
    : stores.filter(store => store.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="fixed top-4 left-4 z-50">
        <Link href="/">
          <Button variant="ghost" className="bg-white/80 backdrop-blur-sm shadow-md hover:bg-white">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour à l'accueil
          </Button>
        </Link>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Offres Locales</h1>
          <p className="text-xl text-muted-foreground">
            Découvrez les meilleures réductions près de chez vous
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className="min-w-[120px]"
            >
              {category.name}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredStores.map((store) => (
            <Card key={store.id} className="overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-48">
                <img
                  src={store.image}
                  alt={store.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                  <span className="font-semibold">{store.rating}</span>
                  <span className="text-sm text-muted-foreground ml-1">({store.reviews})</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">{store.name}</h3>
                    <p className="text-muted-foreground flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      {store.address}
                    </p>
                  </div>
                  <span className="flex items-center text-sm bg-primary/10 text-primary px-2 py-1 rounded-full">
                    <Navigation className="h-4 w-4 mr-1" />
                    {store.distance}
                  </span>
                </div>

                <p className="text-muted-foreground mb-6">{store.description}</p>

                <div className="grid gap-4 mb-6">
                  <div className="flex items-center text-sm">
                    <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>{store.hours}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>{store.phone}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Globe className="h-4 w-4 mr-2 text-muted-foreground" />
                    <a href={`https://${store.website}`} target="_blank" rel="noopener noreferrer" 
                      className="text-primary hover:underline">
                      {store.website}
                    </a>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold flex items-center">
                    <Percent className="h-5 w-5 mr-2" />
                    Offres en cours
                  </h4>
                  {store.offers.map((offer, index) => (
                    <div key={index} className="flex items-center justify-between bg-muted/50 p-3 rounded-lg">
                      <div className="flex items-center">
                        <Tag className="h-4 w-4 mr-2 text-primary" />
                        <span>{offer.title}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        Jusqu'au {offer.validUntil}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex gap-4">
                  <Button className="flex-1">
                    Voir les produits
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Prendre RDV
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}