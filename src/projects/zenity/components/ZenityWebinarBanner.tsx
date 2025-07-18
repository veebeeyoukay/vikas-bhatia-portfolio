import { Calendar } from "lucide-react"

const WebinarBanner = () => {
  return (
    <div className="mt-20 bg-[hsl(var(--zenity-purple-mid))]/20 border-b border-[hsl(var(--zenity-purple-mid))]/30">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-center space-x-3">
          <div className="flex items-center space-x-2 text-sm">
            <Calendar className="h-4 w-4 text-[hsl(var(--zenity-blue))]" />
            <span className="text-[hsl(var(--zenity-blue))] font-medium">Live Webinar June 25</span>
          </div>
          <span className="text-white">
            Zenity for ChatGPT Enterprise: Secure, Govern, & Accelerate AI Adoption
          </span>
        </div>
      </div>
    </div>
  )
}

export default WebinarBanner
