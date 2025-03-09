"use client"

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Heart, ShoppingBag, MapPin, BookOpen, Clock } from "lucide-react";
import Link from "next/link";

export default function About() {
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
        <div className="prose prose-invert mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-primary">Notre Histoire</h1>
          
          <div className="grid gap-8">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <BookOpen className="h-6 w-6 text-primary" />
                Les Débuts
              </h2>
              <p className="text-muted-foreground">
                🌸 Les débuts d’une révolution rose poudré 🌸

Tout a commencé avec un constat simple mais frappant : trop de jeunes renoncent à des produits essentiels, au bien-être et aux expériences qui enrichissent leur quotidien, faute de moyens. C'est à ce moment que j'ai eu l'idée de changer cela.

Je suis Velwess, une entrepreneure passionnée et déterminée, animée par l'envie de rendre le bien-être et les produits de qualité accessibles à tous. Après avoir constaté les obstacles financiers auxquels beaucoup de jeunes sont confrontés, j'ai décidé de créer une solution qui permet à chacun d'accéder à des offres exclusives tout en favorisant l'entraide et la solidarité.

D'abord une idée, puis une conviction : et si nous construisions une communauté bienveillante où chacun pourrait partager ses bons plans, se soutenir et profiter d’offres adaptées à ses besoins ? Petit à petit, nous avons réuni des partenaires engagés et des jeunes motivés, prêts à transformer cette vision en réalité. Aujourd’hui, ce projet va bien au-delà des réductions : il porte un message d’inclusion, de positivité et de solidarité. 💫

Et ce n’est que le début… 🚀✨

Ce projet représente mon engagement à contribuer à une société plus inclusive, où chacun a sa place, peu importe son budget ou ses ressources. Avec VelZ, nous construisons ensemble un avenir plus solidaire, dans lequel chaque jeune peut s'épanouir et prendre soin de lui-même sans compromis.









              </p>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Clock className="h-6 w-6 text-primary" />
                Notre Évolution
              </h2>
              <p className="text-muted-foreground">
                De simple idée à plateforme innovante, VelZ s'est rapidement développé grâce 
                au soutien de notre communauté grandissante. Nous avons établi des partenariats 
                solides avec des marques partageant nos valeurs, permettant d'offrir des réductions 
                significatives sans compromis sur la qualité.
              </p>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Heart className="h-6 w-6 text-primary" />
                Notre Mission
              </h2>
              <p className="text-muted-foreground">
                VelZ est né d'une vision simple : rendre les produits essentiels et de qualité accessibles à tous. Nous croyons fermement que chaque jeune, qu'il soit étudiant ou jeune actif, mérite d'avoir accès à des produits adaptés à ses besoins, sans jamais compromettre son budget. En unissant solidarité, accessibilité et bien-être, nous aspirons à transformer le quotidien de chacun.
              </p>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <ShoppingBag className="h-6 w-6 text-primary" />
                Notre Approche
              </h2>
              <p className="text-muted-foreground">
                
Nous croyons fermement que chacun mérite d’avoir accès à des produits de qualité qui répondent à ses besoins, sans compromettre son budget. C'est pourquoi nous recherchons des partenaires engagés, prêts à partager notre vision d’accessibilité, de solidarité et d’inclusion. Nous collaborons avec des marques et des enseignes qui offrent des produits essentiels à prix réduits, permettant ainsi aux jeunes d'économiser tout en accédant à des articles de qualité. Ensemble, nous créons un réseau solidaire pour transformer cette mission en une véritable révolution, apportant un impact positif et durable.
              </p>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <MapPin className="h-6 w-6 text-primary" />
                Notre Engagement
              </h2>
              <p className="text-muted-foreground">
                Nous travaillons avec des marques locales et internationales pour vous offrir une sélection variée de produits de qualité, afin que le bien-être et le soin de soi soient accessibles à tous. Nous croyons que prendre soin de soi ne doit pas être un luxe, mais une possibilité à la portée de chacun, peu importe son budget. Grâce à des partenariats stratégiques avec des marques réputées, nous vous offrons une gamme complète de produits qui favorisent le bien-être, tout en soutenant l'économie locale.

Notre mission est de vous permettre de vous sentir bien dans votre peau en vous offrant les meilleurs produits de soin, de bien-être et d'hygiène, à des prix abordables. Nous nous engageons à vous proposer des solutions qui allient qualité, accessibilité et respect de vos moyens. Chaque produit sélectionné est pensé pour répondre à vos besoins tout en contribuant à l'équilibre entre qualité, prix et impact sur votre quotidien. Nous sommes convaincus qu'il est possible de vivre dans le bien-être sans compromettre son budget.
              </p>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Link href="/produits">
              <Button size="lg">
                Découvrir nos produits
                <ShoppingBag className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}