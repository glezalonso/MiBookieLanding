import React from 'react'
import { Table, Spinner } from 'flowbite-react'
import { useNavigate } from 'react-router-dom'
import { useGetTopBookies } from '../../features/users.features'
import { PersonCircle } from 'react-bootstrap-icons'

const TopGlobal = () => {
    let i = 0

    const navigate = useNavigate()
    const { data: users, isLoading } = useGetTopBookies()

    if (isLoading)
        return (
            <div className="flex justify-center items-center m-3">
                <Spinner color="warning" />
            </div>
        )


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
                    {users?.map((users) => (
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
                                {users?.total}
                            </Table.Cell>
                            <Table.Cell className="p-1 text-center ">
                                {users?.success}
                            </Table.Cell>

                            <Table.Cell className="p-1 text-center text-gray-500 font-bold ">
                                {Math.round(
                                    (users?.success * 100) / users?.total
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

export default TopGlobal
