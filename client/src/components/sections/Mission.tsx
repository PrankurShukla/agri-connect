import { Card } from "@/components/ui/card";

const stats = [
  { value: "250K+", label: "Farmers to Impact" },
  { value: "11", label: "Innovative Solutions" },
  { value: "20+", label: "States Covered" },
  { value: "15+", label: "Technology Partners" },
];

export default function Mission() {
  return (
    <section id="mission" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-accent font-semibold">OUR MISSION</span>
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mt-2 mb-6">
              Bridging the Gap Between Technology and Agriculture
            </h2>
            <p className="text-gray-700 mb-6">
              We are building a platform that connects farmers with innovative solutions to overcome challenges that have affected Indian agriculture for generations. Our startup aims to enhance productivity, increase income, and improve the quality of life for farmers across India.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-light p-4">
                  <div className="text-primary text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=600&h=450" 
              alt="Farmers and tech professionals collaborating" 
              className="rounded-xl shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
