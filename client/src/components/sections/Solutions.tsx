import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

type Solution = {
  id: number;
  title: string;
  description: string;
  problem: string;
  impact: string;
  imageSrc: string;
  imageAlt: string;
};

// Main featured solutions - these are the primary solutions we highlight
const solutions: Solution[] = [
  {
    id: 1,
    title: "Shared Equipment Platform",
    description: "App-based system for small farmers to rent equipment like tractors, drones, and threshers at affordable rates.",
    problem: "Problem #1: Fragmented and small land holdings make it uneconomical to own large equipment.",
    impact: "Currently in development",
    imageSrc: "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=400&h=400",
    imageAlt: "Agricultural equipment sharing service",
  },
  {
    id: 2,
    title: "IoT Irrigation Solutions",
    description: "Smart irrigation systems with weather forecasting, soil moisture sensors, and solar-powered pumps.",
    problem: "Problem #2: Dependence on monsoon and inadequate irrigation leading to crop failures.",
    impact: "30% water usage reduction",
    imageSrc: "https://img.freepik.com/premium-photo/solarpowered-irrigation-system-wallpaper_1257317-15570.jpg?auto=format&fit=crop&w=400&h=400",
    imageAlt: "Smart irrigation system with solar panels",
  },
  {
    id: 3,
    title: "Digital Input Marketplace",
    description: "E-commerce platform for verified seeds, fertilizers, and pesticides delivered directly to farmers' villages.",
    problem: "Problem #3: Lack of access to quality agricultural inputs and exploitation by local vendors.",
    impact: "15-20% cost savings for farmers",
    imageSrc: "https://th.bing.com/th/id/OIP.0fp6jYqFxUGAc2zvS1P8qwHaEH?cb=iwp2&rs=1&pid=ImgDetMain?auto=format&fit=crop&w=400&h=400",
    imageAlt: "Digital marketplace for agricultural inputs",
  },
  {
    id: 4,
    title: "Digital Mandi Platform",
    description: "Connects farmers directly with businesses and consumers, eliminating middlemen and increasing profits.",
    problem: "Problem #4: Low market prices and exploitation by middlemen reducing farmer incomes.",
    impact: "Up to 40% increase in farmer revenue",
    imageSrc: "https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?auto=format&fit=crop&w=400&h=400",
    imageAlt: "Direct farm-to-consumer digital marketplace",
  },
  {
    id: 5,
    title: "Cold Storage Network",
    description: "Pay-per-use cold storage facilities in rural areas to reduce post-harvest losses with mobile app booking.",
    problem: "Problem #5: Post-harvest losses of 20-30% due to poor storage and transport facilities.",
    impact: "25% reduction in post-harvest losses",
    imageSrc: "https://th.bing.com/th/id/OIP.cmHA3zItO5KibA4HXJsrYgHaE8?cb=iwp2&rs=1&pid=ImgDetMain?auto=format&fit=crop&w=400&h=400",
    imageAlt: "Cold storage facility for agricultural produce",
  },
  {
    id: 6,
    title: "Digital Financing Platform",
    description: "Connecting farmers with banks and NBFCs for low-interest loans using digital credit scoring based on farm data.",
    problem: "Problem #6: Difficult access to formal credit and high interest rates from informal lenders.",
    impact: "50% reduction in interest rates compared to informal sources",
    imageSrc: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?auto=format&fit=crop&w=400&h=400",
    imageAlt: "Digital financing for farmers",
  },
];

// Additional solutions we're developing for the remaining problems
const miniSolutions = [
  { 
    icon: "🛡️", 
    title: "Microinsurance", 
    description: "Weather and yield risk protection with automated claims using satellite data",
    problem: "Problem #7: Insufficient crop insurance coverage and delayed claims"
  },
  { 
    icon: "🎓", 
    title: "Farmer Education", 
    description: "Multilingual mobile learning platform with audio/video tutorials from agricultural experts",
    problem: "Problem #8: Lack of technical knowledge and awareness of modern farming techniques"
  },
  { 
    icon: "🌤️", 
    title: "Climate Advisory", 
    description: "AI-powered climate-resilient farming guidance and crop selection based on forecasts",
    problem: "Problem #9: Climate change and unpredictable weather patterns"
  },
  { 
    icon: "👥", 
    title: "Rural Labor Platform", 
    description: "Connect farms with local laborers during sowing, harvesting and other peak seasons",
    problem: "Problem #10: Labor shortage due to urban migration of youth"
  },
  { 
    icon: "📝", 
    title: "Subsidy Assistant", 
    description: "Simplifies access to government agriculture schemes with eligibility checks and application help",
    problem: "Problem #11: Complicated government schemes that are difficult to navigate"
  }
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold">OUR APPROACH</span>
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mt-2 mb-6">
            Innovative Solutions We're Building
          </h2>
          <p className="text-gray-700">
            We're developing technology-driven solutions that address each of the critical challenges faced by Indian farmers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {solutions.map((solution) => (
            <Card key={solution.id} className="bg-light rounded-xl overflow-hidden shadow-md hover:shadow-lg transition fade-in">
              <div className="grid md:grid-cols-5">
                <div className="md:col-span-2">
                  <img 
                    src={solution.imageSrc} 
                    alt={solution.imageAlt} 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="md:col-span-3 p-6">
                  <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
                  <p className="text-gray-700 mb-4">{solution.description}</p>
                  <div className="bg-white rounded-lg p-3 mb-4">
                    <h4 className="font-semibold text-primary mb-1">Problem Addressed</h4>
                    <p className="text-sm text-gray-700">{solution.problem}</p>
                  </div>
                  <div className="flex items-center text-primary">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    <span className="font-medium">{solution.impact}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold font-poppins mb-6">Additional Solutions for All Challenges</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {miniSolutions.map((solution, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="text-primary text-2xl mb-3">{solution.icon}</div>
                <h4 className="font-semibold mb-2 text-lg">{solution.title}</h4>
                <p className="text-sm text-gray-600 mb-3">{solution.description}</p>
                <div className="bg-light p-2 rounded text-xs text-gray-700">{solution.problem}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
