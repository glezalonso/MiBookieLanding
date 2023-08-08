import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Table } from 'flowbite-react'

const TableLocal = ({ match }) => {
    const navigate = useNavigate()
    let j = 1
    const position = 'Lanzador'
    const ID_BASEBALL = '648f7211a4ba8860dfe38319'
    return (
        <>
            <Table hoverable className="table-auto mt-1 text-sm">
                <Table.Head>
                    {match?.sport?._id === ID_BASEBALL ? (
                        <Table.HeadCell className="px-1">
                            Orden al bat
                        </Table.HeadCell>
                    ) : null}
                    <th>Jugador</th>
                    {match?.sport?._id !== ID_BASEBALL ? (
                        <Table.HeadCell className="px-1">
                            Posición
                        </Table.HeadCell>
                    ) : null}
                </Table.Head>
                <Table.Body className="divide-y">
                    {match?.lineup?.map((local) =>
                        local?.local?.map((player) => (
                            <Table.Row
                                className="hover:cursor-pointer"
                                key={player?.playerId?._id}
                                onClick={() =>
                                    navigate(
                                        `../players/${player?.playerId?._id}`
                                    )
                                }
                            >
                                {match?.sport?._id === ID_BASEBALL ? (
                                    <Table.Cell className="p-1">
                                        {player?.playerId?.position ===
                                            position ? (
                                            <span>Lanzador</span>
                                        ) : (
                                            j++
                                        )}
                                    </Table.Cell>
                                ) : null}
                                <Table.Cell className="p-1">
                                    {player?.playerId?.fullName}
                                </Table.Cell>
                                {match?.sport?._id !== ID_BASEBALL ? (
                                    <Table.Cell className="p-1">
                                        {player?.playerId?.position}
                                    </Table.Cell>
                                ) : null}
                            </Table.Row>
                        ))
                    )}
                </Table.Body>
            </Table>
        </>
    )
}

export default TableLocal
