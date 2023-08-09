import React from 'react'
import SectionTeams from './components/SectionTeams'
import NavBar from '../../ui/Navbar'

const Teams = () => {
    return (
        <>
            <NavBar />
            <div className="container px-0 mx:auto ">
                <div className="mx-auto lg:w-3/4">
                    <SectionTeams />
                </div>
            </div>
        </>
    )
}
export default Teams
