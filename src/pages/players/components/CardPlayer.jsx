import React from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'flowbite-react'

const CardPlayer = ({ player }) => {
    return (
        <>
            <section className="my-3">
                <Table hoverable className="table-auto  text-sm">
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell className="p-1 text-base font-bold">
                                {player?.fullName}
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell className="p-1">Posición</Table.Cell>
                            <Table.Cell className="p-1">
                                {player?.position}
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell className="p-1">Deporte</Table.Cell>
                            <Table.Cell className="p-1">
                                {player?.sport?.sport}
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell className="p-1">Equipo:</Table.Cell>
                            <Table.Cell className="p-1">
                                {player?.team ? (
                                    <Link
                                        to={`../teams/${player?.team?._id}`}
                                        className="flex no-underline hover:underline"
                                    >
                                        <img
                                            className="h-5 w-5"
                                            src={player?.team?.poster}
                                            alt={player?.team?.name}
                                        />
                                        <span className="mx-1">
                                            {player?.team?.name}
                                        </span>
                                    </Link>
                                ) : (
                                    <span className="text-red-800">
                                        Sin asignar
                                    </span>
                                )}
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </section>
        </>
    )
}
export default CardPlayer
