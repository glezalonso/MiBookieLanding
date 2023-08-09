import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { Table, TextInput, Alert } from 'flowbite-react'
import { useGetTeamsBySport } from '../../../features/teams.features'
import Loading from '../../../ui/Loading'

const SectionPlayersTennis = ({ sport }) => {
    const [filter, setFilter] = useState('')
    const { data: players, isLoading, isError } = useGetTeamsBySport(sport?._id)
    const navigate = useNavigate()

    if (isLoading) return <Loading />
    if (isError) return toast.error('Hubo un error al cargar los jugadores!')

    const playersByFilter = players?.filter((player) => {
        if (!filter) return player
        return player?.name?.toLowerCase().includes(filter.toLowerCase())
    })

    return (
        <>
            <section>
                <h5 className="mx-2">Jugadores de {sport?.sport}</h5>
                <div className="my-2 mx-auto p-1">
                    <TextInput
                        name="team"
                        placeholder="Nombre del jugador..."
                        onChange={(e) => setFilter(e.target.value)}
                    />
                </div>
                {playersByFilter?.length > 0 ? (
                    <div className=" bg-white rounded max-h-3/4 overflow-auto p-1 mb-3">
                        <Table hoverable className="table-auto mt-1 text-sm">
                            <Table.Head>
                                <Table.HeadCell className="px-1">
                                    Nombre
                                </Table.HeadCell>
                            </Table.Head>
                            <Table.Body>
                                {playersByFilter.map((player) => (
                                    <Table.Row
                                        className="hover:cursor-pointer"
                                        key={player?._id}
                                        onClick={() =>
                                            navigate(`../teams/${player?._id}`)
                                        }
                                    >
                                        <Table.Cell className="p-1">
                                            {player?.name}
                                        </Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        </Table>
                    </div>
                ) : (
                    <Alert variant="warning">
                        No hay jugadores para mostrar!
                    </Alert>
                )}
            </section>
        </>
    )
}
export default SectionPlayersTennis
