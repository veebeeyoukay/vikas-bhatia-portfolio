import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink
} from "@/components/ui/navigation-menu"
import { Link, useLocation } from "react-router-dom"
import { scrollToSection } from "@/lib/utils"
import resumePDF from "@/assets/Vikas Bhatia-Resume-External-July 2025.pdf"

const NAV_ITEMS = [
  // { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Resume", href: resumePDF, isExternal: true },
  // { label: "Previous Experience", href: "#expertise" },
  // { label: "Services", href: "#services" },
  { label: "Credentials", href: "#credentials" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "#contact" }
];

const Header = () => {
  const location = useLocation();
  const isProjectPage = location.pathname.startsWith('/projects/');

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-[hsl(var(--zenity-purple-mid))]/30">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <span className="text-white font-bold text-xl">
                {isProjectPage ? 'VB' : 'Vikas Bhatia'}
              </span>
            </Link>
          </div>

          {/* Navigation */}
          <NavigationMenu>
            <NavigationMenuList className="space-x-8">
              {NAV_ITEMS.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink 
                    asChild
                    className="text-white hover:text-[hsl(var(--zenity-blue))] transition-colors font-medium"
                  >
                    {item.isExternal ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer">
                        {item.label}
                      </a>
                    ) : item.href.startsWith('/') ? (
                      <Link to={item.href}>{item.label}</Link>
                    ) : (
                      <button 
                        onClick={() => scrollToSection(item.href.replace('#', ''))}
                        className="text-white hover:text-[hsl(var(--zenity-blue))] transition-colors font-medium bg-transparent border-none cursor-pointer"
                      >
                        {item.label}
                      </button>
                    )}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Button
              className="bg-[hsl(var(--zenity-purple-bright))] hover:bg-[hsl(var(--zenity-purple-accent))] text-white"
              onClick={() => window.open('https://app.usemotion.com/meet/vikas-bhatia/JP-meeting', '_blank')}
            >
              Schedule Meeting
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
