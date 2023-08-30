import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useGetTopMonth } from '../../features/users.features'
import { Table, Spinner } from 'flowbite-react'
import { PersonCircle } from 'react-bootstrap-icons'

const TopMonth = () => {
    const date = new Date().toISOString().slice(0, 7)
    const { data: users, isLoading } = useGetTopMonth(date)
    let i = 0
    const navigate = useNavigate()

    if (isLoading)
        return (
            <div className="flex justify-center items-center m-3">
                <Spinner color="warning" />
            </div>
        )

    const topUsers = users
        ?.sort(
            (a, b) =>
                (b?.matchesSuccess?.length * 100) /
                (b?.matchesSuccess?.length + b?.matchesFailure?.length) -
                (a?.matchesSuccess?.length * 100) /
                (a?.matchesSuccess?.length + a?.matchesFailure?.length)
        )
        .slice(0, 10)

    return (
        <>
            <Table hoverable className="table-auto mt-1 text-sm">
                <Table.Head>
                    <Table.HeadCell className="px-1 text-center">
                        #
                    </Table.HeadCell>
                    <Table.HeadCell className="px-1 text-center">
                        Bookie
                    </Table.HeadCell>
                    <Table.HeadCell className="px-1 text-center">
                        Juegos
                    </Table.HeadCell>
                    <Table.HeadCell className="px-1 text-center">
                        Aciertos
                    </Table.HeadCell>

                    <Table.HeadCell className="px-1 text-center">
                        Efect.
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body>
                    {topUsers?.map((users) => (
                        <Table.Row
                            className="hover:cursor-pointer"
                            style={
                                i === 2
                                    ? { borderBottom: '1px solid grey' }
                                    : null
                            }
                            onClick={() => navigate(`../profile/${users?._id}`)}
                            key={users?._id}
                        >
                            <Table.Cell className="p-1 text-center ">
                                {++i}
                            </Table.Cell>
                            <Table.Cell className="p-1 flex text-center ">
                                <PersonCircle
                                    color="dark"
                                    className="mx-1 mt-1"
                                />
                                {users?.username}
                            </Table.Cell>
                            <Table.Cell className="p-1 text-center ">
                                {users?.matchesSuccess?.length +
                                    users?.matchesFailure?.length}
                            </Table.Cell>
                            <Table.Cell className="p-1 text-center ">
                                {users?.matchesSuccess?.length}
                            </Table.Cell>

                            <Table.Cell className="p-1 text-center text-gray-500 font-bold ">
                                {Math.round(
                                    (users?.matchesSuccess?.length * 100) /
                                    (users?.matchesSuccess?.length +
                                        users?.matchesFailure?.length)
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

export default TopMonth
