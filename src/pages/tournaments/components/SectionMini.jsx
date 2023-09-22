import React from 'react'
import { useGetMiniTournamentWinner } from '../../../features/users.features'
import { Table } from 'flowbite-react'
import { toast } from 'react-hot-toast'

import Loading from '../../../ui/Loading'

const SectionMini = ({ round }) => {
    let i = 0
    const min = 8

    const { data, isLoading, isError } = useGetMiniTournamentWinner(
        round?._id,
        min
    )
    const bookies = data?.slice(0, 10)

    if (isLoading) return <Loading />
    if (isError) return toast.error('Hubo un error al cargar las jornadas!')

    return (
        <>
            <section className=" bg-white rounded p-1 my-1 shadow-2xl col-span-8 sm:col-span-4  ">
                <h1 className=" flex items-center border-b-2 p-2 gap-1 my-2 mx-1 text-lg font-bold text-gray-800">
                    <img
                        src={round?.league?.poster}
                        alt="trofeo"
                        className="h-7 w-7"
                    />
                    {round?.league?.league}-{round?.round}
                </h1>
                <Table hoverable className="table-auto text-xs my-1">
                    <Table.Head>
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
                    </Table.Head>
                    <Table.Body>
                        {bookies?.map((users) => (
                            <Table.Row key={users?._id}>
                                <Table.Cell className="p-1 text-center ">
                                    {++i}
                                </Table.Cell>
                                <Table.Cell className="p-1 flex justify-center ">
                                    {users?.username}
                                </Table.Cell>
                                <Table.Cell className="p-1 text-center ">
                                    {users?.matchesSuccess?.filter(
                                        (match) => match?.round === round?._id
                                    )?.length +
                                        users?.matchesFailure?.filter(
                                            (match) =>
                                                match?.round === round?._id
                                        )?.length}
                                </Table.Cell>
                                <Table.Cell className="p-1 text-center ">
                                    {
                                        users?.matchesSuccess?.filter(
                                            (match) =>
                                                match?.round === round?._id
                                        )?.length
                                    }
                                </Table.Cell>

                                <Table.Cell className="p-1 text-center text-gray-500 font-bold ">
                                    {Math.round(
                                        (users?.matchesSuccess?.filter(
                                            (match) =>
                                                match?.round === round?._id
                                        )?.length *
                                            100) /
                                            (users?.matchesSuccess?.filter(
                                                (match) =>
                                                    match?.round === round?._id
                                            )?.length +
                                                users?.matchesFailure?.filter(
                                                    (match) =>
                                                        match?.round ===
                                                        round?._id
                                                )?.length)
                                    )}
                                    %
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </section>
        </>
    )
}

export default SectionMini
