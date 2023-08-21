import React from 'react'
import { Modal, Table } from 'flowbite-react'
import { useNavigate } from 'react-router-dom'
import { useGetTopBookies } from '../../../features/users.features'
import { PersonCircle } from 'react-bootstrap-icons'
import medalwhite from '../../../icons/medalwhite.svg'

const SectionTop = ({ show, handleClose }) => {
    let i = 0
    const limit = 10
    const { data: users } = useGetTopBookies(limit)
    const navigate = useNavigate()
    const topUsers = users?.sort(
        (a, b) => (b?.success * 100) / b?.total - (a?.success * 100) / a?.total
    )

    return (
        <>
            <Modal
                show={show}
                className="w-full h-full mx-auto bg-gray-100 flex-row p-3"
                popup
                dismissible
                onClose={() => handleClose()}
            >
                <Modal.Header className="bg-gradient-to-t from-gray-900 via-slate-900 to-gray-900   p-2 flex items-center">
                    <div className="flex justify-start items-center">
                        <div className="my-1">
                            <img
                                src={medalwhite}
                                alt="medal"
                                className="mx-2 h-6 w-6"
                            />
                        </div>
                        <div>
                            <h3 className="text-lg  text-white font-medium">
                                Top 10
                            </h3>
                        </div>
                    </div>
                </Modal.Header>
                <Modal.Body className="px-1">
                    <Table hoverable className="table-auto mt-3 text-sm">
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
                                    onClick={() =>
                                        navigate(`../profile/${users?._id}`)
                                    }
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
                                            (users?.success * 100) /
                                            users?.total
                                        )}
                                        %
                                    </Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default SectionTop
