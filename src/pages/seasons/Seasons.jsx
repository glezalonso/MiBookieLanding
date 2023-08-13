import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import Loading from '../../ui/Loading'
import NavBar from '../../ui/Navbar'
import { Button } from 'flowbite-react'
import { useGetSeason } from '../../features/seasons.features'
import CardSeason from './components/CardSeason'
import SectionRounds from './components/SectionRounds'
import SectionStandings from './components/SectionStandings'

const Seasons = () => {
    const { id } = useParams()
    const { data: season, isLoading, isError } = useGetSeason(id)
    const [key, setKey] = useState('posiciones')

    if (isLoading) return <Loading />
    if (isError) return toast.error('Hubo un error al cargar las temporadas')

    return (
        <>
            <NavBar />
            <div className="container px-0 mx-auto">
                <div className="mx-auto">
                    <div className="mx-auto lg:w-3/4">
                        <CardSeason season={season} setKey={setKey} />

                        <div
                            className="flex gap-1 mt-1 justify-center mx-auto "
                            role="group"
                        >
                            <Button
                                size="sm"
                                color="gray"
                                className=" text-gray-600"
                                onClick={() => setKey('posiciones')}
                            >
                                Clasificación
                            </Button>

                            <Button
                                size="sm"
                                color="gray"
                                className=" text-gray-600"
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
                    </div>
                </div>
            </div>
        </>
    )
}
export default Seasons
