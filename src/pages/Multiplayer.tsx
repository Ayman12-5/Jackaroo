import { PageHeader } from "../components/layout/PageHeader"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Users, Globe, Lock, Trophy, Bell } from "lucide-react"

export function Multiplayer() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <PageHeader 
        title="Multiplayer Arena" 
        description="Play Jackaroo with friends or match against players worldwide."
      />
      
      <div className="max-w-3xl mx-auto mt-12 text-center">
        <div className="inline-flex items-center justify-center p-4 rounded-full bg-primary/10 text-primary mb-6">
          <Globe className="h-12 w-12" />
        </div>
        <h2 className="font-display text-4xl font-bold mb-4">Coming Soon</h2>
        <p className="text-xl text-muted-foreground mb-8">
          We're currently polishing the netcode to ensure a seamless, lag-free multiplayer experience. The Arena will open soon.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <Button size="lg" className="h-12 px-8">
            <Bell className="mr-2 h-5 w-5" />
            Notify Me When Live
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3 mt-8">
        <Card className="border-white/5 bg-card/30">
          <CardHeader>
            <Users className="h-8 w-8 text-blue-400 mb-2" />
            <CardTitle>Quick Match</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Jump straight into a game. We'll find you a partner and opponents of similar skill level in seconds.
          </CardContent>
        </Card>
        
        <Card className="border-white/5 bg-card/30">
          <CardHeader>
            <Lock className="h-8 w-8 text-green-400 mb-2" />
            <CardTitle>Private Rooms</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Create a room, share the 6-digit code with your friends, and play privately. Voice chat integration planned.
          </CardContent>
        </Card>

        <Card className="border-white/5 bg-card/30">
          <CardHeader>
            <Trophy className="h-8 w-8 text-purple-400 mb-2" />
            <CardTitle>Ranked Queue</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            The ultimate test. Play competitively, earn Elo, and climb from Bronze to Grandmaster. Strict anti-cheat enforced.
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
