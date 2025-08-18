import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, MapPin, Utensils, Calendar, Star } from "lucide-react";
import heroImage from "@/assets/guimaras-hero.jpg";

const Index = () => {
  const features = [
    {
      icon: MapPin,
      title: "Hidden Gems",
      description: "Discover secret spots only locals know about"
    },
    {
      icon: Utensils,
      title: "Authentic Cuisine", 
      description: "Taste the world's sweetest mangoes and local delicacies"
    },
    {
      icon: Calendar,
      title: "Perfect Itineraries",
      description: "Customized travel plans for every type of adventure"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 p-6">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold text-white">
            IslaGuimaras
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#discover" className="text-white hover:text-primary transition-colors">
              Discover
            </a>
            <a href="#cuisine" className="text-white hover:text-primary transition-colors">
              Cuisine
            </a>
            <a href="#planner" className="text-white hover:text-primary transition-colors">
              Planner
            </a>
            <Button variant="hero" size="sm">
              Plan Your Trip
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        
        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-float">
            Discover Paradise
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
            Experience Guimaras through the eyes of locals. Pristine beaches, sweet mangoes, 
            and authentic island adventures await you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="shadow-glow">
              Start Exploring
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline-light" size="lg">
              Watch Our Story
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose Guimaras?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From pristine beaches to world-famous mangoes, discover what makes 
              this hidden gem the Philippines' best-kept secret.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-tropical transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-tropical rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse-glow">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Local Stories Preview */}
      <section className="py-20 px-6 bg-accent-light">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Stories from Locals
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real experiences from the people who call Guimaras home
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <span className="ml-2 text-sm text-muted-foreground">Local Guide</span>
              </div>
              <blockquote className="text-2xl italic mb-6">
                "Guimaras isn't just about beautiful beaches. It's about the warmth 
                of our people, the sweetness of our mangoes, and the peace you feel 
                when you're here."
              </blockquote>
              <cite className="font-semibold">— Maria Santos, Local Guide</cite>
            </div>
            <div className="bg-gradient-sunset rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
              <p className="mb-6 opacity-90">
                Get personalized recommendations from locals who know Guimaras best.
              </p>
              <Button variant="hero" className="bg-white text-accent hover:bg-gray-100">
                Connect with Locals
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-accent text-white py-12 px-6">
        <div className="container mx-auto text-center">
          <div className="text-3xl font-bold mb-4">IslaGuimaras</div>
          <p className="text-accent-foreground/80 mb-6">
            Your gateway to authentic island experiences
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="hover:text-primary transition-colors">About</a>
            <a href="#" className="hover:text-primary transition-colors">Contact</a>
            <a href="#" className="hover:text-primary transition-colors">Blog</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;