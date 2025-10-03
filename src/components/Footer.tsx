import { Fuel } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Fuel className="w-6 h-6 text-accent" />
              <span className="text-xl font-bold">FuelDrop</span>
            </div>
            <p className="text-background/70">
              Premium fuel delivery service bringing convenience to your doorstep.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-background/70">
              <li><a href="#" className="hover:text-accent transition-colors">Fuel Delivery</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Fleet Services</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Emergency Refill</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Subscriptions</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-background/70">
              <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-background/70">
              <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Safety Guidelines</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Refund Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 text-center text-background/70">
          <p>&copy; 2025 FuelDrop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
