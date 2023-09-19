import React from 'react'
import { toast } from 'react-hot-toast'
import { Alert } from 'flowbite-react'
import { useGetTournaments } from '../../../features/tournaments.features'
import BookieSection from './BookiesSection'
import StandingSection from './StandingSection'
import Loading from '../../../ui/Loading'
import medal from '../../../icons/medal.svg'
import trophytour from '../../../icons/trophytour.svg'

const SectionTournaments = ({ status }) => {
    const { data: tournaments, isLoading, isError } = useGetTournaments(status)

    if (isLoading) return <Loading />
    if (isError) return toast.error('Hubo un error al cargar los torneos')

    return (
        <>
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
        </>
    )
}

export default SectionTournaments
