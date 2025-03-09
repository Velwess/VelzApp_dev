"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, GraduationCap, Briefcase } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Beneficiaire() {
  const [studentData, setStudentData] = useState({
    nom: "",
    prenom: "",
    email: "",
    age: "",
    ecole: "",
    niveau: "",
    boursier: false
  });

  const [proData, setProData] = useState({
    nom: "",
    prenom: "",
    email: "",
    age: ""
  });

  const handleStudentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(studentData);
    // Handle student form submission
  };

  const handleProSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(proData);
    // Handle professional form submission
  };

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

      <div className="max-w-2xl mx-auto">
        <Card className="p-6">
          <h1 className="text-3xl font-bold mb-6">Devenir Bénéficiaire</h1>
        <p className="text-muted-foreground mb-8">
  Rejoignez notre communauté et profitez de réductions exclusives adaptées à votre style de vie.  
  Que vous soyez étudiant ou jeune actif, VelZ a des offres rien que pour vous ! 💖  
</p>
<p className="text-muted-foreground mb-8">
  🌸 Cette version de VelZ est encore en test ! Si vous rencontrez un souci avec une offre, un produit ou un partenaire, **faites-le-nous savoir**. Votre retour est précieux !  
  <br />
  📩 <strong>contact@velzapp.com</strong>  
  <br />
  Merci pour votre confiance ! ✨💕  
</p>


          <Tabs defaultValue="student" className="space-y-6">
            <TabsList className="grid grid-cols-2 w-full">
              <TabsTrigger value="student" className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4" />
                Étudiant
              </TabsTrigger>
              <TabsTrigger value="pro" className="flex items-center gap-2">
                <Briefcase className="h-4 w-4" />
                Jeune Actif
              </TabsTrigger>
            </TabsList>

            <TabsContent value="student">
              <form onSubmit={handleStudentSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="student-nom">Nom</Label>
                    <Input
                      id="student-nom"
                      value={studentData.nom}
                      onChange={(e) => setStudentData({ ...studentData, nom: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="student-prenom">Prénom</Label>
                    <Input
                      id="student-prenom"
                      value={studentData.prenom}
                      onChange={(e) => setStudentData({ ...studentData, prenom: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="student-email">Email</Label>
                  <Input
                    id="student-email"
                    type="email"
                    value={studentData.email}
                    onChange={(e) => setStudentData({ ...studentData, email: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="student-age">Âge</Label>
                  <Input
                    id="student-age"
                    type="number"
                    min="16"
                    max="35"
                    value={studentData.age}
                    onChange={(e) => setStudentData({ ...studentData, age: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="student-ecole">École / Université</Label>
                  <Input
                    id="student-ecole"
                    value={studentData.ecole}
                    onChange={(e) => setStudentData({ ...studentData, ecole: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="student-niveau">Niveau d'études</Label>
                  <Select
                    value={studentData.niveau}
                    onValueChange={(value) => setStudentData({ ...studentData, niveau: value })}
                  >
                    <SelectTrigger id="student-niveau">
                      <SelectValue placeholder="Sélectionnez votre niveau" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="l1">Licence 1</SelectItem>
                      <SelectItem value="l2">Licence 2</SelectItem>
                      <SelectItem value="l3">Licence 3</SelectItem>
                      <SelectItem value="m1">Master 1</SelectItem>
                      <SelectItem value="m2">Master 2</SelectItem>
                      <SelectItem value="doctorat">Doctorat</SelectItem>
                      <SelectItem value="autre">Autre</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="student-boursier"
                    checked={studentData.boursier}
                    onCheckedChange={(checked) => 
                      setStudentData({ ...studentData, boursier: checked as boolean })
                    }
                  />
                  <Label htmlFor="student-boursier">Je suis boursier</Label>
                </div>

                <Button type="submit" className="w-full">
                  Valider mon inscription
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="pro">
              <form onSubmit={handleProSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="pro-nom">Nom</Label>
                    <Input
                      id="pro-nom"
                      value={proData.nom}
                      onChange={(e) => setProData({ ...proData, nom: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="pro-prenom">Prénom</Label>
                    <Input
                      id="pro-prenom"
                      value={proData.prenom}
                      onChange={(e) => setProData({ ...proData, prenom: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="pro-email">Email</Label>
                  <Input
                    id="pro-email"
                    type="email"
                    value={proData.email}
                    onChange={(e) => setProData({ ...proData, email: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="pro-age">Âge</Label>
                  <Input
                    id="pro-age"
                    type="number"
                    min="18"
                    max="35"
                    value={proData.age}
                    onChange={(e) => setProData({ ...proData, age: e.target.value })}
                    required
                  />
                </div>

                <Button type="submit" className="w-full">
                  Valider mon inscription
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </div>
  );
}