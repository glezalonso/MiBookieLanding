import React from 'react'
import { Alert, Table } from 'flowbite-react'
import { useGetSeason } from '../../../features/seasons.features'
import Loading from '../../../ui/Loading'

const StandingSection = ({ season, icon }) => {
    const { data } = useGetSeason(season?._id)

    const standings = data?.standings
        ?.sort((a, b) => {
            if (b.wins !== a.wins) {
                return b.wins - a.wins
            } else {
                return b.draws - a.draws
            }
        })
        .slice(0, 1)

    return (
        <>
            <Table>
                <Table.Body>
                    <Table.Row className="flex justify-between ">
                        <Table.Cell className="p-1 flex items-center mr-auto gap-1">
                            <img
                                src={data?.league?.poster}
                                className="w-10 h-10"
                            />
                            {data?.season}
                        </Table.Cell>
                        {data?.status ? (
                            <Table.Cell className="p-1 flex items-center gap-1 text-green-600 font-bold font-sans mr-5">
                                En juego
                            </Table.Cell>
                        ) : (
                            standings?.map((pos) => (
                                <Table.Cell
                                    key={pos?._id}
                                    className="p-1 flex items-center gap-1"
                                >
                                    <img
                                        src={pos?.team?.poster}
                                        className="w-8 h-8"
                                    />
                                    {pos?.team?.name}
                                    <img src={icon} className="w-6 h-6 mx-2" />
                                </Table.Cell>
                            ))
                        )}
                    </Table.Row>
                </Table.Body>
            </Table>
        </>
    )
}

export default StandingSection
