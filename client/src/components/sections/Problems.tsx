import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PieChart, CloudRain, Sprout, BadgeDollarSign, Warehouse, BanknoteIcon } from "lucide-react";

type Problem = {
  id: number;
  title: string;
  description: string;
  impact: string;
  icon: React.ReactNode;
};

const problems: Problem[] = [
  {
    id: 1,
    title: "Fragmented Land Holdings",
    description: "86% of Indian farmers are small and marginal, owning less than 2 hectares of land.",
    impact: "Difficult to use machinery, less bargaining power",
    icon: <PieChart className="h-5 w-5" />,
  },
  {
    id: 2,
    title: "Monsoon Dependence",
    description: "Over 50% of the land is rain-fed, and climate change is making rainfall erratic.",
    impact: "Crop failure due to drought or floods",
    icon: <CloudRain className="h-5 w-5" />,
  },
  {
    id: 3,
    title: "Poor Quality Inputs",
    description: "Farmers rely on local vendors who may sell substandard or overpriced inputs.",
    impact: "Low yield, increased pest damage",
    icon: <Sprout className="h-5 w-5" />,
  },
  {
    id: 4,
    title: "Middlemen Exploitation",
    description: "Farmers often sell through APMC mandis or local traders, earning minimal profit.",
    impact: "Low income despite good harvests",
    icon: <BadgeDollarSign className="h-5 w-5" />,
  },
  {
    id: 5,
    title: "Post-Harvest Losses",
    description: "Around 20-30% of crops are lost due to poor storage and transport facilities.",
    impact: "Wasted effort and reduced income",
    icon: <Warehouse className="h-5 w-5" />,
  },
  {
    id: 6,
    title: "Credit Accessibility",
    description: "Formal credit is hard to get. Informal lenders charge high interest rates.",
    impact: "Debt cycles and inability to invest",
    icon: <BanknoteIcon className="h-5 w-5" />,
  },
];

export default function Problems() {
  return (
    <section id="problems" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold">CHALLENGES WE ADDRESS</span>
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mt-2 mb-6">
            Critical Problems Faced by Indian Farmers
          </h2>
          <p className="text-gray-700">
            Indian farmers face numerous challenges that limit their productivity and income. We've identified 11 key areas where technology can make a significant difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem) => (
            <Card key={problem.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition fade-in">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-primary/10 text-primary rounded-full w-10 h-10 flex items-center justify-center mr-3">
                    {problem.icon}
                  </div>
                  <h3 className="font-bold text-xl">{problem.title}</h3>
                </div>
                <p className="text-gray-700 mb-3">{problem.description}</p>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="text-warning mr-2">⚠</span>
                  <span>{problem.impact}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button 
            asChild
            className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-md shadow-lg"
          >
            <a href="#solutions">
              See Our Solutions
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
