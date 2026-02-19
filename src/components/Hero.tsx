
import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden bg-background">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src="/videos/hero-restore.mp4" type="video/mp4" />
        </video>
        {/* Cinematic Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
        {/* Grain Overlay */}
        <div className="absolute inset-0 z-20 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="relative z-30 container mx-auto h-full flex flex-col justify-center px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="inline-block mb-4 px-4 py-4.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-md">
            <span className="text-primary font-medium tracking-wider uppercase text-xs md:text-sm">
              Est. 1982 — Evergreen Heritage Garage
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-display font-bold uppercase text-foreground leading-[0.9] tracking-tight mb-8">
            Resurrecting <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              American Steel
            </span>
          </h1>
          
          <p className="text-lg md:text-2xl text-muted-foreground max-w-2xl mb-10 leading-relaxed font-light">
            We don't just fix cars. We rebuild memories, bolt by bolt, returning legendary machines to their rightful glory.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 h-14 rounded-full font-bold uppercase tracking-wide">
              Start Your Build
            </Button>
            <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-card/50 backdrop-blur-sm text-lg px-8 h-14 rounded-full uppercase tracking-wide">
              View Our Process
            </Button>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-muted-foreground/60">Scroll to Explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
