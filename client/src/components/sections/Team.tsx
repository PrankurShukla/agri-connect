import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Twitter, Github, Globe } from "lucide-react";

type TeamMember = {
  name: string;
  role: string;
  bio: string;
  imageSrc: string;
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    website?: string;
  };
};

const teamMembers: TeamMember[] = [
  {
    name: "Vikram Sharma",
    role: "Founder & CEO",
    bio: "Former agricultural extension officer with 10+ years of experience working with rural farming communities.",
    imageSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Priya Mehta",
    role: "CTO",
    bio: "Tech veteran with previous experience at leading agricultural technology startups in India and globally.",
    imageSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150",
    social: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Dr. Arjun Singh",
    role: "Agricultural Expert",
    bio: "Ph.D. in Agricultural Sciences with research focus on sustainable farming practices for small landholders.",
    imageSrc: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150",
    social: {
      linkedin: "#",
      website: "#",
    },
  },
];

export default function Team() {
  return (
    <section id="team" className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold">OUR TEAM</span>
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mt-2 mb-6">
            The Minds Behind AgriConnect
          </h2>
          <p className="text-gray-700">
            We're a passionate team of technologists, agricultural experts, and social entrepreneurs committed to transforming Indian agriculture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition fade-in">
              <CardContent className="p-6 text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                  <img 
                    src={member.imageSrc} 
                    alt={`${member.name}, ${member.role}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                <p className="text-gray-600 mb-3">{member.role}</p>
                <p className="text-gray-700 mb-4 text-sm">{member.bio}</p>
                <div className="flex justify-center space-x-4">
                  {member.social.linkedin && (
                    <a href={member.social.linkedin} className="text-gray-600 hover:text-primary">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a href={member.social.twitter} className="text-gray-600 hover:text-primary">
                      <Twitter className="h-5 w-5" />
                    </a>
                  )}
                  {member.social.github && (
                    <a href={member.social.github} className="text-gray-600 hover:text-primary">
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                  {member.social.website && (
                    <a href={member.social.website} className="text-gray-600 hover:text-primary">
                      <Globe className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#contact" 
            className="inline-block bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-md shadow-lg transition"
          >
            Join Our Team
          </a>
        </div>
      </div>
    </section>
  );
}
