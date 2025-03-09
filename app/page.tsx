'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Sparkles,
  ShoppingBag,
  MapPin,
  History,
  ArrowLeft,
  ArrowRight,
  Percent,
  Apple,
  Clock,
  UserPlus,
  Receipt,
  Coins,
  ShieldCheck,
  Heart,
  CircleDollarSign,
  ShoppingCart,
  BadgeCheck,
  Wallet,
  Star,
  Quote,
  Store,
  Tag,
  Timer,
  ChevronRight,
  Leaf,
  Smile,
  PiggyBank,
  Award,
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPinned,
  Menu,
} from 'lucide-react';
import Link from 'next/link';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { useState } from 'react';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const categories = [
    { name: 'Beauté', href: '/produits' },
    { name: 'Bien-être', href: '/produits' },
    { name: 'Nutrition', href: '/produits' },
    { name: 'Sport', href: '/produits' },
    { name: 'À Propos', href: '/about' },
  ];

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 24,
    },
    breakpoints: {
      '(max-width: 768px)': {
        slides: { perView: 1, spacing: 16 },
      },
      '(max-width: 1024px)': {
        slides: { perView: 2, spacing: 16 },
      },
    },
  });

  const [testimonialSliderRef, testimonialSliderInstance] = useKeenSlider(
    {
      loop: true,
      slides: { perView: 1 },
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;

        function clearNextTimeout() {
          clearTimeout(timeout);
        }

        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 5000);
        }

        slider.on('created', () => {
          nextTimeout();
        });

        slider.on('dragStarted', clearNextTimeout);
        slider.on('animationEnded', nextTimeout);
        slider.on('updated', nextTimeout);

        slider.container.addEventListener('mouseover', () => {
          mouseOver = true;
          clearNextTimeout();
        });

        slider.container.addEventListener('mouseout', () => {
          mouseOver = false;
          nextTimeout();
        });
      },
    ]
  );

  const testimonials = [
    {
      id: 1,
      name: 'Sarah, 23 ans',
      role: 'Étudiante en droit',
      text: "VelZ m'a permis de découvrir des soins de qualité à prix réduits. Je peux enfin prendre soin de ma peau sans culpabiliser !",
      image:
        'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=400',
      rating: 5,
    },
    {
      id: 2,
      name: 'Emma, 25 ans',
      role: 'Jeune active',
      text: "Les réductions sur les produits de beauté sont incroyables. J'ai pu créer ma routine skincare complète à moitié prix !",
      image:
        'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=400',
      rating: 5,
    },
    {
      id: 3,
      name: 'Léa, 21 ans',
      role: 'Étudiante en médecine',
      text: "Grâce à VelZ, j'ai accès à des marques de qualité que je n'aurais jamais pu m'offrir avant. Un vrai game changer !",
      image:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
      rating: 5,
    },
  ];

  const partnerOffers = [
    {
      id: 1,
      partner: 'Sabrina Beauté',
      title: 'Soin de visage au choix',
      discount: '34%',
      description: 'Vous rêvez de cette peau éclatante et du teint radieux ? Découvrez les soins du visage de Sabrine Beauté, conçus pour vous offrir une expérience de beauté unique et relaxante.',
      validUntil: '31 mai 2024',
      image:
        'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=500',
      url:'https://www.groupon.fr/deals/la-beaute-indienne-6',
      tags: ['Cosmétiques', 'Soins'],
    },
    {
      id: 2,
      partner: 'Mille et Un RêVes',
      title: 'Saunas japonais',
      discount: '59%',
      description: 'Le sauna japonais dit également le Vital Dôme aide à améliorer, réguler la qualité du sommeil, réduire le stress et la tension, les signes de fatigue chronique, et relaxer profondément.',
      validUntil: '30 avril 2024',
      image:
        'https://www.piscineavenue.com/wp-content/uploads/2021/05/sauna-japonais-prix-avis-600x321.jpeg',
      url:'https://www.groupon.fr/deals/mille-et-un-reves-6?deal_option=46a60991-ed75-4b2a-b26d-9ef33a31c5ea',
      tags: ['Spa', 'Sauna'],
    },
    {
      id: 3,
      partner: 'Body float',
      title: 'Séance de flottaison',
      discount: '34%',
      description: 'Vivre une expérience de détente et relaxation en solo ou en duo dans une eau saturée en sel d’epsom, à 35°C, avec un plafond étoilé avec une douce lumière sous-marine.',
      validUntil: '15 mai 2024',
      image:
        'https://i0.wp.com/www.voyageenbeaute.com/wp-content/uploads/2023/02/avis-caisson-flottaison-bien-etre.webp?fit=900%2C675&ssl=1',
      url:"https://www.groupon.fr/deals/gl-body-float",
      tags: ['body float', 'spa'],
    },
  ];

  const steps = [
    {
      icon: UserPlus,
      title: 'Inscription',
      description:
        'Créez votre compte en quelques clics et rejoignez notre communauté',
      color: 'hsl(330,85%,85%)',
    },
    {
      icon: BadgeCheck,
      title: 'Vérification',
      description: "Confirmez votre statut d'étudiant ou de jeune actif",
      color: 'hsl(180,85%,85%)',
    },
    {
      icon: ShoppingCart,
      title: 'Sélection',
      description: 'Choisissez parmi nos offres personnalisées',
      color: 'hsl(270,85%,85%)',
    },
    {
      icon: Wallet,
      title: 'Économies',
      description: 'Profitez de réductions exclusives sur vos achats',
      color: 'hsl(330,85%,85%)',
    },
  ];

  const benefits = [
    {
      icon: PiggyBank,
      title: 'Économies Garanties',
      description:
        'Profitez de réductions exclusives sur des produits de qualité pour votre quotidien',
      color: 'hsl(330,85%,85%)',
    },
    {
      icon: Award,
      title: 'Qualité Premium',
      description:
        'Accédez à une sélection rigoureuse de produits de marques reconnues',
      color: 'hsl(180,85%,85%)',
    },
    {
      icon: Leaf,
      title: 'Bien-être Naturel',
      description:
        'Découvrez des produits de soin et de bien-être respectueux de votre corps',
      color: 'hsl(270,85%,85%)',
    },
    {
      icon: Smile,
      title: 'Confiance en Soi',
      description:
        'Prenez soin de vous sans compromis sur la qualité ni sur votre budget',
      color: 'hsl(330,85%,85%)',
    },
  ];

  const groupPhotos = [
    {
      url: 'https://plus.unsplash.com/premium_photo-1683145839395-820a7db1f05b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      caption: 'Beauté',
    },
    {
      url: 'https://images.unsplash.com/photo-1531299244174-d247dd4e5a66?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      caption: 'Bien-être & Soin',
    },
    {
      url: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      caption: 'Sport',
    },
     {
      url: 'https://plus.unsplash.com/premium_photo-1663840278090-32c56b18e075?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      caption: 'Nutrition',
    },
  ];

  

 return (
    <div className="min-h-screen bg-gradient-to-b from-[hsl(330,85%,97%)] via-[hsl(180,85%,97%)] to-[hsl(270,85%,97%)]">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMenuOpen(!menuOpen)}
                className="mr-4"
              >
                <Menu className="h-6 w-6" />
              </Button>

              <nav className="hidden md:flex space-x-4">
                {categories.map((category) => (
                  <Link
                    key={category.name}
                    href={category.href}
                    className="text-gray-700 hover:text-[hsl(330,85%,85%)] transition-colors px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {category.name}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="flex items-center space-x-4">
              <Link href="/beneficiaire">
                <Button
                  size="sm"
                  className="bg-[hsl(330,85%,85%)] hover:bg-[hsl(330,85%,80%)] text-white"
                >
                  Devenir bénéficiaire
                  <Sparkles className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/partenaire">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-[hsl(180,85%,85%)] text-[hsl(180,85%,85%)] hover:bg-[hsl(180,85%,85%)] hover:text-white"
                >
                  Devenir partenaire
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  href={category.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[hsl(330,85%,85%)] hover:bg-gray-50"
                  onClick={() => setMenuOpen(false)}
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="pt-16">
        {/* Hero Section */}
        <header className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[hsl(330,85%,90%)] via-[hsl(180,85%,90%)] to-transparent z-0" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white animate-float serif-font">
                VelZ
              </h1>
              <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto animate-scale">
                La première plateforme pour les jeunes qui rend le bien-être accessible à tous ! 🌸
              </p>
            </div>
          </div>
        </header>

        

        {/* Photo Gallery */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {groupPhotos.map((photo, index) => (
                <div
                  key={index}
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300"
                >
                  <img
                    src={photo.url}
                    alt={photo.caption}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white text-center">
                    <p className="text-lg font-semibold">{photo.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Join Us Section */}
        <section className="py-20 bg-gradient-to-b from-[hsl(330,85%,97%)] to-[hsl(180,85%,97%)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">
                Pourquoi nous rejoindre ?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Des bons plans sur nos produits essentiels, le soin et le
                bien-être, pour économiser tout en prenant soin de toi ! 💥
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 bg-white/90 backdrop-blur-sm"
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto"
                    style={{ backgroundColor: `${benefit.color}15` }}
                  >
                    <benefit.icon
                      className="h-8 w-8"
                      style={{ color: benefit.color }}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-center">
                    {benefit.description}
                  </p>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link href="/beneficiaire">
                <Button
                  size="lg"
                  className="bg-[hsl(330,85%,85%)] hover:bg-[hsl(330,85%,80%)] text-white transition-all duration-300 transform hover:scale-105"
                >
                  Découvrir les avantages
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Latest Partner Offers */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              Les dernières offres à ne pas louper
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partnerOffers.map((offer) => (
                <Card
                  key={offer.id}
                  className="overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative">
                    <img
                      src={offer.image}
                      alt={offer.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-[hsl(330,85%,85%)] text-white px-3 py-1 rounded-full font-bold">
                      -{offer.discount}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <Store className="h-5 w-5 text-[hsl(180,85%,85%)] mr-2" />
                      <span className="font-semibold">{offer.partner}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{offer.title}</h3>
                    <p className="text-muted-foreground mb-4">
                      {offer.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {offer.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-[hsl(270,85%,95%)] text-[hsl(270,85%,45%)] px-2 py-1 rounded-full text-sm flex items-center"
                        >
                          <Tag className="h-3 w-3 mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground flex items-center">
                        <Timer className="h-4 w-4 mr-1" />
                        Valable jusqu'au {offer.validUntil}
                      </span>
                      <a href={offer.url} target="_blank">
                        <Button variant="outline" size="sm">
                          Voir l'offre
                        </Button>
                      </a>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Comment ça marche Section */}
        <section className="py-20 bg-gradient-to-b from-[hsl(330,85%,97%)] to-[hsl(180,85%,97%)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-16">
              Comment ça marche ?
            </h2>

            <div className="relative">
              <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-[hsl(330,85%,85%)] via-[hsl(180,85%,85%)] to-[hsl(270,85%,85%)] -translate-y-1/2 hidden md:block" />

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                {steps.map((step, index) => (
                  <div key={index} className="relative">
                    {index < steps.length - 1 && (
                      <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-10 hidden md:block">
                        <ChevronRight className="w-8 h-8 text-[hsl(180,85%,85%)]" />
                      </div>
                    )}

                    <div
                      className="absolute -top-4 -left-4 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold z-10"
                      style={{ backgroundColor: step.color }}
                    >
                      {index + 1}
                    </div>

                    <Card className="p-6 hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm transform hover:scale-105 hover:-translate-y-2">
                      <div className="relative z-10">
                        <step.icon
                          className="h-12 w-12 mb-4"
                          style={{ color: step.color }}
                        />
                        <h3 className="text-xl font-semibold mb-2">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {step.description}
                        </p>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link href="/beneficiaire">
                <Button
                  size="lg"
                  className="bg-[hsl(330,85%,85%)] hover:bg-[hsl(330,85%,80%)] text-white"
                >
                  Commencer maintenant
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Notre Vision Section */}
        <section className="py-20 bg-gradient-to-b from-[hsl(330,85%,97%)] to-[hsl(180,85%,97%)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-1">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1683144967798-ae4d4c0be46c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Groupe de personnes heureuses"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
              <div className="order-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Notre Vision
                </h2>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold text-gray-900">
                      Notre engagement pour l'accessibilité
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Nous considérons qu’il est essentiel de prendre soin de son corps et de son esprit, mais cela ne doit pas être réservé à une élite. Bien s'alimenter, utiliser des produits respectueux de son corps, se relaxer… Tout cela fait partie du quotidien de chacun, et non d’un luxe.

À VelZ, nous voulons vous aider à ne plus avoir à dire "C’est trop cher" ou "Je n’ai pas le temps". Nous croyons que tout le monde mérite de se sentir bien, sans avoir à faire de compromis sur la qualité de sa vie.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold text-gray-900">
                      Une communauté engagée
                    </h3>
                    <p className="text-lg text-gray-700">
                      Notre communauté, plus qu'un réseau : une révolution rose
                      poudré !✨ Nous avançons ensemble pour créer un monde plus
                      bienveillant et accessible. Plus que des réductions, nous
                      construisons une communauté solidaire où chacun peut
                      s'épanouir et réaliser ses rêves. 🌍Vos avis sont cruciaux
                      : n'hésitez pas à partager vos retours et critiques pour
                      nous aider à grandir ! 💡
                    </p>
                  </div>
                </div>

                <div className="mt-16 flex flex-col sm:flex-row justify-center gap-4">
                  <Link href="/beneficiaire">
                    <Button
                      size="lg"
                      className="bg-[hsl(330,85%,85%)] hover:bg-[hsl(330,85%,80%)] text-white transition-all duration-300 transform hover:scale-105"
                    >
                      Je deviens bénéficiaire
                      <Sparkles className="ml-2 h-4 w-4 animate-scale" />
                    </Button>
                  </Link>
                  <Link href="/about">
                    <Button
                      size="lg"
                      className="bg-[hsl(330,85%,85%)] hover:bg-[hsl(330,85%,80%)] text-white transition-all duration-300 transform hover:scale-105"
                    >
                      Notre histoire 📙
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-20 bg-gradient-to-b from-[hsl(180,85%,97%)] to-[hsl(270,85%,97%)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              Ce qu'ils en pensent
            </h2>

            <div className="navigation-wrapper relative">
              <div
                ref={testimonialSliderRef}
                className="keen-slider min-h-[400px]"
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="keen-slider__slide">
                    <Card className="p-8 mx-4 h-full text-center bg-white/80 backdrop-blur-sm transform transition-all duration-300 hover:shadow-xl">
                      <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-[hsl(330,85%,85%)] ring-opacity-20">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <Quote className="h-8 w-8 text-[hsl(330,85%,85%)] mx-auto mb-4" />
                      <p className="text-lg mb-6 text-gray-700 italic">
                        "{testimonial.text}"
                      </p>
                      <div className="flex justify-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-5 w-5 text-[hsl(330,85%,85%)] fill-current"
                          />
                        ))}
                      </div>
                      <h3 className="font-semibold text-xl mb-1">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </Card>
                  </div>
                ))}
              </div>

              {loaded && testimonialSliderInstance.current && (
                <>
                  <Button
                    variant="ghost"
                    onClick={() => testimonialSliderInstance.current?.prev()}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/80 hover:bg-white shadow-lg rounded-full p-3"
                  >
                    <ArrowLeft className="h-6 w-6" />
                  </Button>

                  <Button
                    variant="ghost"
                    onClick={() => testimonialSliderInstance.current?.next()}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/80 hover:bg-white shadow-lg rounded-full p-3"
                  >
                    <ArrowRight className="h-6 w-6" />
                  </Button>
                </>
              )}
            </div>

            {loaded && testimonialSliderInstance.current && (
              <div className="flex justify-center gap-2 mt-8">
                {[
                  ...Array(
                    testimonialSliderInstance.current.track.details.slides
                      .length
                  ),
                ].map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() =>
                      testimonialSliderInstance.current?.moveToIdx(idx)
                    }
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentSlide === idx
                        ? 'bg-[hsl(330,85%,85%)] w-6'
                        : 'bg-[hsl(330,85%,85%)] bg-opacity-20'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link
                href="/produits"
                className="block transform hover:scale-105 transition-transform duration-300"
              >
                <Card className="p-6 hover:shadow-lg transition- lg transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
                  <ShoppingBag className="h-12 w-12 text-[hsl(330,85%,85%)] mb-4 animate-float" />
                  <h3 className="text-xl font-semibold mb-2">
                    Tous nos bons plans
                  </h3>
                  <p className="text-muted-foreground">
                    Cliquez ici pour vous faire plaisir à moindre coût 
                  </p>
                </Card>
              </Link>

              <Link
                href="/local"
                className="block transform hover:scale-105 transition-transform duration-300"
              >
                <Card className="p-6 hover:shadow-lg transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
                  <MapPin className="h-12 w-12 text-[hsl(180,85%,85%)] mb-4 animate-float" />
                  <h3 className="text-xl font-semibold mb-2">Offres Locales</h3>
                  <p className="text-muted-foreground">
                    Découvrez les meilleures réductions près de chez vous
                  </p>
                </Card>
              </Link>

              <Link
                href="/perso"
                className="block transform hover:scale-105 transition-transform duration-300"
              >
                <Card className="p-6 hover:shadow-lg transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
                  <History className="h-12 w-12 text-[hsl(270,85%,85%)] mb-4 animate-float" />
                  <h3 className="text-xl font-semibold mb-2">
                    Expérience personnalisée 
                  </h3>
                  <p className="text-muted-foreground">
                    Cliquez ici pour personnaliser votre profil et profiter de
                    recommandations adaptées à vos besoins
                  </p>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white/80 backdrop-blur-sm border-t">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-primary">VelZ</h3>
                <p className="text-muted-foreground">
                  Des réductions exclusives pour les étudiants et jeunes actifs
                  sur des produits de qualité.
                </p>
                <div className="flex space-x-4">
                  <Link href="https://facebook.com" target="_blank">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="hover:text-[hsl(330,85%,85%)]"
                    >
                      <Facebook className="h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="https://instagram.com" target="_blank">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="hover:text-[hsl(330,85%,85%)]"
                    >
                      <Instagram className="h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="https://twitter.com" target="_blank">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="hover:text-[hsl(330,85%,85%)]"
                    >
                      <Twitter className="h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Navigation</h4>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/about"
                      className="text-muted-foreground hover:text-[hsl(330,85%,85%)] transition-colors"
                    >
                      Notre histoire
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/produits"
                      className="text-muted-foreground hover:text-[hsl(330,85%,85%)] transition-colors"
                    >
                      Nos produits
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/local"
                      className="text-muted-foreground hover:text-[hsl(330,85%,85%)] transition-colors"
                    >
                      Offres locales
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/historique"
                      className="text-muted-foreground hover:text-[hsl(330,85%,85%)] transition-colors"
                    >
                      Historique
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Inscription</h4>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/beneficiaire"
                      className="text-muted-foreground hover:text-[hsl(330,85%,85%)] transition-colors"
                    >
                      Devenir bénéficiaire
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/partenaire"
                      className="text-muted-foreground hover:text-[hsl(330,85%,85%)] transition-colors"
                    >
                      Devenir partenaire
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Contact</h4>
                <ul className="space-y-2">
                  <li className="flex items-center text-muted-foreground">
                    <Mail className="h-4 w-4 mr-2" />
                    contact@velzapp.com
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <Phone className="h-4 w-4 mr-2" />
                    07 52 08 19 34
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <MapPinned className="h-4 w-4 mr-2" />
                    Hauts-de-Seine, France
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
              <p>
                &copy; {new Date().getFullYear()} VelZ. Tous droits réservés.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
