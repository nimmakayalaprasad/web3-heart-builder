import { Button } from "@/components/ui/button";

const links = ["Protocol", "Stake", "Ecosystem", "Docs"];

export const Nav = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <nav className="glass rounded-2xl flex items-center justify-between px-5 py-3 shadow-card">
          <a href="#" className="flex items-center gap-2 font-display font-bold text-lg">
            <span className="h-7 w-7 rounded-lg bg-gradient-aurora shadow-glow" />
            <span>Auroran</span>
          </a>
          <ul className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            {links.map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="hover:text-foreground transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex">Sign in</Button>
            <Button variant="aurora" size="sm">Connect Wallet</Button>
          </div>
        </nav>
      </div>
    </header>
  );
};
