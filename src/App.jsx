import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'
import Matches from './pages/matches/Matches'
import Leagues from './pages/leagues/Leagues'
import Sports from './pages/sports/Sports'
import Rounds from './pages/rounds/Rounds'
import Seasons from './pages/seasons/Seasons'
import Protected from './auth/Protected'
// import Players from './pages/players/Players'
import PlayerDetails from './pages/players/PlayersDetails'
// import Teams from './pages/teams/Teams'
import TeamDetails from './pages/teams/TeamDetails'
import GenerateCode from './pages/home/components/GenerateCode'
import VerifyCode from './pages/home/components/VerifyCode'
import ResetPassword from './pages/home/components/ResetPassword'
import Bookies from './pages/bookies/Bookies'
// import News from './pages/news/News'
import Tournaments from './pages/tournaments/Tournaments'
import { useAuthStore } from './store/authorization'
import decode from 'jwt-decode'
import NavBar from './ui/Navbar'
import SectionFoter from './ui/SectionFooter'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
// import SectionBanner from './ui/SectionBanner'
import Tournament from './pages/tournaments/Tournament'
import Forum from './pages/forum/Forum'

const App = () => {
    const token = useAuthStore((state) => state.auth)
    const logOut = useAuthStore((state) => state.logOut)
    const isLogged = useAuthStore((state) => state.isLogged)

    useEffect(() => {
        if (token && Date.now() >= decode(token).exp * 1000) return logOut()
    }, [])
    return (
        <>
            <BrowserRouter>
                <Toaster position="top-center" reverseOrder={false} />
                <NavBar />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route element={<Protected isLogged={isLogged} />}>
                        <Route path="/profile/:id" element={<Profile />} />
                        <Route path="/bookies" element={<Bookies />} />
                        <Route path="/tournaments" element={<Tournaments />} />
                        <Route
                            path="/tournaments/:id"
                            element={<Tournament />}
                        />
                    </Route>
                    <Route path="/forum" element={<Forum />} />
                    {/* <Route path="/news" element={<News />} /> */}
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
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
                <SectionFoter />
                {/* <SectionBanner /> */}
            </BrowserRouter>
        </>
    )
}

export default App
