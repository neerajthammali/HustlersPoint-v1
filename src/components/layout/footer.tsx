import Link from "next/link"
import { Github, Instagram, Globe } from "lucide-react"

const footerNav = [
    {
        title: "Navigation",
        items: [
            { label: "Home", href: "/" },
            { label: "Articles", href: "/blog" },
            { label: "Stories", href: "/stories" },
            { label: "Services", href: "/services" },
        ]
    },
    {
        title: "Company",
        items: [
            { label: "About Us", href: "/about" },
            { label: "Contact", href: "/contact" },
            { label: "Submit", href: "/submit" },
        ]
    }
]

const socialLinks = [
    { Icon: Github, href: "https://github.com/neerajthammali", label: "Github" },
    { Icon: Instagram, href: "https://instagram.com/neerajthammali", label: "Instagram" },
    { Icon: Globe, href: "https://neerajthammmali.vercel.app/", label: "Portfolio" },
]


export function Footer() {
  return (
    <footer className="bg-muted/50 pt-12">
      <div className="container pb-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="grid grid-cols-2 gap-8 col-span-2">
                {footerNav.map(section => (
                    <div key={section.title}>
                        <h3 className="font-semibold text-foreground">{section.title}</h3>
                        <ul className="mt-4 space-y-2">
                        {section.items.map(item => (
                            <li key={item.label}>
                                <Link href={item.href} className="text-sm text-muted-foreground hover:text-foreground">
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div>
                 <h3 className="font-semibold text-foreground">Connect</h3>
                 <div className="mt-4 flex space-x-4">
                    {socialLinks.map(({Icon, href, label}) => (
                         <Link key={label} href={href} className="text-muted-foreground hover:text-foreground" aria-label={label} target="_blank" rel="noopener noreferrer">
                            <Icon className="h-5 w-5" />
                        </Link>
                    ))}
                 </div>
            </div>
        </div>
        <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>
            Built by <a href="https://neerajthammmali.vercel.app/" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-foreground">Neeraj Thammali</a>.
            © {new Date().getFullYear()} All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
             <Link href="/privacy" className="hover:text-foreground">Privacy Policy</Link>
             <Link href="/terms" className="hover:text-foreground">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
