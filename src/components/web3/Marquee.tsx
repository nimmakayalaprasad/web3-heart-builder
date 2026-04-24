const partners = [
  "Ethereum", "Arbitrum", "Optimism", "Base", "Polygon", "zkSync",
  "Solana", "Avalanche", "Linea", "Scroll", "Starknet", "Mantle",
];

export const Marquee = () => {
  return (
    <section className="py-12 border-y border-border/50 overflow-hidden">
      <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8">
        Trusted by builders across
      </p>
      <div className="relative">
        <div className="flex gap-16 animate-marquee whitespace-nowrap">
          {[...partners, ...partners].map((p, i) => (
            <span key={i} className="font-display text-2xl font-semibold text-muted-foreground/60 hover:text-foreground transition-colors">
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
