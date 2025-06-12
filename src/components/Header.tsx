import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink
} from "@/components/ui/navigation-menu"

const NAV_ITEMS = [
  { label: "Executive Summary", href: "/#executive-summary" },
  { label: "Zenity History", href: "/#zenity-history" },
  { label: "Business Objectives", href: "/#business-objectives" },
  { label: "Leadership Objectives", href: "/#leadership-objectives" },
  { label: "Zenity CISO", href: "/#zenity-ciso" },
  { label: "Vikas's Zenity CISO Plan", href: "/#vikas-ciso-plan" },
  { label: "About Vikas", href: "/#about-vikas" }
];

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-[hsl(var(--zenity-purple-mid))]/30">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/">
              <img
                src="https://ext.same-assets.com/2030829628/3546308668.svg"
                alt="Zenity"
                className="h-8 w-auto"
              />
            </a>
          </div>

          {/* Navigation */}
          <NavigationMenu>
            <NavigationMenuList className="space-x-8">
              {NAV_ITEMS.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink href={item.href} className="text-white hover:text-[hsl(var(--zenity-blue))] transition-colors font-medium">
                    {item.label}
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
