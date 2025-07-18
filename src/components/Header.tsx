import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink
} from "@/components/ui/navigation-menu"
import { Link, useLocation } from "react-router-dom"

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Services", href: "#services" },
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
                    {item.href.startsWith('/') ? (
                      <Link to={item.href}>{item.label}</Link>
                    ) : (
                      <a href={item.href}>{item.label}</a>
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
