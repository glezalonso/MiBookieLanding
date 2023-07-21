import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Home from './pages/home/Home'
import Matches from './pages/matches/Matches'
import Leagues from './pages/leagues/Leagues'
import Sports from './pages/sports/Sports'
import Rounds from './pages/rounds/Rounds'
import Seasons from './pages/seasons/Seasons'
// import Players from './pages/players/Players'
import PlayerDetails from './pages/players/PlayersDetails'
// import Teams from './pages/teams/Teams'
import TeamDetails from './pages/teams/TeamDetails'
import News from './pages/news/News'
import GenerateCode from './pages/home/components/GenerateCode'
import VerifyCode from './pages/home/components/VerifyCode'
import ResetPassword from './pages/home/components/ResetPassword'

import { useAuthStore } from './store/authorization'
import decode from 'jwt-decode'

const App = () => {
    const token = useAuthStore((state) => state.auth)
    const logOut = useAuthStore((state) => state.logOut)

    useEffect(() => {
        if (token && Date.now() >= decode(token).exp * 1000) return logOut()
    }, [])
    return (
        <>
            <BrowserRouter>
                <Toaster position="top-center" reverseOrder={false} />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/generate" element={<GenerateCode />} />
                    <Route path="/verify" element={<VerifyCode />} />
                    <Route path="/reset" element={<ResetPassword />} />
                    {/* <Route path='/players' element={<Players />} /> */}
                    <Route path="/players/:id" element={<PlayerDetails />} />
                    {/* <Route path='/teams' element={<Teams />} /> */}
                    <Route path="/teams/:id" element={<TeamDetails />} />
                    <Route path="/sports/:id" element={<Sports />} />
                    <Route path="/leagues/:id" element={<Leagues />} />
                    <Route path="/seasons/:id" element={<Seasons />} />
                    <Route path="/rounds/:id" element={<Rounds />} />
                    <Route path="/matches/:id" element={<Matches />} />
                    <Route path="*" element={<h1>Página no encontrada</h1>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
