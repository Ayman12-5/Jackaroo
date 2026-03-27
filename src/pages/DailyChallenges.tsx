import { PageHeader } from "../components/layout/PageHeader"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Link } from "react-router-dom"
import { ArrowLeft, Target, Zap, Gift, CheckCircle2 } from "lucide-react"

export function DailyChallenges() {
  const challenges = [
    { id: 1, title: "Play 3 Ranked Matches", desc: "Complete 3 matches in the Ranked Arena queue.", progress: 2, total: 3, xp: 500, completed: false },
    { id: 2, title: "Eat 10 Opponent Marbles", desc: "Send opponent marbles back to their base 10 times.", progress: 10, total: 10, xp: 300, completed: true },
    { id: 3, title: "Win with a King", desc: "Play a King (13) card to move your final marble into Home.", progress: 0, total: 1, xp: 800, completed: false },
    { id: 4, title: "Play 5 'Four' Cards", desc: "Use the 4 card to move backwards 5 times across any number of matches.", progress: 3, total: 5, xp: 200, completed: false },
  ]

  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <div className="mb-6">
        <Button variant="ghost" asChild className="mb-4 -ml-4 text-muted-foreground hover:text-foreground">
          <Link to="/dashboard"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard</Link>
        </Button>
        <PageHeader 
          title="Daily Challenges" 
          description="Complete challenges to earn XP, level up your profile, and unlock exclusive cosmetics."
        />
      </div>
      
      <Card className="mb-8 border-primary/20 bg-primary/5">
        <CardContent className="p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center text-primary">
              <Zap className="h-8 w-8" />
            </div>
            <div>
              <h3 className="font-display text-xl font-bold">Weekly Streak: 4 Days</h3>
              <p className="text-sm text-muted-foreground">Complete all daily challenges for 7 days to earn a Premium Chest.</p>
            </div>
          </div>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5, 6, 7].map((day) => (
              <div key={day} className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold ${day <= 4 ? 'bg-primary text-primary-foreground' : 'bg-white/10 text-muted-foreground'}`}>
                {day}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        {challenges.map((challenge) => (
          <Card key={challenge.id} className={`border-white/10 ${challenge.completed ? 'bg-green-500/5 border-green-500/20' : 'bg-card/50'}`}>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  {challenge.completed ? (
                    <CheckCircle2 className="h-6 w-6 text-green-500" />
                  ) : (
                    <Target className="h-6 w-6 text-primary" />
                  )}
                  <div>
                    <h3 className={`font-bold text-lg ${challenge.completed ? 'text-green-400' : ''}`}>{challenge.title}</h3>
                    <p className="text-sm text-muted-foreground">{challenge.desc}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-sm font-bold text-yellow-500 bg-yellow-500/10 px-2 py-1 rounded-md">
                  <Gift className="h-4 w-4" /> {challenge.xp} XP
                </div>
              </div>
              
              <div className="mt-6">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-bold">{challenge.progress} / {challenge.total}</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                  <div 
                    className={`h-full rounded-full transition-all duration-1000 ${challenge.completed ? 'bg-green-500' : 'bg-primary'}`} 
                    style={{ width: `${(challenge.progress / challenge.total) * 100}%` }} 
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
