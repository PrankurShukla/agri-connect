import { Card, CardContent } from "@/components/ui/card";

type ImpactStat = {
  value: string;
  description: string;
};

const impactStats: ImpactStat[] = [
  {
    value: "40%",
    description: "Potential income increase for farmers using our digital marketplace",
  },
  {
    value: "30%",
    description: "Reduction in water usage through smart irrigation solutions",
  },
  {
    value: "25%",
    description: "Decrease in post-harvest losses through our storage network",
  },
];

export default function Impact() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold">IMPACT</span>
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mt-2 mb-6">
            The Difference We're Making
          </h2>
          <p className="opacity-90">
            Our solutions are designed to create meaningful, measurable impact for Indian farmers and rural communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {impactStats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
              <div className="text-4xl font-bold text-accent mb-2">{stat.value}</div>
              <p>{stat.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold font-poppins text-center mb-10">
            Hear From Our Community
          </h3>
          
          <Card className="bg-white/10 rounded-xl backdrop-blur-sm border-0">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <img 
                  src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=150&h=150" 
                  alt="Indian farmer testimonial" 
                  className="rounded-full w-24 h-24 object-cover"
                />
                <div>
                  <p className="italic font-merriweather mb-4">
                    "The equipment sharing platform has changed everything for me. I could never afford my own tractor, but now I can access one whenever needed. My productivity has doubled and I'm spending less on manual labor."
                  </p>
                  <div className="font-semibold">Rajesh Patel</div>
                  <div className="text-sm opacity-80">Small farmer, Gujarat (Future user)</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
