import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink
} from "@/components/ui/navigation-menu"
import { Link } from "react-router-dom"

const ZENITY_NAV_ITEMS = [
  { label: "Executive Summary", href: "#executive-summary" },
  { label: "Zenity History", href: "#zenity-history" },
  { label: "Business Objectives", href: "#business-objectives" },
  { label: "Leadership Objectives", href: "#leadership-objectives" },
  { label: "Zenity CISO", href: "#zenity-ciso" },
  { label: "Vikas's Zenity CISO Plan", href: "#vikas-ciso-plan" },
  { label: "About Vikas", href: "#about-vikas" }
];

const ZenityHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-gray-800">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-8 h-8 bg-white rounded flex items-center justify-center mr-3">
              <span className="text-black font-bold text-lg">Z</span>
            </div>
          </div>

          {/* Navigation */}
          <NavigationMenu>
            <NavigationMenuList className="space-x-6">
              {ZENITY_NAV_ITEMS.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink 
                    asChild
                    className="text-white hover:text-purple-300 transition-colors font-medium text-sm"
                  >
                    <a href={item.href}>{item.label}</a>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Action Button */}
          <div className="flex items-center">
            <Button
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2"
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

export default ZenityHeader 