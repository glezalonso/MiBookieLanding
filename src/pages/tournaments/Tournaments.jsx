import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SectionTournaments from './components/SectionTournaments'
import trophytour from '../../icons/trophytour.svg'
import ButtonPill from '../comuncomponents/ButtonPill'

const Tournaments = () => {
    const [key, setKey] = useState('open')
    const SEASON_NFL = '649368824dfcfb3be10b483f'
    const navigate = useNavigate()

    return (
        <>
            <main className="container mx-auto min-h-screen p-1 md:w-11/12    2xl:w-3/4">
                <h1 className=" flex items-center  gap-1 my-2 mx-1 text-lg font-semibold text-gray-800">
                    <img src={trophytour} alt="trofeo" className="h-7 w-7" />
                    Torneos
                </h1>
                <div
                    className="flex gap-1 my-4 justify-center mx-auto "
                    role="group"
                >
                    <ButtonPill
                        active={key === 'open'}
                        img={trophytour}
                        onClick={() => setKey('open')}
                    >
                        Abiertos
                    </ButtonPill>
                    <ButtonPill
                        active={key === 'close'}
                        img={trophytour}
                        onClick={() => setKey('close')}
                    >
                        Cerrados
                    </ButtonPill>
                    <ButtonPill
                        active={key === 'close'}
                        img={trophytour}
                        onClick={() => navigate(`../tournaments/${SEASON_NFL}`)}
                    >
                        Mini torneos
                    </ButtonPill>
                </div>
                <div className=" grid grid-cols-1 sm:grid-cols-5 sm:gap-1 md:grid-cols-10  2xl:grid-cols-9 2xl:gap-2">
                    {key === 'open' ? (
                        <SectionTournaments status={true} />
                    ) : null}
                    {key === 'close' ? (
                        <SectionTournaments status={false} />
                    ) : null}
                </div>
            </main>
        </>
    )
}
export default Tournaments
