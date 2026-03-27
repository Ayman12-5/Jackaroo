import { PageHeader } from "../components/layout/PageHeader"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Link } from "react-router-dom"
import { Bot, Users, Globe, Trophy, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export function Play() {
  const modes = [
    {
      title: "Play vs AI",
      description: "Practice your strategies against our advanced bots. Perfect for learning or warming up.",
      icon: Bot,
      href: "/play/ai",
      color: "text-blue-400",
      bg: "bg-blue-400/10",
      border: "hover:border-blue-400/50",
      cta: "Start Practice"
    },
    {
      title: "Multiplayer",
      description: "Join a public lobby or create a private room to play with friends.",
      icon: Users,
      href: "/play/multiplayer",
      color: "text-orange-400",
      bg: "bg-orange-400/10",
      border: "hover:border-orange-400/50",
      cta: "Find Match",
      badge: "Coming Soon"
    },
    {
      title: "Ranked Arena",
      description: "Compete against players of similar skill. Climb the leaderboard and earn seasonal rewards.",
      icon: Trophy,
      href: "/play/multiplayer?mode=ranked",
      color: "text-purple-400",
      bg: "bg-purple-400/10",
      border: "hover:border-purple-400/50",
      cta: "Enter Arena",
      badge: "Coming Soon"
    }
  ]

  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <PageHeader 
        title="Select Game Mode" 
        description="Choose how you want to play Jackaroo Arena today."
      />
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
        {modes.map((mode, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className={`h-full flex flex-col border-white/10 transition-colors ${mode.border} relative overflow-hidden group`}>
              {mode.badge && (
                <div className="absolute top-4 right-4 rounded-full bg-white/10 px-2.5 py-0.5 text-xs font-semibold text-muted-foreground backdrop-blur-sm">
                  {mode.badge}
                </div>
              )}
              <CardHeader>
                <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${mode.bg} ${mode.color}`}>
                  <mode.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-2xl">{mode.title}</CardTitle>
                <CardDescription className="text-base mt-2">{mode.description}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto pt-6">
                <Button 
                  className="w-full justify-between group-hover:bg-primary group-hover:text-primary-foreground transition-all" 
                  variant={mode.badge ? "secondary" : "default"}
                  asChild
                >
                  <Link to={mode.href}>
                    {mode.cta}
                    <ArrowRight className="h-4 w-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
