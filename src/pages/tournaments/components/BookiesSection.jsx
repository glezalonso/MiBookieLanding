import React from 'react'
import { Spinner, Table } from 'flowbite-react'
import { useGetTournamentWinner } from '../../../features/users.features'
import { toast } from 'react-hot-toast'
import { Link } from 'react-router-dom'

const BookieSection = ({ season, icon, minimun }) => {
    const {
        data: users,
        isLoading,
        isError,
    } = useGetTournamentWinner(season?._id, minimun)
    let i = 0

    if (isLoading)
        return (
            <div className="flex justify-center my-1 gap-1 text-sm text-gray-400">
                <Spinner color={'warning'} /> Cargando bookies..
            </div>
        )

    if (isError) return toast.error('Hubo un error al cargar los bookies')

    const winner = users.slice(0, season?.status ? 10 : 1)

    return (
        <>
            <Table hoverable className="table-auto text-xs mt-1">
                <Table.Head>
                    {season?.status ? (
                        <>
                            <Table.HeadCell className="p-1 text-center">
                                #
                            </Table.HeadCell>
                            <Table.HeadCell className="p-1 text-center">
                                Bookie
                            </Table.HeadCell>
                            <Table.HeadCell className="p-1 text-center">
                                Juegos
                            </Table.HeadCell>
                            <Table.HeadCell className="p-1 text-center">
                                Aciertos
                            </Table.HeadCell>

                            <Table.HeadCell className="p-1 text-center">
                                Efect.
                            </Table.HeadCell>
                        </>
                    ) : (
                        <>
                            <Table.HeadCell className="p-1 text-center">
                                ganador
                            </Table.HeadCell>
                            <Table.HeadCell className="p-1 text-center">
                                Juegos
                            </Table.HeadCell>
                            <Table.HeadCell className="p-1 text-center">
                                Aciertos
                            </Table.HeadCell>
                            <Table.HeadCell className="p-1 text-center">
                                Efect.
                            </Table.HeadCell>
                        </>
                    )}
                </Table.Head>
                <Table.Body>
                    {winner?.map((users) =>
                        season?.status ? (
                            <Table.Row key={users?._id}>
                                <Table.Cell className="p-1 text-center ">
                                    {++i}
                                </Table.Cell>
                                <Table.Cell className="p-1 flex justify-center ">
                                    {season?.status ? null : (
                                        <img
                                            src={icon}
                                            className="w-4 h-4 mr-0.5"
                                        />
                                    )}
                                    {users?.username}
                                </Table.Cell>
                                <Table.Cell className="p-1 text-center ">
                                    {users?.matchesSuccess?.filter(
                                        (match) => match?.season === season?._id
                                    )?.length +
                                        users?.matchesFailure?.filter(
                                            (match) =>
                                                match?.season === season?._id
                                        )?.length}
                                </Table.Cell>
                                <Table.Cell className="p-1 text-center ">
                                    {
                                        users?.matchesSuccess?.filter(
                                            (match) =>
                                                match?.season === season?._id
                                        )?.length
                                    }
                                </Table.Cell>

                                <Table.Cell className="p-1 text-center text-gray-500 font-bold ">
                                    {Math.round(
                                        (users?.matchesSuccess?.filter(
                                            (match) =>
                                                match?.season === season?._id
                                        )?.length *
                                            100) /
                                            (users?.matchesSuccess?.filter(
                                                (match) =>
                                                    match?.season ===
                                                    season?._id
                                            )?.length +
                                                users?.matchesFailure?.filter(
                                                    (match) =>
                                                        match?.season ===
                                                        season?._id
                                                )?.length)
                                    )}
                                    %
                                </Table.Cell>
                            </Table.Row>
                        ) : (
                            <Table.Row key={users?._id}>
                                <Table.Cell className="p-1 flex justify-center ">
                                    {season?.status ? null : (
                                        <img
                                            src={icon}
                                            className="w-4 h-4 mr-0.5"
                                        />
                                    )}
                                    {users?.username}
                                </Table.Cell>
                                <Table.Cell className="p-1 text-center ">
                                    {users?.matchesSuccess?.filter(
                                        (match) => match?.season === season?._id
                                    )?.length +
                                        users?.matchesFailure?.filter(
                                            (match) =>
                                                match?.season === season?._id
                                        )?.length}
                                </Table.Cell>
                                <Table.Cell className="p-1 text-center ">
                                    {
                                        users?.matchesSuccess?.filter(
                                            (match) =>
                                                match?.season === season?._id
                                        )?.length
                                    }
                                </Table.Cell>
                                <Table.Cell className="p-1 text-center text-gray-500 font-bold ">
                                    {Math.round(
                                        (users?.matchesSuccess?.filter(
                                            (match) =>
                                                match?.season === season?._id
                                        )?.length *
                                            100) /
                                            (users?.matchesSuccess?.filter(
                                                (match) =>
                                                    match?.season ===
                                                    season?._id
                                            )?.length +
                                                users?.matchesFailure?.filter(
                                                    (match) =>
                                                        match?.season ===
                                                        season?._id
                                                )?.length)
                                    )}
                                    %
                                </Table.Cell>
                            </Table.Row>
                        )
                    )}
                </Table.Body>
            </Table>
        </>
    )
}

export default BookieSection
