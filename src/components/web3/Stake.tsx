import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";

const pools = [
  { asset: "ETH", apy: "5.82%", tvl: "$1.2B", risk: "Low" },
  { asset: "USDC", apy: "8.14%", tvl: "$890M", risk: "Low" },
  { asset: "AUR-ETH LP", apy: "24.6%", tvl: "$312M", risk: "Med" },
  { asset: "stETH", apy: "6.91%", tvl: "$540M", risk: "Low" },
];

export const Stake = () => {
  return (
    <section id="stake" className="py-32 relative">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-sm text-aurora-purple uppercase tracking-[0.3em] mb-4">Earn</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Stake once. <br />Earn across <span className="text-gradient">every chain</span>.
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-md">
            Auto-rebalanced vaults route your capital to the highest-yielding pools — without bridging, without lockups.
          </p>
          <Button variant="aurora" size="lg">Open Vault</Button>
        </div>

        <div className="glass rounded-3xl p-2 shadow-card">
          <div className="rounded-2xl overflow-hidden">
            <div className="grid grid-cols-4 px-6 py-4 text-xs uppercase tracking-wider text-muted-foreground border-b border-border/50">
              <span>Asset</span><span>APY</span><span>TVL</span><span className="text-right">Risk</span>
            </div>
            {pools.map((p) => (
              <div key={p.asset} className="grid grid-cols-4 px-6 py-5 items-center border-b border-border/30 last:border-0 hover:bg-muted/30 transition-colors">
                <span className="font-display font-semibold">{p.asset}</span>
                <span className="text-aurora-green font-semibold flex items-center gap-1">
                  <TrendingUp className="h-3.5 w-3.5" />{p.apy}
                </span>
                <span className="text-muted-foreground">{p.tvl}</span>
                <span className="text-right text-xs">
                  <span className={`px-2 py-1 rounded-full ${p.risk === "Low" ? "bg-aurora-green/10 text-aurora-green" : "bg-aurora-purple/10 text-aurora-purple"}`}>
                    {p.risk}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
