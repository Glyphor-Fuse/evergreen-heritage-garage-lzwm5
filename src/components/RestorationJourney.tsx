
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Compare } from "@/components/ui/compare";
import { Badge } from "@/components/ui/badge";

export const RestorationJourney = () => {
  const data = [
    {
      title: "The Teardown",
      content: (
        <div className="space-y-6">
          <p className="text-muted-foreground text-lg leading-relaxed">
            Every restoration begins with discovery. We strip the chassis down to bare metal, cataloging every bolt and assessing decades of wear. This is where the true history of the vehicle is revealed—and where our meticulous planning begins.
          </p>
          <div className="grid grid-cols-1 gap-4">
             <div className="p-4 bg-card/50 rounded-lg border border-border/50">
                <div className="flex items-center gap-3 mb-2">
                    <Badge variant="outline" className="text-primary border-primary">Week 1-3</Badge>
                    <span className="text-sm font-bold text-foreground uppercase tracking-wider">Assessment Phase</span>
                </div>
                <Compare
                    firstImage="/images/engine-clean.png"
                    secondImage="/images/engine-dirty.png"
                    className="w-full h-[300px] md:h-[400px]"
                    slideMode="drag"
                />
                <p className="mt-4 text-xs text-center text-muted-foreground uppercase tracking-widest">Drag to reveal the strip-down</p>
             </div>
          </div>
        </div>
      ),
    },
    {
      title: "Metal & Body",
      content: (
        <div className="space-y-6">
          <p className="text-muted-foreground text-lg leading-relaxed">
            Rust is the enemy of heritage. Our master fabricators excise the cancer of corrosion, welding in new steel and hand-shaping panels until the lines are sharper than factory original.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="aspect-video rounded-lg overflow-hidden border border-border/30">
                <img src="/images/mustang-rusty.png" alt="Before bodywork" className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="aspect-video rounded-lg overflow-hidden border border-border/30">
                <img src="/images/mustang-blue.png" alt="After bodywork" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "The Rebirth",
      content: (
        <div className="space-y-6">
          <p className="text-muted-foreground text-lg leading-relaxed">
            The final assembly. A symphony of chrome, leather, and roaring horsepower. We install the modernized powertrain, stitch the custom interior, and perform the final tune-up.
          </p>
          <div className="p-4 bg-card/50 rounded-lg border border-border/50">
             <Compare
                firstImage="/images/interior-new.png"
                secondImage="/images/interior-old.png"
                className="w-full h-[300px] md:h-[400px]"
                slideMode="hover"
             />
             <p className="mt-4 text-xs text-center text-muted-foreground uppercase tracking-widest">Hover to see the interior transformation</p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="process" className="w-full bg-background relative overflow-hidden">
        {/* Background ambience */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
        
        <Timeline data={data} />
    </section>
  );
};

export default RestorationJourney;
