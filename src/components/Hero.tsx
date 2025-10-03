import { Button } from "@/components/ui/button";
import { Fuel, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-fuel-delivery.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(10, 50, 100, 0.9) 0%, rgba(10, 50, 100, 0.7) 100%), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30 mb-6">
          <Fuel className="w-4 h-4 text-accent" />
          <span className="text-sm font-medium text-white">Fast & Reliable Fuel Delivery</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Fuel Delivered to<br />
          <span className="bg-gradient-to-r from-accent to-accent-glow bg-clip-text text-transparent">
            Your Doorstep
          </span>
        </h1>
        
        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          Skip the gas station. Get premium quality fuel delivered directly to your location in minutes. Safe, convenient, and always on time.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg" className="text-lg">
            Order Fuel Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button variant="heroPrimary" size="lg" className="text-lg">
            Learn More
          </Button>
        </div>
        
        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="backdrop-blur-md bg-white/10 rounded-lg p-6 border border-white/20">
            <div className="text-4xl font-bold text-accent mb-2">10K+</div>
            <div className="text-white/80">Happy Customers</div>
          </div>
          <div className="backdrop-blur-md bg-white/10 rounded-lg p-6 border border-white/20">
            <div className="text-4xl font-bold text-accent mb-2">24/7</div>
            <div className="text-white/80">Available Service</div>
          </div>
          <div className="backdrop-blur-md bg-white/10 rounded-lg p-6 border border-white/20">
            <div className="text-4xl font-bold text-accent mb-2">30 Min</div>
            <div className="text-white/80">Average Delivery</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
