import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Linkedin, Instagram, Layers } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Footer() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email is required",
        description: "Please enter your email address to subscribe",
        variant: "destructive",
      });
      return;
    }

    // In a real application, this would send the form data to a server
    toast({
      title: "Thank you for subscribing!",
      description: "You'll receive our newsletter updates soon.",
      variant: "default",
    });
    
    setEmail("");
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold font-poppins mb-4">AgriConnect</h3>
            <p className="text-gray-400 mb-4">
              Transforming Indian agriculture through innovative technology solutions that address the most pressing challenges faced by farmers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#mission" className="text-gray-400 hover:text-white">Our Mission</a></li>
              <li><a href="#problems" className="text-gray-400 hover:text-white">Challenges</a></li>
              <li><a href="#solutions" className="text-gray-400 hover:text-white">Our Solutions</a></li>
              <li><a href="#team" className="text-gray-400 hover:text-white">Team</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">Join Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li><a href="#solutions" className="text-gray-400 hover:text-white">Equipment Sharing</a></li>
              <li><a href="#solutions" className="text-gray-400 hover:text-white">IoT Irrigation</a></li>
              <li><a href="#solutions" className="text-gray-400 hover:text-white">Digital Marketplace</a></li>
              <li><a href="#solutions" className="text-gray-400 hover:text-white">Cold Storage Network</a></li>
              <li><a href="#solutions" className="text-gray-400 hover:text-white">More Solutions</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Stay updated with our latest developments and agricultural insights.</p>
            <form className="flex" onSubmit={handleNewsletterSubmit}>
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-r-none bg-gray-800 text-white border-gray-700 focus:ring-accent"
              />
              <Button 
                type="submit" 
                className="bg-accent hover:bg-accent/90 text-gray-900 font-medium rounded-l-none"
              >
                <Layers className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} AgriConnect. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-gray-400">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-gray-400">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-gray-400">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
