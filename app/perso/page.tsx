"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Heart, Apple, Dumbbell, Sparkles } from "lucide-react";
import Link from "next/link";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export default function Personalization() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    gender: "",
    interests: [],
    skinCare: {
      routine: "",
      concerns: []
    },
    nutrition: {
      diet: "",
      goals: []
    },
    fitness: {
      level: "",
      activities: []
    },
    budget: "",
    preferences: []
  });

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = () => {
    console.log(formData);
    // Ici, vous pouvez ajouter la logique pour envoyer les données au backend
  };

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold mb-6">Pour commencer...</h2>
            <div className="space-y-4">
              <Label>Je suis :</Label>
              <RadioGroup
                value={formData.gender}
                onValueChange={(value) => updateFormData("gender", value)}
                className="flex flex-col space-y-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="femme" id="femme" />
                  <Label htmlFor="femme">Une femme</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="homme" id="homme" />
                  <Label htmlFor="homme">Un homme</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="autre" id="autre" />
                  <Label htmlFor="autre">Autre / Ne souhaite pas préciser</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold mb-6">Mes centres d'intérêt</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="p-4 hover:shadow-lg transition-all cursor-pointer">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="skincare"
                    checked={formData.interests.includes("skincare")}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        updateFormData("interests", [...formData.interests, "skincare"]);
                      } else {
                        updateFormData("interests", formData.interests.filter(i => i !== "skincare"));
                      }
                    }}
                  />
                  <Label htmlFor="skincare" className="flex items-center">
                    <Heart className="h-4 w-4 mr-2 text-pink-400" />
                    Soin de la peau
                  </Label>
                </div>
              </Card>

              <Card className="p-4 hover:shadow-lg transition-all cursor-pointer">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="nutrition"
                    checked={formData.interests.includes("nutrition")}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        updateFormData("interests", [...formData.interests, "nutrition"]);
                      } else {
                        updateFormData("interests", formData.interests.filter(i => i !== "nutrition"));
                      }
                    }}
                  />
                  <Label htmlFor="nutrition" className="flex items-center">
                    <Apple className="h-4 w-4 mr-2 text-green-400" />
                    Nutrition
                  </Label>
                </div>
              </Card>

              <Card className="p-4 hover:shadow-lg transition-all cursor-pointer">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="fitness"
                    checked={formData.interests.includes("fitness")}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        updateFormData("interests", [...formData.interests, "fitness"]);
                      } else {
                        updateFormData("interests", formData.interests.filter(i => i !== "fitness"));
                      }
                    }}
                  />
                  <Label htmlFor="fitness" className="flex items-center">
                    <Dumbbell className="h-4 w-4 mr-2 text-blue-400" />
                    Sport & Fitness
                  </Label>
                </div>
              </Card>
            </div>
          </div>
        );

      case 3:
        return formData.interests.includes("skincare") ? (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold mb-6">Parlons soin de la peau</h2>
            <div className="space-y-4">
              <Label>Ma routine actuelle :</Label>
              <RadioGroup
                value={formData.skinCare.routine}
                onValueChange={(value) => updateFormData("skinCare", { ...formData.skinCare, routine: value })}
                className="flex flex-col space-y-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="basic" id="basic" />
                  <Label htmlFor="basic">Basique (nettoyant + crème)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="intermediate" id="intermediate" />
                  <Label htmlFor="intermediate">Intermédiaire (+ sérum ou traitement)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="advanced" id="advanced" />
                  <Label htmlFor="advanced">Avancée (routine complète)</Label>
                </div>
              </RadioGroup>

              <div className="mt-6">
                <Label>Mes préoccupations :</Label>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  {["Acné", "Taches", "Rides", "Sécheresse", "Sensibilité", "Éclat"].map((concern) => (
                    <Card key={concern} className="p-4 hover:shadow-lg transition-all cursor-pointer">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id={concern}
                          checked={formData.skinCare.concerns.includes(concern)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              updateFormData("skinCare", {
                                ...formData.skinCare,
                                concerns: [...formData.skinCare.concerns, concern]
                              });
                            } else {
                              updateFormData("skinCare", {
                                ...formData.skinCare,
                                concerns: formData.skinCare.concerns.filter(c => c !== concern)
                              });
                            }
                          }}
                        />
                        <Label htmlFor={concern}>{concern}</Label>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : null;

      case 4:
        return formData.interests.includes("nutrition") ? (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold mb-6">Nutrition & Alimentation</h2>
            <div className="space-y-4">
              <Label>Mon régime alimentaire :</Label>
              <RadioGroup
                value={formData.nutrition.diet}
                onValueChange={(value) => updateFormData("nutrition", { ...formData.nutrition, diet: value })}
                className="flex flex-col space-y-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="omnivore" id="omnivore" />
                  <Label htmlFor="omnivore">Omnivore</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="vegetarian" id="vegetarian" />
                  <Label htmlFor="vegetarian">Végétarien</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="vegan" id="vegan" />
                  <Label htmlFor="vegan">Vegan</Label>
                </div>
              </RadioGroup>

              <div className="mt-6">
                <Label>Mes objectifs :</Label>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  {[
                    "Manger plus sain",
                    "Perdre du poids",
                    "Prendre du muscle",
                    "Avoir plus d'énergie",
                    "Réduire le sucre",
                    "Cuisiner maison"
                  ].map((goal) => (
                    <Card key={goal} className="p-4 hover:shadow-lg transition-all cursor-pointer">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id={goal}
                          checked={formData.nutrition.goals.includes(goal)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              updateFormData("nutrition", {
                                ...formData.nutrition,
                                goals: [...formData.nutrition.goals, goal]
                              });
                            } else {
                              updateFormData("nutrition", {
                                ...formData.nutrition,
                                goals: formData.nutrition.goals.filter(g => g !== goal)
                              });
                            }
                          }}
                        />
                        <Label htmlFor={goal}>{goal}</Label>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : null;

      case 5:
        return formData.interests.includes("fitness") ? (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold mb-6">Sport & Fitness</h2>
            <div className="space-y-4">
              <Label>Mon niveau :</Label>
              <RadioGroup
                value={formData.fitness.level}
                onValueChange={(value) => updateFormData("fitness", { ...formData.fitness, level: value })}
                className="flex flex-col space-y-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="beginner" id="beginner" />
                  <Label htmlFor="beginner">Débutant</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="intermediate" id="intermediate" />
                  <Label htmlFor="intermediate">Intermédiaire</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="advanced" id="advanced" />
                  <Label htmlFor="advanced">Avancé</Label>
                </div>
              </RadioGroup>

              <div className="mt-6">
                <Label>Mes activités préférées :</Label>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  {[
                    "Musculation",
                    "Cardio",
                    "Yoga",
                    "Course à pied",
                    "Sports collectifs",
                    "Danse"
                  ].map((activity) => (
                    <Card key={activity} className="p-4 hover:shadow-lg transition-all cursor-pointer">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id={activity}
                          checked={formData.fitness.activities.includes(activity)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              updateFormData("fitness", {
                                ...formData.fitness,
                                activities: [...formData.fitness.activities, activity]
                              });
                            } else {
                              updateFormData("fitness", {
                                ...formData.fitness,
                                activities: formData.fitness.activities.filter(a => a !== activity)
                              });
                            }
                          }}
                        />
                        <Label htmlFor={activity}>{activity}</Label>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : null;

      case 6:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold mb-6">Budget & Préférences</h2>
            <div className="space-y-4">
              <Label>Mon budget mensuel pour prendre soin de moi :</Label>
              <RadioGroup
                value={formData.budget}
                onValueChange={(value) => updateFormData("budget", value)}
                className="flex flex-col space-y-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="low" id="low" />
                  <Label htmlFor="low">Moins de 50€</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="medium" id="medium" />
                  <Label htmlFor="medium">Entre 50€ et 100€</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="high" id="high" />
                  <Label htmlFor="high">Plus de 100€</Label>
                </div>
              </RadioGroup>

              <div className="mt-6">
                <Label>Mes préférences de réductions :</Label>
                <div className="grid grid-cols-1 gap-4 mt-2">
                  {[
                    "Je préfère des réductions importantes sur peu de produits",
                    "Je préfère des réductions modérées sur plus de produits",
                    "Je suis intéressé(e) par les offres groupées",
                    "Je veux être alerté(e) des promotions flash",
                    "Je souhaite des réductions sur les nouveautés"
                  ].map((pref) => (
                    <Card key={pref} className="p-4 hover:shadow-lg transition-all cursor-pointer">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id={pref}
                          checked={formData.preferences.includes(pref)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              updateFormData("preferences", [...formData.preferences, pref]);
                            } else {
                              updateFormData("preferences", formData.preferences.filter(p => p !== pref));
                            }
                          }}
                        />
                        <Label htmlFor={pref}>{pref}</Label>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const maxSteps = 6;
  const canProceed = () => {
    switch(step) {
      case 1:
        return formData.gender !== "";
      case 2:
        return formData.interests.length > 0;
      case 3:
        return !formData.interests.includes("skincare") || 
          (formData.skinCare.routine !== "" && formData.skinCare.concerns.length > 0);
      case 4:
        return !formData.interests.includes("nutrition") || 
          (formData.nutrition.diet !== "" && formData.nutrition.goals.length > 0);
      case 5:
        return !formData.interests.includes("fitness") || 
          (formData.fitness.level !== "" && formData.fitness.activities.length > 0);
      case 6:
        return formData.budget !== "" && formData.preferences.length > 0;
      default:
        return false;
    }
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
        <Card className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4">Personnalisons votre expérience ✨</h1>
            <p className="text-muted-foreground">
              Répondez à quelques questions pour que nous puissions vous proposer 
              les meilleures offres adaptées à vos besoins et préférences.
            </p>
          </div>

          <div className="mb-8">
            <div className="h-2 bg-gray-200 rounded-full">
              <div 
                className="h-2 bg-primary rounded-full transition-all duration-300"
                style={{ width: `${(step / maxSteps) * 100}%` }}
              />
            </div>
            <p className="text-sm text-muted-foreground mt-2 text-center">
              Étape {step} sur {maxSteps}
            </p>
          </div>

          {renderStep()}

          <div className="flex justify-between mt-8">
            {step > 1 && (
              <Button
                variant="outline"
                onClick={() => setStep(step - 1)}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Précédent
              </Button>
            )}
            
            {step < maxSteps ? (
              <Button
                className="ml-auto"
                onClick={() => setStep(step + 1)}
                disabled={!canProceed()}
              >
                Suivant
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button
                className="ml-auto"
                onClick={handleSubmit}
                disabled={!canProceed()}
              >
                Terminer
                <Sparkles className="ml-2 h-4 w-4" />
              </Button>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}