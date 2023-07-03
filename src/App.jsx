import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Matches from './pages/matches/Matches'
import Leagues from './pages/leagues/Leagues'
import Sports from './pages/sports/Sports'
import Rounds from './pages/rounds/Rounds'
import Seasons from './pages/seasons/Seasons'
import Players from './pages/players/Players'
import PlayerDetails from './pages/players/PlayersDetails'
import Teams from './pages/teams/Teams'
import TeamDetails from './pages/teams/TeamDetails'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/players' element={<Players />} />
      <Route path='/players/:id' element={<PlayerDetails />} />
      <Route path='/teams' element={<Teams />} />
      <Route path='/teams/:id' element={<TeamDetails />} />
      <Route path='/sports/:id' element={<Sports />} />
      <Route path='/leagues/:id' element={<Leagues />} />
      <Route path='/seasons/:id' element={<Seasons />} />
      <Route path='/rounds/:id' element={<Rounds />} />
      <Route path='/matches/:id' element={<Matches />} />
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
