import { PageHeader } from "../components/layout/PageHeader"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Bot, Brain, Zap, Shield, Play as PlayIcon } from "lucide-react"
import { useState } from "react"

export function PlayVsAI() {
  const [difficulty, setDifficulty] = useState("medium")

  const difficulties = [
    { id: "easy", name: "Easy", icon: Shield, desc: "Bots make random moves. Good for learning the rules." },
    { id: "medium", name: "Medium", icon: Zap, desc: "Bots try to win but miss complex strategies." },
    { id: "hard", name: "Hard", icon: Brain, desc: "Bots play optimally and coordinate with their partner." },
    { id: "expert", name: "Expert", icon: Bot, desc: "Unforgiving AI that counts cards and predicts moves." },
  ]

  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <PageHeader 
        title="Play vs AI" 
        description="Practice your skills against our intelligent bots."
      />
      
      <div className="grid gap-8 md:grid-cols-12 mt-8">
        <div className="md:col-span-8 space-y-8">
          <section>
            <h2 className="font-display text-2xl font-bold mb-4">Select Difficulty</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {difficulties.map((diff) => (
                <button
                  key={diff.id}
                  onClick={() => setDifficulty(diff.id)}
                  className={`text-left p-6 rounded-xl border transition-all ${
                    difficulty === diff.id 
                      ? "border-primary bg-primary/10 ring-1 ring-primary" 
                      : "border-white/10 bg-card hover:border-white/20 hover:bg-white/5"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <diff.icon className={`h-5 w-5 ${difficulty === diff.id ? "text-primary" : "text-muted-foreground"}`} />
                    <h3 className={`font-bold ${difficulty === diff.id ? "text-primary" : ""}`}>{diff.name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{diff.desc}</p>
                </button>
              ))}
            </div>
          </section>

          <Card className="border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <Brain className="h-5 w-5" />
                Coach Mode Enabled
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              In AI matches, you can enable "Coach Mode" to see suggested moves and card probabilities. This is disabled in Multiplayer and Ranked modes.
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-4">
          <Card className="sticky top-24 border-white/10 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Match Setup</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Mode</span>
                  <span className="font-medium">2v2 Teams</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Partner</span>
                  <span className="font-medium capitalize">{difficulty} AI</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Opponents</span>
                  <span className="font-medium capitalize">{difficulty} AI</span>
                </div>
              </div>
              
              <div className="pt-4 border-t border-white/10">
                <Button className="w-full h-12 text-lg font-bold shadow-[0_0_20px_-5px_rgba(249,115,22,0.5)]" onClick={() => alert("Game engine connecting...")}>
                  <PlayIcon className="mr-2 h-5 w-5 fill-current" />
                  Start Match
                </Button>
                <p className="text-xs text-center text-muted-foreground mt-3">
                  Match will start immediately. No waiting.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
