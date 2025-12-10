import Link from "next/link"
import { Mountain } from "lucide-react"

const navItems = [
    { href: "/blog", label: "Blog" },
    { href: "/stories", label: "Stories" },
    { href: "/services", label: "Services" },
    { href: "/news", label: "News" },
    { href: "/community", label: "Community" },
]

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container py-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <Mountain className="h-6 w-6 text-primary" />
            <span className="font-headline text-lg font-bold">Hustlerspoint</span>
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Hustlerspoint. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
