import { PageHeader } from "../components/layout/PageHeader"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Link } from "react-router-dom"
import { Trophy, Swords, Target, Clock, History, Star, Zap } from "lucide-react"

export function Dashboard() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 pt-6 md:pt-10">
        <div>
          <h1 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
            Welcome back, PlayerOne
          </h1>
          <p className="text-muted-foreground mt-2">
            You're currently ranked Gold II. Keep playing to reach Platinum!
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" asChild>
            <Link to="/dashboard/history">Match History</Link>
          </Button>
          <Button asChild className="shadow-[0_0_20px_-5px_rgba(249,115,22,0.5)]">
            <Link to="/play">Play Now</Link>
          </Button>
        </div>
      </div>
      
      <div className="grid gap-6 md:grid-cols-4 mt-4">
        <Card className="border-white/10 bg-card/50">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Win Rate</CardTitle>
            <Target className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">62.4%</div>
            <p className="text-xs text-green-400 mt-1">+2.1% from last week</p>
          </CardContent>
        </Card>
        <Card className="border-white/10 bg-card/50">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Matches Played</CardTitle>
            <Swords className="h-4 w-4 text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">142</div>
            <p className="text-xs text-muted-foreground mt-1">84 Wins / 58 Losses</p>
          </CardContent>
        </Card>
        <Card className="border-white/10 bg-card/50">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Current Streak</CardTitle>
            <Zap className="h-4 w-4 text-yellow-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4 Wins</div>
            <p className="text-xs text-muted-foreground mt-1">Personal best: 9</p>
          </CardContent>
        </Card>
        <Card className="border-white/10 bg-card/50">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Rating (ELO)</CardTitle>
            <Trophy className="h-4 w-4 text-purple-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1840</div>
            <p className="text-xs text-muted-foreground mt-1">Top 15% of players</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-12 mt-6">
        <div className="md:col-span-8 space-y-6">
          <Card className="border-white/10 bg-card/50">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Recent Matches</CardTitle>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/dashboard/history">View All</Link>
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { result: "Victory", mode: "Ranked 2v2", time: "2 hours ago", score: "+24 ELO", color: "text-green-400", bg: "bg-green-400/10" },
                  { result: "Victory", mode: "Ranked 2v2", time: "Yesterday", score: "+18 ELO", color: "text-green-400", bg: "bg-green-400/10" },
                  { result: "Defeat", mode: "Ranked 2v2", time: "Yesterday", score: "-15 ELO", color: "text-red-400", bg: "bg-red-400/10" },
                  { result: "Victory", mode: "Play vs AI", time: "3 days ago", score: "Practice", color: "text-blue-400", bg: "bg-blue-400/10" },
                ].map((match, i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-lg border border-white/5 bg-background/50">
                    <div className="flex items-center gap-4">
                      <div className={`w-2 h-10 rounded-full ${match.bg}`} />
                      <div>
                        <p className={`font-bold ${match.color}`}>{match.result}</p>
                        <p className="text-sm text-muted-foreground">{match.mode} • {match.time}</p>
                      </div>
                    </div>
                    <div className="font-medium">{match.score}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-4 space-y-6">
          <Card className="border-white/10 bg-card/50">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Daily Challenges</CardTitle>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/dashboard/challenges">View All</Link>
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Play 3 Ranked Matches</span>
                  <span className="text-primary">2/3</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "66%" }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Eat 10 Opponent Marbles</span>
                  <span className="text-primary">10/10</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: "100%" }} />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
