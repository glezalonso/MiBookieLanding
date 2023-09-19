import React from 'react'
import { Alert, Table } from 'flowbite-react'
import TableTournaments from './TableTournament'
import trophytour from '../../../icons/trophytour.svg'

const Tournaments = ({ user }) => {
    return (
        <>
            <h2 className=" flex items-center  gap-1 my-4 mx-1 text-base font-semibold text-gray-800">
                <img src={trophytour} alt="trofeo" className="h-6 w-6" />
                Mis Torneos
            </h2>
            {user?.tournaments?.length > 0 ? (
                <section className=" bg-white rounded p-2 my-3 shadow-lg">
                    <Table hoverable className="table-auto text-xs mt-1 ">
                        <Table.Head>
                            <Table.HeadCell className="px-1 text-center">
                                Torneo
                            </Table.HeadCell>
                            <Table.HeadCell className="px-1 text-center">
                                Votos
                            </Table.HeadCell>
                            <Table.HeadCell className="px-1 text-center">
                                Aciertos
                            </Table.HeadCell>
                            <Table.HeadCell className="px-1 text-center">
                                Porcentaje
                            </Table.HeadCell>
                        </Table.Head>
                        <Table.Body>
                            {user?.tournaments?.map((t) => (
                                <TableTournaments key={t?._id} id={t?._id} />
                            ))}
                        </Table.Body>
                    </Table>
                </section>
            ) : (
                <Alert color={'warning'}> No tienes torneos ganados aún</Alert>
            )}
        </>
    )
}

export default Tournaments
