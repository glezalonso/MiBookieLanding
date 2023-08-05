import React from 'react'
import { Modal, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAuthStore } from '../../../store/authorization'
import { useGetBookie } from '../../../features/users.features'
import { PersonCircle } from 'react-bootstrap-icons'

const BookiesFirends = ({ show, handleClose }) => {
    const { id } = useAuthStore((state) => state.profile)
    const { data: user } = useGetBookie(id)

    return (
        <>
            <Modal show={show} className="my-5" size="xs" onHide={handleClose}>
                <Modal.Header className="bg-dark text-white" closeButton>
                    <Modal.Title>Mis Bookies</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div
                        style={{
                            maxHeight: '400px',
                            overflow: 'auto',
                        }}
                    >
                        <Table
                            style={{ height: '25px' }}
                            responsive
                            size="sm"
                            hover
                            borderless
                            className="my-1"
                        >
                            <tbody>
                                {user?.follow?.map((users) => (
                                    <tr key={users?._id}>
                                        <td>
                                            <PersonCircle
                                                color="dark"
                                                className="mx-1"
                                            />
                                            {users?.username}
                                        </td>
                                        <td>
                                            <Link
                                                to={`../profile/${users?._id}`}
                                                className="btn btn-dark btn-sm"
                                            >
                                                Perfil
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </Modal.Body>
                <Modal.Footer className="bg-dark text-white">
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
