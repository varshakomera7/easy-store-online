import { Shield, Clock, Award, HeadphonesIcon, Leaf, DollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "100% Safe & Certified",
    description: "All our fuel meets international quality standards with certified delivery personnel",
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    description: "Get your fuel delivered within 30 minutes of placing your order",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Only the highest grade fuel from trusted refineries and suppliers",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Round-the-clock customer service to assist you anytime, anywhere",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Optimized delivery routes reduce carbon footprint and environmental impact",
  },
  {
    icon: DollarSign,
    title: "Best Prices",
    description: "Competitive pricing with no hidden fees. Save on every order",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the future of fuel delivery with our premium service
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl group">
              <CardContent className="pt-8 pb-8">
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
