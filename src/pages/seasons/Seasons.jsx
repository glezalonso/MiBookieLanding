import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import NavBar from '../../ui/Navbar'
import { Button } from 'flowbite-react'
import { useGetSeason } from '../../features/seasons.features'
import CardSeason from './components/CardSeason'
import SectionRounds from './components/SectionRounds'
import SectionStandings from './components/SectionStandings'

const Seasons = () => {
    const { id } = useParams()
    const { data: season, isError } = useGetSeason(id)
    const [key, setKey] = useState('posiciones')

    if (isError) return toast.error('Hubo un error al cargar las temporadas')

    return (
        <>
            <NavBar />
            <main className="container mx-auto lg:w-8/12 p-1">
                <CardSeason season={season} setKey={setKey} />

                <div
                    className="flex gap-1 mt-1 justify-center mx-auto "
                    role="group"
                >
                    <Button
                        size="sm"
                        pill
                        color="gray"
                        className="p-0 text-gray-600"
                        onClick={() => setKey('posiciones')}
                    >
                        Clasificación
                    </Button>

                    <Button
                        size="sm"
                        pill
                        color="gray"
                        className="p-0 text-gray-600"
                        onClick={() => setKey('rondas')}
                    >
                        Rondas
                    </Button>
                </div>
                <section>
                    {key === 'posiciones' ? (
                        <SectionStandings season={season} />
                    ) : null}
                    {key === 'rondas' ? (
                        <SectionRounds season={season} />
                    ) : null}
                </section>
            </main>
        </>
    )
}
export default Seasons
