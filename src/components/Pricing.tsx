import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const fuelTypes = [
  {
    name: "Regular Unleaded",
    price: "3.49",
    features: [
      "87 Octane Rating",
      "Certified Quality",
      "Same-day Delivery",
      "Minimum 10 gallons",
    ],
  },
  {
    name: "Premium Unleaded",
    price: "3.89",
    features: [
      "91-93 Octane Rating",
      "Enhanced Performance",
      "Priority Delivery",
      "Minimum 10 gallons",
    ],
    popular: true,
  },
  {
    name: "Diesel",
    price: "3.79",
    features: [
      "Ultra-Low Sulfur",
      "High Cetane Number",
      "Fleet Discounts",
      "Minimum 15 gallons",
    ],
  },
];

const Pricing = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the fuel grade that suits your needs. No hidden charges, just honest prices.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {fuelTypes.map((fuel, index) => (
            <Card 
              key={index} 
              className={`relative border-2 transition-all duration-300 hover:shadow-2xl ${
                fuel.popular 
                  ? 'border-accent scale-105 shadow-xl' 
                  : 'border-border hover:border-primary/50'
              }`}
            >
              {fuel.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1 bg-accent text-accent-foreground rounded-full text-sm font-semibold shadow-lg">
                  Most Popular
                </div>
              )}
              <CardHeader className="text-center pb-8 pt-8">
                <CardTitle className="text-2xl mb-4">{fuel.name}</CardTitle>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold text-primary">${fuel.price}</span>
                  <span className="text-muted-foreground">/gallon</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {fuel.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
                <Button 
                  variant={fuel.popular ? "hero" : "default"} 
                  className="w-full mt-6"
                  size="lg"
                >
                  Order Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center text-muted-foreground">
          <p>* Prices may vary based on location and market conditions. Delivery fee of $4.99 applies.</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
