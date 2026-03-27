import { PageHeader } from "../components/layout/PageHeader"
import { Card, CardContent } from "../components/ui/card"
import * as Accordion from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"

export function FAQ() {
  const faqs = [
    {
      category: "Getting Started",
      items: [
        { q: "What is Jackaroo?", a: "Jackaroo is a strategic board game played with cards and marbles. The goal is to move your marbles around the board and into your 'Home' area before your opponents do. It involves teamwork, strategy, and a bit of luck." },
        { q: "Is Jackaroo Arena free to play?", a: "Yes! Jackaroo Arena is completely free to play. We offer optional cosmetic upgrades and premium features, but the core game will always be free." },
        { q: "Do I need to create an account to play?", a: "You can play against the AI without an account. However, to play multiplayer, track your stats, and climb the leaderboard, you'll need to create a free account." }
      ]
    },
    {
      category: "Gameplay & Rules",
      items: [
        { q: "How do I get a marble out of my base?", a: "You must play an Ace (1) or a King (13) to move a marble from your base onto your starting spot." },
        { q: "Can I pass my own marbles?", a: "No, you cannot pass your own marbles. If your path is blocked by your own marble, you cannot make that move." },
        { q: "What happens if I land on an opponent's marble?", a: "If you land exactly on an opponent's marble, you 'eat' it, sending it back to their base. However, you cannot eat a marble that is sitting on its own protected starting spot." },
        { q: "What does the 7 card do?", a: "The 7 card allows you to split 7 steps between two of your marbles. For example, you can move one marble 3 steps and another marble 4 steps." }
      ]
    },
    {
      category: "Multiplayer & Ranked",
      items: [
        { q: "When will Multiplayer be available?", a: "We are currently finalizing our netcode to ensure a smooth experience. Multiplayer will be launching very soon. Keep an eye on our announcements!" },
        { q: "How does the Ranked system work?", a: "Our Ranked mode uses an ELO-based matchmaking system. You gain points for winning and lose points for losing. The amount depends on the skill difference between the teams." },
        { q: "Can I play with my friends?", a: "Yes! Once multiplayer is live, you'll be able to create private rooms and invite your friends using a unique room code." }
      ]
    }
  ]

  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <PageHeader 
        title="Frequently Asked Questions" 
        description="Everything you need to know about Jackaroo Arena."
      />
      
      <div className="max-w-3xl mx-auto mt-12 space-y-12">
        {faqs.map((section, i) => (
          <div key={i}>
            <h2 className="font-display text-2xl font-bold mb-6 text-primary">{section.category}</h2>
            <Accordion.Root type="single" collapsible className="space-y-4">
              {section.items.map((item, j) => (
                <Accordion.Item key={j} value={`item-${i}-${j}`} className="border border-white/10 rounded-xl bg-card/50 overflow-hidden">
                  <Accordion.Header>
                    <Accordion.Trigger className="flex flex-1 items-center justify-between py-4 px-6 font-medium transition-all hover:bg-white/5 w-full text-left [&[data-state=open]>svg]:rotate-180">
                      {item.q}
                      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 text-muted-foreground" />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                    <div className="px-6 pb-4 pt-0 text-muted-foreground leading-relaxed">
                      {item.a}
                    </div>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </div>
        ))}
      </div>
    </div>
  )
}
