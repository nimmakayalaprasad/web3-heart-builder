import { Zap, Shield, Layers, Coins, Globe2, Code2 } from "lucide-react";

const features = [
  { icon: Zap, title: "Sub-second finality", desc: "Optimistic settlement with cryptographic guarantees in under 800ms.", span: "md:col-span-2" },
  { icon: Shield, title: "Audited by Trail of Bits", desc: "Five independent security firms. Zero exploits since genesis." },
  { icon: Layers, title: "Omnichain liquidity", desc: "One pool. 62 chains. Atomic routing." },
  { icon: Coins, title: "Real yield", desc: "Earn protocol fees in ETH and stables — no inflationary emissions." },
  { icon: Globe2, title: "Permissionless", desc: "Anyone can list a market, deploy a vault or run a validator.", span: "md:col-span-2" },
  { icon: Code2, title: "Builder-first SDK", desc: "TypeScript, Rust and Solidity SDKs with one-line integrations." },
];

export const Features = () => {
  return (
    <section id="protocol" className="py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <p className="text-sm text-aurora-green uppercase tracking-[0.3em] mb-4">Why Auroran</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
            Infrastructure that <span className="text-gradient">disappears</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className={`glass rounded-3xl p-8 shadow-card hover:shadow-glow transition-all duration-500 group ${f.span ?? ""}`}
            >
              <div className="h-12 w-12 rounded-2xl bg-gradient-aurora/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <f.icon className="h-6 w-6 text-aurora-cyan" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
