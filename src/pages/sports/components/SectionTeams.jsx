import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'

import { Table, TextInput, Alert } from 'flowbite-react'
import { useGetTeamsBySport } from '../../../features/teams.features'
import Loading from '../../../ui/Loading'

const SectionTeams = ({ sport }) => {
    const [filter, setFilter] = useState('')
    const { data: teams, isLoading, isError } = useGetTeamsBySport(sport?._id)
    const navigate = useNavigate()

    if (isLoading) return <Loading />

    if (isError) return toast.error('Hubo un error al cargar los jugadores!')

    const teamFilter = teams?.filter((teams) => {
        if (!filter) return teams
        return teams?.name?.toLowerCase().includes(filter.toLowerCase())
    })

    return (
        <>
            <section>
                <h5 className="mx-2">Equipos</h5>
                <div className="my-2 mx-auto p-1">
                    <TextInput
                        name="team"
                        placeholder="Equipo..."
                        onChange={(e) => setFilter(e.target.value)}
                    />
                </div>
                {teamFilter?.length > 0 ? (
                    <div className=" bg-white rounded max-h-3/4 overflow-auto p-1 mb-3">
                        <Table hoverable className="table-auto mt-1 text-sm">
                            <Table.Head>
                                <Table.HeadCell className="px-1">
                                    Nombre
                                </Table.HeadCell>
                            </Table.Head>
                            <Table.Body>
                                {teamFilter.map((team) => (
                                    <Table.Row
                                        className="hover:cursor-pointer"
                                        key={team?._id}
                                        onClick={() =>
                                            navigate(`../teams/${team?._id}`)
                                        }
                                    >
                                        <Table.Cell className="flex  gap-1 p-1">
                                            <img
                                                className="h-5 w-5"
                                                src={team?.poster}
                                                alt={team?.name}
                                            />
                                            {team?.name}
                                        </Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        </Table>
                    </div>
                ) : (
                    <Alert variant="warning">
                        No hay equipos para mostrar!
                    </Alert>
                )}
            </section>
        </>
    )
}
export default SectionTeams
