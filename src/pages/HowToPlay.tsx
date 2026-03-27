import { PageHeader } from "../components/layout/PageHeader"
import { Card, CardContent } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Link } from "react-router-dom"
import { ArrowRight, Info } from "lucide-react"

export function HowToPlay() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <PageHeader 
        title="How to Play" 
        description="Learn the basics of Jackaroo Arena in 3 minutes."
      />
      
      <div className="grid gap-8 md:grid-cols-12 mt-8">
        <div className="md:col-span-8 space-y-12">
          
          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-primary">The Objective</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Jackaroo is a board game played with cards and marbles. The goal is to move all four of your marbles from your Base to your Home before your opponents do. It's typically played in teams of two (partners sit across from each other).
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="font-display text-2xl font-bold text-primary">Basic Rules</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { title: "Dealing", desc: "Players are dealt 4 cards each round, except the last round which is 5 cards." },
                { title: "Playing", desc: "On your turn, play one card to move one of your marbles." },
                { title: "Getting Out", desc: "You need a specific card (like an Ace or 13) to move a marble out of Base." },
                { title: "Killing", desc: "If you land exactly on an opponent's marble, it is sent back to their Base." }
              ].map((rule, i) => (
                <Card key={i} className="bg-card/50 border-white/5">
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-2">{rule.title}</h3>
                    <p className="text-sm text-muted-foreground">{rule.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-primary">Special Cards Quick Guide</h2>
            <div className="rounded-xl border border-white/10 overflow-hidden">
              <table className="w-full text-sm text-left">
                <thead className="bg-white/5 text-muted-foreground">
                  <tr>
                    <th className="px-6 py-4 font-medium">Card</th>
                    <th className="px-6 py-4 font-medium">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  <tr className="bg-card/30">
                    <td className="px-6 py-4 font-bold text-primary">Ace (1)</td>
                    <td className="px-6 py-4 text-muted-foreground">Move out of base OR move 1 step OR move 11 steps.</td>
                  </tr>
                  <tr className="bg-card/30">
                    <td className="px-6 py-4 font-bold text-primary">King (13)</td>
                    <td className="px-6 py-4 text-muted-foreground">Move out of base OR move 13 steps. Eats everything in its path.</td>
                  </tr>
                  <tr className="bg-card/30">
                    <td className="px-6 py-4 font-bold text-primary">4</td>
                    <td className="px-6 py-4 text-muted-foreground">Move 4 steps BACKWARDS.</td>
                  </tr>
                  <tr className="bg-card/30">
                    <td className="px-6 py-4 font-bold text-primary">7</td>
                    <td className="px-6 py-4 text-muted-foreground">Split 7 steps between two of your marbles.</td>
                  </tr>
                  <tr className="bg-card/30">
                    <td className="px-6 py-4 font-bold text-primary">10</td>
                    <td className="px-6 py-4 text-muted-foreground">Move 10 steps OR make the next player discard a card.</td>
                  </tr>
                  <tr className="bg-card/30">
                    <td className="px-6 py-4 font-bold text-primary">Jack (11)</td>
                    <td className="px-6 py-4 text-muted-foreground">Swap any of your marbles with any other marble on the board.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex justify-end pt-2">
              <Button variant="link" asChild className="text-primary">
                <Link to="/rules">See full card rules <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
            </div>
          </section>

        </div>

        <div className="md:col-span-4">
          <div className="sticky top-24 space-y-6">
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3 text-primary font-bold">
                  <Info className="h-5 w-5" />
                  Ready to practice?
                </div>
                <p className="text-sm text-muted-foreground">
                  The best way to learn Jackaroo is by playing. Try a match against our AI on Easy mode to get the hang of it.
                </p>
                <Button className="w-full" asChild>
                  <Link to="/play/ai">Play vs AI</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
