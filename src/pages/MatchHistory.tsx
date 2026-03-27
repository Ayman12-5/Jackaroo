import { PageHeader } from "../components/layout/PageHeader"
import { Card, CardContent } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Link } from "react-router-dom"
import { ArrowLeft, Clock, Trophy, Swords } from "lucide-react"

export function MatchHistory() {
  const matches = [
    { id: "M-1042", result: "Victory", mode: "Ranked 2v2", duration: "24m", date: "Oct 24, 2023", score: "+24 ELO", teammates: ["PlayerOne", "JackarooKing"], opponents: ["NoobSlayer", "CardShark99"], type: "win" },
    { id: "M-1041", result: "Victory", mode: "Ranked 2v2", duration: "18m", date: "Oct 23, 2023", score: "+18 ELO", teammates: ["PlayerOne", "DesertFox"], opponents: ["LuckySeven", "TheStrategist"], type: "win" },
    { id: "M-1040", result: "Defeat", mode: "Ranked 2v2", duration: "31m", date: "Oct 23, 2023", score: "-15 ELO", teammates: ["PlayerOne", "DesertFox"], opponents: ["MarbleMaster", "SpeedRunner"], type: "loss" },
    { id: "M-1039", result: "Victory", mode: "Play vs AI", duration: "15m", date: "Oct 21, 2023", score: "Practice", teammates: ["PlayerOne", "Hard AI"], opponents: ["Hard AI", "Hard AI"], type: "practice" },
    { id: "M-1038", result: "Defeat", mode: "Ranked 2v2", duration: "22m", date: "Oct 20, 2023", score: "-12 ELO", teammates: ["PlayerOne", "TeamPlayer"], opponents: ["AceOfSpades", "JokerWild"], type: "loss" },
  ]

  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <div className="mb-6">
        <Button variant="ghost" asChild className="mb-4 -ml-4 text-muted-foreground hover:text-foreground">
          <Link to="/dashboard"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard</Link>
        </Button>
        <PageHeader 
          title="Match History" 
          description="Review your past games, analyze your performance, and track your ELO changes."
        />
      </div>
      
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        <Button variant="secondary" className="rounded-full">All Matches</Button>
        <Button variant="ghost" className="rounded-full border border-white/10">Ranked</Button>
        <Button variant="ghost" className="rounded-full border border-white/10">Casual</Button>
        <Button variant="ghost" className="rounded-full border border-white/10">Vs AI</Button>
      </div>

      <div className="space-y-4">
        {matches.map((match) => (
          <Card key={match.id} className="border-white/10 bg-card/50 overflow-hidden hover:bg-white/5 transition-colors cursor-pointer">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row">
                <div className={`w-full md:w-2 ${match.type === 'win' ? 'bg-green-500' : match.type === 'loss' ? 'bg-red-500' : 'bg-blue-500'} h-2 md:h-auto`} />
                <div className="flex-1 p-6 grid gap-4 md:grid-cols-12 items-center">
                  
                  <div className="md:col-span-3">
                    <div className={`font-bold text-lg ${match.type === 'win' ? 'text-green-400' : match.type === 'loss' ? 'text-red-400' : 'text-blue-400'}`}>
                      {match.result}
                    </div>
                    <div className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                      <Swords className="h-3 w-3" /> {match.mode}
                    </div>
                  </div>

                  <div className="md:col-span-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 text-sm">
                    <div>
                      <span className="text-muted-foreground block mb-1">Your Team</span>
                      <div className="font-medium">{match.teammates.join(" & ")}</div>
                    </div>
                    <div className="hidden sm:block text-muted-foreground font-bold">VS</div>
                    <div>
                      <span className="text-muted-foreground block mb-1">Opponents</span>
                      <div className="font-medium">{match.opponents.join(" & ")}</div>
                    </div>
                  </div>

                  <div className="md:col-span-3 flex flex-row md:flex-col justify-between md:justify-center items-center md:items-end gap-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-3 w-3" /> {match.duration} • {match.date}
                    </div>
                    <div className={`font-bold ${match.type === 'practice' ? 'text-muted-foreground' : 'text-primary'}`}>
                      {match.score}
                    </div>
                  </div>

                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
