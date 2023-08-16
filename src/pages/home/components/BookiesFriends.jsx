import React from 'react'
import { Modal, Table } from 'flowbite-react'
import { Link } from 'react-router-dom'
import { useAuthStore } from '../../../store/authorization'
import { useGetBookie } from '../../../features/users.features'
import { PersonCircle } from 'react-bootstrap-icons'
import bookieswhite from '../../../icons/bookieswhite.svg'

const BookiesFirends = ({ show, handleClose }) => {
    const { id } = useAuthStore((state) => state.profile)
    const { data: user } = useGetBookie(id)

    return (
        <>
            <Modal
                show={show}
                className="w-full h-full mt-16 mx-auto  bg-gray-200 md:w-full md:h-3/4"
                popup
                dismissible
                onClose={() => handleClose()}
            >
                <Modal.Header className="bg-zinc-950 p-2 flex items-center ">
                    <div className="flex justify-start items-center">
                        <div className="my-1  ">
                            <img
                                src={bookieswhite}
                                alt="bookies"
                                className="mx-2 h-8 w-8"
                            />
                        </div>
                        <div>
                            <h3 className="text-lg mt-1.5 text-gray-500 font-medium">
                                Mis Bookies
                            </h3>
                        </div>
                    </div>
                </Modal.Header>
                <Modal.Body className="max-h-screen overflow-auto px-1">
                    <div>
                        <Table hoverable className="table-auto mt-3 text-sm">
                            <Table.Body>
                                {user?.follow?.map((users) => (
                                    <Table.Row key={users?._id}>
                                        <Table.Cell className="py-1">
                                            <Link
                                                to={`../profile/${users?._id}`}
                                                className="text-gray-500 flex no-underline hover:text-gray-900 hover:underline hover:cursor-pointer "
                                            >
                                                <PersonCircle
                                                    color="black"
                                                    className="mr-2 mt-1"
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
                <Modal.Footer className="bg-zinc-950 text-white p-3 justify-end">
                    <div className="d-flex flex-row justify-content-end ">
                        <div className="text-end">
                            Quieres buscar otro bookie?
                            <Link
                                to={'../bookies'}
                                className="text-yellow-300 text-decoration-none mx-1 hover:underline"
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
