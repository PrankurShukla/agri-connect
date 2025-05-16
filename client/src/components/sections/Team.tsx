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
    name: "Prankur Shukla",
    role: "Founder & CEO",
    bio: "Like to solve challengin real world problems using technology.",
    imageSrc: "https://res.cloudinary.com/dwalwid2h/image/upload/v1745081304/hxpasziowpauxnrma7yh.jpg?auto=format&fit=crop&w=150&h=150",
    social: {
      linkedin: "https://in.linkedin.com/in/prankur-shukla-07bb18241",
      twitter: "#",
    },
  },
  {
    name: "Mubashir Shariq",
    role: "CTO",
    bio: "Tech veteran with previous experience at leading  technology startups in India and globally.",
    imageSrc: "https://res.cloudinary.com/dwalwid2h/image/upload/v1747386000/Screenshot_2025-05-16_142918_gimbme.png?auto=format&fit=crop&w=150&h=150",
    social: {
      linkedin: "https://www.linkedin.com/in/mubashir-shariq-5953a4225",
      github: "#",
    },
  },
  {
    name: "Vikesh Prem Sharma",
    role: "Founding Engineer",
    bio: "Expert in doing fundamental research and deciding the best tech stack to deal with innovative solutions in the agriculture field.",
    imageSrc: "https://res.cloudinary.com/dwalwid2h/image/upload/v1747386197/Screenshot_2025-05-16_143259_lcg6hf.png?auto=format&fit=crop&w=150&h=150",
    social: {
      linkedin: "https://www.linkedin.com/in/vikashsprem/",
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
