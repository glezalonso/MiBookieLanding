import React from 'react'
import { Alert, Table } from 'flowbite-react'
import TableTournaments from './TableTournament'
import trophytour from '../../../icons/trophytour.svg'

const SectionTournaments = ({ user }) => {
    return (
        <>
            <section className=" bg-white rounded p-2 my-3 shadow-lg">
                <h2 className=" flex items-center gap-1 my-2.5 mx-1 text-base font-semibold text-gray-800">
                    <img src={trophytour} alt="trofeo" className="h-6 w-6" />
                    Mis Torneos
                </h2>
                {user?.tournaments?.length > 0 ? (
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
                ) : (
                    <Alert color={'warning'}>
                        {' '}
                        No tienes torneos ganados aún
                    </Alert>
                )}
            </section>
        </>
    )
}

export default SectionTournaments
