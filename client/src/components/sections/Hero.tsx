import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative bg-primary-gradient text-white py-24">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1629295895558-d5a7b507faf3?auto=format&fit=crop&q=80')", 
          filter: "saturate(0.9)" 
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
            Transforming Indian Agriculture Through Technology
          </h1>
          <p className="text-xl mb-8">
            Join our mission to empower farmers with innovative solutions that address the most pressing challenges in Indian agriculture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-gray-900 font-bold py-3 px-8 rounded-md shadow-lg"
            >
              <a href="#problems">
                Explore Challenges
              </a>
            </Button>
            <Button 
              asChild
              size="lg"
              variant="outline"
              className="bg-white hover:bg-gray-100 text-primary font-bold py-3 px-8 rounded-md shadow-lg"
            >
              <a href="#contact">
                Join Our Mission
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
