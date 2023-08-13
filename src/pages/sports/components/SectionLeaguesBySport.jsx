import React, { useState } from 'react'
import { useGetLeaguesBySport } from '../../../features/leagues.features'
import { toast } from 'react-hot-toast'
import { Table, TextInput, Alert } from 'flowbite-react'
import { useNavigate } from 'react-router-dom'
import Loading from '../../../ui/Loading'

const SectionLeaguesBySport = ({ sport }) => {
    const [filter, setFilter] = useState('')
    const {
        data: leagues,
        isLoading,
        isError,
    } = useGetLeaguesBySport(sport?._id)
    const navigate = useNavigate()

    if (isLoading) return <Loading />

    if (isError) return toast.error('Hubo un error al cargar las ligas!')

    const leaguesBySport = leagues?.filter(
        (league) => league?.sport._id === sport?._id
    )

    const leaguesFilter = leaguesBySport?.filter((league) => {
        if (!filter) return league
        return league?.league?.toLowerCase().includes(filter.toLowerCase())
    })
    return (
        <>
            <section>
                <h5 className="mt-4 mx-2"> Ligas </h5>
                <div className="my-2 mx-auto p-1">
                    <TextInput
                        name="league"
                        placeholder="Liga..."
                        onChange={(e) => setFilter(e.target.value)}
                    />
                </div>
                {leaguesFilter?.length > 0 ? (
                    <div className=" bg-white rounded max-h-3/4 overflow-auto p-1 mb-3">
                        <Table hoverable className="table-auto mt-1 text-sm">
                            <Table.Head>
                                <Table.HeadCell className="px-1">
                                    Liga
                                </Table.HeadCell>
                                <Table.HeadCell className="px-1">
                                    Descripción
                                </Table.HeadCell>
                            </Table.Head>
                            <Table.Body>
                                {leaguesFilter?.map((league) => (
                                    <Table.Row
                                        className="hover:cursor-pointer"
                                        key={league?._id}
                                        onClick={() =>
                                            navigate(
                                                `../leagues/${league?._id}`
                                            )
                                        }
                                    >
                                        <Table.Cell className="p-1">
                                            <div className="flex justify-start gap-2">
                                                <div className="my-1">
                                                    <img
                                                        className="h-5 w-5"
                                                        src={league?.poster}
                                                        alt={league?.league}
                                                    />
                                                </div>
                                                <div className="my-1">
                                                    <span>
                                                        {league?.league}
                                                    </span>
                                                </div>
                                            </div>
                                        </Table.Cell>
                                        <Table.Cell className="p-1">
                                            {league?.description}
                                        </Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        </Table>
                    </div>
                ) : (
                    <Alert color="warning">No hay ligas para mostrar!</Alert>
                )}
            </section>
        </>
    )
}

export default SectionLeaguesBySport
