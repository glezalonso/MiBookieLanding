import React from 'react'
import { Alert } from 'flowbite-react'
import { useGetTournaments } from '../../features/tournaments.features'
import trophytour from '../../icons/trophytour.svg'
import BookieSection from './components/BookiesSection'
import StandingSection from './components/StandingSection'
import Loading from '../../ui/Loading'
import { toast } from 'react-hot-toast'
import medal from '../../icons/medal.svg'

const Tournaments = () => {
    const { data: tournaments, isLoading, isError } = useGetTournaments()

    if (isLoading) return <Loading />
    if (isError) return toast.error('Hubo un error al cargar los torneos')

    return (
        <>
            <main className="container mx-auto min-h-screen p-1 md:w-11/12    2xl:w-3/4">
                <h1 className=" flex items-center  gap-1 my-2 mx-1 text-lg font-semibold text-gray-800">
                    <img src={trophytour} alt="trofeo" className="h-7 w-7" />
                    Torneos
                </h1>
                <div className=" grid grid-cols-1 sm:grid-cols-5 sm:gap-1 md:grid-cols-10  2xl:grid-cols-9 2xl:gap-2">
                    {tournaments?.length > 0 ? (
                        tournaments?.map((tournament) => (
                            <div
                                key={tournament?._id}
                                className=" w-full col-span-1 sm:col-span-5 md:col-span-5  2xl:col-span-3 bg-white justify-center mx-auto h-max shadow-lg  shadow-slate-300 p-1 rounded my-1"
                            >
                                <StandingSection
                                    season={tournament?.season}
                                    icon={trophytour}
                                />

                                <BookieSection
                                    season={tournament?.season}
                                    icon={medal}
                                    minimun={tournament?.minimum}
                                />
                            </div>
                        ))
                    ) : (
                        <Alert className="mt-2 text-center" color={'warning'}>
                            No hay torneos...
                        </Alert>
                    )}
                </div>
            </main>
        </>
    )
}
export default Tournaments
