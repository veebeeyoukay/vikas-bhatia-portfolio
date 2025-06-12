import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { ChevronDown } from "lucide-react"

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
              <NavigationMenuItem>
                <NavigationMenuLink href="/#why-now" className="text-white hover:text-[hsl(var(--zenity-blue))] transition-colors font-medium">
                  Why now?
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink href="/#executive-summary" className="text-white hover:text-[hsl(var(--zenity-blue))] transition-colors font-medium">
                  Executive Summary
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink href="/#leadership-objectives" className="text-white hover:text-[hsl(var(--zenity-blue))] transition-colors font-medium">
                  Leadership Objectives
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink className="text-white hover:text-[hsl(var(--zenity-blue))] transition-colors">
                  Use Cases
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white hover:text-[hsl(var(--zenity-blue))] transition-colors bg-transparent">
                  Use Cases
                  <ChevronDown className="ml-1 h-4 w-4" />
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="bg-[hsl(var(--zenity-purple-dark))] border border-[hsl(var(--zenity-purple-mid))] rounded-lg p-6 w-96">
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-[hsl(var(--zenity-blue))] mb-2">By Business Need</h4>
                        <div className="grid grid-cols-1 gap-2">
                          <NavigationMenuLink className="text-white hover:text-[hsl(var(--zenity-blue))] text-sm">Generative AI</NavigationMenuLink>
                          <NavigationMenuLink className="text-white hover:text-[hsl(var(--zenity-blue))] text-sm">Citizen Development</NavigationMenuLink>
                          <NavigationMenuLink className="text-white hover:text-[hsl(var(--zenity-blue))] text-sm">Security</NavigationMenuLink>
                          <NavigationMenuLink className="text-white hover:text-[hsl(var(--zenity-blue))] text-sm">Compliance</NavigationMenuLink>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-[hsl(var(--zenity-blue))] mb-2">By Platform</h4>
                        <div className="grid grid-cols-1 gap-2">
                          <NavigationMenuLink className="text-white hover:text-[hsl(var(--zenity-blue))] text-sm">Microsoft 365 Copilot</NavigationMenuLink>
                          <NavigationMenuLink className="text-white hover:text-[hsl(var(--zenity-blue))] text-sm">Power Platform</NavigationMenuLink>
                          <NavigationMenuLink className="text-white hover:text-[hsl(var(--zenity-blue))] text-sm">Salesforce</NavigationMenuLink>
                          <NavigationMenuLink className="text-white hover:text-[hsl(var(--zenity-blue))] text-sm">ChatGPT Enterprise</NavigationMenuLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white hover:text-[hsl(var(--zenity-blue))] transition-colors bg-transparent">
                  Resources
                  <ChevronDown className="ml-1 h-4 w-4" />
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="bg-[hsl(var(--zenity-purple-dark))] border border-[hsl(var(--zenity-purple-mid))] rounded-lg p-6 w-80">
                    <div className="grid grid-cols-1 gap-2">
                      <NavigationMenuLink className="text-white hover:text-[hsl(var(--zenity-blue))] text-sm">Blogs</NavigationMenuLink>
                      <NavigationMenuLink className="text-white hover:text-[hsl(var(--zenity-blue))] text-sm">Events</NavigationMenuLink>
                      <NavigationMenuLink className="text-white hover:text-[hsl(var(--zenity-blue))] text-sm">White Papers</NavigationMenuLink>
                      <NavigationMenuLink className="text-white hover:text-[hsl(var(--zenity-blue))] text-sm">Case Studies</NavigationMenuLink>
                      <NavigationMenuLink className="text-white hover:text-[hsl(var(--zenity-blue))] text-sm">Webinars</NavigationMenuLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white hover:text-[hsl(var(--zenity-blue))] transition-colors bg-transparent">
                  Company
                  <ChevronDown className="ml-1 h-4 w-4" />
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="bg-[hsl(var(--zenity-purple-dark))] border border-[hsl(var(--zenity-purple-mid))] rounded-lg p-6 w-80">
                    <div className="grid grid-cols-1 gap-2">
                      <NavigationMenuLink className="text-white hover:text-[hsl(var(--zenity-blue))] text-sm">About Us</NavigationMenuLink>
                      <NavigationMenuLink className="text-white hover:text-[hsl(var(--zenity-blue))] text-sm">Careers</NavigationMenuLink>
                      <NavigationMenuLink className="text-white hover:text-[hsl(var(--zenity-blue))] text-sm">News</NavigationMenuLink>
                      <NavigationMenuLink className="text-white hover:text-[hsl(var(--zenity-blue))] text-sm">Partners</NavigationMenuLink>
                      <NavigationMenuLink className="text-white hover:text-[hsl(var(--zenity-blue))] text-sm">Contact</NavigationMenuLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink className="text-white hover:text-[hsl(var(--zenity-blue))] transition-colors">
                  Zenity Labs
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              className="border-[hsl(var(--zenity-purple-mid))] text-white hover:bg-[hsl(var(--zenity-purple-mid))] hidden md:inline-flex"
            >
              Login
            </Button>
            <Button
              className="bg-[hsl(var(--zenity-purple-bright))] hover:bg-[hsl(var(--zenity-purple-accent))] text-white"
            >
              Book Demo
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
