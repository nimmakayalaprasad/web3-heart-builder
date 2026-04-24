import { Button } from "@/components/ui/button";

export const CTA = () => {
  return (
    <section className="py-32">
      <div className="container mx-auto px-6">
        <div className="relative glass rounded-[2.5rem] p-12 md:p-20 text-center overflow-hidden shadow-glow-purple">
          <div className="absolute inset-0 bg-gradient-aurora opacity-10" />
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-64 w-64 rounded-full bg-gradient-aurora opacity-30 blur-3xl" />
          <div className="relative">
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight max-w-3xl mx-auto">
              Build what comes <span className="text-gradient">next</span>.
            </h2>
            <p className="mt-6 text-muted-foreground text-lg max-w-xl mx-auto">
              Join 1,400+ teams building the next generation of on-chain applications on Auroran.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Button variant="aurora" size="lg">Start Building</Button>
              <Button variant="glass" size="lg">Join Discord</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
