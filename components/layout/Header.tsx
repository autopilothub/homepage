import Link from "next/link";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/solution", label: "Solution" },
  { href: "/research", label: "Research" },
  { href: "/proof", label: "Proof Ledger" },
  { href: "/about", label: "About" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          AutopilotHub
        </Link>
        <nav className="flex items-center gap-7 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
