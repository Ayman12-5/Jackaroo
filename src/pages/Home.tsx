import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"
import { ArrowRight, Users, Bot, Trophy, ShieldCheck, Zap, Sparkles } from "lucide-react"

export function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-32 md:pt-32 md:pb-40 lg:pt-40 lg:pb-48">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
        
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm">
              <Sparkles className="mr-2 h-4 w-4" />
              The Ultimate Jackaroo Experience
            </div>
            
            <h1 className="font-display text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl max-w-4xl mx-auto">
              Master the Board.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
                Dominate the Arena.
              </span>
            </h1>
            
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Play Jackaroo Arena online with friends, challenge our advanced AI, and climb the global leaderboard in the most premium card-and-marble game platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
              <Button size="lg" asChild className="h-14 px-8 text-lg font-semibold rounded-full shadow-[0_0_40px_-10px_rgba(249,115,22,0.5)]">
                <Link to="/play">
                  Play Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="h-14 px-8 text-lg rounded-full border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-sm">
                <Link to="/how-to-play">
                  Learn the Rules
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-zinc-950/50 border-y border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold md:text-4xl">Why Jackaroo Arena?</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">Experience the classic game elevated with modern features, smooth animations, and competitive matchmaking.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Social Chaos",
                description: "Team up with a friend or play free-for-all. Form alliances, betray your enemies, and experience the ultimate social strategy game."
              },
              {
                icon: Bot,
                title: "Advanced AI",
                description: "Practice against our intelligent bots with multiple difficulty levels. Perfect your strategy before facing real opponents."
              },
              {
                icon: Trophy,
                title: "Ranked Leaderboards",
                description: "Compete in seasons, earn exclusive badges, and prove you're the best Jackaroo player in the world."
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative group rounded-2xl border border-white/10 bg-card p-8 hover:border-primary/50 transition-colors"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                <div className="relative z-10">
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20 text-primary">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-3 font-display text-xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="font-display text-4xl font-bold md:text-5xl mb-6">Ready to enter the Arena?</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">Join thousands of players in the most competitive Jackaroo platform online.</p>
          <Button size="lg" asChild className="h-14 px-10 text-lg font-bold rounded-full">
            <Link to="/signup">Create Free Account</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
