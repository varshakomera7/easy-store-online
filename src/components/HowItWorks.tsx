import { MapPin, CreditCard, Truck, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    icon: MapPin,
    title: "Choose Location",
    description: "Enter your delivery address and select your preferred time slot",
  },
  {
    icon: CreditCard,
    title: "Select Fuel Type",
    description: "Pick the fuel grade and quantity you need from our options",
  },
  {
    icon: Truck,
    title: "We Deliver",
    description: "Our certified driver arrives at your location with premium fuel",
  },
  {
    icon: CheckCircle,
    title: "Enjoy & Save",
    description: "Pay securely and enjoy the convenience of doorstep delivery",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get fuel delivered in four simple steps. No hassle, no waiting in lines.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="relative border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <CardContent className="pt-12 pb-8 text-center">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-lg shadow-lg">
                  {index + 1}
                </div>
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
