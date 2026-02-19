
import React from "react";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        "I brought them a rust bucket that had been in my grandfather's barn for 40 years. They didn't just restore a car; they restored a piece of my family history. The attention to detail is obsessive.",
      name: "James Sterling",
      designation: "1967 Mustang Fastback Owner",
      src: "/images/mustang-blue.png", // Reusing budget image for context
    },
    {
      quote:
        "The team at Evergreen understands that these aren't just machines. They communicated every step of the way. The final reveal brought tears to my eyes.",
      name: "Elena Rodriguez",
      designation: "1958 Corvette C1 Owner",
      src: "/images/interior-new.png", // Reusing budget image
    },
    {
      quote:
        "World-class craftsmanship. I've been to shops all over the country, but the metalwork and paint finish here is on another level. Worth every penny.",
      name: "Marcus Chen",
      designation: "Collector",
      src: "/images/engine-clean.png", // Reusing budget image
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-card/30 relative overflow-hidden">
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
        
        <div className="container mx-auto px-6 mb-12 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase text-foreground mb-4">
                Client Stories
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto" />
        </div>
        
        <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
    </section>
  );
};

export default TestimonialsSection;
