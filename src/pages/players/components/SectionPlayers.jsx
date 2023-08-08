import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { Alert, TextInput, Table } from 'flowbite-react'
import { useGetPlayers } from '../../../features/players.features'

import Loading from '../../../ui/Loading'

const SectionPlayers = () => {
    const [filter, setFilter] = useState('')
    const { data: players, isLoading, isError } = useGetPlayers()
    const navigate = useNavigate()

    if (isLoading) return <Loading />
    if (isError) return toast.error('Failed to load players!')

    const filterPlayers = players?.filter((player) => {
        if (!filter) return player
        return (
            player?.fullName?.toLowerCase().includes(filter.toLowerCase()) ||
            player?.sport?.sport
                ?.toLowerCase()
                .includes(filter.toLowerCase()) ||
            player?.team?.name?.toLowerCase().includes(filter.toLowerCase())
        )
    })

    return (
        <>
            <section>
                <h5>Todos los jugadores</h5>

                <div className="m-2 p-2">
                    <TextInput
                        name="player"
                        placeholder="Nombre, deporte, equipo..."
                        onChange={(e) => setFilter(e.target.value)}
                    />
                </div>
                {filterPlayers.length > 0 ? (
                    <div className=" bg-white rounded max-h-3/4 overflow-auto p-1 mb-3">
                        <Table hoverable className="table-auto mt-1 text-sm">
                            <Table.Head>
                                <Table.HeadCell className="px-1">
                                    Nombre
                                </Table.HeadCell>
                                <Table.HeadCell className="px-1">
                                    Posición
                                </Table.HeadCell>
                                <Table.HeadCell className="px-1">
                                    Deporte
                                </Table.HeadCell>
                                <Table.HeadCell className="px-1">
                                    Equipo
                                </Table.HeadCell>
                            </Table.Head>
                            <Table.Body>
                                {filterPlayers?.map((player) => (
                                    <Table.Row
                                        className="hover:cursor-pointer"
                                        key={player?._id}
                                        onClick={(e) =>
                                            navigate(
                                                `../players/${player?._id}`
                                            )
                                        }
                                    >
                                        <Table.Cell className="p-1">
                                            {player?.fullName}
                                        </Table.Cell>
                                        <Table.Cell className="p-1">
                                            {player?.position}
                                        </Table.Cell>
                                        <Table.Cell className="p-1">
                                            {player?.sport?.sport}
                                        </Table.Cell>
                                        <Table.Cell className="p-1">
                                            {player?.team ? (
                                                player?.team?.name
                                            ) : (
                                                <span className="text-red-800">
                                                    Sin asignar
                                                </span>
                                            )}
                                        </Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        </Table>
                    </div>
                ) : (
                    <Alert color="warning">
                        No hay jugadores para mostrar!
                    </Alert>
                )}
            </section>
        </>
    )
}

export default SectionPlayers
