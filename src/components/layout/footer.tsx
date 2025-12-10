import Link from "next/link"
import { Dribbble, Github, Instagram, Twitter } from "lucide-react"

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
        title: "Categories",
        items: [
            { label: "Productivity", href: "#" },
            { label: "Tech & AI", href: "#" },
            { label: "Growth", href: "#" },
            { label: "Community", href: "/community" },
            { label: "News", href: "/news" },
        ]
    }
]

const socialLinks = [
    { Icon: Twitter, href: "#", label: "Twitter" },
    { Icon: Instagram, href: "#", label: "Instagram" },
    { Icon: Dribbble, href: "#", label: "Dribbble" },
    { Icon: Github, href: "#", label: "Github" },
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
                         <Link key={label} href={href} className="text-muted-foreground hover:text-foreground" aria-label={label}>
                            <Icon className="h-5 w-5" />
                        </Link>
                    ))}
                 </div>
            </div>
        </div>
        <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Hustlerspoint!. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
             <Link href="#" className="hover:text-foreground">Privacy Policy</Link>
             <Link href="#" className="hover:text-foreground">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
