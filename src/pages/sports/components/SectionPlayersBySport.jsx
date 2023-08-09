import React, { useState } from 'react'
import { useGetPlayerBySport } from '../../../features/players.features'
import { useNavigate } from 'react-router-dom'
import Loading from '../../../ui/Loading'
import { toast } from 'react-hot-toast'
import { Table, TextInput, Alert } from 'flowbite-react'

const SectionPlayerBySport = ({ sport }) => {
    const [filter, setFilter] = useState('')
    const {
        data: players,
        isLoading,
        isError,
    } = useGetPlayerBySport(sport?._id)
    const navigate = useNavigate()

    if (isLoading) return <Loading />

    if (isError) return toast.error('Hubo un error al cargar los jugadores')

    const playersByFilter = players?.filter((player) => {
        if (!filter) return player
        return player?.fullName?.toLowerCase().includes(filter.toLowerCase())
    })

    return (
        <>
            <section>
                <h5 className="mx-2">Jugadores</h5>
                <div className="my-2 mx-auto p-1">
                    <TextInput
                        name="player"
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
                                <Table.HeadCell className="px-1">
                                    Posición
                                </Table.HeadCell>
                            </Table.Head>
                            <Table.Body>
                                {playersByFilter.map((player) => (
                                    <Table.Row
                                        className="hover:cursor-pointer"
                                        key={player?._id}
                                        onClick={() =>
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
export default SectionPlayerBySport
