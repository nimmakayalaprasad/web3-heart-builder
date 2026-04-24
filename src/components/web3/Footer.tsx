const groups = [
  { title: "Protocol", links: ["Docs", "Whitepaper", "Audits", "Bug bounty"] },
  { title: "Ecosystem", links: ["Builders", "Validators", "Grants", "Brand"] },
  { title: "Community", links: ["Discord", "X / Twitter", "Mirror", "Forum"] },
];

export const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-16">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12">
        <div>
          <div className="flex items-center gap-2 font-display font-bold text-lg mb-4">
            <span className="h-7 w-7 rounded-lg bg-gradient-aurora shadow-glow" />
            Auroran
          </div>
          <p className="text-sm text-muted-foreground max-w-xs">
            The liquidity layer for the on-chain economy.
          </p>
        </div>
        {groups.map((g) => (
          <div key={g.title}>
            <h4 className="font-display font-semibold mb-4 text-sm">{g.title}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {g.links.map((l) => (
                <li key={l}><a href="#" className="hover:text-foreground transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="container mx-auto px-6 mt-12 pt-8 border-t border-border/30 text-xs text-muted-foreground flex justify-between">
        <span>© 2026 Auroran Labs</span>
        <span>Built on chain.</span>
      </div>
    </footer>
  );
};
