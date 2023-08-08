import React from 'react'
import NavBar from '../../ui/Navbar'
import SectionPlayers from './components/SectionPlayers'

const Players = () => {
    return (
        <>
            <NavBar />

            <div className="container px-0  auto">
                <div className="mx-auto lg:w-3/4">
                    <SectionPlayers />
                </div>
            </div>
        </>
    )
}

export default Players
