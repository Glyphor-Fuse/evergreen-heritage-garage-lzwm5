
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

const teamMembers = [
  {
    name: "Frank 'Doc' Miller",
    role: "Master Mechanic",
    bio: "40 years of breathing life into dead engines. If it has pistons, he can fix it.",
    image: "/images/team-garage.png", 
  },
  {
    name: "Sarah Jenkins",
    role: "Lead Fabricator",
    bio: "An artist with a welding torch. She shapes steel like it's clay.",
    image: "/images/team-garage.png", // Reusing primarily for budget compliance
  },
  {
    name: "David Ross",
    role: "Paint Specialist",
    bio: "Obsessed with the perfect finish. 12 coats, hand-sanded, mirror shine.",
    image: "/images/team-garage.png", // Reusing primarily for budget compliance
  },
];

export const Team = () => {
  return (
    <section id="team" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground uppercase mb-4">
            The Mechanics
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Restoration is equal parts engineering and art. Meet the hands that will build your dream.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, idx) => (
            <CardContainer key={idx} className="inter-var">
              <CardBody className="bg-card relative group/card dark:hover:shadow-2xl dark:hover:shadow-primary/[0.1] border-border/[0.1] w-auto sm:w-[20rem] h-auto rounded-xl p-6 border">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-foreground font-display uppercase tracking-wide"
                >
                  {member.name}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-primary text-sm max-w-sm mt-2 font-medium uppercase tracking-wider"
                >
                  {member.role}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <div className="w-full h-60 rounded-xl group-hover/card:shadow-xl overflow-hidden">
                    <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover grayscale group-hover/card:grayscale-0 transition-all duration-500"
                    />
                  </div>
                </CardItem>
                <CardItem
                  translateZ={50}
                  className="text-muted-foreground text-sm mt-6 leading-relaxed"
                >
                  {member.bio}
                </CardItem>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
