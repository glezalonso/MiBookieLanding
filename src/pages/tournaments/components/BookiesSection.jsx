import React from 'react'
import { Table } from 'flowbite-react'

const BookieSection = ({ data, bookies, icon, season }) => {
    let i = 0

    return (
        <>
            <Table hoverable className="table-auto text-xs mt-1 ">
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
                        <Table.Row
                            style={
                                i === 2
                                    ? {
                                          borderBottom: '1px solid grey',
                                      }
                                    : null
                            }
                            key={users?._id}
                        >
                            <Table.Cell className="p-1 text-center ">
                                {++i}
                            </Table.Cell>
                            <Table.Cell className="p-1 flex justify-center ">
                                {data?.status ? null : (
                                    <img
                                        src={icon}
                                        className="w-4 h-4 mr-0.5"
                                    />
                                )}
                                {users?.username}
                            </Table.Cell>
                            <Table.Cell className="p-1 text-center ">
                                {users?.matchesSuccess?.filter(
                                    (match) => match?.season === season
                                )?.length +
                                    users?.matchesFailure?.filter(
                                        (match) => match?.season === season
                                    )?.length}
                            </Table.Cell>
                            <Table.Cell className="p-1 text-center ">
                                {
                                    users?.matchesSuccess?.filter(
                                        (match) => match?.season === season
                                    )?.length
                                }
                            </Table.Cell>

                            <Table.Cell className="p-1 text-center text-gray-500 font-bold ">
                                {Math.round(
                                    (users?.matchesSuccess?.filter(
                                        (match) => match?.season === season
                                    )?.length *
                                        100) /
                                        (users?.matchesSuccess?.filter(
                                            (match) => match?.season === season
                                        )?.length +
                                            users?.matchesFailure?.filter(
                                                (match) =>
                                                    match?.season === season
                                            )?.length)
                                )}
                                %
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </>
    )
}

export default BookieSection
