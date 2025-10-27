import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Link, useLocation } from "react-router-dom"
import { scrollToSection } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import resumePDF from "@/assets/Vikas Bhatia-Resume-External-July 2025.pdf"

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Resume", href: resumePDF, isExternal: true },
  { label: "Credentials", href: "#credentials" },
  { label: "Projects", href: "/projects" },
  { label: "VikasGPT", href: "/vikasgpt" },
  { label: "SOC2", href: "/soc2" },
  { label: "Dad Jokes", href: "/dad-jokes" }
];

const Header = () => {
  const location = useLocation();
  const isProjectPage = location.pathname.startsWith('/projects/');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (item: typeof NAV_ITEMS[0]) => {
    if (item.isExternal) {
      window.open(item.href, '_blank');
    } else if (item.href.startsWith('/')) {
      setMobileMenuOpen(false);
    } else {
      scrollToSection(item.href.replace('#', ''));
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-[hsl(var(--zenity-purple-mid))]/30">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>
              <span className="text-white font-bold text-lg sm:text-xl">
                {isProjectPage ? 'VB' : 'Vikas Bhatia'}
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {NAV_ITEMS.map((item) => (
              <div key={item.href}>
                {item.isExternal ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[hsl(var(--zenity-blue))] transition-colors font-medium"
                  >
                    {item.label}
                  </a>
                ) : item.href.startsWith('/') ? (
                  <Link
                    to={item.href}
                    className={item.label === "Dad Jokes" ? "text-red-500 hover:text-red-400 transition-colors font-medium" : "text-white hover:text-[hsl(var(--zenity-blue))] transition-colors font-medium"}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    onClick={() => scrollToSection(item.href.replace('#', ''))}
                    className="text-white hover:text-[hsl(var(--zenity-blue))] transition-colors font-medium bg-transparent border-none cursor-pointer"
                  >
                    {item.label}
                  </button>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Action Button */}
          <div className="hidden lg:flex items-center">
            <Button
              className="bg-[hsl(var(--zenity-purple-bright))] hover:bg-[hsl(var(--zenity-purple-accent))] text-white"
              onClick={() => window.open('https://app.usemotion.com/meet/vikas-bhatia/JP-meeting', '_blank')}
            >
              Schedule Meeting
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-[hsl(var(--zenity-purple-mid))]/30 pt-4">
            <nav className="flex flex-col space-y-3">
              {NAV_ITEMS.map((item) => (
                <div key={item.href}>
                  {item.isExternal ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-[hsl(var(--zenity-blue))] transition-colors font-medium py-2 block"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ) : item.href.startsWith('/') ? (
                    <Link
                      to={item.href}
                      className={item.label === "Dad Jokes" ? "text-red-500 hover:text-red-400 transition-colors font-medium py-2 block" : "text-white hover:text-[hsl(var(--zenity-blue))] transition-colors font-medium py-2 block"}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleNavClick(item)}
                      className="text-white hover:text-[hsl(var(--zenity-blue))] transition-colors font-medium bg-transparent border-none cursor-pointer py-2 w-full text-left"
                    >
                      {item.label}
                    </button>
                  )}
                </div>
              ))}

              {/* Mobile Schedule Meeting Button */}
              <Button
                className="bg-[hsl(var(--zenity-purple-bright))] hover:bg-[hsl(var(--zenity-purple-accent))] text-white w-full mt-4"
                onClick={() => {
                  window.open('https://app.usemotion.com/meet/vikas-bhatia/JP-meeting', '_blank');
                  setMobileMenuOpen(false);
                }}
              >
                Schedule Meeting
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header