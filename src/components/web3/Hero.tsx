import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroOrb from "@/assets/hero-orb.jpg";

export const Hero = () => {
  return (
    <section className="relative pt-40 pb-24 overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-muted-foreground mb-6">
            <Sparkles className="h-3.5 w-3.5 text-aurora-green" />
            <span>Mainnet v3 — now live</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight">
            The liquidity layer for the <span className="text-gradient">on-chain economy</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            Auroran is a permissionless settlement protocol unifying liquidity across L2s. Stake, swap and build with sub-second finality and near-zero fees.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button variant="aurora" size="lg" className="group">
              Launch App <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="glass" size="lg">Read Whitepaper</Button>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            {[
              { v: "$4.2B", l: "TVL" },
              { v: "1.8M", l: "Wallets" },
              { v: "62", l: "Chains" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-2xl font-bold text-gradient">{s.v}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-10 bg-gradient-aurora opacity-20 blur-3xl rounded-full animate-pulse-slow" />
          <div className="relative aurora-border rounded-3xl overflow-hidden shadow-glow-purple animate-float">
            <img
              src={heroOrb}
              alt="Auroran protocol visualisation"
              width={1536}
              height={1536}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
