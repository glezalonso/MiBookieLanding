import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { Alert, TextInputt, Table } from 'flowbite-react'
import Loading from '../../../ui/Loading'
import { useGetTeams } from '../../../features/teams.features'

const SectionTeams = () => {
    const [filter, setFilter] = useState('')
    const { data: teams, isLoading, isError } = useGetTeams()
    const navigate = useNavigate()

    if (isLoading) return <Loading />
    if (isError) return toast.error('Hubo un error al cargar los equipos!')

    const filterTeams = teams?.filter((teams) => {
        if (!filter) return teams
        return (
            teams?.name?.toLowerCase().includes(filter.toLowerCase()) ||
            teams?.sport?.sport?.toLowerCase().includes(filter.toLowerCase())
        )
    })

    return (
        <>
            <section>
                <h5>Todos los equipos</h5>
                <div className="my-2 auto p-1">
                    <TextInputt
                        style={{ fontSize: '13px' }}
                        name="team"
                        placeholder="Nombre del equipo, deporte..."
                        onChange={(e) => setFilter(e.target.value)}
                    />
                </div>
                {filterTeams?.length > 0 ? (
                    <div className=" bg-white rounded max-h-3/4 overflow-auto p-1 mb-3">
                        <Table hoverable className="table-auto mt-1 text-sm">
                            <Table.Head>
                                <Table.HeadCell className="px-1">
                                    Equipo
                                </Table.HeadCell>
                                <Table.HeadCell className="px-1">
                                    Estadio
                                </Table.HeadCell>
                                <Table.HeadCell className="px-1">
                                    Deporte
                                </Table.HeadCell>
                            </Table.Head>
                            <Table.Body className="divide-y">
                                {filterTeams?.map((team) => (
                                    <Table.Row
                                        className="hover:cursor-pointer"
                                        key={team?._id}
                                        onClick={() =>
                                            navigate(`../teams/${team?._id}`)
                                        }
                                    >
                                        <Table.Cell className="p-1">
                                            {team?.name}
                                        </Table.Cell>
                                        <Table.Cell className="p-1">
                                            {team?.stadium}
                                        </Table.Cell>
                                        <Table.Cell className="p-1">
                                            {team?.sport?.sport}
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
