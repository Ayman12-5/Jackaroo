import { PageHeader } from "../components/layout/PageHeader"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Trophy, Medal, Crown, Star } from "lucide-react"

export function Leaderboard() {
  const topPlayers = [
    { rank: 1, name: "JackarooKing", elo: 2450, winRate: "68%", matches: 1240, avatar: "👑" },
    { rank: 2, name: "CardShark99", elo: 2380, winRate: "65%", matches: 980, avatar: "🦈" },
    { rank: 3, name: "DesertFox", elo: 2315, winRate: "62%", matches: 1105, avatar: "🦊" },
    { rank: 4, name: "MarbleMaster", elo: 2290, winRate: "60%", matches: 850, avatar: "🎱" },
    { rank: 5, name: "LuckySeven", elo: 2250, winRate: "59%", matches: 720, avatar: "🍀" },
    { rank: 6, name: "TheStrategist", elo: 2210, winRate: "58%", matches: 640, avatar: "🧠" },
    { rank: 7, name: "SpeedRunner", elo: 2180, winRate: "57%", matches: 590, avatar: "⚡" },
    { rank: 8, name: "TeamPlayer", elo: 2150, winRate: "56%", matches: 510, avatar: "🤝" },
    { rank: 9, name: "AceOfSpades", elo: 2120, winRate: "55%", matches: 480, avatar: "♠️" },
    { rank: 10, name: "JokerWild", elo: 2090, winRate: "54%", matches: 450, avatar: "🃏" },
  ]

  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <PageHeader 
        title="Global Leaderboard" 
        description="Season 1: The Awakening. Top players earn exclusive rewards."
      />
      
      <div className="grid gap-6 md:grid-cols-3 mt-12 mb-16">
        {topPlayers.slice(0, 3).map((player, i) => (
          <Card key={i} className={`relative overflow-hidden ${i === 0 ? 'border-yellow-500/50 bg-yellow-500/10 scale-105 z-10' : 'border-white/10 bg-card/50'}`}>
            {i === 0 && <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-600" />}
            <CardHeader className="text-center pb-2">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-background border-4 border-card text-4xl shadow-xl">
                {player.avatar}
              </div>
              <CardTitle className="text-2xl font-bold flex items-center justify-center gap-2">
                {i === 0 ? <Crown className="h-6 w-6 text-yellow-500" /> : i === 1 ? <Medal className="h-5 w-5 text-gray-400" /> : <Medal className="h-5 w-5 text-amber-600" />}
                {player.name}
              </CardTitle>
              <p className="text-sm text-muted-foreground">Rank #{player.rank}</p>
            </CardHeader>
            <CardContent className="text-center space-y-2">
              <div className="text-3xl font-display font-bold text-primary">{player.elo} <span className="text-sm text-muted-foreground font-normal">ELO</span></div>
              <div className="flex justify-center gap-4 text-sm text-muted-foreground">
                <span>{player.winRate} Win Rate</span>
                <span>•</span>
                <span>{player.matches} Matches</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-white/10 bg-card/50 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-white/5 text-muted-foreground text-xs uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 font-medium">Rank</th>
                <th className="px-6 py-4 font-medium">Player</th>
                <th className="px-6 py-4 font-medium text-right">Rating (ELO)</th>
                <th className="px-6 py-4 font-medium text-right hidden sm:table-cell">Win Rate</th>
                <th className="px-6 py-4 font-medium text-right hidden md:table-cell">Matches</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {topPlayers.map((player) => (
                <tr key={player.rank} className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 font-bold text-muted-foreground">#{player.rank}</td>
                  <td className="px-6 py-4 font-medium flex items-center gap-3">
                    <span className="text-xl">{player.avatar}</span>
                    {player.name}
                  </td>
                  <td className="px-6 py-4 text-right font-bold text-primary">{player.elo}</td>
                  <td className="px-6 py-4 text-right text-muted-foreground hidden sm:table-cell">{player.winRate}</td>
                  <td className="px-6 py-4 text-right text-muted-foreground hidden md:table-cell">{player.matches}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
