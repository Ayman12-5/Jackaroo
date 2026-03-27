import { PageHeader } from "../components/layout/PageHeader"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"

export function Rules() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <PageHeader 
        title="Rules & Card Meanings" 
        description="The comprehensive guide to Jackaroo Arena rules and card mechanics."
      />
      
      <div className="mt-8 space-y-16">
        
        <section>
          <h2 className="font-display text-3xl font-bold mb-6 border-b border-white/10 pb-4">Game Setup</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="bg-card/50">
              <CardHeader>
                <CardTitle className="text-primary">Players & Teams</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-2">
                <p>Jackaroo is played by 4 players, divided into 2 teams.</p>
                <p>Teammates sit opposite each other.</p>
                <p>You cannot talk about your cards or strategize out loud with your partner.</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50">
              <CardHeader>
                <CardTitle className="text-primary">The Deck</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-2">
                <p>Uses a standard 52-card deck.</p>
                <p>Cards are dealt in rounds: 4 cards each for the first two rounds, 5 cards for the final round.</p>
                <p>After all cards are played, the deck is reshuffled.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="font-display text-3xl font-bold mb-6 border-b border-white/10 pb-4">Card Mechanics</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { card: "Ace (1)", desc: "Move a marble out of Base onto the starting spot, OR move 1 step forward, OR move 11 steps forward." },
              { card: "2", desc: "Move 2 steps forward." },
              { card: "3", desc: "Move 3 steps forward." },
              { card: "4", desc: "Move 4 steps BACKWARDS. (Great for skipping the whole board if you are at start!)" },
              { card: "5", desc: "Move 5 steps forward." },
              { card: "6", desc: "Move 6 steps forward." },
              { card: "7", desc: "Split 7 steps between two of your marbles. (e.g., move one 3 steps, another 4 steps). Can be used to eat multiple marbles." },
              { card: "8", desc: "Move 8 steps forward." },
              { card: "9", desc: "Move 9 steps forward." },
              { card: "10", desc: "Move 10 steps forward, OR force the next player to discard a card (burn)." },
              { card: "Jack (11)", desc: "Swap any of your marbles with any other marble on the board. Cannot swap with marbles in Base or Home." },
              { card: "Queen (12)", desc: "Move 12 steps forward." },
              { card: "King (13)", desc: "Move a marble out of Base, OR move 13 steps forward. When moving 13, it eats ALL marbles in its path." },
            ].map((item, i) => (
              <Card key={i} className="border-white/5 bg-zinc-900/50 hover:bg-zinc-900 transition-colors">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl text-primary">{item.card}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-display text-3xl font-bold mb-6 border-b border-white/10 pb-4">Special Rules & Edge Cases</h2>
          <div className="space-y-4">
            <div className="p-6 rounded-xl bg-card border border-white/10">
              <h3 className="font-bold text-lg mb-2 text-orange-400">Base Protection</h3>
              <p className="text-muted-foreground">A marble sitting exactly on its own starting spot (right outside the base) is protected. It cannot be eaten, passed, or swapped by any player (including yourself or your teammate) until it moves.</p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-white/10">
              <h3 className="font-bold text-lg mb-2 text-orange-400">Passing</h3>
              <p className="text-muted-foreground">You cannot pass your own marbles. You can pass opponents' marbles (unless they are on their protected start spot).</p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-white/10">
              <h3 className="font-bold text-lg mb-2 text-orange-400">Winning & Helping</h3>
              <p className="text-muted-foreground">Once you get all 4 of your marbles into your Home, you continue playing your cards on your turn, but you use them to move your teammate's marbles. The team wins when both players have all 8 marbles in Home.</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
