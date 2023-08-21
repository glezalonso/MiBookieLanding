import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { Button } from 'flowbite-react'
import { useGetSeason } from '../../features/seasons.features'

import Loading from '../../ui/Loading'
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
            <main className="container mx-auto p-1 lg:w-3/5">
                <CardSeason season={season} setKey={setKey} />
                <div
                    className="flex gap-1 mt-1 justify-center mx-auto "
                    role="group"
                >
                    <Button
                        size="sm"
                        pill
                        color="gray"
                        className="p-0 sm:px-4 "
                        onClick={() => setKey('posiciones')}
                    >
                        Clasificación
                    </Button>

                    <Button
                        size="sm"
                        pill
                        color="gray"
                        className="p-0 sm:px-4 "
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
