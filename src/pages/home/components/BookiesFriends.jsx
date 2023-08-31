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
                className="w-full h-4/5 my-auto bg-transparent flex-row p-3 "
                popup
                dismissible
                onClose={() => handleClose()}
            >
                <Modal.Header className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800 via-gray-900 to-black p-2 flex-row items-center ">
                    <div className="flex justify-start m-1 items-center">
                        <div className="my-1  ">
                            <img
                                src={bookieswhite}
                                alt="bookies"
                                className="mx-2 h-6 w-6"
                            />
                        </div>
                        <div>
                            <h3 className="text-lg mt-1.5 text-white font-medium">
                                Mis Bookies
                            </h3>
                        </div>
                    </div>
                </Modal.Header>
                <Modal.Body className="max-h-screen overflow-auto p-1">
                    <div>
                        <Table hoverable className="table-auto my-1 text-sm">
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
                <Modal.Footer className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800 via-gray-900 to-black text-white p-3 justify-end">
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
