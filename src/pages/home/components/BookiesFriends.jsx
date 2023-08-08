import React from 'react'
import { Modal, Table } from 'flowbite-react'
import { Link } from 'react-router-dom'
import { useAuthStore } from '../../../store/authorization'
import { useGetBookie } from '../../../features/users.features'
import { PersonCircle } from 'react-bootstrap-icons'
import { IoMdPeople } from 'react-icons/io'

const BookiesFirends = ({ show, handleClose }) => {
    const { id } = useAuthStore((state) => state.profile)
    const { data: user } = useGetBookie(id)

    return (
        <>
            <Modal
                show={show}
                className="w-full h-full mt-4 mx-auto bg-transparent max-w-md"
                popup
                dismissible
                onClose={() => handleClose()}
            >
                <Modal.Header className="bg-zinc-950 pb-1 px-1">
                    <div className="flex justify-start">
                        <div className="my-1">
                            <IoMdPeople className="mx-2 h-8 w-8  text-gray-500" />
                        </div>
                        <div>
                            <h3 className="text-xl mt-2 text-gray-500 font-medium">
                                Mis Bookies
                            </h3>
                        </div>
                    </div>
                </Modal.Header>
                <Modal.Body className="max-h-screen overflow-auto">
                    <div>
                        <Table hoverable className="table-auto mt-3 text-sm">
                            <Table.Body className="divide-y">
                                {user?.follow?.map((users) => (
                                    <Table.Row key={users?._id}>
                                        <Table.Cell className="py-1">
                                            <Link
                                                to={`../profile/${users?._id}`}
                                                className="text-gray-500 flex no-underline hover:text-gray-900 hover:underline "
                                            >
                                                <PersonCircle
                                                    color="black"
                                                    className="mr-2"
                                                />
                                                {users?.username}
                                            </Link>
                                        </Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        </Table>
                    </div>
                </Modal.Body>
                <Modal.Footer className="bg-zinc-950 text-gray-500 p-3 justify-end">
                    <div className="d-flex flex-row justify-content-end ">
                        <div className="text-end">
                            Quieres buscar otro bookie?
                            <Link
                                to={'../bookies'}
                                className="text-warning text-decoration-none mx-1"
                            >
                                Buscar
                            </Link>
                        </div>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default BookiesFirends
