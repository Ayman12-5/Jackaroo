import { Link } from "react-router-dom"
import { Gamepad2, Twitter, Github, DiscIcon as Discord } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Gamepad2 className="h-5 w-5" />
              </div>
              <span className="font-display text-xl font-bold tracking-tight">Jackaroo Arena</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              The premium Jackaroo game platform. Play with friends, challenge AI, and climb the leaderboard.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Discord className="h-5 w-5" />
                <span className="sr-only">Discord</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-display font-semibold">Play</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/play" className="hover:text-primary transition-colors">Play Now</Link></li>
              <li><Link to="/play/ai" className="hover:text-primary transition-colors">Play vs AI</Link></li>
              <li><Link to="/play/multiplayer" className="hover:text-primary transition-colors">Multiplayer</Link></li>
              <li><Link to="/leaderboard" className="hover:text-primary transition-colors">Leaderboard</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-display font-semibold">Learn</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/how-to-play" className="hover:text-primary transition-colors">How to Play</Link></li>
              <li><Link to="/rules" className="hover:text-primary transition-colors">Rules & Cards</Link></li>
              <li><Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-display font-semibold">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Jackaroo Arena. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Designed for strategic minds.
          </p>
        </div>
      </div>
    </footer>
  )
}
