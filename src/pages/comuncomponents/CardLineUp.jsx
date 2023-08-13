import React from 'react'
import { Table } from 'flowbite-react'

const CardLineUp = ({ match }) => {
    const postion = 'Lanzador'
    return (
        <>
            <div className="rounded border-t-2 max-h-52 overflow-auto">
                <div className="flex justify-center ">
                    <div className="mx-auto">
                        <Table hoverable className="table-auto mt-1 text-xs">
                            <Table.Head>
                                <Table.HeadCell className="p-1 text-center">
                                    Jugador
                                </Table.HeadCell>
                            </Table.Head>
                            <Table.Body>
                                {match?.lineup?.map((local) =>
                                    local?.local?.map((player) => (
                                        <Table.Row key={player?.playerId?._id}>
                                            <Table.Cell className="p-1">
                                                {player?.playerId?.fullName}
                                                {player?.playerId?.position ===
                                                    postion ? (
                                                    <span className="mx-1 font-bold">
                                                        (Lanzador)
                                                    </span>
                                                ) : null}
                                            </Table.Cell>
                                        </Table.Row>
                                    ))
                                )}
                            </Table.Body>
                        </Table>
                    </div>
                    <div className="mx-auto">
                        <Table hoverable className="table-auto mt-1 text-xs">
                            <Table.Head className="p-1">
                                <Table.HeadCell className="p-1 text-center">
                                    Jugador
                                </Table.HeadCell>
                            </Table.Head>
                            <Table.Body>
                                {match?.lineup?.map((away) =>
                                    away?.away?.map((player) => (
                                        <Table.Row key={player?.playerId?._id}>
                                            <Table.Cell className="p-1">
                                                {player?.playerId?.fullName}
                                                {player?.playerId?.position ===
                                                    postion ? (
                                                    <span className="mx-1 font-bold">
                                                        (Lanzador)
                                                    </span>
                                                ) : null}
                                            </Table.Cell>
                                        </Table.Row>
                                    ))
                                )}
                            </Table.Body>
                        </Table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardLineUp
