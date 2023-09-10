import React from 'react'
import { useGetSeason } from '../../features/seasons.features'
import { Table, Alert } from 'flowbite-react'
import trophytour from '../../icons/trophytour.svg'
import { useGetTournamentWinner } from '../../features/users.features'
import BookieSection from './components/BookiesSection'
import StandingSection from './components/StandingSection'

const Tournaments = () => {
    const season = '64dfeffe7e9c648a00f7666a'
    const { data, isLoading, isError } = useGetSeason(season)
    const { data: users } = useGetTournamentWinner(season)

    const winner = users
        ?.sort((a, b) => {
            return (
                (b?.matchesSuccess?.filter((match) => match?.season === season)
                    ?.length *
                    100) /
                    (b?.matchesSuccess?.filter(
                        (match) => match?.season === season
                    )?.length +
                        b?.matchesFailure?.filter(
                            (match) => match?.season === season
                        )?.length) -
                (a?.matchesSuccess?.filter((match) => match?.season === season)
                    ?.length *
                    100) /
                    (a?.matchesSuccess?.filter(
                        (match) => match?.season === season
                    )?.length +
                        a?.matchesFailure?.filter(
                            (match) => match?.season === season
                        )?.length || b?.matchesSuccess - a?.matchesSuccess)
            )
        })
        .slice(0, 1)

    return (
        <>
            <main className="container mx-auto min-h-screen p-1 lg:w-3/5">
                <h5 className="mt-3 mx-1">Torneos</h5>
                <div className=" bg-white rounded mt-2 max-h-3/4 overflow-auto p-1 mb-3">
                    <StandingSection data={data} icon={trophytour} />
                    {users?.length > 0 ? (
                        <BookieSection
                            data={data}
                            bookies={winner}
                            icon={trophytour}
                            season={season}
                        />
                    ) : (
                        <Alert className="mt-2 text-center" color={'warning'}>
                            Calculando al ganador...
                        </Alert>
                    )}
                </div>
            </main>
        </>
    )
}
export default Tournaments
