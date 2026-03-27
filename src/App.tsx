import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Layout } from "./components/layout/Layout"

// Pages
import { Home } from "./pages/Home"
import { HowToPlay } from "./pages/HowToPlay"
import { Rules } from "./pages/Rules"
import { Play } from "./pages/Play"
import { PlayVsAI } from "./pages/PlayVsAI"
import { Multiplayer } from "./pages/Multiplayer"
import { Leaderboard } from "./pages/Leaderboard"
import { Login } from "./pages/Login"
import { Signup } from "./pages/Signup"
import { Dashboard } from "./pages/Dashboard"
import { MatchHistory } from "./pages/MatchHistory"
import { DailyChallenges } from "./pages/DailyChallenges"
import { FAQ } from "./pages/FAQ"

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-to-play" element={<HowToPlay />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/play" element={<Play />} />
          <Route path="/play/ai" element={<PlayVsAI />} />
          <Route path="/play/multiplayer" element={<Multiplayer />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/history" element={<MatchHistory />} />
          <Route path="/dashboard/challenges" element={<DailyChallenges />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </Layout>
    </Router>
  )
}
