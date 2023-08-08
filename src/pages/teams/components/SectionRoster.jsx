import React, { useState } from 'react'
import { Table, TextInput, Alert } from 'flowbite-react'
import { useNavigate } from 'react-router-dom'

const SectionRoster = ({ team }) => {
    const [filter, setFilter] = useState('')
    const navigate = useNavigate()

    const playerFilter = team?.players?.filter((player) => {
        if (!filter) return player
        return player?.player?.toLowerCase().includes(filter.toLowerCase())
    })
    return (
        <>
            <section>
                <h5>Plantilla</h5>
                <div className="my-2 mx-auto p-1">
                    <TextInput
                        name="player"
                        placeholder="Nombre del jugador..."
                        onChange={(e) => setFilter(e.target.value)}
                    />
                </div>
                {playerFilter?.length > 0 ? (
                    <div className=" bg-white rounded max-h-3/4 overflow-auto p-1 mb-3">
                        <Table hoverable className="table-auto mt-1 text-sm">
                            <Table.Head>
                                <Table.HeadCell className="px-1">
                                    Jugador
                                </Table.HeadCell>

                                <Table.HeadCell className="px-1">
                                    Posición
                                </Table.HeadCell>
                            </Table.Head>
                            <Table.Body className="divide-y">
                                {playerFilter?.map((player) => (
                                    <Table.Row
                                        className="hover:cursor-pointer"
                                        key={player?.playerId?._id}
                                        onClick={() =>
                                            navigate(
                                                `../players/${player?.playerId?._id}`
                                            )
                                        }
                                    >
                                        <Table.Cell className="p-1">
                                            {player?.playerId?.fullName}
                                        </Table.Cell>
                                        <Table.Cell className="p-1">
                                            {player?.playerId?.position}
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

export default SectionRoster
