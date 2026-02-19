
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const Footer = () => {
  return (
    <footer className="bg-card pt-20 pb-10 border-t border-border/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          <div>
            <h2 className="text-5xl md:text-7xl font-display font-bold uppercase text-foreground mb-6 leading-none">
              Ready to <br />
              <span className="text-primary">Start?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-md">
              Your dream build is one conversation away. Book a consultation with our master mechanics today.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-foreground font-bold uppercase">Visit the Shop</h4>
                  <p className="text-muted-foreground">1982 Heritage Lane, Detroit, MI</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-foreground font-bold uppercase">Email Us</h4>
                  <p className="text-muted-foreground">builds@evergreenheritage.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-background/50 p-8 rounded-2xl border border-border/30">
            <h3 className="text-xl font-bold text-foreground mb-6 uppercase">Request Consultation</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs uppercase font-bold text-muted-foreground">First Name</label>
                  <Input placeholder="John" className="bg-card border-border/50 focus:border-primary" />
                </div>
                <div className="space-y-2">
                   <label className="text-xs uppercase font-bold text-muted-foreground">Last Name</label>
                  <Input placeholder="Doe" className="bg-card border-border/50 focus:border-primary" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase font-bold text-muted-foreground">Email</label>
                <Input placeholder="john@example.com" type="email" className="bg-card border-border/50 focus:border-primary" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase font-bold text-muted-foreground">Vehicle Info</label>
                <Textarea placeholder="1969 Camaro SS..." className="bg-card border-border/50 focus:border-primary min-h-[100px]" />
              </div>
              <Button size="lg" className="w-full bg-primary text-primary-foreground font-bold uppercase tracking-widest hover:bg-primary/90">
                Send Request
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-border/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 Evergreen Heritage Garage. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm uppercase font-bold">Privacy</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm uppercase font-bold">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
